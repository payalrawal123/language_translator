const express = require("express");

const cors = require("cors");
const { connectionToDb } = require("./config/db.config");
const { userRouter } = require("./routes/userRoute");
const { translateRouter } = require("./routes/translation");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());
app.use("/user",userRouter);
app.use("/translate", translateRouter)
app.get("/",(req,res)=>{
  res.send("get started");
})


app.listen(port, async (req, res) => {
  await connectionToDb();
  console.log(`Server is running at port ${port}`);
});
