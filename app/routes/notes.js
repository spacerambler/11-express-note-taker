const router = require("express").Router()
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res)=>{
 fs.readFile("./db/db.json", (err, data)=>{
  if(err) throw err;
  res.send(data)
 })
})

router.post("/notes", (req, res)=>{
  console.log(req.body);
  let newNote = req.body;
  newNote.id = uuidv4();
  console.log(newNote);
  fs.readFile("./db/db.json", (err, data)=>{
    if(err) throw err;
  var notes = JSON.parse(data);
  notes.push(newNote)
  console.log(notes)
  fs.writeFile("./db/db.json", JSON.stringify(notes), (err)=>{
    if(err) throw err;
    res.send(req.body)
  })
  })
});


module.exports = router;