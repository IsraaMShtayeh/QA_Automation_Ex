import LoginValidation from "../support/pageobjects/loginValidation";
const loginObjValidation : LoginValidation = new LoginValidation();
describe("Login Home Page", () => {
    beforeEach(function (){
 
        cy.fixture('login').as('data')
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('@data').then((infoData:any)=>{
            loginObjValidation.fillData(infoData.valid.name,infoData.valid.password)
            loginObjValidation.checkPage(infoData.valid.message)
        })
    })

 let counter=0;
    it("",()=>{
        cy.get('.oxd-main-menu-item').eq(4).click({force:true})
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC').as('CR');
        cy.wait('@CR').then((resp) => {
            console.log(resp.response.body.meta.total)
            counter=resp.response.body.meta.total
        }).then(()=>{
            cy.get('.orangehrm-candidate-page .oxd-table-body').find(".oxd-table-card").should("have.length",counter)
   
        })
        })


})