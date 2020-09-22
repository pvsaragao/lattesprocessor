Feature: Importar qualis com extensão xls
As a: Pesquisador de um grupo de pesquisa
I want: to Importar planilhas com extensão xls com avaliação qualis de publicações de periódicos
So that: Eu consigo usar o critério qualis de avaliação para o rankeamento do número de produções acadêmicas de professores, departamentos e grupos de pesquisa

Scenario: Importar planilha com formáto inválido
Given Eu estou na página Qualis
And Nenhum periódico está armazenado no sistema
When seleciono a opção "Periodico" no campo "typeQualis"
And insiro o valor "2016" no campo "year"
And Eu seleciono o arquivo "publicacoes_2018.xls"
And Eu seleciono a opção "Qualis Import" que carrega o arquivo
Then Eu vejo uma mensagem de erro indicando formatação errada na planilha

Scenario: Importar planilha de Periodicos com sucesso
Given Eu estou na página Qualis
And Nenhum periódico está armazenado no sistema
When Eu seleciono o arquivo "publicacoes_2016.xls"
And seleciono a opção "Periodico" no campo "typeQualis"
And insiro o valor "2016" no campo "year"
And Eu seleciono a opção "Qualis Import" que carrega o arquivo
Then Eu vejo uma mensagem de sucesso
And Eu vejo os periódicos "ACM Transactions on Intelligent Systems and Technology" com ISSN "2157-6904" e avaliação "A1", "Applied Intelligence (Boston)" com ISSN "0924-669X" e avaliação "B1" e "BMC Genomics" com ISSN "1471-2164" e avaliação "B2"

Scenario: Filtrar dados com sucesso
Given Eu estou na página Qualis
And Eu tenho os dados no server da planilha "publicacoes_2016.xls" do tipo "Periodico" e do ano "2016"
And Eu tenho os dados no server da planilha "eventos_2018.xlsx" do tipo "Evento" e do ano "2018"
And seleciono a opção "periodico" no campo "filterType"
When seleciono a opção "2016" no campo "filterYear"
Then Eu vejo os periódicos "ACM Transactions on Intelligent Systems and Technology" com ISSN "2157-6904" e avaliação "A1", "Applied Intelligence (Boston)" com ISSN "0924-669X" e avaliação "B1" e "BMC Genomics" com ISSN "1471-2164" e avaliação "B2"
And Eu não vejo os periódicos "IEEE Conference on Computer Vision and Pattern Recognition" com ISSN "CVPR" e avaliação "A1", "International Conference on Service Oriented Computing" com ISSN "ICSOC" e avaliação "A3" e "Latin-American Algorithms, Graphs and Optimization Symposium" com ISSN "LAGOS" e avaliação "B3"

Scenario: Importar planilha de Eventos com sucesso
Given Eu estou na página Qualis
And Nenhum periódico está armazenado no sistema
When Eu seleciono o arquivo "eventos_2018.xlsx"
And seleciono a opção "Evento" no campo "typeQualis"
And insiro o valor "2019" no campo "year"
And Eu seleciono a opção "Qualis Import" que carrega o arquivo
Then Eu vejo uma mensagem de sucesso
And Eu vejo os periódicos "IEEE Conference on Computer Vision and Pattern Recognition" com ISSN "CVPR" e avaliação "A1", "International Conference on Learning Representations" com ISSN "ICLR" e avaliação "A1" e "Neural Information Processing Systems" com ISSN "NeurIPS" e avaliação "A1"
