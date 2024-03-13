import Theme, { SharedUtils } from 'primevue/themes';

const VARIABLE = Theme.defaults.variable;

export default function (theme, options = {}) {
    const { prefix = VARIABLE.prefix, selector = VARIABLE.selector, excludedKeyRegex = VARIABLE.excludedKeyRegex } = options;

    const _toVariables = (_theme, _prefix = '') => {
        return Object.entries(_theme).reduce((acc, [key, value]) => {
            const px = SharedUtils.object.test(excludedKeyRegex, key) ? SharedUtils.object.toNormalizeVariable(_prefix) : SharedUtils.object.toNormalizeVariable(_prefix, SharedUtils.object.toKebabCase(key));
            const v = SharedUtils.object.toValue(value);

            if (SharedUtils.object.isObject(v)) {
                const variables = _toVariables(v, px);

                SharedUtils.object.merge(acc, variables);
            } else {
                SharedUtils.object.setProperty(acc, SharedUtils.object.getVariableName(px), SharedUtils.object.getVariableValue(v, px, prefix, [excludedKeyRegex]));
            }

            return acc;
        }, []);
    };

    const value = _toVariables(theme, prefix);

    return {
        value,
        declarations: value.join(''),
        css: SharedUtils.object.getRule(selector, value.join(''))
    };
}
