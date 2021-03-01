const MissingParamError = require('../../utils/errors/missing-param-error')
const axios = require('axios').default
const env = require('../../main/config/env')
const MongoHelper = require('../helpers/mongo-helper')

module.exports = class LoadMovieRepository {
  async load (id) {
    if (!id) throw new MissingParamError('id')
    const res = await axios.get(`${env.omdbApiURL}/?apiKey=${env.omdbApiKey}&i=${id}`)
    const data = res.data
    return data
  }

  async search (query) {
    const { s, page = 1 } = query
    if (!s) throw new MissingParamError('s')
    const res = await axios.get(`${env.omdbApiURL}/?apiKey=${env.omdbApiKey}&s=${s}&page=1`)
    const data = res.data
    return data
  }
}