<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree <span>Templating</span></h1>
                <p>Tree is used to display hierarchical data.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Tree :value="nodes">
                <template #default="slotProps">
                    <b>{{slotProps.node.label}}</b>
                </template>
                <template #url="slotProps">
                    <a :href="slotProps.node.data">{{slotProps.node.label}}</a>
                </template>
            </Tree>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;Tree :value="nodes"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;b&gt;&#123;&#123;slotProps.node.label&#125;&#125;&lt;/b&gt;
    &lt;/template&gt;
    &lt;template #url="slotProps"&gt;
        &lt;a :href="slotProps.node.data"&gt;&#123;&#123;slotProps.node.label&#125;&#125;&lt;/a&gt;
    &lt;/template&gt;
&lt;/Tree&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: 'Introduction',
                    children: [
                        {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/v2/guide/#What-is-Vue-js', type: 'url'},
                        {key: '0-1', label: 'Getting Started', data: 'https://vuejs.org/v2/guide/#Getting-Started', type: 'url'},
                        {key: '0-2', label: 'Declarative Rendering', data:'https://vuejs.org/v2/guide/#Declarative-Rendering', type: 'url'},
                        {key: '0-3', label: 'Conditionals and Loops', data: 'https://vuejs.org/v2/guide/#Conditionals-and-Loops', type: 'url'}
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/v2/guide/components-registration.html', type: 'url'},
                        {key: '1-1', label: 'Props', data: 'https://vuejs.org/v2/guide/components-props.html', type: 'url'},
                        {key: '1-2', label: 'Custom Events', data: 'https://vuejs.org/v2/guide/components-custom-events.html', type: 'url'},
                        {key: '1-3', label: 'Slots', data: 'https://vuejs.org/v2/guide/components-slots.html', type: 'url'}
                    ]
                }
            ]
        }
    }
}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
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
                        {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/v2/guide/#What-is-Vue-js', type: 'url'},
                        {key: '0-1', label: 'Getting Started', data: 'https://vuejs.org/v2/guide/#Getting-Started', type: 'url'},
                        {key: '0-2', label: 'Declarative Rendering', data:'https://vuejs.org/v2/guide/#Declarative-Rendering', type:' url'},
                        {key: '0-3', label: 'Conditionals and Loops', data: 'https://vuejs.org/v2/guide/#Conditionals-and-Loops', type: 'url'}
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/v2/guide/components-registration.html', type: 'url'},
                        {key: '1-1', label: 'Props', data: 'https://vuejs.org/v2/guide/components-props.html', type: 'url'},
                        {key: '1-2', label: 'Custom Events', data: 'https://vuejs.org/v2/guide/components-custom-events.html', type: 'url'},
                        {key: '1-3', label: 'Slots', data: 'https://vuejs.org/v2/guide/components-slots.html', type: 'url'}
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
button {
    margin-right: .5rem;
}

/deep/ .p-tree {
    a {
        color: #2196f3;
    }

}
</style>