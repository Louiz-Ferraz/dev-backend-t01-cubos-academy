const products = require('../database/database');
const fs = require('fs/promises');

const showAllProducts = async (req, res) => {
    return res.json(products);
}

const registerSale = async (req, res) => {
    const { product_id, quantity } = req.body;

    const soldProduct = products.find((product) => {
        return product.id === Number(product_id);
    });

    if (soldProduct === undefined) {
        return res.status(404).json(`Error: Product not found with ID ${product_id}`);
    }

    try {
        const existingFile = await fs.readFile('./src/database/sales.json');
        const salesParse = JSON.parse(existingFile);

        salesParse.sales.push({
            product: soldProduct,
            quantity
        });

        const salesStringify = JSON.stringify(salesParse);

        await fs.writeFile('./src/database/sales.json', salesStringify);

        return res.status(201).json('Sale registered');
    } catch (error) {
        return res.status(500).json(`Error: ${error.message}`);
    }

}

module.exports = {
    showAllProducts,
    registerSale
}