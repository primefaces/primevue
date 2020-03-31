import axios from 'axios'

export default class GalleriaService {

	getImages() {
        return axios.get('demo/data/galleria.json')
                .then(res => res.data.data);
    }
}
