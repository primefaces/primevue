import axios from 'axios'

export default class PhotoService {

	getImages() {
        return axios.get('demo/data/photos.json')
                .then(res => res.data.data);
    }
}
