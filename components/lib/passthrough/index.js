import { mergeProps } from 'vue';

// @todo: Improve this method
export const usePassThrough = (theme, pt = {}, { merge = false }) => {
    const newTheme = { ...theme };
    const componentNames = Object.keys(pt);

    return componentNames.reduce((t, n) => {
        if (!merge) {
            t[n] = pt[n];
        } else {
            t[n] = Object.entries(pt[n]).reduce((_t, [sk, sv]) => {
                return mergeProps(t[n][sk], sv);
            }, {});
        }

        return t;
    }, newTheme);
};
