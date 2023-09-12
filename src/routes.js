const {
  postBook,
  getAllBook,
  getBookId,
  putBookId,
  deleteBookId,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: postBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookId,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: putBookId,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookId,
  },
];

module.exports = routes;
