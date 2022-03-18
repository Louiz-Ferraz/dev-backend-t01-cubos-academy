const products = [
    { name: "rice", price: 500 },
    { name: "meat", price: 3200 },
    { name: "cookie", price: 450 },
    { name: "banana", price: 320 }
]

const productsWithDiscount = products.map((product) => {
    return {
        name: product.name,
        price: product.price,
        discount: product.price * 0.1,
        discountedPrice: product.price * 0.9
    }
})

console.log(productsWithDiscount);