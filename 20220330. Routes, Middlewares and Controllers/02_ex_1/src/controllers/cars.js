const cars = require('../database');

const filterCars = (req, res) => {
    let result = cars;
    const { id, name, brand, year, color } = req.query;
    if (id) {
        result = result.filter((car) => {
            return car.id === Number(id);
        })
    }
    if (name) {
        result = result.filter((car) => {
            return car.name === name;
        })
    }
    if (brand) {
        result = result.filter((car) => {
            return car.brand === brand;
        })
    }
    if (year) {
        result = result.filter((car) => {
            return car.year === Number(year);
        })
    }
    if (color) {
        result = result.filter((car) => {
            return car.color === color;
        })
    }
    res.send(result);
}

const findCars = (req, res) => {
    const { id } = req.params;
    const foundCar = cars.find((car) => {
        return car.id === Number(id)
    })
    res.send(foundCar);
}

module.exports = {
    filterCars,
    findCars
}