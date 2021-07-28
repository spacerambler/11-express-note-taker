const express = require("express");
const path = require("path");
const router = require("./app/routes/notes.js");

const app = express();
const PORT = 5555;

app.use(express.json(),
 express.urlencoded({extended:true}),
  express.static("public"));

app.use((req,res,next)=>{
  console.log(req.url, res.statusCode)
  next()
})

//GET notes should return the notes.html file

//GET * should return the index.html file

app.get('/notes', (req, res)=>{
  res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.use("/api", router);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, "./public/index.html"))

  //add an error res
})

app.listen(PORT, ()=> console.log(`server running`))