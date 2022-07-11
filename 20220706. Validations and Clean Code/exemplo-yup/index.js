const express = require('express');
const yup = require('yup');
const { pt } = require('yup-locales');
yup.setLocale(pt);

const app = express();

app.use(express.json());

app.post('/cadastro', async (req, res) => {
    const schema = yup.object().shape({
        nome: yup.string().required('O campo nome é obrigatório'),
        idade: yup.number().strict().required('O campo idade é obritarório'),
        email: yup.string().email().required('O campo email é obrigatório'),
        senha: yup.string().required('O campo senha é obrigatório').min(5).max(10)
    });

    try {
        await schema.validate(req.body);
    } catch (error) {
        return res.status(400).json(error.message);
    }

    return res.json('Validado');
})

app.listen(3000);