import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';

export const usePassThrough = (pt1 = {}, pt2 = {}, { merge = true, useMergeProps = false, ignoredKeysOnMerge = [], customizer = undefined } = {}) => {
    const newPT = { ...pt1 };

    if (merge) {
        const getPTClassValue = (value) => (ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? { class: value } : value);

        const setOptionValue = (to, from, nestedKey, ignoredKey) => {
            const keys = nestedKey.split('.');
            const key = keys.shift();
            const getValue = (value) => (ObjectUtils.isFunction(customizer) ? customizer({ key, to, from, value }) : value);

            if (!!ignoredKey && ignoredKey.endsWith(key)) {
                !!key && (to[key] = getValue(from[key]));
            } else {
                const matched = [Object.keys(to[key] || {}), Object.keys(from[key] || {})].flat().some((k) => k.match(/^(class|style|on(.+))/));

                if (matched) {
                    to[key] = getValue(useMergeProps ? mergeProps(getPTClassValue(to[key]), getPTClassValue(from[key])) : { ...getPTClassValue(to[key]), ...getPTClassValue(from[key]) });
                } else if (ObjectUtils.isNotEmpty(from[key])) {
                    to[key] = { ...to[key] };
                    setOptionValue(to[key], from[key], keys.join('.'), ignoredKey);
                } else if (!!key) {
                    to[key] = getValue(from[key]);
                }
            }
        };

        const nestedKeys = ObjectUtils.nestedKeys(pt2);

        nestedKeys.forEach((nestedKey) => {
            setOptionValue(
                newPT,
                pt2,
                nestedKey,
                ignoredKeysOnMerge.find((k) => (k.indexOf('.') > 0 ? nestedKey.startsWith(k) : nestedKey.split('.')[0] === k))
            );
        });
    } else {
        Object.keys(pt2).forEach((key) => (newPT[key] = pt2[key]));
    }

    return newPT;
};
