function handler() {
    let zIndexes = [];

    const generateZIndex = (key, baseZIndex = 999) => {
        const lastZIndex = getLastZIndex(key, baseZIndex);
        const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

        zIndexes.push({ key, value: newZIndex });

        return newZIndex;
    };

    const revertZIndex = (zIndex) => {
        zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
    };

    const getCurrentZIndex = (key) => {
        return getLastZIndex(key).value;
    };

    const getLastZIndex = (key, baseZIndex = 0) => {
        return [...zIndexes].reverse().find((obj) => obj.key === key) || { key, value: baseZIndex };
    };

    const getZIndex = (el) => {
        return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
    };

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
        getCurrent: (key) => getCurrentZIndex(key)
    };
}

export default handler();
