// 3rd's
import { AsyncDataOptions } from '#app'
import { FetchOptions } from 'ofetch'

// locals
import FetchFactory from '../factory'

type IProduct = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

class ProductsModule extends FetchFactory {
  private RESOURCE = '/products'

  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getProducts(asyncDataOptions?: AsyncDataOptions<IProduct[]>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        headers: {
          'Accept-Language': 'en-US',
        },
      }
      return this.call(
        'GET',
        `${this.RESOURCE}`,
        undefined, // body
        fetchOptions,
      )
    }, asyncDataOptions)
  }
}

export default ProductsModule
