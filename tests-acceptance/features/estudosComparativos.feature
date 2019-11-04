Feature: Estudos comparativos
As a: Pesquisador de um grupo de pesquisa
I want to: Comparar os pesquisadores e instutuições
So that: Seja possível realizar um ranqueamento dos pesquisadores, departamentos e grupos de pesquisa, baseado em suas publicações.

Cenário:Ranqueamento sem arquivo XML carregado

Given estou na página de “estudos comparativos”
And o atributo “arquivo xml” está como “nenhum arquivo carregado”
When eu seleciono a opção “quantidade de artigos”
Then eu vejo uma mensagem informando que nenhum arquivo .xml foi carregado

