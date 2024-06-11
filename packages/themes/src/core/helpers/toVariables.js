import Theme from '../config/index.js';
import { SharedUtils } from '../utils/index.js';

export default function (theme, options = {}) {
    const VARIABLE = Theme.defaults.variable;
    const { prefix = VARIABLE.prefix, selector = VARIABLE.selector, excludedKeyRegex = VARIABLE.excludedKeyRegex } = options;

    const _toVariables = (_theme, _prefix = '') => {
        return Object.entries(_theme).reduce(
            (acc, [key, value]) => {
                const px = SharedUtils.object.test(excludedKeyRegex, key) ? SharedUtils.object.toNormalizeVariable(_prefix) : SharedUtils.object.toNormalizeVariable(_prefix, SharedUtils.object.toKebabCase(key));
                const v = SharedUtils.object.toValue(value);

                if (SharedUtils.object.isObject(v)) {
                    const { variables, tokens } = _toVariables(v, px);

                    SharedUtils.object.merge(acc['tokens'], tokens);
                    SharedUtils.object.merge(acc['variables'], variables);
                } else {
                    acc['tokens'].push((prefix ? px.replace(`${prefix}-`, '') : px).replaceAll('-', '.'));
                    SharedUtils.object.setProperty(acc['variables'], SharedUtils.object.getVariableName(px), SharedUtils.object.getVariableValue(v, px, prefix, [excludedKeyRegex]));
                }

                return acc;
            },
            { variables: [], tokens: [] }
        );
    };

    const { variables, tokens } = _toVariables(theme, prefix);

    return {
        value: variables,
        tokens,
        declarations: variables.join(''),
        css: SharedUtils.object.getRule(selector, variables.join(''))
    };
}
