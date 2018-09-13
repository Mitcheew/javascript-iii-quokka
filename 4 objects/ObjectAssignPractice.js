var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

//let pt = Object.assign(person, thundercat)
//pt;

// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object
let personCopy = Object.assign({}, person, thundercat);
personCopy;

// Make the a copy of a person that is a smurf
let pt3 = Object.assign({}, person, smurf);
pt3;
// Make a copy of a person that is a smurf then a thundercat
let pt4 = Object.assign({}, person, smurf, thundercat);
pt4
// Make a copy of a person that is a thundercat then a smurf
let pt5 = Object.assign({}, person, thundercat, smurf);
pt5;