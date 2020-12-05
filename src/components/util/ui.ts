import { Slots } from 'vue'

export function renderSlot(
  slots: Slots,
  name: string,
  props?: Record<string, unknown>,
  fallback?: () => JSX.Element | null
): JSX.Element | null {
  const slot = slots[name] || fallback
  return typeof slot === 'function' ? slot(props) : null
}
