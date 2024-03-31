<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Lifecycle hooks of components are exposed as pass through using the <i>hooks</i> property so that callback functions can be registered. Available callbacks are <i>onBeforeCreate</i>, <i>onCreated</i>, <i>onBeforeUpdate</i>,
            <i>onUpdated</i>, <i>onBeforeMount</i>, <i>onMounted</i>, <i>onBeforeUnmount</i> and <i>onUnmounted</i>. Refer to the Vue.js documentation for detailed information about lifecycle hooks.
        </p>
    </DocSectionText>

    <DocSectionCode :code="code" hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Panel header="Header" :pt="panelPT">
    Content
</Panel>
`,
                options: `
<template>
    <Panel header="Header" :pt="panelPT">
        Content
    </Panel>
</template>

<script>
export default {
    data() {
        return {
            panelPT: {
                hooks: {
                    onMounted: () => {
                        //panel mounted
                    },
                    onUnmounted: () => {
                        //panel unmounted
                    }
                }
            }
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <Panel header="Header" :pt="panelPT">
        Content
    </Panel>
</template>

<script setup>
import { ref } from 'vue';

const panelPt = ref({
    hooks: {
        onMounted: () => {
            //panel mounted
        },
        onUnmounted: () => {
            //panel unmounted
        }
    }
);
<\/script>
`
            }
        };
    }
};
</script>
