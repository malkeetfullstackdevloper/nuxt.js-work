// 3rd's

// locals
import FetchFactory from '../factory'

class TrmUsersModule extends FetchFactory {
  private RESOURCE = '/v1/admin/users'

  async getUsers(queryParams?: any) {
    return useCustomFetch(`${this.RESOURCE}`, {
      params: queryParams,
    })
  }
}

export default TrmUsersModule
