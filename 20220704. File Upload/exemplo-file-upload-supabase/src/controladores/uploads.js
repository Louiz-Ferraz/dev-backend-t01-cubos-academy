const supabase = require('../supabase');

const uploadImagem = async (req, res) => {
    const { nome, imagem } = req.body;

    const buffer = Buffer.from(imagem, 'base64');

    try {
        const { data, error } = await supabase
            .storage
            .from(process.env.SUPABASE_BUCKET)
            .upload(nome, buffer);

        if (error) {
            return res.status(400).json(error.message);
        }

        const { publicURL, error: errorPublicUrl } = supabase
            .storage
            .from(process.env.SUPABASE_BUCKET)
            .getPublicUrl(nome);

        if (errorPublicUrl) {
            return res.status(400).json(errorPublicUrl.message);
        }

        data.publicURL = publicURL;

        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const deletarImagem = async (req, res) => {
    const { nome } = req.body;

    try {
        const { data, error } = await supabase
            .storage
            .from(process.env.SUPABASE_BUCKET)
            .remove([nome]);

        if (error) {
            return res.status(400).json(error.message);
        }

        if (data.length === 0) {
            return res.status(400).json('Não foi possível excluir a imagem');
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    uploadImagem,
    deletarImagem
};