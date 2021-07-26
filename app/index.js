import express from "express";

import router from "./routes/notes.js";

const app = express();
const PORT = 5555;

app.get('/', (req, res)=>{
  res.send("../public/index.html")
})

app.use(express.json());

app.use("/api", router);

app.listen(PORT, ()=> console.log(`server running`))