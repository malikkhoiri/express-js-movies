const AboutRouter = require('../../presentation/routers/about-router')
const AboutUseCase = require('../../domain/usecases/about-usecase')

module.exports = class AboutRouterComposer {
  static compose () {
    const aboutUseCase = new AboutUseCase()
    return new AboutRouter({ aboutUseCase })
  }
}