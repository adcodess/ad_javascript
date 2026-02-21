let score = 33

console.log(typeof score);
console.log(typeof(score));     //both valid

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//"" - empty string => 0 


//To convert type, we can use String(number) or Number()
//Note: Pay attention that first letter while type conversion is capital.
console.log(2+2) // It runs.No need of ;

// ***************basic op****************

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);   exponents
//console.log(2/3);    quotient
//console.log(2*3);    remainder

let str1= "hello"
let str2 = "adarsh"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);     //12
console.log(1+"2");     //12
console.log("1"+2+2);   //122
console.log(2+2+"1");   //41

let gamecounter=100;
++gamecounter;
console.log(gamecounter);

//Read prefix postfix on mdn
