const disparos = [0, 50, 90, 80, 100, 80, 40];

let totalValidShots = 0;

for (let shot of disparos) {
    if (shot > 70) {
        totalValidShots += 1;
    }
}

if (totalValidShots >= 3) {
    console.log(totalValidShots);
} else {
    console.log("ELIMINADO");
}