
// var subtract = function(number1, number3){
//     return number1*number1  / number3;
//     };
//     var number1 = parseInt(prompt("Enter a number:"));
//     // var number2 = parseInt( prompt("Another number:"));
//     var number3 = parseInt(prompt("Next number"));
//     alert(subtract(number1, number3));
    
    
    var bmi = function(height, weight,constant){
        return  weight / height/height  * constant ;
    };
    var height = parseInt(prompt("Enter your height in cm"));
    var weight = parseInt(prompt("Enter your weight"));
    var constant = parseInt(10000);
    alert(bmi(height, weight, constant).toFixed(3));