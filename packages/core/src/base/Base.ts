export default {
    _loadedStyleNames: new Set(),
    getLoadedStyleNames() {
        return this._loadedStyleNames;
    },
    isStyleNameLoaded(name: string) {
        return this._loadedStyleNames.has(name);
    },
    setLoadedStyleName(name: string) {
        this._loadedStyleNames.add(name);
    },
    deleteLoadedStyleName(name: string) {
        this._loadedStyleNames.delete(name);
    },
    clearLoadedStyleNames() {
        this._loadedStyleNames.clear();
    }
};
