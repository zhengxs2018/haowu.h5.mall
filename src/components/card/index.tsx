import { FunctionalComponent as FC, CSSProperties } from 'vue'

import { renderSlot } from '../util/ui'

const prefixCls = 'ux-card'

export interface CardProps {
  className?: string | string[]

  thumb?: string
  title?: string
  extra?: string

  bordered?: boolean
  hoverable?: boolean

  headStyle?: string | CSSProperties
  bodyStyle?: string | CSSProperties

  onThumbClick?: (event: MouseEvent) => void
  onTitleClick?: (event: MouseEvent) => void
}

const Card: FC<CardProps> = (props, { slots, emit }) => {
  const title = renderSlot(slots, 'title', {}, () => {
    const value = props.title
    return value ? [value] : null
  })

  const extra = renderSlot(slots, 'extra', {}, () => {
    const value = props.extra
    return value ? [value] : null
  })

  const thumb = renderSlot(slots, 'thumb', {}, () => {
    const value = props.thumb
    return value ? <img lazy-load src={value} /> : null
  })

  const children = renderSlot(slots, 'default')

  const classes = [
    prefixCls,
    {
      [`${prefixCls}--bordered`]: props.bordered,
      [`${prefixCls}--hoverable`]: props.hoverable,
    },
    props.className,
  ]

  return (
    <div class={classes}>
      {(title || extra) && (
        <div class={`${prefixCls}__head`} style={props.headStyle}>
          <div class={`${prefixCls}__head-wrapper`}>
            {title && <div class={`${prefixCls}__head-title`} onClick={props.onTitleClick}>{title}</div>}
            {extra && <div class={`${prefixCls}__extra`}>{extra}</div>}
          </div>
        </div>
      )}
      {thumb && <div class={`${prefixCls}__thumb`} onClick={props.onThumbClick}>{thumb}</div>}
      {children && (
        <div class={`${prefixCls}__body`} style={props.bodyStyle}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Card
