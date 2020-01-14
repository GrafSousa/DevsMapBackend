// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

/* Query Params:
  -> 90% das vezes é utilizado no método GET
  -> Utilizado quando passar informação para o backend
    -> request.query (Filtros, ordenação, paginação, ...)
  -> São incorporados (visíveis na URL)
  -> Ex: https://localhost:3333/users?search=NomeUsuario
*/

/* Route Params:
  -> request.params
  -> Ex: https://localhost:3333/users/1
*/

/* Body
  -> request.body
  -> Utilizado principalmente nos métodos POST e PUT
  -> Dados para criação ou alteração de um registro
*/

import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Omnistack' });
});

export default routes;
