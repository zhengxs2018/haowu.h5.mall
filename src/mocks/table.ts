import Mock from 'better-mock'

interface WhereFn<T> {
  (value: T, index: number, array: T[]): boolean
}

interface orderByFn<T> {
  (a: T, b: T): number
}

interface Schema {
  (): Record<string, unknown>
}

export interface FindManyArgs<T> {
  where?: WhereFn<T>
  orderBy?: orderByFn<T>
  take?: number
  skip?: number
}

export class Table<T extends Record<string, unknown>> {
  rows: T[] = []

  constructor(private readonly schema: Schema | Record<string, unknown>, total?: number) {
    const { rows } = Mock.mock({
      [`rows|${total || 89}`]: [schema]
    })

    this.rows = rows
  }

  findOne(predicate: WhereFn<T>) {
    return this.rows.find(predicate)
  }

  findMany(args: FindManyArgs<T>) {
    let results = this.rows

    if (typeof args.where === 'function') {
      results = results.filter(args.where)
    }

    if (typeof args.orderBy === 'function') {
      results = results.sort(args.orderBy)
    }

    return results
  }

  count(where?: WhereFn<T>) {
    return this.findMany({ where }).length
  }

  create(data: Partial<T>) {
    const defaults: T = Mock.mock(this.schema)
    const row = Object.assign(defaults, data)
    this.rows.push(row)
    return row as T
  }

  update(predicate: WhereFn<T>, data: Partial<T>) {
    const found = this.rows.find(predicate)
    return found ? Object.assign(found, data) : void 0
  }

  remove(predicate: WhereFn<T>) {
    const rows = this.rows
    const index = rows.findIndex(predicate)
    return index > -1 ? rows.slice(index, 1)[0] : void 0
  }

  static create<T extends Record<string, unknown>>(schema: Schema | Record<string, unknown>, total?: number) {
    return new Table<T>(schema, total)
  }
}
