import APIDocs from '@/doc/common/apidoc/index.json';
import { $dt } from '@primevue/themes';

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

            data.push({
                value: i + 1,
                label: prop.name,
                options: hasSubComp ? subOptions?.props : options?.props,
                description: prop.description
            });
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
    const { members = [] } = APIDocs[name.toLowerCase() + 'style']?.enumerations?.values?.[`${name}Classes`];
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
    const values = APIDocs[`themes/${name.toLowerCase()}`]?.tokens?.values;
    let data = [];

    for (const [key, value] of Object.entries(values || {})) {
        for (const tokens of value?.props) {
            const { token, description } = tokens;
            const designToken = $dt(token);

            data.push({
                token,
                variable: designToken.name,
                description: description
            });
        }
    }

    return data;
};
