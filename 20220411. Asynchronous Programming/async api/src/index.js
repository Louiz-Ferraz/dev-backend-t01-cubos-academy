const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/', async (req, res) => {
    const city = getCityFromZipcode('13466300');
    const city2 = getCityFromZipcode('44380000')

    const promise = await Promise.all([city, city2]);

    const [answer1, answer2] = promise;

    return res.send(`Cities found: ${answer1} and ${answer2}.`);
})

app.get('/package/:namePackage', async (req, res) => {
    const { namePackage } = req.params;
    const description = await getPackageDescriptionNpm(namePackage);
    return res.send(description);
})

app.listen(3000);