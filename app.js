// Import the MongoClient class from the mongodb package
const { MongoClient } = require('mongodb');

// Connection URI. Update this with your MongoDB connection string
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected to MongoDB');

        // Get a reference to the database
        const db = client.db(dbName);

        // Insert a document into the 'users' collection
        const result = await db.collection('users').insertOne({
            username: 'john_doe',
            email: 'john@example.com'
        });

        console.log(`Inserted document with _id: ${result.insertedId}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

// Call the main function
main();