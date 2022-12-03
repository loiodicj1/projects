const {connect} = require('./mongo');
const collectionName = 'users'

async function collection() {
    const client = await connect()
    return client.db('webdev').collection(collectionName)
}

async function dropCollection() {
    const client = await connect()
    client.db('webdev').dropCollection(collectionName)
}

async function getUsers() {
    const db = await collection()
    const data = await db.find().toArray()
    return data
}

async function addUser(name, admin) {
    const db = await collection()
    await db.insertOne({
        "name": name
        ,"admin": admin
        ,"workouts": []
    })
}

async function seedUsers() {
    const db = await collection()
    await db.deleteMany()
    await addUser("pushup doer", false)
    await addUser("mr inshapeman", true)
    await addUser("coach potato", false)
}

module.exports = {
    collection
    ,dropCollection
    ,getUsers
    ,addUser
    ,seedUsers
}