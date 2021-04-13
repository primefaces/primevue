function handler() {
    let zIndexes = [];

    const generateZIndex = (key, baseZIndex) => {
        let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
        let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

        zIndexes.push({ key, value: newZIndex });
        return newZIndex;
    }

    const revertZIndex = (zIndex) => {
        zIndexes = zIndexes.filter(obj => obj.value !== zIndex);
    }

    const getCurrentZIndex = () => {
        return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
    }

    const getZIndex = (el) => {
        return el ? parseInt(el.style.zIndex, 10) || 0 : 0
    }

    return {
        get: getZIndex,
        set: (key, el, baseZIndex) => {
            if (el) {
                el.style.zIndex = String(generateZIndex(key, baseZIndex));
            }
        },
        clear: (el) => {
            if (el) {
                revertZIndex(getZIndex(el));
                el.style.zIndex = '';
            }
        },
        getCurrent: () => getCurrentZIndex()
    };
}

export default handler();