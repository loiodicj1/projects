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
            if (admin == "true") {
                admin = true
            } else if (admin == "false") {
                admin = false
            }

            db.insertOne({
                "name": name
                ,"admin": admin
                ,"workouts": []
            })
        }
    })
}

async function checkForAdmin() { //there must be at least one admin!
    await getUsers().then(arr => {
        admin = false;

        arr.forEach( user => {
            if (user.admin)
                admin = true;
        } )

        if (!admin) {
            addUser("admin", true)
        }
    })
}

async function dropUser(name) {
    const db = await collection()
    await db.deleteOne({name: name}).then( result => {
        if (result) {
            checkForAdmin()
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

/* async function dropWorkout(user, workoutName, workoutQuantity, workoutMonth, workoutDay, workoutYear) {
    console.log("dropWorkout model called")
    const db = await collection()
    await getUser(user).then((userData) => {
        const workouts = userData.workouts
        const i = workouts.indexOf({
            "name": workoutName
            ,"quantity": workoutQuantity
            ,"month": workoutMonth
            ,"day": workoutDay
            ,"year": workoutYear
        })
        console.log("workout: " + i)
        if (i >= 0) {
            workouts.splice(i)
            db.findOneAndReplace({name: user}, {
                "name": userData.name
                ,"admin": userData.admin
                ,"workouts": workouts
            })
        }
    })
} */

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
    ,dropUser
    ,seedUsers
    ,addWorkout
    //,dropWorkout
}
