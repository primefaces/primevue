<template>
    <DocSectionText v-bind="$attrs">
        <p>The components to import and register are defined with the <i>include</i> option using a string array. When the value is ignored or set using the <i>*</i> alias, all of the components are registered.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <p>In case all components are imported, particular components can still be excluded with the <i>exclude</i> option.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
        <p>By default, for compatibility reasons, Chart and Editor components are excluded. To include them simply set the <i>exclude</i> option to an empty list.</p>
        <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
        <p>Use the <i>prefix</i> option to give a prefix to the registered component names.</p>
        <DocSectionCode :code="code4" importCode hideToggleCode hideStackBlitz />
        <p>
            Component registration can be customized further by implementing the <i>name</i> function that gets an object representing the import metadata. <i>name</i> is the label of the component, <i>as</i> is the default export name and
            <i>from</i> is the import path.
        </p>
        <DocSectionCode :code="code5" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: {
    components: {
        include: ['Button', 'DataTable']
    }
}
`
            },
            code2: {
                basic: `
primevue: {
    components: {
        include: '*',
        exclude: ['Galleria', 'Carousel']
    }
}
`
            },
            code3: {
                basic: `
primevue: {
    components: {
        exclude: []
    }
}
`
            },
            code4: {
                basic: `
primevue: {
    components: {
        prefix: 'Prime'
        include: ['Button', 'DataTable']    /* Used as <PrimeButton /> and <PrimeDataTable /> */
    }
}
`
            },
            code5: {
                basic: `
primevue: {
    components: {
        name: ({ name, as, from }) => {
            return name === 'Button' ? \`My\${name}\` : name;
        },
        include: ['Button', 'DataTable']    /* Used as <MyButton /> and <DataTable /> */
    }
}
`
            }
        };
    }
};
</script>
