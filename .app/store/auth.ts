import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
}

interface UserDetails {
  username: string
  email: string
  fname: string
  lname: string
  department: number
  // Add other properties as needed
}

interface User {
  id: number
  email: string
  active: number
  bam_user_id: number
  bam_cd_user_id: number
  bam_talentnum: number
  verified: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  bam_user: UserDetails
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {} as User,
    authenticated: false,
    loading: false,
    // isLoggedIn: computed(() => this.$state.user),
  }),
  getters: {
    isLoggedIn(state) {
      return Object.keys(state.user).length > 0
    }
    
  },
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const config = useRuntimeConfig()
      const baseURL = config.public.apiBaseUrl;
      const { data, pending }: any = await useFetch(
        `${baseURL}/oauth/token`,
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            username,
            password,
            user_type: 'bam_user',
            client_id: 'b9d9113612793ae4c70641afa035b6fb17ca7002',
            client_secret: '61c9b2b17db77a27841bbeeabff923448b0f6388',
            grant_type: 'password',
          },
        },
      )
      this.loading = pending

      if (data.value) {
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = data?.value?.access_token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
      } else {
        this.authenticated = false
      }
    },
    async getUser() {
      const config = useRuntimeConfig()
      const baseURL = config.public.apiBaseUrl;
      const token = useCookie('token')
      const { data, pending }: any = await useFetch(
        `${baseURL}/v1/users/me?q=%5B%5B%22with%22%2C%22bam_user%22%5D%5D`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`,
          },
        },
      )
      if (data.value) {
        this.user = data.value
      } else {
        this.user = {}
      }
    },
    logUserOut() {
      const router = useRouter()
      const token = useCookie('token') // useCookie new hook in nuxt 3
      this.authenticated = false // set authenticated  state value to false
      token.value = null // clear the token cookie
      router.push('/dashboard')
    },
  },
})