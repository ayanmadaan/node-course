const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove the note',
  builder: {
    title: {
      describe: 'Note to remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  builder:{
    title: {
      describe: 'Note to be listed',
      demandOption: true,
      type: 'string'

    }
  },
  handler(argv) {
    notes.listNote(argv.title)
  }
})


yargs.command({
  command: 'listall',
  describe: 'List your notes',
  builder:{
    title: {
      describe: 'Note to be listed',
      demandOption: true,
      type: 'string'

    }
  },
  handler(argv) {
    notes.listNotes(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note')
  }
})

yargs.parse()