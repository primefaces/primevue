import APIDocs from '@/doc/common/apidoc/index.json';
import ComponentTokens from '@primeuix/themes/tokens';

export const getPTOptions = (name) => {
    const { props } = APIDocs[name.toLowerCase()].interfaces.values[`${name}PassThroughOptions`] || APIDocs[name.toLowerCase()].interfaces.values[`${name}DirectivePassThroughOptions`];
    const options = APIDocs[name.toLowerCase()].interfaces.values[`${name}PassThroughMethodOptions`];
    let data = [];

    for (const [i, prop] of props.entries()) {
        if (options) {
            let subCompName, subOptions;
            let hasSubComp = prop.name !== 'hooks' && prop.type.indexOf('TransitionType') === -1 && prop.type.indexOf('<') > -1 && name.toLowerCase() !== prop.type.slice(0, prop.type.indexOf('<')).toLowerCase();

            if (hasSubComp) {
                subCompName = prop.type.slice(0, prop.type.indexOf('<')).replace('PassThroughOptions', '').replace('PassThroughOptionType', '');
                subOptions = APIDocs[subCompName.toLowerCase()].interfaces.values[`${subCompName}PassThroughMethodOptions`];
                const objToReplace = subOptions.props.find((opt) => opt.name === 'parent');

                objToReplace.type = prop.type;
            }

            if (!prop.deprecated) {
                data.push({
                    value: i + 1,
                    label: prop.name,
                    options: hasSubComp ? subOptions?.props : options?.props,
                    description: prop.description
                });
            }
        } else {
            data.push({
                value: i + 1,
                label: prop.name,
                description: prop.description
            });
        }
    }

    return data;
};

export const getStyleOptions = (name) => {
    const styleDoc = APIDocs[name.toLowerCase() + 'style'];
    const enumValues = styleDoc && styleDoc.enumerations && styleDoc.enumerations.values;
    const { members = [] } = enumValues ? enumValues[`${name}Classes`] || {} : {};
    let data = [];

    for (const member of members) {
        const { value, description } = member;

        data.push({
            class: value.replaceAll('"', ''),
            description
        });
    }

    return data;
};

export const getTokenOptions = (name) => {
    let data = [];

    if (ComponentTokens[name.toLowerCase()]) {
        const tokens = ComponentTokens[name.toLowerCase()].tokens;

        for (const [_, value] of Object.entries(tokens)) {
            data.push({
                token: value.token,
                /*property: value.name.split('.').slice(1).join('.'),*/
                'CSS Variable': value.variable,
                description: value.description
            });
        }
    }

    return data;
};
