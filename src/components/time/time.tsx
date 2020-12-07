import { FunctionalComponent as FC } from 'vue'

import { dateFmt } from '/@/system/format/time'

export interface TimeProps {
  value?: string | number | Date
  format?: string
}

const Time: FC<TimeProps> = (props) => {
  return <span class="ux-time">{dateFmt(props.value, props.format)}</span>
}

export default Time
