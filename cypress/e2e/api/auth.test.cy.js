// describe('Basic Auth', () => {
    // it('Success fully login by appending username and password in URL', () => {
    //     cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    //     cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    // });
    // it('Successfully login using headers', () => {
    //     cy.visit('https://the-internet.herokuapp.com/basic_auth', {
    //         headers : {
    //             authorization : 'Basic YWRtaW46YWRtaW4='
    //         },
    //         FailOnStatusCode : false
    //     })
    //     cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    // });

describe('Basic Auth Custom Commands', () => {
    it('Successfully login using Custom Commands', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.loginViaAPI('email', 'password')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
})