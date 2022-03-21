const cars = [
    { name: 'corola', brand: 'toyota', year: '2020', color: 'silver' },
    { name: 'argo', brand: 'fiat', year: '2021', color: 'black' },
    { name: 'ranger', brand: 'ford', year: '2021', color: 'silver' },
    { name: 'hilux', brand: 'toyota', year: '2018', color: 'white' }
]

const sortCars = (cars, sortField) => {
    cars.sort((a, b) => {
        return a[sortField].localeCompare(b[sortField]);
    });

    console.log(cars);
}

sortCars(cars, 'name');
sortCars(cars, 'brand');
sortCars(cars, 'year');
sortCars(cars, 'color');