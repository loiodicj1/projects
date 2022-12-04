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

async function getUser(name) {
    const db = await collection();
    const user = await db.findOne({name: name})
    return user
}

async function addUser(name, admin) {
    const db = await collection()
    await getUser(name).then((user) => {
        if (user) {
            //dont insert            
        } else {
            db.insertOne({
                "name": name
                ,"admin": admin
                ,"workouts": []
            })
        }
    })
}

async function addWorkout(user, workoutName, workoutQuantity, workoutMonth, workoutDay, workoutYear) {
    const db = await collection()
    await getUser(user).then((userData) => {
        const workouts = userData.workouts
        workouts.push({
            "name": workoutName
            ,"quantity": workoutQuantity
            ,"month": workoutMonth
            ,"day": workoutDay
            ,"year": workoutYear
        })

        db.findOneAndReplace({name: user}, {
            "name": userData.name
            ,"admin": userData.admin
            ,"workouts": workouts
        })
    })
}

async function seedUsers() {
    const db = await collection()
    db.deleteMany()
    await addUser("normal", false)
    await addUser("admin", true)
}

module.exports = {
    collection
    ,dropCollection
    ,getUsers
    ,getUser
    ,addUser
    ,seedUsers
    ,addWorkout
}
