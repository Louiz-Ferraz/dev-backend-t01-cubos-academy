const instanciaAxios = require('../servicos/pagarme');

const criarPedido = async (req, res) => {
    const body = req.body;

    if (body.amount === undefined) {
        return res.status(400).json({
            erro: 'O valor do pedido não foi informado!'
        });
    }

    try {
        const pedido = await instanciaAxios.post('transactions', body);

        return res.status(201).json(pedido.data);
    } catch (error) {
        const { status, data: { errors } } = error.response;
        return res.status(status).json(
            `${errors[0].type}: ${errors[0].parameter_name} - ${errors[0].message}`
        );
    }
}

const consultarPedido = async (req, res) => {
    const { id } = req.params;

    try {
        const pedido = await instanciaAxios.get(`transactions/${id}`);
        return res.status(pedido.status).json(pedido.data);
    } catch (error) {
        const { status, data: { errors } } = error.response;
        return res.status(status).json(
            `${errors[0].type}: ${errors[0].parameter_name} - ${errors[0].message}`
        );
    }
}

module.exports = {
    criarPedido,
    consultarPedido
}