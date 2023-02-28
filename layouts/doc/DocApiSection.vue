<template>
    <div className="doc-main">
        <div className="doc-intro">
            <h1>{{ header }} API</h1>
            <p>API defines helper props, events and others for the PrimeReact {{ header }} module.</p>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import APIDocs from '@/doc/common/apidoc/index.json';
import DocApiTable from './DocApiTable.vue';
export default {
    props: {
        header: {
            type: String,
            default: ''
        },
        doc: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            docs: []
        };
    },
    mounted() {
        this.docs = this.createDocs();
    },

    methods: {
        createDocs() {
            const newDocs = [];

            for (const docName of this.doc) {
                const moduleName = docName.toLowerCase();
                const regex = /\[Live Demo][\s\S]*/g;

                let newDoc = {
                    id: `api.${moduleName}`,
                    label: docName,
                    description: APIDocs[moduleName]?.description.replace(regex, '') || null,
                    children: []
                };

                const values = APIDocs[moduleName].interfaces.values;

                const props = values[`${docName}Props`];
                const emits = values[`${docName}Emits`];
                const slots = values[`${docName}Slots`];
                const methods = values[docName];
                const types = APIDocs[moduleName]['types'];
                let events = this.findEvents(values);
                const interfaces = this.findOtherInterfaces(values, docName);

                if (props && props.props.length) {
                    newDoc.children.push({
                        id: `api.${moduleName}.props`,
                        label: 'Props',
                        component: DocApiTable,
                        data: this.setPropsData(props.props),
                        description: props.description
                    });
                }

                if (emits && emits.methods.length) {
                    newDoc.children.push({
                        id: `api.${moduleName}.emits`,
                        label: 'Emits',
                        component: DocApiTable,
                        data: this.setEmitData(emits.methods),
                        description: emits.description
                    });
                }

                if (slots && slots.methods.length) {
                    newDoc.children.push({
                        id: `api.${moduleName}.slots`,
                        label: 'Slots',
                        component: DocApiTable,
                        data: this.setEmitData(slots.methods),
                        description: slots.description
                    });
                }

                if (methods && methods.methods.length) {
                    newDoc.children.push({
                        id: `api.${moduleName}.methods`,
                        label: 'Methods',
                        component: DocApiTable,
                        data: this.setEmitData(methods.methods),
                        description: APIDocs[moduleName].interfaces.methodDescription
                    });
                }

                if (events && events.length) {
                    newDoc.children.push({
                        id: `api.${moduleName}.events`,
                        label: 'Events',
                        component: DocApiTable,
                        data: this.setEventsData(moduleName, events),
                        description: APIDocs[moduleName].interfaces.eventDescription
                    });
                }

                if (interfaces && interfaces.length) {
                    newDoc.children.push({
                        id: `api.${moduleName}.interfaces`,
                        label: 'Interfaces',
                        component: DocApiTable,
                        data: this.setInterfacesData(moduleName, interfaces),
                        description: APIDocs[moduleName].interfaces.description || null
                    });
                }

                if (types) {
                    newDoc.children.push({
                        id: `api.${moduleName}.types`,
                        label: 'Types',
                        component: DocApiTable,
                        data: this.setTypesData(moduleName, types.values),
                        description: APIDocs[moduleName].interfaces.typeDescription || null
                    });
                }

                newDocs.push(newDoc);
            }

            return newDocs;
        },
        setEmitData(emits) {
            const data = [];

            for (const emit of emits) {
                const parameters = emit.parameters.reduce((acc, param) => {
                    acc.push(`${param.name}: ${param.type}`);

                    return acc;
                }, []);

                data.push({
                    name: emit.name,
                    parameters: parameters.join(', '),
                    returnType: emit.returnType,
                    description: emit.description
                });
            }

            return data;
        },
        setPropsData(props) {
            const data = [];

            for (const prop of props) {
                data.push({
                    name: prop.name,
                    type: prop.type,
                    default: prop.defaultValue,
                    description: prop.description,
                    default: prop.default
                });
            }

            return data;
        },
        setEventsData(moduleName, events) {
            const data = [];

            for (const event of events) {
                const eventData = {
                    id: `api.${moduleName}.events.${event.key}`,
                    label: event.key,
                    component: DocApiTable,
                    description: event.values.description,
                    relatedProp: event.values.relatedProp,
                    data: []
                };

                if (event.values.relatedProp) {
                    eventData.relatedProp = event.values.relatedProp;
                }

                event.values.props.forEach((prop) => {
                    eventData.data.push({
                        name: prop.name,
                        type: prop.type,
                        description: prop.description
                    });
                });

                data.push(eventData);
            }

            return data;
        },
        setInterfacesData(moduleName, interfaces) {
            const data = [];

            for (const interfaceData of interfaces) {
                const interfaceDatas = {
                    id: `api.${moduleName}.interfaces.${interfaceData.key}`,
                    label: interfaceData.key,
                    component: DocApiTable,
                    description: interfaceData.values.description,
                    data: []
                };

                interfaceData.values.props.forEach((prop) => {
                    interfaceDatas.data.push({
                        name: prop.name,
                        type: prop.type,
                        description: prop.description
                    });
                });

                data.push(interfaceDatas);
            }

            return data;
        },
        setTypesData(moduleName, types) {
            const data = [];

            for (const key of Object.keys(types)) {
                const value = types[key];
                const typeData = {
                    id: `api.${moduleName}.types.${key}`,
                    label: key,
                    component: DocApiTable,
                    data: []
                };

                typeData.data.push({
                    values: value.values
                });

                data.push(typeData);
            }

            return data;
        },
        findEvents(values) {
            const events = [];

            for (const key of Object.keys(values)) {
                if (key.includes('Event')) {
                    events.push({ key, values: values[key] });
                }
            }

            return events;
        },
        findOtherInterfaces(values, docName) {
            const interfaces = [];

            for (const key of Object.keys(values)) {
                if (!key.includes('Event') && !key.includes('Props') && !key.includes('Emits') && !key.includes('Slots') && key !== docName) {
                    interfaces.push({ key, values: values[key] });
                }
            }

            return interfaces;
        }
    }
};
</script>
