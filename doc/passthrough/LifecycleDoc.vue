<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Lifecycle hooks of components are exposed as pass through using the <i>hooks</i> property so that callback functions can be registered. Available callbacks are <i>beforeCreate</i>, <i>created</i>, <i>beforeUpdate</i>,
            <i>updated</i>,<i>beforeMount</i>, <i>mounted</i>,<i>beforeUnmount</i> and <i>unmounted</i>. Refer to the Vue.js documentation for detailed information about lifecyce hooks.
        </p>
    </DocSectionText>

    <DocSectionCode :code="code" hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Panel header="Header" :pt="panelPT"
    Content
</Panel>`,
                options: `
<template>
    <Panel header="Header" :pt="panelPT"
        Content
    </Panel>
</template>

<script>
export default {
    data() {
        return {
            panelPT: {
                hooks: {
                    mounted: () => {
                        //panel mounted
                    },
                    unmounted: () => {
                        //panel unmounted
                    }
                }
            }
        }
    }
};
<\/script>`,
                composition: `
<template>
    <Panel header="Header" :pt="panelPT"
        Content
    </Panel>
</template>

<script setup>
import { ref } from 'vue';

const panelPt = ref({
    hooks: {
        mounted: () => {
            //panel mounted
        },
        unmounted: () => {
            //panel unmounted
        }
    }
);
<\/script>`
            }
        };
    }
};
</script>
