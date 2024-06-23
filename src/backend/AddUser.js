const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI if different

// Database and collection names
const dbName = 'yourDatabaseName';
const collectionName = 'users';

// New user object with combined info
const newUser = {
    firstname: "new",
    lastname: "user",
    email: "newemail@example.com",
    phonenumber: "newphonenumber",
    password: "newpassword",
    gender: "wht",
    location: "erwr",
    employment: "wehrw",
    age: "1",
    pets: "no",
    petkind: "n/a",
    budget: "1231",
    clean: "2",
    sleepschedule: "1",
    alcoholuse: "2",
    smokinguse: "2"
};

// Function to add a new user to MongoDB
async function addUser() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Access the database and collection
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Insert the new user
        const result = await collection.insertOne(newUser);

        console.log(`New user added with the following id: ${result.insertedId}`);
    } catch (err) {
        console.error('Error adding user:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the function to add the new user
addUser();
