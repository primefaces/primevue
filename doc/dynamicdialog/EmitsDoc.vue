<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <i>emits</i> object can be used to handle events emitted by the child component. Each method name used in this object must begin with 'on'. Then the emit name should come. This is an
            <a href="https://vuejs.org/guide/essentials/event-handling.html#listening-to-events">event handling</a> rule of Vue.
        </p>

        <DocSectionCode :code="code1" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
        <DocSectionCode :code="code2" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
this.$dialog.open(ProductListDemo, {
    emits: {
        onInfo: (e) => {     // The 'on' prefix and same emit name are required.
            console.log(e);  // {user: 'primetime'}
        }
    },
};`
            },
            code2: {
                basic: `
// ProductListDemo
<template>
    <Button label="Submit" @click="showInfo" />
</template>

<script>
export default {
    emits: ['info'],
    methods: {
        showInfo() {
            this.$emit('info', { user: 'primetime' });
        }
    }
};
<\/script>
`
            }
        };
    }
};
</script>
