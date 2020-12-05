import { FunctionalComponent as FC, CSSProperties } from 'vue'
import { Sticky, PullRefresh } from 'vant'

import { renderSlot } from '../util/ui'

const prefixCls = 'ux-page'

export interface PageProps {
  fixed?: boolean
  sticky?: boolean | 'header' | 'tabs'
  headerStyle?: string | CSSProperties
  contentStyle?: string | CSSProperties
  footerStyle?: string | CSSProperties
}

const Page: FC<PageProps> = (props, { slots }) => {
  const sticky = props.sticky
  const header = renderSlot(slots, 'header', {}, () => {
    const title = renderSlot(slots, 'title')
    const extra = renderSlot(slots, 'extra')
    const tabs = renderSlot(slots, 'tabs')
    if (title || extra) {
      const children = [
        <div class="ux-page__head-wrap">
          <div class="ux-page__title">{title}</div>
          {extra && <div class="ux-page__extra">{extra}</div>}
        </div>,
      ]
      if (tabs) {
        if (sticky === 'tabs') {
          children.push(<Sticky>{tabs}</Sticky>)
        } else {
          children.push(tabs)
        }
      }

      return children
    }
    return null
  })
  const footer = renderSlot(slots, 'footer')

  const classes = [
    prefixCls,
    {
      'is-fixed': props.fixed,
    },
  ]

  const top = []
  if (header) {
    const vNode = (
      <div class={`${prefixCls}__header`} style={props.headerStyle}>
        {header}
      </div>
    )
    if (sticky === true || sticky === 'header') {
      top.push(<Sticky>{vNode}</Sticky>)
    } else {
      top.push(vNode)
    }
  }

  return (
    <div class={classes}>
      {top}
      <div class={`${prefixCls}__content`} style={props.contentStyle}>
        {renderSlot(slots, 'default')}
      </div>
      {footer && (
        <div class={`${prefixCls}__footer`} style={props.footerStyle}>
          {footer}
        </div>
      )}
    </div>
  )
}

export default Page
