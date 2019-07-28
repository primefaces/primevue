<template>
    <table class="p-organizationchart-table">
        <tbody>
            <tr v-if="node">
                <td :colspan="colspan">
                    <div :class="nodeContentClass" @click="onNodeClick">
                        <OrganizationChartNodeTemplate :node="node" :template="templates[node.type]||templates['default']" />
                        <a v-if="collapsible && !leaf" tabindex="0" class="p-node-toggler" @click="toggleNode" @keydown.enter="toggleNode">
                            <i class="p-node-toggler-icon pi" :class="{'pi-chevron-down': expanded, 'pi-chevron-up': !expanded}"></i>
                        </a>
                    </div>
                </td>
            </tr>
            <tr :style="childStyle" class="p-organizationchart-lines">
                <td :colspan="colspan">
                    <div class="p-organizationchart-line-down"></div>
                </td>
            </tr>
            <tr :style="childStyle" class="p-organizationchart-lines">
                <template v-if="node.children && node.children.length === 1">
                    <td :colspan="colspan">
                        <div class="p-organizationchart-line-down"></div>
                    </td>
                </template>
                <template v-if="node.children && node.children.length > 1">
                    <template v-for="(child,i) of node.children">
                        <td :key="child.key + '_left'" class="p-organizationchart-line-left" :class="{'p-organizationchart-line-top': !(i === 0)}">&nbsp;</td>
                        <td :key="child.key + '_right'" class="p-organizationchart-line-right" :class="{'p-organizationchart-line-top': !(i === (node.children.length - 1))}">&nbsp;</td>
                    </template>
                </template>
            </tr>
            <tr :style="childStyle" class="p-organizationchart-nodes">
                <td v-for="child of node.children" :key="child.key" colspan="2">
                    <sub-node :node="child" :templates="templates" :collapsedKeys="collapsedKeys" @node-toggle="onChildNodeToggle" :collapsible="collapsible" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
const OrganizationChartNodeTemplate = {
    functional: true,
    props: {
        node: {
            type: null,
            default: null
        },
        template: {
            type: null,
            default: null
        }
    },
    render(createElement, context) {
        const content = context.props.template({
            'node': context.props.node
        });
        return [content];
    }
};

export default {
    name: 'sub-node',
    props: {
        node: {
            type: null,
            default: null
        },
        selected: {
            type: Boolean,
            default: false
        },
        selectable: {
            type: Boolean,
            default: false
        },
        templates: {
            type: null,
            default: null
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsedKeys: {
            type: null,
            default: null
        }
    },
    methods: {
        onNodeClick() {

        },
        toggleNode() {
            this.$emit('node-toggle', this.node.key);
        },
        onChildNodeToggle(key) {
            this.$emit('node-toggle', key);
        }
    },
    computed: {
        nodeContentClass() {
            return ['p-organizationchart-node-content', this.node.styleClass, {'p-organizationchart-selectable-node': this.selectable, 'p-highlight': this.selected}];
        },
        leaf() {
            return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
        },
        colspan() {
            return (this.node.children && this.node.children.length) ? this.node.children.length * 2: null;
        },
        childStyle() {
            return {
                visibility: !this.leaf && this.expanded ? 'inherit' : 'hidden'
            }
        },
        expanded() {
            return this.collapsedKeys[this.node.key] === undefined;
        }
    },
    components: {
        'OrganizationChartNodeTemplate': OrganizationChartNodeTemplate
    }
}
</script>
