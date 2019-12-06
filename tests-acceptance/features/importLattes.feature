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