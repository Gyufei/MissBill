import httpClient from './httpClient'    

export function getAccounts() {
  return httpClient({
    url: '/accounts',
    method: 'GET'
  })
}

export function getAccountInfo(accountId, params) {
  return httpClient({
    url: `/account/${ accountId }`,
    method: 'GET',
    params
  })
}