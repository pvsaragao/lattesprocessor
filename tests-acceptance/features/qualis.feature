Feature: Importar qualis com extensão xls
As a: Pesquisador de um grupo de pesquisa
I want to: Importar planilhas com extensão xls com avaliação qualis de publicações de periódicos
So that: Eu consigo usar o critério qualis de avaliação para o rankeamento do número de produções acadêmicas de professores, departamentos e grupos de pesquisa

Scenario: Importar planilha com sucesso
Given Eu estou na página Qualis
And Nenhum periódico está armazenado no sistema
And O arquivo “publicações_2018.xls” contém: “Algorithms for Molecular Biology” com avaliação “A1”, “Cluster Computing” com avaliação “B1” e “Service Oriented Computing and Applications” com avaliação “B2”
When Eu seleciono o arquivo “publicações_2018.xls"
And Eu seleciono a opção Qualis Import
Then Eu vejo uma mensagem de sucesso
And Eu vejo os periódicos “Algorithms for Molecular Biology” com avaliação “A1”, “Cluster Computing” com avaliação “B1” e “Service Oriented Computing and Applications” com avaliação “B2”

Scenario: Importar mais de uma planilha
Given Eu estou na página Qualis
And Eu vejo o periódico “The Electronic Journal of Linear Algebra” com avaliação “B3”, que está em um arquivo “periodico_algebra” com somente este periódico
And O arquivo “publicações_2018.xls” contém: “Algorithms for Molecular Biology” com avaliação “A1” e “Service Oriented Computing and Applications” com avaliação “B2”
And O arquivo “publicações_2017.xls” contém: “Soft Computing” com avaliação “A2”
When Eu seleciono o arquivo “publicações_2018.xls”
And Eu seleciono o arquivo “publicações_2017.xls”
And Eu seleciono a opção Qualis Import
Then Eu vejo uma mensagem de sucesso
And Eu vejo os periódicos “Algorithms for Molecular Biology” com avaliação “A1”, “Soft Computing” com avaliação “A2”, “Service Oriented Computing and Applications” com avaliação “B2” e “The Electronic Journal of Linear Algebra” com avaliação “B3”

Scenario: Importar planilha com extensão inválida
Given Eu estou na página Qualis
And Eu vejo o periódico “The Electronic Journal of Linear Algebra” com avaliação “B3”, que está em um arquivo “periodico_algebra” com somente este periódico
When Eu seleciono o arquivo “publicações_2018.pdf”
And Eu seleciono a opção Qualis Import
Then Eu vejo uma mensagem de erro indicando o formato inválido do arquivo
And Eu vejo o Periódico “The Electronic Journal of Linear Algebra” com avaliação “B3”

Scenario: Importar planilha vazia
Given Eu estou na página Qualis
And Eu vejo o periódico “The Electronic Journal of Linear Algebra” com avaliação “B3”, que está em um arquivo “periodico_algebra” com somente este periódico
And O arquivo “publicações_2018.xls” não contém nenhum “Periódico”
When Eu seleciono o arquivo “publicações_2018.xls”
And Eu seleciono a opção Qualis Import
Then Eu vejo uma mensagem indicando que nenhum periódico foi importado ao sistema
And Eu vejo o Periódico “The Electronic Journal of Linear Algebra” com avaliação “B3”