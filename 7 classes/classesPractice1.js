// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object
class AmericanNinjaWarrior{
    constructor(name, bestTime, farthest){
         this.name = name;
         this.bestTime = bestTime;
         this.farthest = farthest;
    }
    newTime(time){
        this.bestTime = time;
    }
    difficulty(num){
        this.farthest = num;
    }
    bestRecord(){
        return `Best time is ${this.bestTime} and farthest gone is ${this.farthest}.`;
    }
}