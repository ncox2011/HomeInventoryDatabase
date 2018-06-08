const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

const piano = {
    name: 'Casio Piano',
    location: 'Living Room',
    description: 'I like learning music on this piano.  The keys are weighted.'
}

const laptop = {
    name: 'Dell Laptop',
    location: 'anywhere I want it',
    description: 'All my coding is done on this machine'
}

const oldNotebooks = {
    name: 'Old Notebooks',
    location: 'Under my bed',
    description: 'Holds lots of writing I did in high school and college'
}

const boxOfArtwork = {
    name: 'Box of Artwork',
    location: 'In my room',
    description: 'I store artwork my kids have created from the last few years in this box'
}

const chromeCast = {
    name: 'Chrome Cast',
    location: 'Plugged into the TV in the living room',
    description: 'This is so useful for watching videos and movies, and listening to music'
}

const esspressoMachine = {
    name: 'Esspresso Machine',
    location: 'Kitchen',
    description: 'I like using this to make Lattes every morning.  It cuts down on going out for coffee.'
}
const couch = {
    name: 'Couch',
    location: 'Living Room',
    description: 'This is where the coding magic happens.'
}
const PC = {
    name: 'DELL Desktop PC',
    location: 'My room',
    description: 'An old Desktop given to me by a friend where I currently store a lot of photographs'
}
const caligraphyPens = {
    name: 'Caligraphy pens',
    location: 'Art Easel',
    description: 'Set of pen tips and ink I have had since highschool.'
}
const notes = {
    name: 'Notes',
    location: 'A box in my room',
    description: 'A collection of notes written to me by my children.'
}

HomeInventoryDatabase.crafts.push(piano)
HomeInventoryDatabase.crafts.push(oldNotebooks)
HomeInventoryDatabase.crafts.push(boxOfArtwork)
HomeInventoryDatabase.crafts.push(caligraphyPens)
HomeInventoryDatabase.crafts.push(notes)
HomeInventoryDatabase.electronics.push(laptop)
HomeInventoryDatabase.electronics.push(chromeCast)
HomeInventoryDatabase.crafts.push(esspressoMachine)
HomeInventoryDatabase.furniture.push(couch)
HomeInventoryDatabase.electronics.push(PC)

const saveDatabase = function (databaseObject, localStorageKey) {
        const stringifiedDatabase = JSON.stringify(databaseObject)
        localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(HomeInventoryDatabase, "HomeInventoryDatabase")