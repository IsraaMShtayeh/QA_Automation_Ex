import addUser from "../../support/helpers/signupHelper"

/*
-should create User via API (Signup process)
1- Test case :create User API 
2- create custom command for users (sign up process) and use it from test case
-should create User via API (Signup process)
1- spec file > test cases 
2- API Helper > const URLS + function (Add New User from - custom command- (URL,Init User))
3- API payload (interface Typing)
4- API Response (Interface Typing)
5- create new folder for custom commands that are related to signup process
*/

//{tags: '@smoke'},
describe('Sign up',()=>{
it('Sign up user should be able to create new user',()=>{
//https://conduit.productionready.io/api/users
addUser.addNewUserViaAPI().then((resolve)=>{
    cy.log(`${resolve}`)
})
})
})
