export default {
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  },
  makeEndpointURL(endpoint) {
    return (process.env.GATSBY_API_BASE_URL || 'https://ecosante.beta.gouv.fr') + endpoint
  },
  get(endpoint) {
    return fetch(this.makeEndpointURL(endpoint), {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(this.handleErrors)
      .then((res) => res.json())
  },
  post(endpoint, body) {
    return fetch(this.makeEndpointURL(endpoint), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(this.handleErrors)
      .then((res) => res.json())
  },
  fetch(endpoint, body) {
    return body ? this.post(endpoint, body) : this.get(endpoint)
  },
}
