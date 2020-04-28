import axios from 'axios';

export default class EventService {

    getEvents() {
        return axios.get('demo/data/events.json').then(res => res.data.data);
    }
}