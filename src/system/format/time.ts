import dayjs from 'dayjs'

export function dateFmt(value?: string | number | Date, format: string = 'YYYY-MM-DD') {
  return value ? dayjs(value).format(format) : null
}
