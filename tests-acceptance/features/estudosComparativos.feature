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