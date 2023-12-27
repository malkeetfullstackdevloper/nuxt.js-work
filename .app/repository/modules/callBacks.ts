// 3rd's
import { FetchOptions } from 'ofetch'

// locals
import FetchFactory from '../factory'

class CallBacksModule extends FetchFactory {
  private RESOURCE = '/v1/admin/call_backs'

  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getCallBacks(query: any) {
    return useAsyncData(
      async () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US',
          },
        }
        return this.call(
          'GET',
          `${this.RESOURCE}`,
          query, // query
          undefined, // body
          fetchOptions,
        )
      },
      { server: true },
    )
  }

  async createCallBacks(data: any) {
    return useAsyncData(
      async () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US',
          },
        }
        return this.call(
          'POST',
          `${this.RESOURCE}`,
          undefined, // query
          data, // body
          fetchOptions,
        )
      },
      { server: true },
    )
  }
}

export default CallBacksModule
