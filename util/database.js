const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient; // Correct class name

let _db;
const mongoConnect = (callback) => {
  const connectionString =
    "mongodb+srv://ayushpasi8839:ImqcWxaXKo3xvja7@cluster0.kvsuzmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  MongoClient.connect(connectionString)
    .then((client) => {
      console.log("Connected to MongoDB database!"); // Success message
      _db = client.db();
      callback();
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error); // Log the error
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no database found";
};
module.exports = { mongoConnect, getDb };
