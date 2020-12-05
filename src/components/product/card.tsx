import { FunctionalComponent as FC } from 'vue'

import { renderSlot } from '../util/ui'

import Card from '../card'
import Price from '../price'

const prefixCls = 'ux-product-card'

export interface ProductCardProps {
  thumb?: string
  title?: string
  sku?: string
  price: number
}

const ProductCard: FC<ProductCardProps> = (props, { slots }) => {
  const title = renderSlot(slots, 'title', {}, () => {
    const value = props.title
    return value ? [value] : null
  })

  const sku = renderSlot(slots, 'sku', {}, () => {
    const value = props.sku
    return value ? [value] : null
  })

  const price = renderSlot(slots, 'price', {}, () => {
    return [<Price value={props.price} />]
  })

  const extra = renderSlot(slots, 'extra')

  return (
    <Card className={prefixCls} thumb={props.thumb}>
      {sku && <div class={`${prefixCls}__sku van-ellipsis`}>{sku}</div>}
      {title && <div class={`${prefixCls}__title van-multi-ellipsis--l2`}>{title}</div>}
      {renderSlot(slots, 'default')}
      <div class={`${prefixCls}__meta`}>
        <div class={`${prefixCls}__price-area`}>
          {price}
          {renderSlot(slots, 'market-price')}
        </div>
        {extra && <div class={`${prefixCls}__extra`}>{extra}</div>}
      </div>
    </Card>
  )
}

export default ProductCard
