const mongoose = require("mongoose");

function connectDB(url) {
  return mongoose.connect(url);
}
module.exports = { connectDB };

// const mongoose = require('mongoose');
// const uri = 'mongodb+srv://lovedeep:<Lovedeep@12345>@cluster0.9frqvr5.mongodb.net/?retryWrites=true&w=majority'; // Example URI, replace with your actual MongoDB URI

// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Add any additional options if needed
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
// };

// module.exports = connectDB;
