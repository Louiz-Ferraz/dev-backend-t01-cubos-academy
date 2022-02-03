const temIngresso = false;
const censura = 16;
const idade = 15;

if (temIngresso) {
    if (idade >= censura) {
        console.log("pode assistir ao filme");
    } else {
        console.log("não pode assistir ao filme, pela censura");
    }
} else {
    console.log("não pode assistir ao filme, por não ter ingresso");
}

/*
if (temIngresso && idade >= censura) {
    console.log("pode assistir ao filme");
} else {
    console.log("não pode assistir ao filme");
}
*/