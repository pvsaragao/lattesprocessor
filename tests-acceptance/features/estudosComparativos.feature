Feature:
Como um professor, aluno ou pesquisador
Eu quero realizar estudos comparativos com os pesquisadores, departamentos e grupos de pesquisas
Para fazer um ranking com eles e suas produções

Scenario: Comparar pesquisadores com quantidades diferentes de artigos pelo método “quantidade de artigos”
Given Eu estou na página “Estudos Comparativos”
And O professor “Paulo” tem “36” artigos e o professor “Sílvio” tem “32” artigos 
When Eu escolho o método “quantidade de artigos”
And Eu gero o ranking
Então “Paulo” fica na primeira linha com “36” artigos e “Sílvio” na segunda com “32” artigos.

Scenario: Comparar pesquisadores com critérios de avaliação de artigos diferentes pelo método “critérios de avaliação personalizados”
Given Eu estou na página “Estudos Comparativos”
And O professor “Paulo” tem “3” artigos “A1”, 2 artigos “A2” e 1 artigo “B1”
And O professor “Sílvio” tem “3” artigos “A1”, 2 artigo “A2” e 1 artigos “B4”
When Eu escolho o método “critérios de avaliação personalizados”
And Eu atribuo os pesos "3", "2", "1", "0", "0", "0", "0", "0", respectivamente
And Eu gero o ranking
Then “Paulo” fica na primeira linha com “14” pontos e “Sílvio” na segunda com “13” pontos.

Scenario: Comparar pesquisadores que possuem mesmo currículo
Given eu estou na página “Estudos Comparativos”
And O professor “Paulo” tem “3” artigos “A1”, 2 artigos “A2” e 1 artigo “B1”
And O professor “Sílvio” tem “3” artigos “A1”, 2 artigo “A2” e 1 artigos “B1”
When Eu escolho o método “critérios de avaliação personalizados”
And Eu gero o ranking
Then “Paulo” fica na primeira linha com "44" pontos e “Sílvio” na segunda com "44" pontos.

Scenario: Comparar pesquisadores sem especificar os pesos pelo método “critérios de avaliação personalizados”
Given Eu estou na página “Estudos Comparativos”
And O professor “Paulo” tem “3” artigos “A1”, 2 artigos “A2” e 1 artigo “B1”
And O professor “Sílvio” tem “3” artigos “A1”, 2 artigo “A2” e 1 artigos “B4”
When Eu escolho o método “critérios de avaliação personalizados”
And Eu gero o ranking
Then Paulo” fica na primeira linha com “44” pontos e “Sílvio” na segunda com “29” pontos.

Scenario:Ranqueamento sem arquivo XML carregado
Given estou na página de “estudos comparativos”
And o atributo “arquivo xml” está como “nenhum arquivo carregado”
When eu seleciono a opção “quantidade de artigos”
Then eu vejo uma mensagem informando que nenhum arquivo .xml foi carregado

Scenario:Ranqueamento com mesmo número de artigos
Given estou na página de “estudos comparativos”
And “2” arquivos .xml contendo “Beatriz” com “2” artigos e  “Alberto” com “2” artigos
When eu seleciono a opção “quantidade de artigos”
Then eu vejo uma tabela de ranking, onde “Alberto” com “2" artigos está acima de “Beatriz” com “2” artigos

Scenario:Ranqueamento de pesquisadores com entrada inválida de pesos de artigo
Given estou na página de “estudos comparativos”
And o atributo “arquivo xml” está como “UFPE.xml”
When eu seleciono a opção “critérios de avaliação personalizados”
And atribui os pesos “3”,  “2”, “1”, “1”, “1”, “1”, “1” e “J” respectivamente para “A1”, “A2”, “B1”, “B2”, “B3”, “B4”, “B5”, “B5” e “C”
And eu seleciono a “opção executar avaliação” 
Then eu vejo uma mensagem de que os valores para os pesos são inválidos

Scenario:Ranqueamento com sucesso de departamentos
Given estou na página de “estudos comparativos”
And eu posso ver “3 “ artigos do departamento “SPG” e “2” artigos do departamento “VOXAR”
When eu seleciono a opção “ranqueamento de departamentos”
Then eu vejo uma tabela com o ranking onde “SPG” com “3 artigos” está acima de “VOXAR” com “2 artigos”
