const base = 'https://somewhere.dev'
export const token = process.env.API_TOKEN

export const endpoints = {
  getSomething: `${ base }/api/something`,
  getThingById: (thing, id) => `${ base }/api/${ thing }/${ id }`,
}

export const get = (endpoint, token, cb) => {
  fetch(endpoint, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  }).then(res => res.json()).then(res => cb(res))
    .catch(err => console.log(`GET error for ${ endpoint }:`, err))
}

export const post = (endpoint, token, body, cb) => {
  fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  }).then(res => res.json()).then(res => cb(res))
    .catch(err => console.log(`POST error for ${ endpoint }:`, err))
}
