let score = 33

console.log(typeof score);
console.log(typeof(score));     //both valid

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* 
"33" => 33
"33abc" => NaN
true => 1; false => 0
"" - empty string => 0 
*/
//To convert type, we can use String(number) or Number()
//Note: Pay attention that first letter while type conversion is capital.

