const fs = require('fs')
let input = process.argv[2]
let index1 = process.argv[3]
let index2 = process.argv[4]


if (input === undefined) {
    console.error('Usage: node pets.js [read | create | update | destroy]')
    process.exit(1)
} else if (input === 'read') {
    readPets(index1)
} else if (input === 'create') {
    createPets()
} else if (input === 'update') {
    updatePets()
} else if (input === 'destroy') {
    destroyPets()
}


function readPets(index1) {
    fs.readFile('pets.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        } else {
            let pets = JSON.parse(data);
            //console.log(pets)
            if (!index1) {
                console.log(pets)
            } else {
                if (index1 >= 0 && index1 < pets.length) {
                    console.log(pets[index1])
                } else {
                    console.error('Usage: node pets.js read INDEX')
                }
            }
        }
    })
}


function createPets(/*input, index1, index2*/) {
    console.log('This Creates Pets')
    // fs.readFile('pets.json', 'utf8', (err, data) => {

    //     if (err) {
    //         console.log('Something went wrong');
    //     } else if (input === undefined || index1 === undefined || index2 === undefined) {
    //         console.log('Usage: node pets.js create AGE KIND NAME')
    //     } else {

    //         var newData = JSON.parse(data);
    //         let age = input;
    //         let kind = index1;
    //         let name = index2;


        }





        function updatePets() {
            console.log('this updates pets');
        }

        function destroyPets() {
            console.log('this destroys pets');
        }