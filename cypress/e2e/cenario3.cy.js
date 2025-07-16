
describe('', () => {
    //Acessar a tela de favoritos antes de cada caso
    beforeEach(() => {
        cy.visit('https://localhost:44329/Home/Favorite')
    });
    
    it('Ter ao menos um Repositório marcado como favorito', () => {
    
    //Asserção para ver se contém os 5 itens na tela
    cy.get('.table tbody tr').should('have.length', 5)
    //Teste passou
    });
    it('Desfavoritar um item da lista de favoritos', () => {
    
    //Asserção para ver se contém algum item da lista contem algo para desfavoritar
    cy.get('.table tbody tr').should('contain.text', 'Desfavoritar')
    //Teste Falhou, deixei falhar de propósito
    });
});

