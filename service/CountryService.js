const baseUrl = process.env.NODE_ENV === 'production' ? '/primevue-nuxt/' : '/';

export default class CountryService {
    getCountries() {
        return fetch(baseUrl + 'demo/data/countries.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
