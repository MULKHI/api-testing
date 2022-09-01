describe('Create New User', () => {
    it('Successfully create new user', () => {
        var user = {
            "name": 'Mulkhi Putra',
            "job": 'Test Engineer'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', 'Mulkhi Putra')
            expect(response.body).to.have.property('job', 'Test Engineer')
        })
    });
})