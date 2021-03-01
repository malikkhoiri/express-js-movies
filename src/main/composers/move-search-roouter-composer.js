const MovieSearchRouter = require('../../presentation/routers/movie-search-router')
const MovieUseCase = require('../../domain/usecases/movie-usecase')
const LoadMovieRepository = require('../../infra/repositories/load-movie-repository')

module.exports = class MovieSearchRouterComposer {
  static compose () {
    const loadMovieRepository = new LoadMovieRepository()
    const movieUseCase = new MovieUseCase({ loadMovieRepository })
    return new MovieSearchRouter({ movieUseCase })
  }
}