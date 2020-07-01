import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
		return axios.get('demo/data/products-small.json').then(res => res.data.data);
	}

	getProducts() {
		return axios.get('demo/data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
		return axios.get('demo/data/products-orders-small.json').then(res => res.data.data);
	}
}
