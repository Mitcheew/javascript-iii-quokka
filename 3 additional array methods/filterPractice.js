var athletes = [
    {
        name: "RunGuy",
        speed: 10,
        strength: 7,
        wits: 4
    }, {
        name: "YoungGuy",
        speed: 7,
        strength: 4,
        wits: 6
    }, {
        name: "DumGuy",
        speed: 8,
        strength: 10,
        wits: 1
    }, {
        name: "FunGuy",
        speed: 5,
        strength: 5,
        wits: 8
    },{
        name: "StunGun",
        speed: 8,
        strength: 8,
        wits: 8
    }
]

//Filter OUT all athletes with wits 5 or higher
let athletesWit = athletes.filter(function(athlete){
    return athlete.wits < 4;
})
athletesWit 
//Filter IN all athletes with a strength higher than 6
let athletesStr = athletes.filter(function(athlete){
    return athlete.strength > 4;
})
athletesStr
//Filter OUT all althletes that don't have Guy in their name
let athletesGuy = athletes.filter(function(athlete, i){
        return athlete.name.includes('Guy');
        
    
})
athletesGuy 