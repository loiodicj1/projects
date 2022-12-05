require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI ?? "";
console.log("mongo.js mongo: " + uri)

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

const client = new MongoClient(uri, options);

module.exports = {
    connect: ()=> client.connect() 
}