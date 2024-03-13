import Theme, { SharedUtils } from 'primevue/themes';

const VARIABLE = Theme.defaults.variable;

export const $dt = (tokenPath) => {
    const config = Theme.getPConfig();

    return dt(config?.theme, tokenPath);
};

export const dt = (theme = {}, tokenPath) => {
    if (tokenPath) {
        const { prefix, transform } = theme?.options || {};
        const regex = /{([^}]*)}/g;
        const token = SharedUtils.object.test(regex, tokenPath) ? tokenPath : `{${tokenPath}}`;
        const isStrictTransform = transform === 'strict'; // @todo - TRANSFORM: strict | lenient

        return isStrictTransform ? SharedUtils.object.getComputedValue(theme?.preset, token, [VARIABLE.excludedKeyRegex]) : SharedUtils.object.getVariableValue(token, undefined, prefix, [VARIABLE.excludedKeyRegex]);
    }

    return '';
};
