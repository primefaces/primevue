import Theme, { SharedUtils } from 'primevue/themes';

const EXCLUDED_KEY_REGEX = /^(primitive|semantic|variables|colorscheme|light|dark|common|colors|root|states)$/gi;

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

        return isStrictTransform ? SharedUtils.object.getComputedValue(theme?.preset, token, [EXCLUDED_KEY_REGEX]) : SharedUtils.object.getVariableValue(token, undefined, prefix, [EXCLUDED_KEY_REGEX]);
    }

    return '';
};
