describe('Update user', () => {
    it('Update data user', () => {
        var newUser = {
            "name": 'Mulkhi Putra',
            "job": 'Engineering Manager'
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
            expect(response.body.job).to.eq(newUser.job)
        })
    });
})