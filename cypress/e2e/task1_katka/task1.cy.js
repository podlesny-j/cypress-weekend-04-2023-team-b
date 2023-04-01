describe('Overenie stranky', ()=> {
    before('',()=>{
        cy.visit('/en/country/china/?botview=1')
    } )

it('Overenie headera', () =>{

    cy.log('overenie title')
    cy.title().should('eq', 'Cheap flights to China | Kiwi.com')

    cy.log('overenie meta description')

    

})
})