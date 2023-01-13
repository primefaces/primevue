export default class ProductService {
    constructor() {
        const runtimeConfig = useRuntimeConfig();

        this.contextPath = runtimeConfig.public.contextPath;
    }

    getProductsSmall() {
        return fetch(this.contextPath + 'demo/data/products-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProducts() {
        return fetch(this.contextPath + 'demo/data/products.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch(this.contextPath + 'demo/data/products-orders-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
