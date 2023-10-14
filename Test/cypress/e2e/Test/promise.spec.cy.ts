
//promise 
/* 
codes sync one by one 
Async==>parallel 
callback hell==> callback function depend on each other , hard to read , hard to maintain .
promise => object 
new promise((resolve,reject)=>{
    if(isSuccess){
        resolve()
    }else{
        reject()
    }
}).then(()=>{
console.log("the promise is done")
}).catch(()=>{
    console.log("error")
})

-------------Cypress-------------------

cy.get().click().then(()=>{

});
then get the result from the previous command 

cypress.promise
const mypromise =new Cypress.Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Operation completed Successfully ")
    },1000)
})
mypromise.then((result)=>{
    cy.log(result);
})
*/