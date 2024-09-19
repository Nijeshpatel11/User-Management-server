const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://napatel3083:4gdQKhyuCbgehwaR@cluster0.u6p1t.mongodb.net/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
