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

