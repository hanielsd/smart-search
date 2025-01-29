import { JPHComment } from './types'

const cache: { [key: string]: { data: JPHComment[]; expires: number } } = {}

export function getData(query: string): JPHComment[] | null {
  if (cache[query] && cache[query].expires > Date.now())
    return cache[query].data

  return null
}

export function storeData(query: string, data: JPHComment[]): void {
  cache[query] = { data, expires: Date.now() + 5 * 60 * 1000 }
}
