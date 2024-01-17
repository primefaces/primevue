<template>
    <table :class="cx('table')" v-bind="ptm('table')">
        <tbody v-bind="ptm('body')">
            <tr v-if="node" v-bind="ptm('row')">
                <td :colspan="colspan" v-bind="ptm('cell')">
                    <div :class="[cx('node'), node.styleClass]" @click="onNodeClick" v-bind="getPTOptions('node')">
                        <component :is="templates[node.type] || templates['default']" :node="node" />
                        <a v-if="toggleable" tabindex="0" :class="cx('nodeToggler')" @click="toggleNode" @keydown="onKeydown" v-bind="getPTOptions('nodeToggler')">
                            <component v-if="templates.togglericon" :is="templates.togglericon" :expanded="expanded" class="p-node-toggler-icon" />
                            <component v-else :is="expanded ? 'ChevronDownIcon' : 'ChevronUpIcon'" :class="cx('nodeTogglerIcon')" v-bind="getPTOptions('nodeTogglerIcon')" />
                        </a>
                    </div>
                </td>
            </tr>
            <tr :style="childStyle" :class="cx('lines')" v-bind="ptm('lines')">
                <td :colspan="colspan" v-bind="ptm('lineCell')">
                    <div :class="cx('lineDown')" v-bind="ptm('lineDown')"></div>
                </td>
            </tr>
            <tr :style="childStyle" :class="cx('lines')" v-bind="ptm('lines')">
                <template v-if="node.children && node.children.length === 1">
                    <td :colspan="colspan" v-bind="ptm('lineCell')">
                        <div :class="cx('lineDown')" v-bind="ptm('lineDown')"></div>
                    </td>
                </template>
                <template v-if="node.children && node.children.length > 1">
                    <template v-for="(child, i) of node.children" :key="child.key">
                        <td :class="cx('lineLeft', { index: i })" v-bind="getNodeOptions(!(i === 0), 'lineLeft')">&nbsp;</td>
                        <td :class="cx('lineRight', { index: i })" v-bind="getNodeOptions(!(i === node.children.length - 1), 'lineRight')">&nbsp;</td>
                    </template>
                </template>
            </tr>
            <tr :style="childStyle" :class="cx('nodes')" v-bind="ptm('nodes')">
                <td v-for="child of node.children" :key="child.key" colspan="2" v-bind="ptm('nodeCell')">
                    <OrganizationChartNode
                        :node="child"
                        :templates="templates"
                        :collapsedKeys="collapsedKeys"
                        @node-toggle="onChildNodeToggle"
                        :collapsible="collapsible"
                        :selectionMode="selectionMode"
                        :selectionKeys="selectionKeys"
                        @node-click="onChildNodeClick"
                        :pt="pt"
                        :unstyled="unstyled"
                    />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronUpIcon from 'primevue/icons/chevronup';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'OrganizationChartNode',
    hostName: 'OrganizationChart',
    extends: BaseComponent,
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
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    expanded: this.expanded,
                    selectable: this.selectable,
                    selected: this.selected,
                    toggleable: this.toggleable,
                    active: this.selected
                }
            });
        },
        getNodeOptions(lineTop, key) {
            return this.ptm(key, {
                context: {
                    lineTop
                }
            });
        },
        onNodeClick(event) {
            if (DomHandler.getAttribute(event.target, 'nodeToggler') || DomHandler.getAttribute(event.target, 'nodeTogglerIcon')) {
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
        },
        onKeydown(event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') {
                this.toggleNode();
                event.preventDefault();
            }
        }
    },
    computed: {
        leaf() {
            return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
        },
        colspan() {
            return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
        },
        childStyle() {
            return {
                visibility: !this.leaf && this.expanded ? 'inherit' : 'hidden'
            };
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
    },
    components: {
        ChevronDownIcon: ChevronDownIcon,
        ChevronUpIcon: ChevronUpIcon
    }
};
</script>
