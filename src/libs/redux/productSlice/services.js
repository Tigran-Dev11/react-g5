export const productApi = {
    getProducts: () => fetch("https://fakestoreapi.com/products"),
    getProduct: (id) => fetch(`https://fakestoreapi.com/products/${id}`)
}