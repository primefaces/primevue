const baseUrl = process.env.NODE_ENV === 'production' ? '/primevue-nuxt/' : '/';

export default class PhotoService {
    getImages() {
        return fetch(baseUrl + 'demo/data/photos.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
