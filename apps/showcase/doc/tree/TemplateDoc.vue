<template>
    <DocSectionText v-bind="$attrs">
        <p>Each node can have a distinct template by matching the <i>type</i> property to the slot name.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Tree :value="nodes" class="w-full md:w-[30rem]">
            <template #default="slotProps">
                <b>{{ slotProps.node.label }}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-0 hover:text-primary">{{ slotProps.node.label }}</a>
            </template>
        </Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: 'Introduction',
                    children: [
                        { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url' },
                        { key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url' },
                        { key: '0-2', label: 'Creating a Vue Application', data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type: 'url' },
                        { key: '0-3', label: 'Conditional Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url' }
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url' },
                        { key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url' },
                        { key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url' },
                        { key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url' }
                    ]
                }
            ],
            code: {
                basic: `
<Tree :value="nodes" class="w-full md:w-[30rem]">
    <template #default="slotProps">
        <b>{{ slotProps.node.label }}</b>
    </template>
    <template #url="slotProps">
        <a :href="slotProps.node.data">{{ slotProps.node.label }}</a>
    </template>
</Tree>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Tree :value="nodes" class="w-full md:w-[30rem]">
            <template #default="slotProps">
                <b>{{ slotProps.node.label }}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-0 hover:text-primary">{{ slotProps.node.label }}</a>
            </template>
        </Tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: 'Introduction',
                    children: [
                        { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url' },
                        { key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url' },
                        { key: '0-2', label: 'Creating a Vue Application', data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type: 'url' },
                        { key: '0-3', label: 'Conditional Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url' }
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url' },
                        { key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url' },
                        { key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url' },
                        { key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url' }
                    ]
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Tree :value="nodes" class="w-full md:w-[30rem]">
            <template #default="slotProps">
                <b>{{ slotProps.node.label }}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-0 hover:text-primary">{{ slotProps.node.label }}</a>
            </template>
        </Tree>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nodes = ref([
    {
        key: '0',
        label: 'Introduction',
        children: [
            { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url' },
            { key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url' },
            { key: '0-2', label: 'Creating a Vue Application', data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type: 'url' },
                { key: '0-3', label: 'Conditional Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url' }
        ]
    },
    {
        key: '1',
        label: 'Components In-Depth',
        children: [
            { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url' },
            { key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url' },
            { key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url' },
            { key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url' }
        ]
    }
]);
<\/script>
`,
                data: `
{
    key: '0',
    label: 'Introduction',
    children: [
        { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url' },
        { key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url' },
        { key: '0-2', label: 'Creating a Vue Application', data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type: 'url' },
        { key: '0-3', label: 'Conditional Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url' }
    ]
},
{
    key: '1',
    label: 'Components In-Depth',
    children: [
        { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url' },
        { key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url' },
        { key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url' },
        { key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url' }
    ]
},
...`
            }
        };
    }
};
</script>
