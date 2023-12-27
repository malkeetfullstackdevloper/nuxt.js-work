import { useAuthStore } from '~/store/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore()
  if (!auth.isLoggedIn) {
    await auth.getUser()
  }
})
