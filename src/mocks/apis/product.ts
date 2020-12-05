import Mock from 'better-mock'

import product from '../models/product'

Mock.mock('/api/product/', () => {
  return product.findOne(item => item.id === '1')
})
