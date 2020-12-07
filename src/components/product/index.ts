import Card from './card'
import List from './list.vue'
import Product from './product.vue'

export {
  List,
  Card
}

Product.List = List
Product.Card = Card

export default Product
