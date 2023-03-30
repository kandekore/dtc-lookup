// const mongoose = require('mongoose');

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/dtcdata',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );

// module.exports = mongoose.connection;

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://kandekore:6UHnuk9d2023@cluster0.4pwb7rb.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return client.db();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectToMongoDB;
