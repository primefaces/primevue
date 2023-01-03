export default class NodeService {
    constructor() {
        const runtimeConfig = useRuntimeConfig();

        this.contextPath = runtimeConfig.public.contextPath;
    }

    getTreeTableNodes() {
        return fetch(this.contextPath + 'demo/data/treetablenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }

    getTreeNodes() {
        return fetch(this.contextPath + 'demo/data/treenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }
}
