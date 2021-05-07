export default {
  async handleErrors(response) {
    if (!response.ok) {
      let error = new Error(response.statusText)
      if (response.headers.get('Content-Type') === 'application/json') {
        let json = await response.json()
        error.json = json
      }
      throw error
    }
    return response
  },
  makeEndpointURL(endpoint) {
    if (endpoint.startsWith('https')) {
      return endpoint
    }
    return (
      (process.env.GATSBY_API_BASE_URL || 'https://ecosante.beta.gouv.fr') +
      endpoint
    )
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
  post(endpoint, body, noContent) {
    return fetch(this.makeEndpointURL(endpoint), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': !noContent && 'application/json',
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
