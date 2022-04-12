<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree <span>Templating</span></h1>
                <p>Tree is used to display hierarchical data.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Tree :value="nodes">
                    <template #default="slotProps">
                        <b>{{slotProps.node.label}}</b>
                    </template>
                    <template #url="slotProps">
                        <a :href="slotProps.node.data">{{slotProps.node.label}}</a>
                    </template>
                </Tree>
            </div>
        </div>

        <AppDoc name="TreeTemplatingDemo" :sources="sources" :service="['NodeService']" :data="['treenodes']" github="tree/TreeTemplatingDemo.vue" />
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
                        {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url'},
                        {key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url'},
                        {key: '0-2', label: 'Creating a Vue Application', data:'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type:'url'},
                        {key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url'}
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url'},
                        {key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url'},
                        {key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url'},
                        {key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url'}
                    ]
                }
            ],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Tree :value="nodes">
            <template #default="slotProps">
                <b>{{slotProps.node.label}}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data">{{slotProps.node.label}}</a>
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
                        {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url'},
                        {key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url'},
                        {key: '0-2', label: 'Creating a Vue Application', data:'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type:'url'},
                        {key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url'}
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url'},
                        {key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url'},
                        {key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url'},
                        {key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url'}
                    ]
                }
            ]
        }
    }
}
<\\/script>

<style scoped lang="scss">
button {
    margin-right: .5rem;
}

::v-deep(.p-tree) {
    a {
        color: #2196f3;
        text-decoration: none;
    }
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Tree :value="nodes">
            <template #default="slotProps">
                <b>{{slotProps.node.label}}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data">{{slotProps.node.label}}</a>
            </template>
        </Tree>
    </div>                  
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const nodes = ref([
            {
                key: '0',
                label: 'Introduction',
                children: [
                    {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url'},
                    {key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url'},
                    {key: '0-2', label: 'Creating a Vue Application', data:'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type:'url'},
                    {key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url'}
                ]
            },
            {
                key: '1',
                label: 'Components In-Depth',
                children: [
                    {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url'},
                    {key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url'},
                    {key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url'},
                    {key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url'}
                ]
            }
        ]);

        return { nodes }
    }
}
<\\/script>

<style scoped lang="scss">
button {
    margin-right: .5rem;
}

::v-deep(.p-tree) {
    a {
        color: #2196f3;
        text-decoration: none;
    }
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <p-tree :value="nodes">
                <template #default="slotProps">
                    <b>{{slotProps.node.label}}</b>
                </template>
                <template #url="slotProps">
                    <a :href="slotProps.node.data">{{slotProps.node.label}}</a>
                </template>
            </p-tree>
        </div>                  

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const nodes = ref([
                    {
                        key: '0',
                        label: 'Introduction',
                        children: [
                            {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url'},
                            {key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url'},
                            {key: '0-2', label: 'Creating a Vue Application', data:'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type:'url'},
                            {key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url'}
                        ]
                    },
                    {
                        key: '1',
                        label: 'Components In-Depth',
                        children: [
                            {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url'},
                            {key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url'},
                            {key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url'},
                            {key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url'}
                        ]
                    }
                ]);

                return { nodes }
            },
            components: {
                "p-tree": primevue.tree
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-button {
            margin-right: .5rem;
        }

        .p-tree a {
            color: #2196f3;
            text-decoration: none;
        }
        </style>`
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
button {
    margin-right: .5rem;
}

::v-deep(.p-tree) {
    a {
        color: #2196f3;
    }
}
</style>