// 3rd's
import { FetchOptions } from 'ofetch'

// locals
import FetchFactory from '../factory'

class EtLeadsModule extends FetchFactory {
  private RESOURCE = '/v1/admin/et_leads'

  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getAssignedLeadsOld(queryParams?: any) {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US',
          },
        }
        return this.call(
          'GET',
          `${this.RESOURCE}`,
          queryParams,
          undefined, // body
          fetchOptions,
        )
      },
      { server: false },
    )
  }

  async getAssignedLeads(queryParams?: any) {
    return useCustomFetch(`${this.RESOURCE}`, {
      params: queryParams,
    })
  }

  /**
   * Asynchronously retrieves new lead data from the server based on the specified query parameters.
   *
   * @param queryParams - Optional query parameters for customization.
   *   - `q_type` (optional): A string indicating the type of lead to fetch. Use 'online' for online leads; leave blank for all leads.
   *   - `user_id` (optional): A user identifier specifying to whom the lead should be assigned.
   * @returns A promise with the result of the asynchronous operation.
   *   - If successful, it returns the lead data.
   *   - If there's an error, it returns an error object.
   */
  async getNewLead(queryParams?: any) {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US',
          },
        }
        return this.call(
          'GET',
          `/v1/admin/get_single_lead`,
          queryParams,
          undefined, // body
          fetchOptions,
        )
      },
      { server: false },
    )
  }

  async getLeadLimitText(userId: Number) {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US',
          },
        }
        return this.call(
          'GET',
          `/v1/admin/lead_limit_text`,
          { user_id: userId },
          undefined, // body
          fetchOptions,
        )
      },
      { server: false },
    )
  }
}

export default EtLeadsModule
