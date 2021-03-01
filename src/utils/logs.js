const MongoHelper = require('../infra/helpers/mongo-helper')

module.exports = async req => {
  const logs = await MongoHelper.getCollection('logs')
  logs.insertOne({
    method: req.method,
    path: `${req.baseUrl + req.path}`,
    query: req.query,
    params: req.params,
    body: req.body,
    date: new Date()
  })
}