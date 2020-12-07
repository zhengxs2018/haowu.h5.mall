import { FunctionalComponent as FC } from 'vue'

import { renderSlot } from '../util/ui'

import Card from '../card'
import Price from '../price'

const prefixCls = 'ux-product-card'

export interface ProductCardProps {
  /**
   * 左侧图片 URL
   */
  thumb?: string
  /**
   * 标题
   */
  title: string
  /**
   * 描述
   */
  desc?: string
  /**
   * 图片角标
   */
  // tag?: string
  /**
   * 商品数量
   */
  num?: string | number
  /**
   * 商品价格
   */
  price: number
  /**
   * 商品划线原价
   */
  originPrice?: number
  /**
   * 货币符号
   */
  currency?: string
  /**
   * 是否开启图片懒加载，须配合 Lazyload 组件使用
   */
  lazyLoad?: boolean
}

const ProductCard: FC<ProductCardProps> = (props, { slots: scopedSlots, emit }) => {
  const title = renderSlot(scopedSlots, 'title', {}, () => {
    const value = props.title
    return value ? [value] : null
  })

  const desc = renderSlot(scopedSlots, 'desc', {}, () => {
    const value = props.desc
    return value ? [value] : null
  })

  const price = renderSlot(scopedSlots, 'price', {}, () => {
    return [<Price currency={props.currency} value={props.price} />]
  })

  const originPrice = renderSlot(scopedSlots, 'origin-price', {}, () => {
    const value = props.originPrice
    return value ? [<Price currency={props.currency} value={props.originPrice} />] : null
  })

  const num = renderSlot(scopedSlots, 'num', {}, () => {
    const value = props.num
    return value ? [`x${value}`] : null
  })

  const slots = {
    default() {
      return (
        <>
          {desc && <div class={`${prefixCls}__sku van-ellipsis`}>{desc}</div>}
          {title && <div class={`${prefixCls}__title van-multi-ellipsis--l2`}>{title}</div>}
          {renderSlot(scopedSlots, 'default')}
          <div class={`${prefixCls}__meta`}>
            <div class={`${prefixCls}__price-area`}>
              {price}
              {originPrice}
            </div>
            {num && <div class={`${prefixCls}__num`}>{num}</div>}
          </div>
        </>
      )
    }
  }

  return (
    <Card
      className={prefixCls}
      thumb={props.thumb}
      onThumbClick={(event) => emit('click-thumb', event)}>
      {slots}
    </Card>
  )
}

export default ProductCard
