const accountId=123456
let accountEmail="shruti@nmit.ac.in"
var accountPassword ="12345"
accountCity="karnataka"
let accountState;   // undefined

// accountId=2 // not allowed
accountEmail="shruti@gmail.com"
accountPassword="2345"
accountCity="bengaluru"
console.log(accountId);

/*
prefer not to uswe var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountCity,accountPassword])