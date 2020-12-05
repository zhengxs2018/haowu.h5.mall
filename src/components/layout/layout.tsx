import { FunctionalComponent as FC, defineComponent, DefineComponent, h } from 'vue'

import { useRoute } from 'vue-router'

import get from 'lodash-es/get'
import findLast from 'lodash-es/findLast'

import { renderSlot } from '../util/ui'

export interface LayoutProps {
  layout?: string
  layouts: Record<string, DefineComponent>
}

const Layout: FC<LayoutProps> = ({ layout, layouts }, { slots }) => {
  const route = useRoute()

  return () => {
    const found = findLast(route.matched, (route) => 'layout' in route.meta)
    const compName = found ? get(found, 'meta.layout') : layout
    if (compName) {
      const Layout = get(layouts, compName)
      if (Layout) {
        return h(Layout, null, slots)
      }
    }

    return renderSlot(slots, 'default')
  }
}

export default defineComponent({
  name: 'layout',
  props: {
    default: String,
    layouts: {
      type: Object,
      required: true,
    },
  },
  setup: Layout,
})
