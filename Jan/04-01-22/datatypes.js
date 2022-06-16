/*Variables are used to store the data
Like String,num,boolean,object......
We can declare the Variables by using the keywords they are "var,let & const". 
var keyword is used in old version on words
let & const keywords are introduced in Es6 
variables should start with A-Z,a-z,0-9,$ & _
variables should not start with digits.

        syntax: we should use var,let,const = value;

*/

var var_one = "Hello";
console.log(var_one);  // Hello

//var 1abc = "Welcome"; //error:variables declare expected (Because variables not declare starting)
var abc123 = "Welcome"; //
var abc$66 = "Abc";
//var df#123 = "123"; //it will not allow # symbole1

/* numbers

W have fives of numbers. They are
1) decimal  2) float or double 3) hexadecimal  4)octal  5)binary
hexadecimal number will prefix with "0x"
octal number will prefix with "0o"
binary number will prefix with "0b"
*/

var decimalNum = 100;
var doubleNum = 100.3456;
var hexadecimalNum = 0x123ABC; //1194684 hexadecimalNum equalent to decimalNum
var octalNum = 0o123;   //83 octalNum equalent to decimalNum
var binaryNum = 0b1010;   //10 binaryNum equalent to decimalNum
console.log(
    decimalNum,
    doubleNum,
    hexadecimalNum,
    octalNum,
    binaryNum
)


//boolean 
//boolean num means either ture or false
//ture --- 1
//false ---- 0

/*var flag = ture;
console.log(flag);
console.log(1+ture);
console.log(ture+ture);
console.log(ture-false);*/


//String : collection of characters called string
//We will represent String in Three ways they are ("", '', and ``(backtick) ) 
//Backtick operator introduced in Es6
// Backtick operator called as template
//Backtick operator used to define the "paragraph"


var sub = 'JavaScript';
var wish = `Welcome to ${sub}`; //if you want refer one variable to another variable then we will (${className})
console.log(wish);


var sub_1 = "React";
var sub_2 = " JavaScript";
var sub_3 = "HTML&CCS";
var sub_one = `${sub_1},${sub_2},${sub_3}`;
console.log(sub_one);

//undefine : we can't assgin value to the variable then it is called undefine
//null The value null represents the intentional absence of any object value.
var x;
console.log(x); //undefine

x = null;
console.log(x);

//bigint: if you want to store big num's then we should prefer bigint
// When we need to print large no then we should use suffix as "n"
//The range of bigint is > 2^53-1


var bigint = 1987654321234567890865432111234567098765432123456545678987654578987654456789987654567123456789009876543123456789098765433456789009865431123456890987654321234567909876541245678012345678901234567890098765432112341234563456234534563456234567834567834567892345789234567823456782345678904567891234567123456789098765431234567876543345665433456543234560n;
console.log(bigint);


//Type of operators
//It is used to now the type of data

console.log(typeof "Hello"); // String
console.log(typeof 100); //Number
console.log(typeof true); //boolean
console.log(typeof undefined); // undefine
console.log(typeof null); // object
console.log(typeof []);  //object
console.log(typeof 1n); //bigint


console.log(1+2n); //typeerr: can't mix bigint and other types, use explict conversions