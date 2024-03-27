import Theme, { SharedUtils } from 'primevue/themes';

export const $dt = (tokenPath, type) => {
    const config = Theme.getPConfig();

    return dt(config?.theme, tokenPath, type);
};

export const dt = (theme = {}, tokenPath, type) => {
    if (tokenPath) {
        const VARIABLE = Theme.defaults.variable;
        const { prefix, transform } = theme?.options || {};
        const regex = /{([^}]*)}/g;
        const token = SharedUtils.object.test(regex, tokenPath) ? tokenPath : `{${tokenPath}}`;
        const isStrictTransform = type === 'value' || transform === 'strict'; // @todo - TRANSFORM: strict | lenient(default)

        return isStrictTransform ? Theme.getTokenValue(tokenPath) : SharedUtils.object.getVariableValue(token, undefined, prefix, [VARIABLE.excludedKeyRegex]);
    }

    return '';
};
