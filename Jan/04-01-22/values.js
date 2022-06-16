console.log("Welcome to JavaScript");
console.log(10+10);  // (20)  Addition 
console.log(10+"10"); // (1010)   concatination because string not converting num formate
console.log(10+ +"20"); // (30)    by adding another +operator then string is converting to num formate this is called inbulit conversion
console.log(10+"10"+10); //  (101010) concatination because first one is num and second one is string so string not converting num
console.log(20+50+ +"20"); // (90) addtion
console.log(10-"2"); //  (8) interpiter by defaultly converting string to num then subscration done
console.log(10- "2"- "8");// aws:0
console.log(10+"2" - "2")//(100) first it concatenate and subscrate (10+"2"=102) & then (102-"2"=100)because in sub interpiter defaltly converting string to num formate
console.log(10>8>6); //false because boolean type
console.log(10*"10"); //100  (interpiter by defaultly converting string to num )
console.log(100 /"100"); //1 (interpiter by defaultly converting string to num )
console.log(100 /"0"); // infinity because 0 is not done division

console.log(10 == 10); // ture because (==) operator will check only values not data types
console.log(1 == "1"); //ture because (==) operator will check only values not data types

console.log(10 === "10"); //false because (===) operator will check values and data types first data type is num type and second data type is String
console.log(6 == "six"); //false because first one is num and second one is latter formate
console.log(1+ture); //2 beacuse ture is consider as value 1