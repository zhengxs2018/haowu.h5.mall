import { FunctionalComponent as FC } from 'vue'

import { renderSlot } from '../util/ui'

export interface PriceProps {
  /**
   * 货币数量
   */
  value?: number
  /**
   * 货币符号
   */
  currency?: string
  /**
   * 字体颜色
   */
  color?: string
  /**
   * 大小
   */
  size?: 'large' | 'small'
}

const prefixCls = 'ux-price'

const Price: FC<PriceProps> = (props, { slots }) => {
  const [integer, decimal] = (props.value || 0).toFixed(2).split('.')
  const currency = renderSlot(slots, 'currency', {}, () => {
    return [props.currency || '¥']
  })

  const classes = [prefixCls, props.size ? `${prefixCls}--${props.size}` : null]

  return (
    <div class={classes} style={{ color: props.color }}>
      <span class={`${prefixCls}__currency`}>{currency}</span>
      <span class={`${prefixCls}__integer`}>{integer}</span>
      <span>.</span>
      <span class={`${prefixCls}__decimal`}>{decimal}</span>
    </div>
  )
}

export default Price
