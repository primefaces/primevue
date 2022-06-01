<template>
    <table class="p-organizationchart-table">
        <tbody>
            <tr v-if="node">
                <td :colspan="colspan">
                    <div :class="nodeContentClass" @click="onNodeClick">
                        <component :is="templates[node.type]||templates['default']" :node="node" />
                        <a v-if="toggleable" tabindex="0" class="p-node-toggler" @click="toggleNode" @keydown.enter="toggleNode">
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
                    <template v-for="(child,i) of node.children" :key="child.key">
                        <td class="p-organizationchart-line-left" :class="{'p-organizationchart-line-top': !(i === 0)}">&nbsp;</td>
                        <td class="p-organizationchart-line-right" :class="{'p-organizationchart-line-top': !(i === (node.children.length - 1))}">&nbsp;</td>
                    </template>
                </template>
            </tr>
            <tr :style="childStyle" class="p-organizationchart-nodes">
                <td v-for="child of node.children" :key="child.key" colspan="2">
                    <OrganizationChartNode :node="child" :templates="templates" :collapsedKeys="collapsedKeys" @node-toggle="onChildNodeToggle" :collapsible="collapsible"
                                :selectionMode="selectionMode" :selectionKeys="selectionKeys" @node-click="onChildNodeClick" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {DomHandler} from 'primevue/utils';

export default {
    name: 'OrganizationChartNode',
    emits: ['node-click', 'node-toggle'],
    props: {
        node: {
            type: null,
            default: null
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
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        }
    },
    methods: {
        onNodeClick(event) {
            if (DomHandler.hasClass(event.target, 'p-node-toggler') || DomHandler.hasClass(event.target, 'p-node-toggler-icon')) {
                return;
            }

            if (this.selectionMode) {
                this.$emit('node-click', this.node);
            }
        },
        onChildNodeClick(node) {
            this.$emit('node-click', node);
        },
        toggleNode() {
            this.$emit('node-toggle', this.node);
        },
        onChildNodeToggle(node) {
            this.$emit('node-toggle', node);
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
        },
        selectable() {
            return this.selectionMode && this.node.selectable !== false;
        },
        selected() {
            return this.selectable && this.selectionKeys && this.selectionKeys[this.node.key] === true;
        },
        toggleable() {
            return this.collapsible && this.node.collapsible !== false && !this.leaf;
        }
    }
}
</script>
