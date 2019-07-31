<template>
    <li :class="containerClass">
        <div class="p-treenode-content" tabindex="0" role="treeitem">
            <span class="p-tree-toggler p-unselectable-text p-link" @click="toggle">
                <span :class="toggleIcon"></span>
            </span>
            <span :class="icon"></span>
            <span class="p-treenode-label">{{node.label}}</span>
        </div>
        <ul class="p-treenode-children" role="group" v-if="hasChildren && expanded">
            <sub-treenode v-for="childNode of node.children" :key="childNode.key" :node="childNode"
                :expandedKeys="expandedKeys" @toggle="onChildNodeToggle"></sub-treenode>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'sub-treenode',
    props: {
        node: {
            type: null,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        }
    },
    methods: {
        toggle() {
            this.$emit('toggle', this.node);
        },
        onChildNodeToggle(node) {
            this.$emit('toggle', node);
        }
    },
    computed: {
        hasChildren() {
            return this.node.children && this.node.children.length > 0;
        },
        expanded() {
            return this.expandedKeys && this.expandedKeys[this.node.key] === true;
        },
        leaf() {
            return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
        },
        containerClass() {
            return ['p-treenode', {'p-treenode-leaf': this.leaf}];
        },
        icon() {
            return ['p-treenode-icon', this.node.icon];
        },
        toggleIcon() {
            return ['p-tree-toggler-icon pi pi-fw', {
                'pi-caret-down': this.expanded,
                'pi-caret-right': !this.expanded
            }];
        }
    }
}
</script>