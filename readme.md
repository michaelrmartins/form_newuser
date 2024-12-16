Formulário de Solicitação de Cadastro de Novos Usuários
Este é um projeto para um formulário de solicitação de cadastro de novos usuários no sistema. Ele utiliza Node.js e Express para o back-end e MySQL como banco de dados.

📄 Descrição
Este projeto permite que usuários preencham um formulário para solicitar o cadastro no sistema. As solicitações são enviadas ao banco de dados MySQL, onde são armazenadas e podem ser posteriormente processadas pela equipe de administração.

✨ Funcionalidades
Exibição de formulário para solicitação de cadastro.
Validação básica de dados do formulário.
Armazenamento dos dados de solicitação em um banco de dados MySQL.
Configuração de variáveis de ambiente para fácil adaptação entre ambientes de desenvolvimento e produção.

🛠️ Tecnologias Utilizadas
Node.js: Plataforma para execução de JavaScript no servidor.
Express: Framework para criação de servidores HTTP.
MySQL: Banco de dados relacional para armazenar as solicitações de cadastro.
dotenv: Gerenciamento de variáveis de ambiente.
nodemon: Monitoramento de alterações nos arquivos para desenvolvimento.


------------- 
Update - 

Send PUT Request to http://192.168.2.214:8059/api/form/${ID} 


Example: http://192.168.2.214:8059/api/form/109

Send Json Body with Field and New Value ( you can send one or more fields ):

Json Body example:

{
	"is_created": "1"
}

User with ID 109 now "is_created" changed to 1
