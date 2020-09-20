Feature: cadastro de pesquisadores
    As a pesquisador
    I want to importar arquivos XML do Currículo Lattes de pesquisadores
    So that eu possa fazer uma análise de suas publicações e gerar um ranking

Scenario: Cadastro bem-sucedido do arquivo XML de um pesquisador
    Given que estou na página “Pesquisadores”
    And o pesquisador “Paulo Henrique Monteiro Borba” não está na lista de pesquisadores
    When seleciono a opção de “Upload”
    And escolho o arquivo “paulo-borba.xml”
    Then a mensagem de confirmação “Pesquisador cadastrado com sucesso!” é exibida
    And consigo ver o pesquisador “Paulo Henrique Monteiro Borba” na lista de pesquisadores

Scenario: Upload do arquivo XML de um pesquisador já cadastrado
    Given que estou na página “Pesquisadores”
    And o pesquisador “Paulo Henrique Monteiro Borba” está na lista de pesquisadores
    When seleciono a opção de “Upload”
    And escolho o arquivo “paulo-borba.xml”
    Then a mensagem de erro “Pesquisador já cadastrado!” é exibida
    And o pesquisador “Paulo Henrique Monteiro Borba” não é cadastrado novamente no sistema

Scenario: Upload de um arquivo em formato inválido
    Given que estou na página “Pesquisadores”
    And o pesquisador “Paulo Henrique Monteiro Borba” não está na lista de pesquisadores
    When seleciono a opção de “Upload”
    And escolho o arquivo “paulo-borba-error.xml”
    Then a mensagem de erro “Arquivo em formato inválido!” é exibida
    And o pesquisador “Paulo Henrique Monteiro Borba” não é cadastrado no sistema
