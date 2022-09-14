export default class NewsService {
    async fetchNews() {
        const data = await useFetch('https://www.primefaces.org/cdnnews/primevue.json', { cache: 'no-store' });

        return await data.json();
    }
}
