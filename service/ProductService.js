const baseUrl = process.env.NODE_ENV === 'production' ? '/primevue-nuxt/' : '/';

export default class ProductService {
    getProductsSmall() {
        return fetch(baseUrl + 'demo/data/products-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProducts() {
        return fetch(baseUrl + 'demo/data/products-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch(baseUrl + 'demo/data/products-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
