export default {
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  },
  get(endpoint) {
    let headers = new Headers()
    return fetch(
      endpoint,

      {
        method: 'GET',
        headers: headers,
      }
    )
      .then(this.handleErrors)
      .then((res) => res.json())
  },
  post(endpoint, body) {
    let headers = new Headers()
    return fetch(
      endpoint,

      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      }
    )
      .then(this.handleErrors)
      .then((res) => res.json())
  },
}
