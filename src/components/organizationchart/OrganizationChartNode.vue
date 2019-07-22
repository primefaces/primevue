<template>
    <table class="p-organizationchart-table">
        <tbody>
            <tr v-if="node">
                <td :colspan="colspan">
                    <div :class="nodeContentClass" @click="onNodeClick">
                        {{node.label}}
                        <a v-if="!leaf" tabindex="0" class="p-node-toggler" @click="toggleNode" @keydown.enter="toggleNode">
                            <i class="p-node-toggler-icon pi" :class="{'pi-chevron-down': node.expanded, 'pi-chevron-up': !node.expanded}"></i>
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
                        <td :key="(child.key || child.label) + '_left'" class="p-organizationchart-line-left" :class="{'p-organizationchart-line-top': !(i === 0)}">&nbsp;</td>
                        <td :key="(child.key || child.label) + '_right'" class="p-organizationchart-line-right" :class="{'p-organizationchart-line-top': !(i === (node.children.length - 1))}">&nbsp;</td>
                    </template>
                </template>
            </tr>
            <tr :style="childStyle" class="p-organizationchart-nodes">
                <td v-for="child of node.children" :key="child.key || child.label" colspan="2">
                    <sub-node :node="child" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
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
        }
    },
    methods: {
        onNodeClick() {

        },
        toggleNode() {

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
                visibility: !this.leaf && this.node.expanded ? 'inherit' : 'hidden'
            }
        }
    }
}
</script>
