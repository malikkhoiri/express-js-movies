const MongoHelper = require('./src/infra/helpers/mongo-helper')
const env = require('./src/main/config/env')

MongoHelper.connect(env.mongoURL)
  .then(() => {
    const app = require('./src/main/config/app')
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  }).catch(console.error)
