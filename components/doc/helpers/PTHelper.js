import APIDocs from '@/doc/common/apidoc/index.json';

export const getPTOption = (name) => {
    const { props } = APIDocs[name.toLowerCase()].interfaces.values[`${name}PassThroughOptions`] || APIDocs[name.toLowerCase()].interfaces.values[`${name}DirectivePassThroughOptions`];
    let data = [];

    for (const [i, prop] of props.entries()) {
        data.push({
            value: i + 1,
            label: prop.name,
            description: prop.description
        });
    }

    return data;
};
