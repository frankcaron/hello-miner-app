// includes
const http = require('http');
const Pool = require('pg').Pool;
const url = require('url')

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: false
  };

const client = new Pool(config);

/* Helper function to return all users */
const getUsers = (request, response) => {
    client.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

/* Helper function to return all Sites */
const getSites = (request, response) => {
  client.query('SELECT * FROM site__c ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports={
    getUsers,
    getSites
 };