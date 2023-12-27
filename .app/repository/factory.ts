// 3rd's
import { $Fetch, FetchOptions } from 'ofetch'

/*
 The HttpFactory acts as a wrapper around an HTTP client. 
 It encapsulates the functionality for making API requests asynchronously 
 through the call function, utilizing the provided HTTP client.
*/
class FetchFactory {
  private $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  /**
   * The HTTP client is utilized to control the process of making API requests.
   * @param method the HTTP method (GET, POST, ...)
   * @param url the endpoint url
   * @param data the body data
   * @param fetchOptions fetch options
   * @returns
   */
  async call(
    method: string,
    url: string,
    params?: object,
    data?: object,
    fetchOptions?: FetchOptions<'json'>,
  ): Promise<T> {
    const token = useCookie('token')
    // Create headers object

    // Include Bearer token in headers if it exists
    if (token) {
      fetchOptions['headers']['Authorization'] = `Bearer ${token.value}`
    }
    return this.$fetch<T>(url, {
      method,
      params: params,
      body: data,
      ...fetchOptions,
    })
  }
}

export default FetchFactory
