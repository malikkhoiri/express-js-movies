# Movies API

**Prerequisites**
* [**Node**](https://nodejs.org/en/)

**Getting Started**
1. Clone the project
   ~~~bash
   $ git clone https://github.com/malikkhoiri/express-js-movies.git
   ~~~
1. Go to project directory
   ~~~bash
   $ cd path/to/your/dir/express-js-movies
   ~~~
1. Download `node_mdolues` package
   ~~~bash
   $ npm install
   ~~~
1. Run application
   ~~~bash
   $ npm run serve
   ~~~

****
## Documentation
Public Url: https://express-movies-api.herokuapp.com

Local Url: http://localhost:8000
* Get single movie detail
  ~~~bash
  GET {{URL}}/api/v1/movies/detail
  ~~~
  query:
  ~~~bash
  id: string *required
  ~~~
* Search movie
  ~~~bash
  GET {{URL}}/api/v1/movies/search
  ~~~
  query:
  ~~~bash
  s: string *required
  page: string
  ~~~

## Example
* https://express-movies-api.herokuapp.com/api/v1/movies/search?s=batman&page=1