export default class NewsService {

    fetchNews() {
        return fetch('https://www.primefaces.org/cdn/news/primevue.json', {cache: 'no-store'}).then(res => res.json());
    }
}