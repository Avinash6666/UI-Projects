/*
collection of indexed elements called as array
index start from '0'
we will represent the array by using "[]" 
If you want to find the length then we will go for length[]
*/
/*
//length
let arr = [10,20,30,40,50];
console.log(arr.length);                //"5"   here we will get length of that array
console.log(arr[0], arr[4], arr[6]);    //"10 50 undefine" position of array we will get
arr.length = 3;                         //here array length is 3 so, after three we can call any num we will get undefine
console.log(arr[0], arr[1], arr[3],arr[4],arr[-1]);     //10 20 undefined undefined undefined


//push() It is used for adding element at end position
//pop()  It is used for delect the element at end position
//unshift()   It is used for add the element at begining
//shift()   It is used for remove the element from beging

let arr = [20,40,60];
console.log(arr);               //[20, 30, 40]

arr.push(80);
console.log(arr);       //[ 20, 40, 60, 80 ]

arr.unshift(10);
console.log(arr);       //[ 10, 20, 40, 60, 80 ]

arr.shift();
console.log(arr);           //[ 20, 40, 60, 80 ]

arr.pop();
console.log(arr);           //[ 20, 40, 60 ]



//delete
let arr = [10,20,30,40,60];
console.log(arr.length);            //5

delete arr[0];
console.log(arr.length);               //5 because memory never delete but number will delect
console.log(arr);                   //[ <1 empty item>, 20, 30, 40, 60 ]

*/


/*
let arr1 = [10,20,30,40];
let arr2 = [50,60,70,80];
let arr3 = [...arr1,...arr2];       //It will concatenate the elements
console.log(arr3);              //[ 10, 20, 30, 40, 50, 60, 70, 80 ]

*/

/*
//copying element by array
//If you done any changes in orginal array those changes will wont applicable to copy array
//If you done any changes in copy array those changes will wont applicable to orginal array


let arr1 = [1,2,3];             //orginal array
let arr2 = [...arr1];              //copy array

arr1.push(6);           //here we are adding 6 at end to arr1
arr2.pop();                // here we are removing end element

console.log(arr1);          //[ 1, 2, 3, 6 ]
console.log(arr2);          //[ 1, 2 ]
*/

/*
let arr1 = [1,2,3,4,5,6,7,8];
arr1.splice(4,3);                       //here 4 will be included and 3 will be excluded
console.log(arr1);                  //[ 1, 2, 3, 4, 8 ]

arr1.splice(2,2);
console.log(arr1);                  //[ 1, 2, 8 ]

arr1.splice(1,1,2,3,4,5,6,7);       //here first delete is performing and again addition we happen
console.log(arr1);                      //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

arr1.splice(4,2);
console.log(arr1);                      //[ 1, 2, 3, 4, 7, 8 ]

arr1.splice(1,1);
console.log(arr1);                  //[ 1, 3, 4, 7, 8 ]

arr1.splice(2,1,4,5,6);
console.log(arr1);                      //[ 1, 3, 4, 5, 6, 7, 8 ]

arr1.splice(0,1,1,2);
console.log(arr1);                      //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/
/*
console.log(
    Array.from('Hello') //from will convert string to equlent array[ 'H', 'e', 'l', 'l', 'o' ]
)


console.log(
    "hello".reverse()//error: string not convert array  TypeError: "hello".reverse is not a function
)
 */
<script>
    const arr(){
        this.sub1 = "React Js",
        this.sub2 = "Angular"
    }
    let obj = new arr();
    console.log( obj.sub1 == obj.sub2 );        //false
</script>