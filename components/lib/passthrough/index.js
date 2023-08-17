/**
 * @todo: Add dynamic params support;
 *
 * Exp;
 * usePassThrough(pt1, pt2, pt3, pt*, { merge: true });
 * usePassThrough(pt1, { merge: true });
 */
export const usePassThrough = (pt1 = {}, pt2 = {}, { merge = true, useMergeProps = true } = {}) => {
    return {
        _usept: {
            merge,
            useMergeProps
        },
        originalValue: pt1,
        value: pt2
    };
};
