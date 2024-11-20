describe('template spec', () => {
  beforeEach(function () {
    cy.visit('https://jsonplaceholder.typicode.com/')
  });
  it('GET API', () => {    
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.greaterThan(0)
      expect(response.body[0]).to.have.property('userId')
      console.log(response.body);
    })
  })
  it('POST', () => {
    cy.request('POST',
       'https://jsonplaceholder.typicode.com/posts',
      {
        'userId' : 1,
        'id' : 1,
        'title' : 'test',
        'body' : 'bodytest',
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('body', 'bodytest')
      })
  });
  it('PUT', () => {
      cy.request('PUT', 
        'https://jsonplaceholder.typicode.com/posts/1',
        {
          'userId' : 1,
          'id' : 1,
          'title' : 'test',
          'body' : 'bodytest',
        }
      ).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('body', 'bodytest')
      })
  });
  it('DELETE', () => {
      cy.request('DELETE',
        'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
          expect(response.status).to.eq(200)
        })
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
  });
})