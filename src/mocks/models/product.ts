import { Product } from '../../store/types'

import { Table } from '../table'

const product = Table.create<Product>({
  id: '@id',
  title: '@tittle'
})

export default product
