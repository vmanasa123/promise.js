// 1. Write one example explaining how you can write a callback function.

  function firstFun(name,sum){
    console.log(name,sum);
  }
function callBackFun(a,b){
    return a+b;
}
firstFun("sunday",callBackFun(10,30));  
//output:-  sunday 40 


//2."Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
//Explain callback hell.Numbers 1234567"


function i_take_1_sec(callback) {
    return setTimeout(() => {
        document.write('I was no: 1 and I take 1 seconds </br>')
        callback()
    }, 1000);
}

function i_take_2_sec(callback) {
    return setTimeout(() => {
        document.write('I was no: 2 and I take 2 second </br>')
        callback()
    }, 2000);
}

function i_take_3_sec(callback) {
    return setTimeout(() => {
        document.write('I was no: 3 and I take 3 second </br>')
        callback()
    }, 3000);
}

function i_take_4_sec(callback) {
    return setTimeout(() => {
        document.write('I was no: 4 and I take 4 second </br>')
        callback()
    }, 4000);
}

function i_take_5_sec(callback) {
    return setTimeout(() => {
        document.write('I was no: 5 and I take 5 second </br>')
        callback()
    }, 5000);
}

function i_take_6_sec(callback) {
    return setTimeout(() => {
        document.write('I was no: 6 and I take 6 second </br>')
        callback()
    }, 6000);
}

function i_take_7_sec(callback) {
    return setTimeout(() => {
        document.write('I was no: 7 and I take 7 second </br>')
        callback()
    }, 7000);
}

function run (){
    i_take_1_sec(()=>{
        i_take_2_sec(()=>{
            i_take_3_sec(()=>{
                i_take_4_sec(()=>{ 
                    i_take_5_sec(()=>{ 
                        i_take_6_sec(()=>{ 
                         i_take_7_sec(()=>{ }) 
                })
            })
            
        })
    })
  })
 })
} 

run();  

//output:-
// I was no: 1 and I take 1 seconds</br>
// I was no: 2 and I take 2 second</br>
// I was no: 3 and I take 3 second</br>
// I was no: 4 and I take 4 second</br>
// I was no: 5 and I take 5 second</br>
// I was no: 6 and I take 6 second</br>
// I was no: 7 and I take 7 second</br>


//4."Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
//then it should go to reject the state and catch the error and print Promise Rejected "

const promiseFun = new Promise((resolve,reject)=>{
    let count = 20;
  if(count === 10){
    resolve("successfully resolved")
  }
  else{
    reject("number not resolved")
  }
})
promiseFun.then((x) => {
   console.log(x);
})
promiseFun.catch((x)=>{
    console.log(x);
})
//output:- number not resolved   ncaught (in promise) number not resolved


//5.Create examples to explain callback function

function first(){
    console.log("Inside function: first");
}

function second(){
    console.log("Inside function: Second");
}

first();
second();

// output:- Inside function : first  Inside function : Second


//6.Create examples to explain callback hell function

function compute(action, x, y){
    if(action === "divide"){
        return x/y
    }
    else if(action === "multiply"){
        return x * y;
    }
}
console.log(compute("divide",10,5))    
console.log(compute("multiply",10,5)) 

//output:- 2  50


//7.Create examples to explain promises function

const url=" www.javatpoint.com ";
let result = fetch(url);
console.log(result);

//output:-
//Promise {<pending>} [[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]] : Response


//8.Create examples to explain async await function

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}
f();

//output:- Async function.


//9.Create examples to explain promise.all function

const promise1 = Promise.resolve(2);
const promise2 = 30;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 60, 'food');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
})

//output:-  [ 2, 30, 'food' ]


