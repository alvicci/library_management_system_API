require("dotenv").config();
const app = require("./src/app");
const connectionToDB = require("./config/database");

const PORT = process.env.PORT || 4000;

connectionToDB();

app.listen(PORT, () => {
  console.log(`Server is currently listening on http://localhost:${PORT}`);
});
