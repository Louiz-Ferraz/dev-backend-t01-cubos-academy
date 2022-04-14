const fs = require('fs/promises');

(async function () {
    const jsonFile = await fs.readFile('test.json');
    const users = JSON.parse(jsonFile);
    users.push({
        name: 'Luiz',
        age: 26
    });
    const jsonArray = JSON.stringify(users);
    console.log(users);
    console.log(jsonArray);
})();