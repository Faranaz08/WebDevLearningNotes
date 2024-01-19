// function buycar(){
//     setTimeout(() =>{
//         console.log('buy a car')
//     },10000)
// }
// function plantrip(){
//     setTimeout(()=>{
//         console.log('plan a trip')
//     },2000)
// }
// we cant do like this coz settimeout has timing lees for planstrip
// but we want first bycar so we will be using call back to get the desired output
//Callback: a callback function is a function passed into another function as an arguemnt
//which is then invoked inside the other fucntion to ccomplete some task.

//When a function is passed to another function as an arguement to another fucntion
// it becomes a callback function
//
// buycar(); this is asunc
// plantrip();



function buycar(callback1,callback2,callback3){
    setTimeout(() =>{
        console.log('buy a car')
        callback1(callback2,callback3);
    },5000)
}
function plantrip(callback1,callback2){
    setTimeout(()=>{
        console.log('plan a trip')
        callback1(callback2)
    },2000)
}
function reachmanali(callback){
    setTimeout(()=>{
        console.log('reacch manali')
        callback()
    },1000)
}
function seemountian(){
    setTimeout(()=>{
        console.log('reacch mountain')
    },1000)
}
buycar(plantrip,reachmanali,seemountian)
