const HttpResponse = require('../helpers/http-response')

module.exports = class MovieRouter {
  constructor({ movieUseCase } = {}) {
    this.movieUseCase = movieUseCase
  }

  async route (httpRequest) {
    try {
      const { id } = httpRequest.query
      const movie = await this.movieUseCase.detail(id)
      return HttpResponse.ok({...movie})
    } catch (error) {
      return HttpResponse.serverError()
    }
  }
}