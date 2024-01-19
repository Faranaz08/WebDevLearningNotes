
function buycar(){
    //Promise is constructor which is taking call back functions
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('buy a car')
            
        },1000)
    })
    
}
function plantrip(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('plan trip')
            
        },1000)
    })
}
function reachmanali(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('reacch manali')
            
        },1000)
    })
}
function seemountian(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('reacch mountian')
            
        },1000)
    })
}
// this is not complex so
async function fun1(){
    const msg=await buycar();
    console.log(msg);
    const msg1=await plantrip();
    console.log(msg1);
    const msg2=await reachmanali();
    console.log(msg2);
    const msg3=await seemountian();
    console.log(msg3);
}
fun1();
