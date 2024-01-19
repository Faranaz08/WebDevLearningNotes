
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

buycar().then((msg)=>{
    console.log(msg);
    plantrip().then((msg2)=>{
        console.log(msg2);
        reachmanali().then((msg3)=>{
            console.log(msg3);
            seemountian().then((msg4)=>{
                console.log(msg4);

            })
        })
    })
}) 