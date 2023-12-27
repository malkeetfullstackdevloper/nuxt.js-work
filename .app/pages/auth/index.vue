<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '../../store/auth'; // import the auth store we just created
import { useToaster } from '../../../layers/tairo/composables/toaster';

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const authStore = useAuthStore();

const { authenticated } = storeToRefs(authStore); // make authenticated state reactive with storeToRefs
definePageMeta({
  layout: 'empty',
  title: 'Login',
  middleware:['auth'],
  preview: {
    title: 'Login 1',
    description: 'For authentication and sign in',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-login-1.png',
    srcDark: '/img/screens/auth-login-1-dark.png',
    order: 96,
  },
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_REQUIRED: 'A password is required',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  email: z.string(),
  password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
  trustDevice: z.boolean(),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  email: '',
  password: '',
  trustDevice: false,
}))
const toaster = useToaster()
const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  
  // here you have access to the validated form values
  console.log('auth-success', values)
  try {
    await authenticateUser({username:values.email,password:values.password}); // call authenticateUser and pass the user object
    
      // redirect to homepage if user is authenticated
      if (authenticated.value) {
        authStore.getUser()
        router.push('/dashboard')
      } else {
        toaster.clearAll()
            toaster.show({
              title: 'Error',
              message: `Invalid username or password`,
              color: 'danger',
              icon: 'ph:user-circle-fill',
              closable: true,
            })
      }
    // fake delay, this will make isSubmitting value to be true
   
  } catch (error: any) {
     toaster.clearAll()
            toaster.show({
              title: 'Error',
              message: `Something went wrong`,
              color: 'danger',
              icon: 'ph:user-circle-fill',
              closable: true,
            })
    return
  }

  // router.push('/dashboards')
})
</script>

<template>
  <div class="dark:bg-muted-800 flex min-h-screen bg-white">
    <div
      class="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none"
    >
      <div class="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white">
        <!--Nav-->
        <div class="flex w-full items-center justify-between">
          
          <!--Theme button-->
          <BaseThemeToggle />
        </div>
        <div>
          <BaseHeading
            as="h2"
            size="3xl"
            lead="relaxed"
            weight="medium"
            class="mt-6"
          >
            Walk the Red Carpet!
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-400 mb-6">
            Login with your credentials
          </BaseParagraph>
        </div>

        <!--Form section-->
        <form
          method="POST"
          action=""
          @submit.prevent="onSubmit"
          class="mt-6"
          novalidate
        >
          <div class="mt-5">
            <div>
              <div class="space-y-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="email"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="email"
                    label="Email address"
                    placeholder="Email address"
                    autocomplete="email"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="password"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    autocomplete="current-password"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>

              <div class="mt-6 flex items-center justify-between">
               

                <div class="text-xs leading-5">
                  <!-- <NuxtLink
                    to="/auth/recover"
                    class="text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                  >
                    Forgot your password?
                  </NuxtLink> -->
                </div>
              </div>

              <!--Submit-->
              <div class="mt-6">
                <div class="block w-full rounded-md shadow-sm">
                  <BaseButton
                    :disabled="isSubmitting"
                    :loading="isSubmitting"
                    type="submit"
                    color="primary"
                    class="!h-11 w-full"
                  >
                    Sign in
                  </BaseButton>
                </div>
              </div>
            </div>

           
          </div>
        </form>
      </div>
    </div>
    <div
      class="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5"
    >
      <div class="mx-auto w-full max-w-4xl">
        <!--Media image-->
        <img
          class="max-w-md mx-auto"
          src="/img/illustrations/magician.svg"
          alt=""
          width="500"
          height="500"
        />
      </div>
    </div>
  </div>
</template>
