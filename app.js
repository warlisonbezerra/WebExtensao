const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

// Configuração do Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src', 'views'));

// Configuração de middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Configuração do Express Session
app.use(
  session({
    secret: 'suaChaveSecreta',
    resave: false,
    saveUninitialized: true,
  })
);

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Define os modelos
const User = require('./src/models/User')(sequelize, DataTypes); // Alteração aqui
const Product = require('./src/models/Product')(sequelize, DataTypes); // Alteração aqui

// Sincroniza o Sequelize com o Banco de Dados
sequelize.sync({ force: false }).then(() => {
  // Configuração das rotas
  const userRoutes = require('./src/routes/userRoutes');  // Alteração aqui
  const productRoutes = require('./src/routes/productRoutes');  // Alteração aqui

  // Adicione mais rotas conforme necessário

  // Rotas para redirecionar para a página de login
  app.get('/', (req, res) => {
    res.redirect('/users/login');
  });

  // Uso das rotas
  app.use('/users', userRoutes);
  app.use('/products', productRoutes);

  // Inicialização do servidor
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});