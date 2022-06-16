//for loop
/*for (var i=0;i<5;i++) {
    console.log(i);             
}

for (var i=0;i<5;i++) {

}
console.log(i);                 // here answer is 5(here var keyword breaks the scope rule)

for(let i=0;i<5;i++) {

}
console.log(i);            //(referenceErr: i is not define)here let keyword obays the scope rule

var sub = "JavaScript";
var sub = "Hello JavaScript"; 
console.log(sub);                     // var: Hello JavaScript (here var keyword breaks the scope rule)*/


let sub = "JavaScript";
let sub = "Hello JavaScript"; 
console.log(sub);                       //let: SyntaxError: Identifier 'sub' has already been declared

//GLOBAL
var data = 100;
console.log(data);  // here we can access only global
//block : var don't contain a blocks of statements 
{
    var data = 200;
    console.log(data); //here we can access only block data only
}
console.log(data); // here aws: 200 (because var will consider second data why means global polluting issue)
                    //if any block of code effecting global member called global polluting issue
                    //global polluting issue rised because of var keyword
                    //we can over come global polluting issue byusing let keyword


//GLOBAL: it follows
let data = 100;
  
//block :let can't consider block level data
{
    let data = 200;
    
}
console.log(data); // let: 100


var msg = "Hello"; //this one we called variable declartion & Initilization
console.log(msg); //variable accessing

//here we brake the rule
console.log(msg); //var : undefine here we expect error but we get some answer
var msg = 100     

console.log(data); //let : ReferenceError: can't access 'data' before intilization
let data = 100;
//getting undefine before declartion and initilization called as variable hoisting
//variable hoisting issue raised because of var keyword
//we can overcome variable hoisting with the help of let keyword

//const keyword
const data = 200;
data = 200; // we can't modify the value if we modify we will get typeErr

const arr = [1,2,3,4,5];
arr = []; //here we will get type err: because we cant assign variable &  value
arr [0] = 100;//here zero th position 100 will be replace
arr [5] = 600; //
 console.log(arr);

 arr.pop(); // with the help of this one we can remove zero position
 console.log(arr);
 arr.shift();// with the help of this one we can remove last position
 console.log(arr)

//{} this one we called json object
 const obj = {
     "sub_one": "Angular",
     "sub_two": "React",
     "sub_three": "Node",
 }
 obj = {};     //typeError: Assign to constant variable


 obj.sub_one = "Angular";
 obj.sub_two = "React";
 obj.sub_three = "JavaScript";
 console.log(obj);