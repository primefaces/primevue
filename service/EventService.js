export default class EventService {
    getEvents() {
        const runtimeConfig = useRuntimeConfig();

        return fetch(runtimeConfig.public.contextPath + 'demo/data/events.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
