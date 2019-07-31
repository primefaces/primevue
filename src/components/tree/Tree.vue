<template>
    <div :class="containerClass">
        <ul class="p-tree-container" role="tree">
            <TreeNode v-for="node of value" :key="node.key" :node="node"
                :expandedKeys="d_expandedKeys" @toggle="onNodeToggle"></TreeNode>
        </ul>
    </div>
</template>

<script>
import TreeNode from './TreeNode';

export default {
    props: {
        value: {
            type: null,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            d_expandedKeys: this.expandedKeys || {}
        }
    },
    watch: {
        expandedKeys(newValue) {
            this.d_expandedKeys = newValue;
        }
    },
    methods: {
        onNodeToggle(node) {
            const key = node.key;

            if (this.d_expandedKeys[key]) {
                delete this.d_expandedKeys[key];
                this.$emit('node-collapse', node);
            }
            else {
                this.d_expandedKeys[key] = true;
                this.$emit('node-expand', node);
            }                

            this.d_expandedKeys = {...this.d_expandedKeys};
            this.$emit('update:expandedKeys', this.d_expandedKeys);
        }
    },
    computed: {
        containerClass() {
            return 'p-tree p-component';
        }
    },
    components: {
        'TreeNode': TreeNode
    }
}
</script>

<style>
.p-tree {
    width: 24em;
}

.p-tree .p-treenode-selectable.p-treenode-content {
    cursor: pointer;
}

.p-tree .p-tree-container {
    height: 100%;
    margin: 0;
    overflow: auto;
    padding: .25em;
    white-space: nowrap;
}

.p-tree .p-treenode-children {
    margin: 0;
    padding: 0 0 0 1em;
}

.p-tree .p-treenode {
    background-attachment: scroll;
    background-color: transparent;
    background-image: none;
    background-position: 0 0;
    background-repeat: repeat-y;
    list-style: none outside none;
    margin: 0;
    padding: .125em 0 0 0;
}

.p-tree .p-treenode-droppoint {
    height: 4px;
    list-style-type: none;
}

.p-tree .p-treenode-droppoint-active {
    border: 0 none;
}

.p-tree .p-tree-toggler {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
}

.p-tree .p-tree-toggler .p-tree-toggler-icon {
    vertical-align: middle;
}

.p-tree .p-treenode-icon {
    display: inline-block;
    vertical-align: middle;
}

.p-tree .p-treenode-label {
    display: inline-block;
    padding: 0 .25em;
    vertical-align: middle;
}

.p-tree .p-treenode.p-treenode-leaf > .p-treenode-content > .p-tree-toggler {
    visibility: hidden;
}

.p-tree .p-checkbox-box {
    cursor: pointer;
}

.p-tree .p-checkbox {
    display: inline-block;
    vertical-align: middle;
}

.p-tree .p-checkbox .p-checkbox-icon {
    margin-left: 1px;
}

.p-tree .p-tree-filter {
    width: 100%;
    box-sizing: border-box;
    padding-right: 1.5em;
}

.p-tree .p-tree-filter-container {
    position: relative;
    margin: 0;
    padding: 0.4em;
    display: inline-block;
    width: 100%;
}

.p-tree .p-tree-filter-container .p-tree-filter-icon {
    position: absolute;
    top: .8em;
    right: 1em;
}

/** Fluid **/
.p-fluid .p-tree {
    width: 100%;
}

/** Loading **/
.p-tree.p-tree-loading {
    position: relative;
    min-height: 4em;
}

.p-tree .p-tree-loading-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.p-tree .p-tree-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.p-tree .p-tree-loading-content .p-tree-loading-icon {
    font-size: 2em;
} 
</style>