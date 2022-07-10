const aws = require('aws-sdk');

const spacesEndpoint = new aws.Endpoint('sfo3.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
});

const enviarImagem = async (nome, imagem) => {
    return await s3.putObject({
        Bucket: process.env.SPACES_BUCKET,
        Key: nome,
        Body: imagem,
        ACL: 'public-read'
    }).promise();
}

const excluirImagem = async (nome) => {
    return await s3.deleteObject({
        Bucket: process.env.SPACES_BUCKET,
        Key: nome
    }).promise();
}

const urlCompleta = (nome) => {
    return `https://${process.env.SPACES_BUCKET}.${spacesEndpoint.host}/${nome}`;
}

module.exports = {
    enviarImagem,
    excluirImagem,
    urlCompleta
}