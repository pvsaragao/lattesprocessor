Feature: Estudos comparativos
As a: Pesquisador de um grupo de pesquisa
I want to: Comparar os pesquisadores e instutuições
So that: Seja possível realizar um ranqueamento dos pesquisadores, departamentos e grupos de pesquisa, baseado em suas publicações.

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

