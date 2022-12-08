export default class NewsService {
    fetchNews() {
        return fetch('https://www.primefaces.org/cdn/news/primevue.json', { cache: 'no-store', mode: 'no-cors' }).then((res) => res.json());
    }
}
