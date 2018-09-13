var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum
let sum = roundScores.reduce((total, element) => total + element);

sum;
//Use the sum to get an average
let average = sum / roundScores.length;
average
//Handicap is 4
var handiScores = roundScores.map((score) => score - 4);
//Use a map to reduce all scores by 4
//Use a reduce to get a sum
let sum2 = handiScores.reduce((total, element) => total + element);
sum2
//Use the sum to get an average
handicapAverage = sum2 / roundScores.length;
handicapAverage
var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]
let lyrics = lyricWords.reduce((total, element, i) => {
    return total + element;
});
lyrics
//Use reduce to go through the lyricWords and concatenate them together