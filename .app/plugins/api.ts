// 3rd's
import { $fetch, FetchOptions } from 'ofetch'

// locals
import CallBacksModule from '~/repository/modules/callBacks'
import EtLeadsModule from '~/repository/modules/etLeads'
import ProductsModule from '~/repository/modules/products'
import ReportsModule from '~/repository/modules/reports'
import TrmUsersModule from '~/repository/modules/trmUsers'

interface IApiInstance {
  products: ProductsModule
  etLeads: EtLeadsModule
  trmUsers: TrmUsersModule
  reports: ReportsModule
  callBacks: CallBacksModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
  }

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions)

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    products: new ProductsModule(apiFecther),
    etLeads: new EtLeadsModule(apiFecther),
    trmUsers: new TrmUsersModule(apiFecther),
    reports: new ReportsModule(apiFecther),
    callBacks: new CallBacksModule(apiFecther),
  }

  return {
    provide: {
      api: modules,
    },
  }
})
