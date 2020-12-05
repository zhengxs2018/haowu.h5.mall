import { FunctionalComponent as FC } from 'vue'

import { renderSlot } from '../util/ui'

export interface PriceProps {
  value?: number
  size?: 'large' | 'small'
}

const Price: FC<PriceProps> = (props, { slots }) => {
  const [integer, decimal] = (props.value || 0).toFixed(2).split('.')
  const currency = renderSlot(slots, 'currency', {}, () => {
    return ['¥']
  })

  return (
    <div class="van-card__price">
      <span class="van-card__price-currency">{currency}</span>
      <span class="van-card__price-integer">{integer}</span>
      <span>.</span>
      <span class="van-card__price-decimal">{decimal}</span>
    </div>
  )
}

export default Price
