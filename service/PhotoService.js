export default class PhotoService {
    getImages() {
        const runtimeConfig = useRuntimeConfig();

        return fetch(runtimeConfig.public.contextPath + 'demo/data/photos.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
