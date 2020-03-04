import axios from 'axios'

export default class CarService {

	getCustomersSmall() {
		return axios.get('demo/data/customers-small.json').then(res => res.data.data);
    }

    getCustomersMedium() {
		return axios.get('demo/data/customers-medium.json').then(res => res.data.data);
    }

    getCustomersLarge() {
		return axios.get('demo/data/customers-large.json').then(res => res.data.data);
    }

    getCustomersXLarge() {
		return axios.get('demo/data/customers-xlarge.json').then(res => res.data.data);
	}
}