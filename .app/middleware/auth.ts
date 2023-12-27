import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
  console.log("Route middleware executed")
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies

  if (token.value) {
    // check if value exists
    // todo verify if token is valid, before updating the state
    authenticated.value = true; // update the state to authenticated
  }
  console.log("===========>",to)

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'auth') {
    abortNavigation();
    return navigateTo('/auth',{replace: true});
  } else if (token.value && to?.name == 'auth') {
    abortNavigation();
    return navigateTo('/dashboard',{replace: true});
  }
});