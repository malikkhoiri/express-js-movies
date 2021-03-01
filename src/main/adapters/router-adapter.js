const logs = require('../../utils/logs')

module.exports = class ExpressRouterAdapter {
  static adapt (router) {
    return async (req, res) => {
      await logs(req)
      const httpResponse = await router.route(req)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}