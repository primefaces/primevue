export default class CountryService {
    getCountries() {
        const runtimeConfig = useRuntimeConfig();

        return fetch(runtimeConfig.public.contextPath + 'demo/data/countries.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
