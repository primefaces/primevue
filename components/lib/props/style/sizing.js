import { t } from '.';
import ObjectUtils from '../../utils/ObjectUtils';

export const WIDTH_DATA = {
    width: t.sizing('width'),
    minWidth: t.sizing('minWidth'),
    maxWidth: t.sizing('maxWidth'),
    w: t.sizing('width'),
    minW: t.sizing('minWidth'),
    maxW: t.sizing('maxWidth')
};

export const HEIGHT_DATA = {
    height: t.sizing('height'),
    minHeight: t.sizing('minHeight'),
    maxHeight: t.sizing('maxHeight'),
    h: t.sizing('height'),
    minH: t.sizing('minHeight'),
    maxH: t.sizing('maxHeight')
};

const ALL_DATA = { ...WIDTH_DATA, ...HEIGHT_DATA };
const ALL_KEYS = Object.keys(ALL_DATA);
const ALL_PROPS = ALL_KEYS.reduce((acc, k) => ((acc[k] = undefined), acc), {});

export const SPACING = {
    data: ALL_DATA,
    keys: ALL_KEYS,
    props: ALL_PROPS,
    resolver: (value) => {
        // @todo
        return value;
    },
    declarations: (obj = {}) => {
        return Object.entries(obj)
            .filter(([key]) => ALL_KEYS.includes(key))
            .reduce((acc, [key, value]) => {
                if (ObjectUtils.isNotEmpty(value)) {
                    const rule = ObjectUtils.toKebabCase(key);

                    acc.push(ALL_DATA[key].declaration(ObjectUtils.css.getVariableValue(value, rule)));
                }

                return acc;
            }, [])
            .join('');
    }
};
