const palavra = 'Alemanha';

let encontrado = false;

for (let letra of palavra) {
    if (letra === 'h' || letra === 'H') {
        console.log("Tem H ou h.");
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Não tem H ou h.");
}