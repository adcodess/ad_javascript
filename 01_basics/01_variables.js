const accountId = 144553
let accountEmail="adarsh@google.com"
var accountPassword = "12345"
accountCity="jaipur"

// accountId = 2 since it's const so no changes allowed

accountEmail="jc@jc.com"
accountPassword="3532222"
accountCity= "Bengaluru"

console.log(accountId);
//printing these all in tabular form using .table
console.table([accountId, accountEmail, accountPassword,accountCity])
 
// prefer not to use var coz of scope issues