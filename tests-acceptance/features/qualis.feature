Feature: Importar qualis com extensão xls
As a: Pesquisador de um grupo de pesquisa
I want to: Importar planilhas com extensão xls com avaliação qualis de publicações de periódicos
So that: Eu consigo usar o critério qualis de avaliação para o rankeamento do número de produções acadêmicas de professores, departamentos e grupos de pesquisa

Scenario: Importar planilha com sucesso
Given Eu estou na página “Qualis”
And Nenhum “Periódico” está armazenado no sistema
And O arquivo “publicações_2018.xls” contém: “Algorithms for Molecular Biology” com avaliação “A1”, “Cluster Computing” com avaliação “B1” e “Service Oriented Computing and Applications” com avaliação “B2”
When Eu seleciono a opção “Qualis Import”
And Eu seleciono o arquivo “publicações_2018.xls
Then Eu vejo uma mensagem de sucesso
And Eu vejo os os periódicos “Algorithms for Molecular Biology” com avaliação “A1”, “Cluster Computing” com avaliação “B1” e “Service Oriented Computing and Applications” com avaliação “B2”
And Eu continuo na página “Qualis”
