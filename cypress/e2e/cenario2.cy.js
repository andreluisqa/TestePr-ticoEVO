describe('', () => {
    //Acessar a tela “Veja outros Repositórios” antes de cada caso
    beforeEach(() => {
        cy.visit('https://localhost:44329/Home/GetRepositorie')
    });
   
    it('Deixar o campo de busca em branco e clicar no botão “Buscar”', () => {
 
    //Clicar no botão de pesquisar
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain','O Campo Nome do Repositório tem que ser Preenchido')
    //Teste falhou, forcei a falha nesse caso
    });

    it('Escrever o nome ou parte do nome do Repositório e clicar no botão “Buscar”', () => {
    
    //Preencher o campo com "Thaiz" e clicar no botão buscar
    cy.get('#Result_Name').type('Thaiz')
    cy.get('.btn').click()
    //A tabela me traz 31 itens com Thaiz, asserção para conferir o número de itens
    cy.get('.table tbody tr').should('have.length', 31)
    //Asserção para ver se contém Thaiz no nome
    cy.get('.table tbody tr').should('contain.text', 'Thaiz')
    //Teste Passou
    });

    it('Digitar nomes de Repositórios inexistentes no campo de busca e clicar no botão “Buscar”', () => {
    
    //Preencher o campo e clicar no botão de buscar
    cy.get('#Result_Name').type('repositorioquenaofazsentido')
    cy.get('.btn').click()
    //Asserção para ver se a mensagem de erro aparece corretamente
    cy.get('.toast-message').should('contain','Não existe repositórios com esse nome')
    //Teste Passou
    });

    it('Realizar busca de item com espaço antes e depois', () => {
    
    //Preencher o campo " Thaiz " com espaço antes e depois e clicar no botão buscar
    cy.get('#Result_Name').type(' Thaiz ')
    cy.get('.btn').click()
    //A tabela me traz 31 itens com Thaiz, asserção para conferir o número de itens
    cy.get('.table tbody tr').should('have.length', 31)
    //Asserção para ver se contém Thaiz no nome
    cy.get('.table tbody tr').should('contain.text', 'Thaiz')
    //Teste Passou
    });

    it('Favoritar os Repositórios que aparecem no filtro', () => {
     //Preencher o campo " Thaiz " com espaço antes e depois e clicar no botão buscar
    cy.get('#Result_Name').type(' Thaiz ')
    cy.get('.btn').click()
    //Asserçao para saber se o primeiro item é o que espero
    cy.get('[data-name="thaizacapelao"]').should('contain', 'thaizacapelao')
    //Clicar em Detalhe 
    cy.get(':nth-child(2) > :nth-child(5) > a').click()
    //Asserçao para saber se o primeiro item é o que espero
    cy.get('[data-name="thaizacapelao"]').should('contain', 'thaizacapelao')
    //Clicar em marcar como favorito
    cy.get('.btn').click()
    //Teste Passou 
    });
    //Fim do Cenário
});
