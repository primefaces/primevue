<template>
    <DocSectionText v-bind="$attrs">
        <p>The names of the directives to import and register are provided using the <i>include</i> property. When the value is ignored or set using the <i>*</i> alias, all of the directives are registered.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <p>Similar to components, certain directives can be excluded and name registration can be customized.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: {
    directives: {
        include: ['Ripple', 'Tooltip']
    }
}
`
            },
            code2: {
                basic: `
primevue: {
    directives: {
        include: '*',
        exclude: ['Ripple']
    }
}
`
            },
            code3: {
                basic: `
primevue: {
    directives: {
        prefix: 'p'
        include: ['Ripple', 'Tooltip']    /* Used as v-pripple and v-ptooltip */
    }
}
`
            }
        };
    }
};
</script>
