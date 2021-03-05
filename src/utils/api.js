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
}
