export const LUM_SEND_EVENT = 'sendEvent'
export const LUM_SET_USER_PROPERTIES = 'setUserProperties'

export default function lumiere(action, props) {
  window.lumiere(action, ...props)
}

export function sendEvent(props) {
  lumiere(LUM_SEND_EVENT, props)
}

export function setUserProperties(props) {
  lumiere(LUM_SET_USER_PROPERTIES, [props])
}
