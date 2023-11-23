const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Rota para exibir o formulário de adição de produto
router.get('/add', ProductController.showAddForm);

// Rota para adicionar um produto
router.post('/add', ProductController.addProduct);

// Restante das rotas
router.get('/list', ProductController.listProducts);
router.get('/edit/:id', ProductController.showEditForm);
router.post('/edit/:id', ProductController.editProduct);
router.post('/delete/:id', ProductController.deleteProduct);

// Listagem de produtos/transações
router.get('/list', ProductController.list);

// Edição de produto/transação
router.put('/edit/:id', ProductController.edit);

// Exclusão de produto/transação
router.delete('/delete/:id', ProductController.delete);

module.exports = router;
