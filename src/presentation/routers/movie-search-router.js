const HttpResponse = require('../helpers/http-response')

module.exports = class MovieSearchRouter {
  constructor({ movieUseCase } = {}) {
    this.movieUseCase = movieUseCase
  }

  async route (httpRequest) {
    try {
      const movies = await this.movieUseCase.search(httpRequest.query)
      return HttpResponse.ok({...movies})
    } catch (error) {
      return HttpResponse.serverError()
    }
  }
}