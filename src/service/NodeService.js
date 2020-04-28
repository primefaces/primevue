import axios from 'axios';

export default class NodeService {

    getTreeTableNodes() {
        return axios.get('demo/data/treetablenodes.json')
                .then(res => res.data.root);
    }

    getTreeNodes() {
        return axios.get('demo/data/treenodes.json')
                .then(res => res.data.root);
    }

}