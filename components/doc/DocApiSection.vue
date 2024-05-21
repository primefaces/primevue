<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>{{ header }} API</h1>
            <p>{{ description }}</p>
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
                    children: [],
                    docName: docName
                };

                const values = APIDocs[moduleName]?.interfaces?.values;
                const componentValues = APIDocs[moduleName]?.components;
                const modelValues = APIDocs[moduleName]?.model;
                let props = null;
                let emits = null;
                let methods = null;
                let slots = null;
                let events = null;
                let options = null;
                let interfaces = null;

                if (values) {
                    props = values[`${docName}Props`];
                    emits = values[`${docName}EmitsOptions`];
                    methods = values[`${docName}Methods`];
                    slots = values[`${docName}Slots`];
                    events = this.findEvents(values);
                    options = this.findOptions(values, docName); //  MenuItem && ConfirmationOptions
                    interfaces = this.findOtherInterfaces(values, docName);
                }

                const types = APIDocs[moduleName]['types'];

                const services = modelValues; // (TerminalService && ConfirmationService && ToastService)

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

                if (slots && slots.methods.length > 0) {
                    newDoc.children.push({
                        id: `api.${moduleName}.slots`,
                        label: 'Slots',
                        component: DocApiTable,
                        data: this.setEmitData(slots.methods),
                        description: slots.description
                    });
                }

                if (methods && methods.methods.length > 0) {
                    newDoc.children.push({
                        id: `api.${moduleName}.methods`,
                        label: 'Methods',
                        component: DocApiTable,
                        data: this.setEmitData(methods.methods),
                        description: APIDocs[moduleName].interfaces.methodDescription
                    });
                }

                if (events && events.length > 0) {
                    newDoc.children.push({
                        id: `api.${moduleName}.events`,
                        label: 'Events',
                        component: DocApiTable,
                        data: this.setEventsData(moduleName, events),
                        description: APIDocs[moduleName].interfaces.eventDescription
                    });
                }

                if (interfaces && interfaces.length > 0) {
                    const isValidDirective = this.checkDirectiveInterfaces(interfaces);

                    if (!isValidDirective) return;

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

                if (options) {
                    newDoc.children.push({
                        id: `api.options.${options[0].key}`,
                        label: 'Options',
                        component: DocApiTable,
                        data: this.setPropsData(options[0].values.props)
                    });
                }

                if (services) {
                    newDoc.children.push({
                        id: `api.${moduleName}.services`,
                        label: 'Services',
                        component: DocApiTable,
                        data: this.setServicesData(moduleName, services),
                        description: Object.values(services)[0].description || null
                    });
                }

                newDocs.push(newDoc);
            }

            return newDocs;
        },
        setEmitData(emits) {
            const data = [];

            for (const emit of emits) {
                data.push({
                    name: emit.name,
                    parameters: {
                        name: emit.parameters[0]?.name,
                        type: emit.parameters[0]?.type
                    },
                    returnType: emit.returnType,
                    description: emit.description,
                    deprecated: emit.deprecated
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
                    default: prop.default,
                    description: prop.description,
                    deprecated: prop.deprecated
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

                // Ignore *Methods Interface
                if (!interfaceData.key.includes('Methods')) {
                    interfaceData.values.props.forEach((prop) => {
                        interfaceDatas.data.push({
                            name: prop.name,
                            type: prop.type,
                            default: prop.default,
                            description: prop.description
                        });
                    });

                    data.push(interfaceDatas);
                }
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
        setServicesData(moduleName, services) {
            const data = [];

            for (const key of Object.keys(services)) {
                const value = services[key];

                value?.methods.values.forEach((method) => {
                    data.push({
                        name: method.name,
                        parameters: {
                            name: method.parameters[0]?.name,
                            type: method.parameters[0]?.type
                        },
                        returnType: method.returnType,
                        description: method.description
                    });
                });
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
        },
        findOptions(values, docName) {
            const validOptionsDocNames = ['MenuItem', 'ConfirmationOptions', 'TreeNode'];

            if (!validOptionsDocNames.includes(docName)) return;

            const options = [];

            for (const key of Object.keys(values)) {
                if (key === 'MenuItem' || key === 'ConfirmationOptions' || key === 'TreeNode') {
                    options.push({ key, values: values[key] });
                }
            }

            return options;
        },
        checkDirectiveInterfaces(interfaces) {
            const findMainInterface = interfaces.find((interfaceData) => interfaceData.key.includes('DirectiveBinding'));

            return !findMainInterface || findMainInterface.values.props.length > 0;
        }
    },

    computed: {
        description() {
            return this.doc && this.doc.length > 0 ? `API defines helper props, events and others for the PrimeVue ${this.header} module.` : `${this.header} is a CSS feature so does not provide a Javascript API`;
        }
    }
};
</script>
