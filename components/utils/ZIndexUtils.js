function handler() {
    let zIndexes = [];

    const generateZIndex = (key, autoZIndex, baseZIndex = 999) => {
        const lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
        const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

        zIndexes.push({ key, value: newZIndex });

        return newZIndex;
    };

    const revertZIndex = (zIndex) => {
        zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
    };

    const getCurrentZIndex = (key, autoZIndex) => {
        return getLastZIndex(key, autoZIndex).value;
    };

    const getLastZIndex = (key, autoZIndex, baseZIndex = 0) => {
        return [...zIndexes].reverse().find((obj) => (autoZIndex ? true : obj.key === key)) || { key, value: baseZIndex };
    };

    const getZIndex = (el) => {
        return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
    };

    return {
        get: getZIndex,
        set: (key, el, baseZIndex) => {
            if (el) {
                el.style.zIndex = String(generateZIndex(key, true, baseZIndex));
            }
        },
        clear: (el) => {
            if (el) {
                revertZIndex(getZIndex(el));
                el.style.zIndex = '';
            }
        },
        getCurrent: (key) => getCurrentZIndex(key, true)
    };
}

export default handler();
