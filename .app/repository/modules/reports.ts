// 3rd's
import { FetchOptions } from 'ofetch'

// locals
import FetchFactory from '../factory'

class ReportsModule extends FetchFactory {
  private RESOURCE = '/v1/admin/reports'

  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getAgentLeads(usernum: any) {
    return useAsyncData(
      async () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US',
          },
        }
        return this.call(
          'GET',
          `${this.RESOURCE}/agent_leads/${usernum}`,
          undefined, // query
          undefined, // body
          fetchOptions,
        )
      },
      { server: true },
    )
  }
  async getAgentLeadsold(usernum: any) {
    return useCustomFetch(`${this.RESOURCE}/agent_leads/${usernum}`)
  }
}

export default ReportsModule
