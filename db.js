
// includes
const http = require('http');
const { Client } = require('pg');

// look for the postgres database URL
const DATABASE_URL = process.env.DATABASE_URL;

/* Helper function to get DB object */
function getDBObject() {

    var toReturn = {};

    var client = new Client({
        connectionString: DATABASE_URL,
    });

    console.log(DATABASE_URL);

    client.connect()
    .then(() => client.query('SELECT * FROM hellotable'))
    .then((result) => {
        console.log("Found a result.");
        client.end();
        toReturn = {'name': '${result.rows[0].name}\n'};
    })
    .catch(() => {
        console.log("Couldn't read DB.");
        client.end();
        toReturn = {'ERROR': 'DB could not be read.'};
    });

    return toReturn;
}

module.exports={
    getDBObject : getDBObject
 };