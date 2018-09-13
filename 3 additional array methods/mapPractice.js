var answers = ["yes", "no", "yes", "no", "no", "no"]

//map over answers
//change yes into no and no into yes
var newAnswers = answers.map(function(answers){
    if(answers == "yes"){
        return "no"
    } else return "yes"
});
newAnswers
//DESIRED RESULT = ["no", "yes", "no", "yes", "yes", "yes"]


var employees = [
    { name: "a-aron", pay: 12 },
    { name: "b-bron", pay: 18 },
    { name: "c-ron", pay: 20 },
    { name: "le-bron", pay: 21 },
]

//map over employees and give each employee a bump in pay by 3.
//split on the - in name and turn name into first_name and last_name
//save it to a new array variable
var newEmployees = employees.map(function(employee, i){
    employees[i].last_name = employee.name.split('-')[1];
    employees[i].first_name = employee.name.split('-')[0];
    delete employee.name;
    employees[i].pay = employee.pay + 3;
})
employees


//DESIRED RESULT = 
/*
var employees = [
    { last_name: "aron", first_name: "a", pay: 15 },
    { last_name: "bron", first_name: "b", pay: 21 },
    { last_name: "ron", first_name: "c", pay: 23 },
    { last_name: "bron", first_name: "le", pay: 24 },
]
*/