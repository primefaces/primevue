const TypeDoc = require('typedoc');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '../');
const outputPath = path.resolve(rootDir, 'doc/common/apidoc');

const staticMessages = {
    methods: "Defines methods that can be accessed by the component's reference.",
    emits: 'Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.',
    slots: 'Defines the slots used by the component.',
    functions: 'Defines the custom functions used by the module.',
    events: "Defines the custom events used by the component's emit.",
    interfaces: 'Defines the custom interfaces used by the module.',
    types: 'Defines the custom types used by the module.',
    tokens: 'Define design tokens used by the component.'
};

const app = new TypeDoc.Application();

// If you want TypeDoc to load tsconfig.json / typedoc.json files
app.options.addReader(new TypeDoc.TSConfigReader());
app.options.addReader(new TypeDoc.TypeDocReader());

app.bootstrap({
    // typedoc options here
    name: 'PrimeVue',
    entryPoints: [`components/lib/`],
    entryPointStrategy: 'expand',
    hideGenerator: true,
    excludeExternals: true,
    includeVersion: true,
    searchInComments: true,
    disableSources: true,
    logLevel: 'Error',
    sort: ['source-order'],
    exclude: ['node_modules', 'components/lib/**/*.js']
});

const project = app.convert();

if (project) {
    const doc = {};

    const parseText = (text) => {
        return text.replace(/&#123;/g, '{').replace(/&#125;/g, '}');
    };

    project.children.forEach((module) => {
        const { name, comment } = module;

        const description = comment && comment.summary.map((s) => s.text || '').join(' ');

        doc[name] = {
            description
        };

        const module_component_group = module.groups?.find((g) => g.title === 'Component');
        let methods = {
            description: staticMessages['methods'],
            values: []
        };

        module_component_group &&
            module_component_group.children.forEach((component) => {
                const description =
                    component.comment &&
                    component.comment.summary
                        .map((s) => {
                            const text = s.text || '';
                            const splittedText = text.split('_');

                            return splittedText[1] ? splittedText[1] : text;
                        })
                        .join(' ');

                !doc[name]['components'] && (doc[name]['components'] = {});

                const component_method_group = component.groups && component.groups.find((g) => g.title === 'Methods');

                component_method_group &&
                    component_method_group.children.forEach((method) => {
                        const signature = method.getAllSignatures()[0];

                        methods.values.push({
                            name: signature.name,
                            parameters: signature.parameters.map((param) => {
                                return {
                                    name: param.name,
                                    type: param.type.toString(),
                                    description: param.comment && param.comment.summary.map((s) => s.text || '').join(' ')
                                };
                            }),
                            returnType: signature.type.toString(),
                            description: signature.comment && signature.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                const component_props_id = component.extendedTypes && component.extendedTypes[0].typeArguments && component.extendedTypes[0].typeArguments[0] && component.extendedTypes[0].typeArguments[0]._target;
                const module_properties_group = module.groups.find((g) => g.title === 'Properties');
                const component_props = module_properties_group && module_properties_group.children.find((c) => (component_props_id ? c.id === component_props_id : true));

                const props = {
                    description: '',
                    values: []
                };
                const emit = {
                    description: staticMessages['emit'],
                    values: []
                };

                if (component_props) {
                    props.description = component_props.comment ? component_props.comment.summary.map((s) => parseText(s.text || '')).join(' ') : '';

                    const component_props_group = component_props.groups && component_props.groups.find((g) => g.title === 'Properties');

                    component_props_group &&
                        component_props_group.children.forEach((prop) => {
                            if (!prop.inheritedFrom || (prop.inheritedFrom && !prop.inheritedFrom.toString().startsWith('Omit.data-pr-'))) {
                                props.values.push({
                                    name: prop.name,
                                    optional: prop.flags.isOptional,
                                    readonly: prop.flags.isReadonly,
                                    type: prop.type.toString(),
                                    default: prop.comment && prop.comment.getTag('@defaultValue') ? parseText(prop.comment.getTag('@defaultValue').content[0]?.text || '') : '', // TODO: Check
                                    description: prop.comment && prop.comment.summary.map((s) => parseText(s.text || '')).join(' '),
                                    deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                                });
                            }
                        });

                    const component_props_methods_group = component_props.groups && component_props.groups.find((g) => g.title === 'Methods');

                    component_props_methods_group &&
                        component_props_methods_group.children.forEach((method) => {
                            const signature = method.getAllSignatures()[0];

                            methods.values.push({
                                name: signature.name,
                                parameters: signature.parameters.map((param) => {
                                    return {
                                        name: param.name,
                                        optional: param.flags.isOptional,
                                        type: param.type.toString(),
                                        description: param.comment && param.comment.summary.map((s) => parseText(s.text || '')).join(' ')
                                    };
                                }),
                                returnType: signature.type.toString(),
                                description: signature.comment.summary.map((s) => parseText(s.text || '')).join(' ')
                            });
                        });
                }

                doc[name]['components'][component.name] = {
                    description,
                    methods
                };
            });

        const module_model_group = module.groups?.find((g) => g.title === 'Model');

        module_model_group &&
            module_model_group.children.forEach((model) => {
                const event_props_description = model.comment && model.comment.summary.map((s) => s.text || '').join(' ');

                !doc[name]['model'] && (doc[name]['model'] = {});

                const props = {
                    description: '',
                    values: []
                };

                const methods = {
                    description: '',
                    values: []
                };
                const model_props_group = model.groups.find((g) => g.title === 'Properties');

                model_props_group &&
                    model_props_group.children.forEach((prop) => {
                        props.values.push({
                            name: prop.name,
                            optional: prop.flags.isOptional,
                            readonly: prop.flags.isReadonly,
                            type: prop.type.toString(),
                            default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0]?.text || '' : '', // TODO: Check
                            description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                const model_methods_group = model.groups.find((g) => g.title === 'Methods');

                model_methods_group &&
                    model_methods_group.children.forEach((method) => {
                        const signature = method.getAllSignatures()[0];
                        const isSlot = model.name.includes('Slots');

                        methods.values.push({
                            name: signature.name,
                            parameters: signature.parameters.map((param) => {
                                let type = param.type.toString();

                                if (param.type.declaration && isSlot) {
                                    type = '';

                                    if (param.type.declaration.children) {
                                        param.type.declaration.children.forEach((child) => {
                                            if (child.signatures) {
                                                const childSinature = child.signatures[0];
                                                const parameters = childSinature.parameters.reduce((acc, { name, type }, index) => (index === 0 ? `${name}: ${type.name}` : `${acc}, ${name}: ${type.name}`), '');

                                                type += ` \t ${childSinature.name}(${parameters}): ${childSinature.type?.name}, // ${childSinature.comment?.summary[0]?.text}\n `;
                                            } else {
                                                const childType = child.type.elementType ? child.type.elementType.name : child.type.name;

                                                type += ` \t ${child.name}: ${childType}, // ${child.comment?.summary[0]?.text}\n `;
                                            }
                                        });
                                    }

                                    type = `{\n ${type} }`;
                                }

                                return {
                                    name: param.name,
                                    optional: param.flags.isOptional,
                                    type: type,
                                    description: param.comment && param.comment.summary.map((s) => parseText(s.text || '')).join(' ')
                                };
                            }),
                            returnType: signature.type.toString(),
                            description: signature.comment && signature.comment.summary.map((s) => parseText(s.text || '')).join(' '),
                            deprecated: signature.comment && signature.comment.getTag('@deprecated') ? parseText(signature.comment.getTag('@deprecated').content[0]?.text) : undefined
                        });
                    });

                doc[name]['model'][model.name] = {
                    description: event_props_description,
                    props,
                    methods
                };
            });

        const module_functions_group = module.groups?.find((g) => g.title === 'Functions');

        module_functions_group &&
            module_functions_group.children.forEach((method) => {
                !doc[name]['functions'] &&
                    (doc[name]['functions'] = {
                        description: staticMessages['functions'],
                        values: {}
                    });

                const signatures = method.getAllSignatures();

                if (signatures && signatures.length > 0) {
                    const signature = signatures[0];

                    doc[name]['functions'].values[method.name] = {
                        name: signature.name,
                        parameters: signature.parameters.map((param) => {
                            return {
                                name: param.name,
                                type: param.type.toString(),
                                description: param.comment && param.comment.summary.map((s) => s.text || '').join(' ')
                            };
                        }),
                        returnType: signature.type.toString(),
                        description: signature.comment && signature.comment.summary.map((s) => s.text || '').join(' ')
                    };
                }
            });

        const module_events_group = module.groups?.find((g) => g.title === 'Events');

        module_events_group &&
            module_events_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                const component_prop = event.comment && event.comment.getTag('@see') ? event.comment.getTag('@see').content[0]?.text || '' : ''; // TODO: Check
                const event_extendedBy = event.extendedBy && event.extendedBy.toString();

                !doc[name]['events'] &&
                    (doc[name]['events'] = {
                        description: staticMessages['events'],
                        values: {}
                    });

                const props = [];
                const event_props_group = event.groups.find((g) => g.title === 'Properties');

                event_props_group &&
                    event_props_group.children.forEach((prop) => {
                        props.push({
                            name: prop.name,
                            optional: prop.flags.isOptional,
                            readonly: prop.flags.isReadonly,
                            type: prop.type.toString(),
                            //default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                            description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                doc[name]['events'].values[event.name] = {
                    description: event_props_description,
                    relatedProp: component_prop,
                    props,
                    extendedBy: event_extendedBy
                };
            });

        const module_interfaces_group = module.groups?.find((g) => g.title === 'Interfaces');

        module_interfaces_group &&
            module_interfaces_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                let component_prop = '';

                if (event.comment && event.comment.getTag('@see')) {
                    const tag = event.comment.getTag('@see');
                    const content = tag.content[0];

                    if (content.text.includes("['")) {
                        component_prop = `${content.target.name}${content.text}`;
                    } else {
                        component_prop = `${content.text === content.target?.name ? content.target.parent.name : content.target?.name}.${content.text}`;
                    }
                }

                const event_extendedBy = event.extendedBy && event.extendedBy.toString();
                const event_extendedTypes = event.extendedTypes && event.extendedTypes.toString();

                !doc[name]['interfaces'] &&
                    (doc[name]['interfaces'] = {
                        description: staticMessages['interfaces'],
                        eventDescription: staticMessages['events'],
                        methodDescription: staticMessages['methods'],
                        typeDescription: staticMessages['types'],

                        values: {}
                    });

                const props = [];
                const methods = [];

                if (event.groups) {
                    const event_props_group = event.groups.find((g) => g.title === 'Properties');

                    event_props_group &&
                        event_props_group.children.forEach((prop) => {
                            props.push({
                                name: prop.name,
                                optional: prop.flags.isOptional,
                                readonly: prop.flags.isReadonly,
                                type: prop.type.toString(),
                                default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0]?.text || '' : '', // TODO: Check
                                description:
                                    prop.comment &&
                                    prop.comment.summary
                                        .map((s) => {
                                            if (s.text.indexOf('[here]') > -1) {
                                                return `${s.text.slice(0, s.text.indexOf('[here]'))} <a target="_blank" href="${s.text.slice(s.text.indexOf('(') + 1, s.text.indexOf(')'))}">here</a> ${s.text.slice(s.text.indexOf(')') + 1)}`;
                                            }

                                            return s.text || '';
                                        })
                                        .join(' '),
                                deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                            });
                        });

                    const event_methods_group = event.groups.find((g) => g.title === 'Methods');

                    event_methods_group &&
                        event_methods_group.children.forEach((method) => {
                            const signature = method.getAllSignatures()[0];
                            const isSlot = event.name.includes('Slots');

                            methods.push({
                                name: signature.name,
                                parameters: signature.parameters.map((param) => {
                                    let type = param.type.toString();

                                    if (param.type.declaration && isSlot) {
                                        type = '';

                                        if (param.type.declaration.children) {
                                            param.type.declaration.children.forEach((child) => {
                                                if (child.signatures) {
                                                    const childSinature = child.signatures[0];
                                                    const parameters = childSinature.parameters.reduce((acc, { name, type }, index) => (index === 0 ? `${name}: ${type.name}` : `${acc}, ${name}: ${type.name}`), '');

                                                    type += ` \t <span class="font-medium">${childSinature.name}(${parameters})</span>: ${childSinature.type?.name}, // ${childSinature.comment?.summary[0]?.text}\n `;
                                                } else {
                                                    if (child.type?.declaration?.signatures) {
                                                        let functionParameters = '';

                                                        child.type?.declaration?.signatures[0]?.parameters.map((param, index) => {
                                                            if (index !== 0) functionParameters += `, `;
                                                            functionParameters += `<span class="doc-option-parameter-name">${param.name}</span>: ${param.type?.name}`;
                                                        });

                                                        if (child.type?.declaration?.signatures[0]?.comment?.getTag('@deprecated')?.content[0]?.text) {
                                                            type += `\t <span class="ml-3 doc-option-parameter-name line-through">${child.name}</span>: <span class="doc-option-parameter-type line-through">(${functionParameters}) &rArr; ${child.type?.declaration?.signatures[0]?.type?.name}</span>, <span class="doc-option-parameter-type line-through">// ${child.type?.declaration?.signatures[0]?.comment.summary[0]?.text}</span>\n`;
                                                        } else {
                                                            type += `\t <span class="ml-3 doc-option-parameter-name">${child.name}</span>: <span class="doc-option-parameter-type">(${functionParameters}) &rArr; ${child.type?.declaration?.signatures[0]?.type?.name}</span>, <span class="doc-option-parameter-type">// ${child.type?.declaration?.signatures[0]?.comment.summary[0]?.text}</span>\n`;
                                                        }
                                                    } else {
                                                        const childType = child.type.elementType ? child.type.elementType.name : child.type.name;

                                                        type += ` \t <span class="ml-3 doc-option-parameter-name">${child.name}</span>: <span class="doc-option-parameter-type">${childType}</span>, <span class="doc-option-parameter-type">// ${child.comment?.summary[0]?.text}</span>\n `;
                                                    }
                                                }
                                            });
                                        }

                                        type = `{\n ${type}}`;
                                    }

                                    return {
                                        name: param.name,
                                        optional: param.flags.isOptional,
                                        type: type,
                                        description: param.comment && param.comment.summary.map((s) => parseText(s.text || '')).join(' ')
                                    };
                                }),
                                returnType: signature.type.toString(),
                                description: signature.comment && signature.comment.summary.map((s) => parseText(s.text || '')).join(' '),
                                deprecated: signature.comment && signature.comment.getTag('@deprecated') ? parseText(signature.comment.getTag('@deprecated').content[0]?.text) : undefined
                            });
                        });
                }

                const signature = event.getAllSignatures();

                if (signature && signature.length > 0) {
                    const parameter = signature[0].parameters[0];

                    props.push({
                        name: `[${parameter.name}: ${parameter.type.toString()}]`,
                        optional: parameter.flags.isOptional,
                        readonly: parameter.flags.isReadonly,
                        type: signature[0].type.toString(),
                        //default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                        description: signature[0].comment && signature[0].comment.summary.map((s) => s.text || '').join(' ')
                    });
                }

                doc[name]['interfaces'].values[event.name] = {
                    description: event_props_description,
                    relatedProp: component_prop,
                    props,
                    methods,
                    extendedBy: event_extendedBy,
                    extendedTypes: event_extendedTypes
                };

                !doc[name]['tokens'] &&
                    (doc[name]['tokens'] = {
                        description: staticMessages['tokens'],
                        values: {}
                    });

                const tokens = [];

                const setTokens = (_declaration, _name) => {
                    if (_declaration?.groups) {
                        const event_props_group = _declaration.groups.find((g) => g.title === 'Properties');

                        event_props_group &&
                            event_props_group.children.forEach((prop) => {
                                if (prop.type?.declaration) {
                                    setTokens(prop.type?.declaration, prop.name);
                                } else if (prop.comment?.getTag('@designToken')) {
                                    tokens.push({
                                        name: _name ? `${_name}.${prop.name}` : prop.name,
                                        token: prop.comment.getTag('@designToken').content[0]?.text || '',
                                        optional: prop.flags.isOptional,
                                        readonly: prop.flags.isReadonly,
                                        type: prop.type.toString(),
                                        default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0]?.text || '' : '', // TODO: Check
                                        description:
                                            prop.comment &&
                                            prop.comment.summary
                                                .map((s) => {
                                                    if (s.text.indexOf('[here]') > -1) {
                                                        return `${s.text.slice(0, s.text.indexOf('[here]'))} <a target="_blank" href="${s.text.slice(s.text.indexOf('(') + 1, s.text.indexOf(')'))}">here</a> ${s.text.slice(s.text.indexOf(')') + 1)}`;
                                                    }

                                                    return s.text || '';
                                                })
                                                .join(' '),
                                        deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                                    });
                                }
                            });
                    }
                };

                setTokens(event);

                doc[name]['tokens'].values[event.name] = {
                    description: event_props_description,
                    props: tokens
                };
            });

        const module_enumerations_group = module.groups?.find((g) => g.title === 'Enumerations');

        module_enumerations_group &&
            module_enumerations_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');

                !doc[name]['enumerations'] &&
                    (doc[name]['enumerations'] = {
                        description: staticMessages['enumerations'],

                        values: {}
                    });

                const members = [];

                if (event.groups) {
                    const event_members_group = event.groups.find((g) => g.title === 'Enumeration Members');

                    event_members_group &&
                        event_members_group.children.forEach((prop) => {
                            members.push({
                                name: prop.name,
                                optional: prop.flags.isOptional,
                                readonly: prop.flags.isReadonly,
                                value: prop.type.toString(),
                                description:
                                    prop.comment &&
                                    prop.comment.summary
                                        .map((s) => {
                                            if (s.text.indexOf('[here]') > -1) {
                                                return `${s.text.slice(0, s.text.indexOf('[here]'))} <a target="_blank" href="${s.text.slice(s.text.indexOf('(') + 1, s.text.indexOf(')'))}">here</a> ${s.text.slice(s.text.indexOf(')') + 1)}`;
                                            }

                                            return s.text || '';
                                        })
                                        .join(' '),
                                deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                            });
                        });
                }

                doc[name]['enumerations'].values[event.name] = {
                    description: event_props_description,
                    members
                };
            });

        const module_types_group = module.groups?.find((g) => g.title === 'Type Aliases');

        module_types_group &&
            module_types_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');

                !doc[name]['types'] &&
                    (doc[name]['types'] = {
                        description: staticMessages['types'],
                        values: {}
                    });

                let values = event.type.toString();

                if (values.includes('Function') && event.type.types) {
                    values = '';

                    for (const [i, type] of event.type.types.entries()) {
                        if (type.declaration && type.declaration.signatures) {
                            const signature = type.declaration.signatures[0];
                            const parameters = signature.parameters.reduce((acc, { name, type }, index) => (index === 0 ? `${name}: ${type.name}` : `${acc}, ${name}: ${type.name}`), '');

                            values += i === 0 ? `(${parameters}) => ${signature.type?.name}` : ` | (${parameters}) => ${signature.type?.name}`;
                        } else {
                            const typeName = type.name || type.value;

                            values += i === 0 ? `${typeName}` : ` | ${typeName}`;
                        }
                    }
                }

                const declaration = event.type.declaration;

                if (declaration) {
                    const groups = declaration.groups && declaration.groups.find((g) => g.title === 'Properties');

                    const map = {};

                    groups &&
                        groups.children.forEach((prop) => {
                            const description = prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ');

                            map[`${prop.name}${prop.flags.isOptional ? '?' : ''}`] = `${prop.type.toString()}, ${description ? '// ' + description : ''}`;
                        });

                    values = JSON.stringify(map, null, 4);
                }

                doc[name]['types'].values[event.name] = {
                    values,
                    description: event_props_description
                };
            });

        const module_namespaces_group = module.groups?.find((g) => g.title === 'Namespaces');

        module_namespaces_group &&
            module_namespaces_group.children.forEach((pevent) => {
                const module_interfaces_group = pevent?.groups?.find((g) => g.title === 'Interfaces');

                module_interfaces_group &&
                    module_interfaces_group.children.forEach((event) => {
                        const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                        let component_prop = '';

                        if (event.comment && event.comment.getTag('@see')) {
                            const tag = event.comment.getTag('@see');
                            const content = tag.content[0];

                            if (content.text.includes("['")) {
                                component_prop = `${content.target.name}${content.text}`;
                            } else {
                                component_prop = `${content.text === content.target?.name ? content.target.parent.name : content.target?.name}.${content.text}`;
                            }
                        }

                        !doc[name]['tokens'] &&
                            (doc[name]['tokens'] = {
                                description: staticMessages['tokens'],
                                values: {}
                            });

                        const props = [];

                        const setProps = (_declaration, _name) => {
                            if (_declaration?.groups) {
                                const event_props_group = _declaration.groups.find((g) => g.title === 'Properties');

                                event_props_group &&
                                    event_props_group.children.forEach((prop) => {
                                        if (prop.type?.declaration) {
                                            setProps(prop.type?.declaration, prop.name);
                                        } else if (prop.comment?.getTag('@designToken')) {
                                            props.push({
                                                name: _name ? `${_name}.${prop.name}` : prop.name,
                                                token: prop.comment.getTag('@designToken').content[0]?.text || '',
                                                optional: prop.flags.isOptional,
                                                readonly: prop.flags.isReadonly,
                                                type: prop.type.toString(),
                                                default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0]?.text || '' : '', // TODO: Check
                                                description:
                                                    prop.comment &&
                                                    prop.comment.summary
                                                        .map((s) => {
                                                            if (s.text.indexOf('[here]') > -1) {
                                                                return `${s.text.slice(0, s.text.indexOf('[here]'))} <a target="_blank" href="${s.text.slice(s.text.indexOf('(') + 1, s.text.indexOf(')'))}">here</a> ${s.text.slice(
                                                                    s.text.indexOf(')') + 1
                                                                )}`;
                                                            }

                                                            return s.text || '';
                                                        })
                                                        .join(' '),
                                                deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                                            });
                                        }
                                    });
                            }
                        };

                        setProps(event);

                        doc[name]['tokens'].values[event.name] = {
                            description: event_props_description,
                            props
                        };
                    });
            });

        const module_designtokens_group = module.groups?.find((g) => g.title === 'DesignTokens');

        module_designtokens_group &&
            module_designtokens_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                let component_prop = '';

                if (event.comment && event.comment.getTag('@see')) {
                    const tag = event.comment.getTag('@see');
                    const content = tag.content[0];

                    if (content.text.includes("['")) {
                        component_prop = `${content.target.name}${content.text}`;
                    } else {
                        component_prop = `${content.text === content.target?.name ? content.target.parent.name : content.target?.name}.${content.text}`;
                    }
                }

                !doc[name]['tokens'] &&
                    (doc[name]['tokens'] = {
                        description: staticMessages['tokens'],
                        values: {}
                    });

                const props = [];

                const setProps = (_declaration, _name) => {
                    if (_declaration?.groups) {
                        const event_props_group = _declaration.groups.find((g) => g.title === 'Properties');

                        event_props_group &&
                            event_props_group.children.forEach((prop) => {
                                if (prop.type?.declaration) {
                                    setProps(prop.type?.declaration, prop.name);
                                } else if (prop.comment?.getTag('@designToken')) {
                                    props.push({
                                        name: _name ? `${_name}.${prop.name}` : prop.name,
                                        token: prop.comment.getTag('@designToken').content[0]?.text || '',
                                        optional: prop.flags.isOptional,
                                        readonly: prop.flags.isReadonly,
                                        type: prop.type.toString(),
                                        default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0]?.text || '' : '', // TODO: Check
                                        description:
                                            prop.comment &&
                                            prop.comment.summary
                                                .map((s) => {
                                                    if (s.text.indexOf('[here]') > -1) {
                                                        return `${s.text.slice(0, s.text.indexOf('[here]'))} <a target="_blank" href="${s.text.slice(s.text.indexOf('(') + 1, s.text.indexOf(')'))}">here</a> ${s.text.slice(s.text.indexOf(')') + 1)}`;
                                                    }

                                                    return s.text || '';
                                                })
                                                .join(' '),
                                        deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                                    });
                                }
                            });
                    }
                };

                setProps(event);

                doc[name]['tokens'].values[event.name] = {
                    description: event_props_description,
                    props
                };
            });

        // app.generateJson(module, `./api-generator/module-typedoc.json`);
    });

    const typedocJSON = JSON.stringify(doc, null, 4);

    !fs.existsSync(outputPath) && fs.mkdirSync(outputPath);
    fs.writeFileSync(path.resolve(outputPath, 'index.json'), typedocJSON);

    // app.generateJson(project, `./api-generator/typedoc.json`);
}
