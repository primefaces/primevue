import axios from 'axios'

export default class CountryService {

    getCountries() {
        return axios.get('demo/data/countries.json').then(res => res.data.data);
    }
}