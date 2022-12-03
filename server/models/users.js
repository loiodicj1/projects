const {connect} = require('./mongo');
const dbName = 'webdev'
const collectionName = 'users'

async function collection() {
    const client = await connect()
    return client.db(dbName).collection(collectionName)
}

async function dropCollection() {
    const client = await connect()
    client.db(dbName).dropCollection(collectionName)
}

async function getUsers() {
    const db = await collection()
    const data = await db.find().toArray()
    return data
}

async function getUser(id) {
    const db = await collection();
    const user = await db.findOne({_id: id})
    return user
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
    db.deleteMany()
    await addUser("user1", false)
    await addUser("user2", false)
    await addUser("user3", true)
}

module.exports = {
    collection
    ,dropCollection
    ,getUsers
    ,getUser
    ,addUser
    ,seedUsers
}