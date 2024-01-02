import SharedUtils from './sharedUtils';

const VARIABLE = {
    PREFIX: 'p',
    SELECTOR: ':root',
    EXCLUDED_KEY_REGEX: /^(primitive|semantic|light|common|root|states)$/gi
};

export default function (theme, options = {}) {
    const { prefix = VARIABLE.PREFIX, selector = VARIABLE.SELECTOR, excludedKeyRegex = VARIABLE.EXCLUDED_KEY_REGEX } = options;

    const _toVariables = (_theme, _prefix = '') => {
        return Object.entries(_theme).reduce((acc, [key, value]) => {
            const px = SharedUtils.object.toNormalizePrefix(SharedUtils.object.test(excludedKeyRegex, key) ? _prefix : `${_prefix}-${SharedUtils.object.toKebabCase(key)}`);
            const v = SharedUtils.object.toValue(value);

            if (SharedUtils.object.isObject(v)) {
                const variables = _toVariables(v, px);

                SharedUtils.object.merge(acc, variables);
            } else {
                SharedUtils.object.setProperty(acc, `--${px}`, SharedUtils.object.getVariableValue(v, px, prefix, [excludedKeyRegex]));
            }

            return acc;
        }, []);
    };

    const value = _toVariables(theme, prefix);

    return {
        value,
        css: SharedUtils.object.getRule(selector, value.join(''))
    };
}
