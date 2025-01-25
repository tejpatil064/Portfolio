import Express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/db.js";
import cors from "cors";
import userRoute from "../routes/userRoutes.js";
dotenv.config();
const app = Express();
const PORT = process.env.PORT;
dbConnect();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200,
  })
);
app.use(Express.json());
app.use("/api", userRoute);

app.get("/", (req, res) => {
  res.send("Tejas");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
