module.exports = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/movies-api',
  port: 8000,
  omdbApiURL: process.env.OMDB_API_URL || 'http://www.omdbapi.com',
  omdbApiKey: process.env.OMDB_API_TOKEN || 'faf7e5bb'
}