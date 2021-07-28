
//save note
const saveNotes = (notes)=>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

//return files
const loadNotes = ()=>{
  //returns an array of notes
  try {
    const dataBuffer = fs.readFileSync('../db/db.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e){
    return []
  }
}