const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const connectionToDB = () => {
  mongoose
    .connect(DB)
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));
};

module.exports = connectionToDB;
