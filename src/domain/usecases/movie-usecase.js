module.exports = class MovieUseCase {
  constructor ({ loadMovieRepository } = {}) {
    this.loadMovieRepository = loadMovieRepository
  }

  async detail (id) {
    const movie = await this.loadMovieRepository.load(id)
    return movie
  }

  async search (query) {
    const movies = await this.loadMovieRepository.search(query)
    return movies
  }
}