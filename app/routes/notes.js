const { Router } = require("express");
// const { } = require("../services/api.js")

const router = new Router();



//GET /api/notes should read the db.json file and return all saved notes as JSON
router.route("/notes").get((req,res)=>{
  res.json([{Ok:true}])
}).post((req,res)=>{
  res.end()
})
//POST /api/notes should receive a new note to save on the request body, add it to the db.json
//and then return the new note to the client (unique id)

module.exports = router;