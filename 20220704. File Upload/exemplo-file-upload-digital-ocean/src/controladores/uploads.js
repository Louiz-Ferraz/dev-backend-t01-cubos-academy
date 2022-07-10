const aws = require('../servicos/aws');

const upload = async (req, res) => {
    const { nome, imagem } = req.body;

    const buffer = Buffer.from(imagem, 'base64');

    try {
        await aws.enviarImagem(nome, buffer);

        const resposta = {
            imagem: nome,
            url: aws.urlCompleta(nome)
        }

        return res.status(200).json(resposta);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    upload
};