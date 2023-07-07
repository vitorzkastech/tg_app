const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const User = models.User;

app.post('/create', async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = await User.create({
      name: name,
      password: password,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro ao criar usuário');
  }
});

app.get('/read', async (req, res) => {
  try {
    const users = await User.findAll({
      raw: true
    });
    res.json(users);
  } catch (error) {
    console.error('Erro ao ler usuários:', error);
    res.status(500).send('Erro ao ler usuários');
  }
});

app.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    user.name = name;
    user.password = password;
    await user.save();

    res.send('Usuário atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).send('Erro ao atualizar usuário');
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    await user.destroy();

    res.send('Usuário excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).send('Erro ao excluir usuário');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({
      where: {
        name: name,
        password: password
      }
    });

    if (user) {
      // Usuário válido, fazer o que for necessário (redirecionar, retornar token, etc.)
      res.send('Login válido');
    } else {
      // Usuário inválido, retornar mensagem de erro
      res.status(401).send('Usuário e/ou senha inválidos');
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    res.status(500).send('Erro ao realizar login');
  }
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor Rodando');
});
