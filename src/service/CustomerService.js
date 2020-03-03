import axios from 'axios'

export default class CarService {

	getCustomers() {
		return axios.get('demo/data/customers.json').then(res => res.data.data);
	}
}