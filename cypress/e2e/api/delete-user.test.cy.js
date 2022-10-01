describe('Delete User', () => {
    it('Successfully delete user', () => {
        cy.request('DELETE', 'https:reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    });
    //--------------TUGAS---------
    it.only('Successfully Delete Users', () => {
        cy.request('DELETE','https:reqres.in/api/users/2').as('users')
        cy.get('@users').its('status').should('equal', 204)
        cy.get('@users').its('headers').its('content-length')
            .should('include', '0')
            
    });
})