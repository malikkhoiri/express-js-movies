const { adapt } = require('../adapters/router-adapter')
const AboutRouterComposer = require('../composers/about-router-composer')

module.exports = router => {
  router.get('/', adapt(AboutRouterComposer.compose()))
}