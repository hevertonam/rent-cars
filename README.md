

cadastro do carro
RF 01 - Deve ser possivel cadastrar um novo carro
RF 02 - Deve ser possivel cadastrar todas as categorias

RN

RN 01 - Não deve ser possivel cadastrar um carro com uma placa já existente.

RN 03 - O carro deve ser cadastrado com disponibilidade por padrão.
RN 04 - o usuário responsável pelo cadastro deve ser administrador.


----------------------------------------------------------------------------

Listagem de carros

RF

RF 01 - Deve ser possivel listar os carros disponíveis
RF 02 - Deve ser possivel listar os carros disponíveis pelo nome da categoria
RF 02 - Deve ser possivel listar os carros disponíveis pelo nome da marca
RF 02 - Deve ser possivel listar os carros disponíveis pelo nome do carro


RN 
RN 01 - O Usuário não precisa estar logado no sistema.
RN 02 -   

----------------------------------------------------------------------------

Cadastro de especificação no carro

RF

RF 01 - Deve ser possivel cadastrar uma especificação 
RF 02 - Deve ser possivel listar todas as especificações
RF 03 - Deve ser possivel listar todos os carros

RN 

RN 01 - Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
RN 02 - Não deve ser possivel cadastrar uam especificação para o mesmo carro.
RN 03 - o usuário responsável pelo cadastro deve ser administrador.


----------------------------------------------------------------------------

Cadastro de imagens do carro

RF
RF 01 - Deve ser possivel cadastrar a imagem do carro
RF 02 - Deve ser possivel listar todos os carros

RNF
RNF 01 - Utilizar o multer para upload de arquivos 

RN
RN 01 - O usuario deve poder cadastrar mais de uma imagem para o mesmo carro 
RN 02 - o usuário responsável pelo cadastro deve ser administrador.
 

----------------------------------------------------------------------------
ALUGUEL DE CARRO


RF
RF 01 - Deve ser possivel cadastrar um aluguel
RF 02 - Deve ser possivel listar todos os carros

RNF
RNF 01 -  

RN
RN 01 - o aluguel deve ter duração minima de 24horas
RN 02 - Não deve ser possivel cadastrar um novo aluguel caso já exista uma aberto para o mesmo usuario
RN 03 - Não deve ser possivel cadastrar um novo aluguel caso já exista uma aberto para o mesmo carro
RN 04 - O usuário deve estar logado na aplicação 