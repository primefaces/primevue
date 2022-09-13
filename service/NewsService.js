export default class NewsService {

    async fetchNews() {
        try {
            const data = await useFetch('https://www.primefaces.org/cdn/news/primevue.json', {cache: 'no-store'})
            return await data.json();
        } catch (error) {
            console.log(error)
        }    
    }
}