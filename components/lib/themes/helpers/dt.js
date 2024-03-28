import Theme, { SharedUtils } from 'primevue/themes';

const types = ['value', 'variable'];

export const $dt = (tokenPath, param1, param2) => {
    const config = Theme.getPConfig();

    return types.includes(param1) ? dt(config?.theme, tokenPath, undefined, param2) : dt(config?.theme, tokenPath, param1, param2);
};

export const dt = (theme = {}, tokenPath, fallback, type = 'variable') => {
    if (tokenPath) {
        const VARIABLE = Theme.defaults.variable;
        const { prefix, transform } = theme?.options || {};
        const regex = /{([^}]*)}/g;
        const token = SharedUtils.object.test(regex, tokenPath) ? tokenPath : `{${tokenPath}}`;
        const isStrictTransform = type === 'value' || transform === 'strict'; // @todo - TRANSFORM: strict | lenient(default)

        return isStrictTransform ? Theme.getTokenValue(tokenPath) : SharedUtils.object.getVariableValue(token, undefined, prefix, [VARIABLE.excludedKeyRegex], fallback);
    }

    return '';
};

export const $dtp = (tokenPath) => {
    const config = Theme.getPConfig();

    const variable = dt(config?.theme, tokenPath, undefined, 'variable');
    const name = variable.match(/--[\w-]+/g)?.[0];
    const value = dt(config?.theme, tokenPath, undefined, 'value');

    return {
        variable,
        name,
        value
    };
};
