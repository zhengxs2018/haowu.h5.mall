export interface RootState {
  network: NetworkState
  search: SearchState
}

export interface NetworkState {
  online: boolean
}

export interface SearchState {
  hotKeywords: string[]
}
