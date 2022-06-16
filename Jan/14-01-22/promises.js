/*
    ->promises are special Javascript objects.
    ->proper communictations between "producer & consumer" also called as promises.
    ->producer will generate the promises.
    ->producer will create promises by using "promise" class.
    ->"consumer" will consume the promises.
    ->consumer consumes in two ways:
        1) then()
        2) async & await
*/
//if promises one execute successfuly then we will get posRes
//if promises one not execute successfuly then we will get errRes
/*
let promise1 = new Promise((resolve,reject)=>{
    resolve("tomarrow we have Holiday");
});
promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);                //tomarrow we have Holiday
});  
*/

/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I'm Learining Promises Concept");
    },5000);
});
promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes)
});     
*/

/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hi");
    },3000);                //it will execute after 3sec
});


let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello");
    },5000);                    ////it will execute after 5sec
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Welcome");
    },10000);                       ////it will execute after 10sec
});

promise1.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes)                 //Hi
});

promise2.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log("errRes")               //Hello
});

promise3.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes)                 //Welcome
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes)                                     //[ 'Hi', 'Hello', 'Welcome' ]
});
*/

//if you want to consume result at a time in above code then we have one function thai is Promise.all([])
//by using Promise.all() we will get whole result after max time only
//In case if you done error in one function it will heiglating only that funcon in Promise.all()
//If you want to over come that problem then we go for Promise.allSeletteld

/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hi");
    },3000);                //it will execute after 3sec
});


let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error");
    },5000);                    ////it will execute after 5sec
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Welcome");
    },10000);                       ////it will execute after 10sec
});
// if you want to know the which promise have less time by using programatically then we have one function Promise.race()

Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes)             //Hi
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes)                 //Error
});

Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes)                 //[ { status: 'fulfilled', value: 'Hi' }, { status: 'rejected', reason: 'Error' } { status: 'fulfilled', value: 'Welcome' } ]
});
*/

/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hai")
    },0);
});

let promise2 = new Promise((resolve,reject)=>{
        resolve("Hello")
});

promise1.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes)                 //Hi
});

promise2.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log("errRes")               //Hello
});
//here first Hello is executed after hai will be executed
*/

/*
let promise1 = new Promise((resolve,reject)=>{
    resolve("Hello Promise")
});

async function my_fun(){
    let result = await promise1;
    console.log(result);
};

my_fun();               //Hello Promise
*/

/*
let add = (num,callback)=>{
    return callback(num+5,false);
};

let sub = (num,callback)=>{
    return callback(num-3);
}

let mul = (num,callback)=>{
    return callback(num*5);
}

let div = (num,callback)=>{
    return callback(num/7);
}

add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes)
                           } 
                      })
                   } 
              })
            }
        })              
    }
});
*/

/*
let add = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    });
};

let sub = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num-5);
    });
};

let mul = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num*6);
    });
};

let div = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num/6+2);
    });
};

//BODMS Rule ----div,mul,add,sub

add(5).then((posRes)=>{
    sub(posRes).then((posRes)=>{
        mul(posRes).then((posRes)=>{
            div(posRes).then((posRes)=>{
                console.log(posRes)
            },(errRes)=>{})
        },(errRes)=>{})
    },(errRes)=>{})
},(errRes)=>{})

async function calc(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(addRes,subRes,mulRes,divRes)
}

calc();


(async ()=>{
    async function calc(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(addRes,subRes,mulRes,divRes)
}

calc();

})
*/


