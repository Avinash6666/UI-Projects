/*
Map:
****
    we need t o manipulate each and every element
*/
/*
console.log(
    [1,2,3,4,5,6].map((Element,inedex)=>{
        return Element*100;                             //here element will be multiplaying
    })
);                                                                  //[ 100, 200, 300, 400, 500, 600 ]

console.log(
    [1,2,3,4,5,6].map((Element,inedex)=>{
        return [Element];
    })
);                                                              //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]

console.log(
    [1,2,3,4,5].map((Element,inedex)=>{
        return [Element,inedex];                        //here element is 1 and index is 0 position
    })
);                                                  //[ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]

console.log(
    [1,2,3,4,5].map((Element,inedex)=>{         //if you not place brackets[] then result will be another type  { inedex: 0, Element: 1 } ...n
        return {[inedex]:Element};              //[ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]
    })
);

*/

/*
//filter function
//if you want to apply condition then we will use filter

console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element >=3;                 //here we filter the 3 on words if available automaticla what condition we apply that can can be applicable
    }).map((element,index)=>{
        return element*100;                 //[ 300, 400, 500 ]
    })
);


console.log(
    [{"e_id":111,"e_name":"1","e_sal":100},
    {"e_id":222,"e_name":"2","e_sal":200},
    {"e_id":333,"e_name":"3","e_sal":300},      //here e3 replaced with { e_id: 333, e_name: 'employe3', e_sal: 300 },
    {"e_id":444,"e_name":"4","e_sal":400},
    {"e_id":555,"e_name":"5","e_sal":500}].filter((element,index)=>{
        return element.e_sal>=300;
    }).map((element,index)=>{
        return element.e_name === "3"? {"e_id":333,"e_name":"employe3","e_sal":300}:element;        //e3 onwords executed
    })
);
*/
/*
//reduse()
//to find the some of elements then we will use the reduse()

console.log(
    [1,2,3,4].reduce((firstelement,accumlator)=>{           //1 will be is stored in firstelement and 2 will be stored in accumlated result is 3
        return firstelement+accumlator;                      // result 3 will be stored in firstelement and 2 will be stored here result 5 and fot that 5 one will be add become 6 for that 6 four will be add becme 10
    })                              //finial output : 10
)


console.log(
    [100,200,300,400,500].reduce((firstelement,accumlator)=>{
        return firstelement-accumlator;                             //-1300
    })
)



console.log(
    [1,2,3,4].map((Element,index)=>{
        return Element+100;
    }).filter((Element,index)=>{
        return Element>=2;
    }).reduce((firstelement,accumlator)=>{
        return firstelement-accumlator;                             //-1300
    })
)

*/

/*
//reduceRight ()
//to find the right to left then we go for it

console.log(
    ["javascript", "to", "welcome"].reduceRight((firstelement,accumlator)=>{
        return firstelement+""+accumlator;                  //welcometojavascript
    })
)

//slice()
//by using this one we can get what information we want

let arr = [1,2,3,4,5,6,7];
console.log(arr.slice(4,6));           //[ 5, 6]
console.log(arr.slice(-3,-1));      //[5, 6] //-3 position is 5 and -1 position 7 so 7 will be uninclude so, we will get 5,6
*/

//findIndex()    it will check the position of the index
//some()         if atleast satify on function it will return ture
//every()        it satify every function
//fill()         by using this one we can replace values
    /*ex: 
    let arr = [1,2,3,4];
    console.log(arr.fill(100));
    console.log(arr.fill(200,1));
    console.log(arr.fill(300,2));
    console.log(arr.fill(400,3));
*/
/*
let arr = [10,20,30,40,50,60];
arr.forEach((Element,index)=>{
    console.log(arr.indexOf(Element), index);
})
arr.forEach((Element,index)=>{
    console.log(arr.indexOf(Element), index);
    console.log("--------------------");
})


//indexof function wont create indexs to the repeted functions
//with the help of indexof function we will remove dubilicate no's
let arr = [100,200,300,200,100,600];
console.log(
    arr.filter((Element,index)=>{
        return arr.indexOf(Element) == index;           //[ 100, 200, 300, 600 ]
    })
)


//copywithin()
//It will shift the indexs 

let arr = [10,20,30,40,50,60,70,80,90,100];
arr.copyWithin(4);
console.log(arr);       //[ 10, 20, 30, 40, 10, 20, 30, 40, 50, 60 ]

let arr1 = [10,20,30,40,50,60,70,80,90,100];
arr1.copyWithin(2,7);
console.log(arr1);      //[ 10, 20, 80, 90, 100, 60, 70, 80, 90, 100 ]

let arr2 = [10,20,30,40,50,60,70,80,90,100];
arr2.copyWithin(-4,-7);
console.log(arr2);              //[ 10, 20, 30, 40, 50, 60, 40, 50, 60, 70 ]



//sort()
//sort the elements assining order or desining order
console.log(
    [1,5,8,3,4,2].sort((arg1,arg2)=>{
        //return arg1-arg2;                       //[ 1, 2, 3, 4, 5, 8 ]
        return arg2-arg1;                           //[ 8, 5, 4, 3, 2, 1 ]
    })
)
*/

//entries()
//The entries() method returns an iterator object with the [key, values] in a Map

//forEach()
//Iterating the arrays
//The forEach() method calls a function for each key/value pair in a Map

[1,2,3,4,5,6].forEach((Element,index)=>{
    console.log(Element,index);
})

//for....of loop()
//simplefied version of for is called for..of loop

for(let x of[100,200,300,400]){
    console.log(x);
}

let obj = {"key":"value","key1":"value1"}
for(let x in obj){
    console.log(obj);
}


//reverse()
//It is used to reverse the array elements
console.log(
    [1,2,3,4,5].reverse()
);