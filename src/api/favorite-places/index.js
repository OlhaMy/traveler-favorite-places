import { clientFetch } from '../clientFetch'

export const getFavoritePlaces = () => {
  return clientFetch.get('/points')
}
export const addFavoritePlaces = (body) => {
  return clientFetch.post('/points', body)
}
export const updateFavoritePlaces = (body) => {
  return clientFetch.put('/points', body)
}
export const deleteFavoritePlaces = (body) => {
  return clientFetch.delete('/points', body)
}
