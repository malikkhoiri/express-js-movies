const MovieRouter = require('../../presentation/routers/movie-router')
const MovieUseCase = require('../../domain/usecases/movie-usecase')
const LoadMovieRepository = require('../../infra/repositories/load-movie-repository')

module.exports = class MovieRouterComposer {
  static compose () {
    const loadMovieRepository = new LoadMovieRepository()
    const movieUseCase = new MovieUseCase({ loadMovieRepository })
    return new MovieRouter({ movieUseCase })
  }
}