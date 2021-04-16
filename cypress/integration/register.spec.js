describe('tests register', () => {
    beforeEach (()=>{
        cy.visit("https://preprod.backmarket.fr/register")
        cy.wait(20000)

    })

    it ('register fail, wrong email', ()=> {
        cy.get("#email-signup").type("fjfufjku")
        cy.get("#firstName-signup").type('syntia')
        cy.get("#lastName-signup").type('messaoudi')
        cy.get("#password-signup").type('Sm2021++')
        cy.get('[type="checkbox"]').check({force:true})
        cy.get('[data-test=signup-submit-button]').click()
        cy.url().should('contain', '/dashboard/register')
       
     
     })




   
    it ('register fail, wrong password', ()=> {
        cy.get("#email-signup").type("syntiamad06@gmail.com")
        cy.get("#firstName-signup").type('syntia')
        cy.get("#lastName-signup").type('messaoudi')
        cy.get("#password-signup").type('Sm2021')
        cy.get('[type="checkbox"]').check({force:true})
        cy.get('[data-test=signup-submit-button]').click()
        cy.get('[data-test=signup-component]').should('contain', 'Merci de saisir un mot de passe valide')
    })


    

    it('register ok', ()=> {
        cy.get("#email-signup").type("syntiamad06@gmail.com")
        cy.get("#firstName-signup").type('syntia')
        cy.get("#lastName-signup").type('messaoudi')
        cy.get("#password-signup").type('Sm2021++')
        cy.get('[type="checkbox"]').check({force:true})
        cy.get('[data-test=signup-submit-button]').click()
        cy.url().should('contain', '/dashboard/register')
    })

})