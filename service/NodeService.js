const baseUrl = process.env.NODE_ENV === 'production' ? '/primevue-nuxt/' : '/';

export default class NodeService {
    getTreeTableNodes() {
        return fetch(baseUrl + 'demo/data/treetablenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }

    getTreeNodes() {
        return fetch(baseUrl + 'demo/data/treenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }
}
