const baseUrl = process.env.NODE_ENV === 'production' ? '/primevue-nuxt/' : '/';

export default class EventService {
    getEvents() {
        return fetch(baseUrl + 'demo/data/events.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
