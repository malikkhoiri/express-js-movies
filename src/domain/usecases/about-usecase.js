module.exports = class AboutUseCase {
  async about () {
    return {
      name: 'Movie API',
      description: 'This is open API about movie',
      version: 'V1.0.0',
      author: 'Malik'
    }
  }
}