const HttpResponse = require('../helpers/http-response')

module.exports = class AboutRouter {
  constructor({ aboutUseCase } = {}) {
    this.aboutUseCase = aboutUseCase
  }

  async route (httpRequest) {
    try {
      const about = await this.aboutUseCase.about()
      return HttpResponse.ok({ ...about })
    } catch (error) {
      return HttpResponse.serverError()
    }
  }
}