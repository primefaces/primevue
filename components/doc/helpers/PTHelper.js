import APIDocs from '@/doc/common/apidoc/index.json';

export const getPTOption = (name) => {
    const { props } = APIDocs[name.toLowerCase()].interfaces.values[`${name}PassThroughOptions`] || APIDocs[name.toLowerCase()].interfaces.values[`${name}DirectivePassThroughOptions`];
    const options = APIDocs[name.toLowerCase()].interfaces.values[`${name}PassThroughMethodOptions`];
    let data = [];

    for (const [i, prop] of props.entries()) {
        if (options) {
            data.push({
                value: i + 1,
                label: prop.name,
                options: options?.props,
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
