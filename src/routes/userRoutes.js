// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Página de registro
router.get('/register', UserController.showRegisterForm);

// Cadastro de usuário
router.post('/register', UserController.register);

// Página de login
router.get('/login', UserController.showLoginForm);

// Login de usuário
router.post('/login', UserController.login);

// Página de logout
router.get('/logout', UserController.logout);

// Página de atualização de perfil
router.get('/update', UserController.showUpdateForm);

// Atualização de perfil
router.post('/update', UserController.update);

module.exports = router;
