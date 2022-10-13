// import Raven from 'raven-js'

function init () {
  // Raven.config(
  //   'https://decfa101af064c8593d516d43d0bff24@o1140217.ingest.sentry.io/6197224',
  //   {
  //     release: '1-0-0',
  //     environment: 'development-test'
  //   }
  // ).install()
}

function log (error) {
  console.error(error)
  // Raven.captureException(error)
}

export default {
  init,
  log
}
