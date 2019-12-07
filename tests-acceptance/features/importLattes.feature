Feature: As a pesquisador de um grupo de pesquisa
         I want to Importar arquivos xml contendo o currículo lattes de pesquisadores
         So that Seja possível realizar um ranqueamento dos pesquisadores, departamentos e grupos de pesquisa, baseado em suas publicações.

Scenario: Fazer upload de único xml com sucesso
Given eu estou na página de "Pesquisadores"
And não há pesquisadores cadastrados no sistema
And o arquivo "paulo_lattes.xml" tem como pesquisador "Paulo Henrique Monteiro Borba"
When eu selecionar para fazer o upload do arquivo "paulo_lattes.xml"
Then eu vejo uma mensagem de "sucesso" na tela
And o sistema tem o pesquisador "Paulo Henrique Monteiro Borba"
And o pesquisador "Paulo Henrique Monteiro Borba" tem as publicações "From VDM Specifications To Functional Prototypes" e "States as Specifications"

Scenario: Fazer upload de um xml com formato inválido
Given eu estou na página de "Pesquisadores"
And o sistema tem o pesquisador "Paulo Henrique Monteiro Borba"
And o arquivo "error_lattes.xml" tem um formato inválido
When eu selecionar para fazer o upload do arquivo "error_lattes.xml"
Then eu vejo uma mensagem de "erro" na tela
And o sistema tem o pesquisador "Paulo Henrique Monteiro Borba"

Scenario: Fazer upload de múltiplos xml com sucesso
Given eu estou na página de "Pesquisadores"
And o arquivo "meira_lattes.xml" tem como pesquisador "Silvio Romero de Lemos Meira"
And o arquivo "meira_lattes.xml" tem as publicações "Linguagens Funcionais e Supercomputadores" e "Strict combinators"
And o arquivo "alex_lattes.xml" tem como pesquisador "Alex Sandro Gomes"
And o arquivo "alex_lattes.xml" tem as publicações "Mapping Activity Theory Diagrams into i* Organizational Models" e "Equipement for resistivity measurement of Metal Alloys"
When eu selecionar para fazer o upload dos arquivos "meira_lattes.xml" e "alex_lattes.xml"
Then eu vejo uma mensagem de "sucesso" na tela
And o sistema tem o pesquisador "Silvio Romero de Lemos Meira"
And o pesquisador "Silvio Romero de Lemos Meira" tem as publicações "Linguagens Funcionais e Supercomputadores" e "Strict combinators"
And o sistema tem o pesquisador "Alex Sandro Gomes"
And o pesquisador "Alex Sandro Gomes" tem as publicações "Mapping Activity Theory Diagrams into i* Organizational Models" e "Equipement for resistivity measurement of Metal Alloys"