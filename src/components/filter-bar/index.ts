import Filterbar from './filterbar.vue'
import Item from './item.vue'

Filterbar.Item = Item

export default Filterbar as typeof Filterbar & { Item: typeof Item }
