export default class EventService {

    getEvents() {
        return fetch('demo/data/events.json').then(res => res.json())
                .then(d => d.data);
    }
}
