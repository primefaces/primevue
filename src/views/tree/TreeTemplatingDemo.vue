<template>
    <div>
        <TreeSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree - Templating</h1>
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

        <TreeDoc />
    </div>
</template>
<script>
import NodeService from '../../service/NodeService';
import TreeDoc from './TreeDoc';
import TreeSubMenu from './TreeSubMenu';

export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: 'Introduction',
                    children: [
                        {label: 'What is Vue.js?', data:'https://vuejs.org/v2/guide/#What-is-Vue-js', type: 'url'},
                        {label: 'Getting Started', data: 'https://vuejs.org/v2/guide/#Getting-Started', type: 'url'},
                        {label: 'Declarative Rendering', data:'https://vuejs.org/v2/guide/#Declarative-Rendering', type: 'url'},
                        {label: 'Conditionals and Loops', data: 'https://vuejs.org/v2/guide/#Conditionals-and-Loops', type: 'url'}
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        {label: 'Component Registration', data: 'https://vuejs.org/v2/guide/components-registration.html', type: 'url'},
                        {label: 'Props', data: 'https://vuejs.org/v2/guide/components-props.html', type: 'url'},
                        {label: 'Custom Events', data: 'https://vuejs.org/v2/guide/components-custom-events.html', type: 'url'},
                        {label: 'Slots', data: 'https://vuejs.org/v2/guide/components-slots.html', type: 'url'}
                    ]
                }
            ]
        }
    },
    components: {
        'TreeDoc': TreeDoc,
        'TreeSubMenu': TreeSubMenu
    }
}
</script>

<style scoped>
button {
    margin-right: .5em;
}
</style>