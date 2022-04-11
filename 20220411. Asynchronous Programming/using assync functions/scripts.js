const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

// const city = getCityFromZipcode('13470300');
// city.then(city => {
//     console.log(city);
// })
// city.catch(error => {
//     console.log(error.message);
// })

// getCityFromZipcode('13470300').then(city => {
//     console.log(city);
// }).catch(error => {
//     console.log(error.message);
// })
// getStateFromZipcode('13470300').then(state => {
//     console.log(state);
// }).catch(error => {
//     console.log(error.message);
// })

//async e await
(async function () {
    const city = await getCityFromZipcode('13470300');
    console.log(city);

    const state = await getStateFromZipcode('13470300');
    console.log(state);
})();