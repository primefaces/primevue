import axios from 'axios';

export default class MenuService {

    getMenu() {
        return axios.get('demo/menu/menu.json').then(res => res.data.data);
    }
}
