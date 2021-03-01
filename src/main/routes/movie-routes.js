const { adapt } = require('../adapters/router-adapter')
const MovieRouterComposer = require('../composers/movie-router-composer')
const MovieSearchRouterComposer = require('../composers/move-search-roouter-composer')

module.exports = router => {
  router.get('/movies/detail', adapt(MovieRouterComposer.compose()))
  router.get('/movies/search', adapt(MovieSearchRouterComposer.compose()))
}