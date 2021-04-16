const fs = require('fs');
const chalk = require('chalk')

const getNotes = ()=>{
    return 'Your Notes!'
}

//we write some shit down wth addNote and saveNotes writes it into notes.json
const addNote = (title, body)=>{
    const notes = loadNotes() //gets whatever is in notes.json in string format
    const duplicatenotes = notes.filter((note)=>{ note.title === true})

    if(duplicatenotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added!')
    } else{
        console.log('note title already taken')
    }

    

    saveNotes(notes)
}


//displays what we've written/added to notes.json
const loadNotes =()=>{
    try{
        const databuffer = fs.readFileSync('notes.json')
        const datastring = databuffer.toString()
        return JSON.parse(datastring) //converts string to a js object
    } catch (e){
        return []
    }
}


//saveNotes writes the shit into notes.json
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes) // turns a JavaScript object into JSON text and stores that JSON text in a string
    fs.writeFileSync('notes.json', dataJSON)
}
 
const removeNote = (title)=>{
    const notes = loadNotes()
    const remove_note = notes.filter(function(note){
        return note.title !== title;
    })

    saveNotes(remove_note)

    if(notes.length === remove_note.length){
        console.log(chalk.bgRed('No note removed'))
    }
    else{
        console.log(chalk.bgGreen('Note removed!'))
    }

}

const listNote = (title) => {
    const notes = loadNotes()
    const listedNote = notes.filter(function(notes){
        return notes.title === title
    })    
  
    console.log(listedNote)
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes!'))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    listNotes: listNotes
}