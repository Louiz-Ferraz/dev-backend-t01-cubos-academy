const cars = [
    {
        name: "Ka",
        brand: "Ford",
        year: 2010,
        color: "red"
    },
    {
        name: "Uno",
        brand: "Chevrolet",
        year: 2020,
        color: "white"
    },
    {
        name: "Mustang",
        brand: "Asd",
        year: 2022,
        color: "green"
    },
    {
        name: "Gol",
        brand: "Ford",
        year: 1995,
        color: "black"
    },
]

let result = cars.findIndex((car) => {
    return car.name === "Mustang";
})

console.log(result);