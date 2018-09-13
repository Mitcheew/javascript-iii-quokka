let yessa = {
    name: "Yessa Helpa",
    race: "Gungan",
    favoritePhrase: "Yessa",
    skills: ["Jumping", "talking", "talking more", "'helping'"],
    planet: "Binksia",
    friends: ["Obi Han", "Princess Leiadalla", "Chewywok"]
}

//Get yessa's name and favoritePhrase
let name = yessa.name;
let phrase = yessa.favoritePhrase;
let {name, favoritePhrase} = yessa;


//Instead of person, pick off the parameters: name, planet, skills
//on the first line of the function
function logPerson(person){
    let {name, planet, skills} = person;
}

logPerson(yessa)

//pick off the parameters: name, friends, race
//instead of the parameter
function friendPerson({name, friends, race}){

}

friendPerson(yessa)