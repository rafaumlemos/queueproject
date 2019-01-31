# queueproject

Este projeto é uma API RPC, cujo possui o objetivo de facilitar o gerenciamento de uma fila de pessoas.


## A API possui os seguintes endpoints :

* '/createUser' -> Criação de usuário, para que possa ser adicionado na fila.
* '/addToLine' -> Adição de usuário na fila
* '/findPosition' -> Busca de um respectivo usuário na fila
* '/showLine' -> Busca de todos os usuários na fila
* '/filterLine' -> Filtro de busca dos usuários na fila
* '/popLine' -> Remove o primeiro da fila


## Como utilizar : 

Basta dar um **yarn start** e o servidor ja estará rodando, e então é só seguir os exemplos abaixo para entender como funciona a API: <br>


**1 - Requisição de criação de usuário :**

Método: POST <br>
URL: http://localhost:2020/createUser <br>
Body: <br>
{ <br>
	"nome" : "insiraonome", <br>
	"email" : "insiraoemail", <br>
	"genero" : "insiraogenero" <br>
} <br>

**2 - Requisição de adição à fila :**

Método: POST  <br>
URL: http://localhost:2020/addToLine <br>
Body:  <br>
{  <br>
	"id" : insiraoid  <br>
}  <br>
Observação: esse ID é obtido através do retorno da requisição de criação de usuário.  <br>
 
**3 - Requisição de ver a fila :**

Método: POST  <br>
URL: http://localhost:2020/showLine  <br>
 
**4 - Requisição de retirar primeiro da fila :** <br>

Método: POST  <br>
URL: http://localhost:2020/popLine   <br>
 
**5 - Requisição de filtrar os usuários cadastrados na fila :**

Método: POST  <br>
URL: http://localhost:2020/filterLine  <br>
Body:  <br>
{  <br>
	"genero" : "masculino ou feminino"  <br>
}  <br>
 
**6 - Requisição de buscar a posição de um usuário na fila :**  <br>

Método: POST  <br>
URL: http://localhost:2020/findPosition  <br>
Body:  <br>
{  <br>
	"email" : "emaildousuario@cadastrado.com"  <br>
}  <br>

