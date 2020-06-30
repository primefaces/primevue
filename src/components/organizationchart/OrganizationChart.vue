<template>
    <div class="p-organizationchart p-component">
        <OrganizationChartNode :node="value" :templates="$scopedSlots"
            @node-toggle="onNodeToggle" :collapsedKeys="d_collapsedKeys" :collapsible="collapsible"
            @node-click="onNodeClick" :selectionMode="selectionMode" :selectionKeys="selectionKeys" />
    </div>
</template>

<script>
import OrganizationChartNode from './OrganizationChartNode';

export default {
    props: {
        value: {
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
    data() {
        return {
            d_collapsedKeys: this.collapsedKeys || {}
        }
    },
    watch: {
        collapsedKeys(newValue) {
            this.d_collapsedKeys = newValue;
        }
    },
    methods: {
        onNodeClick(node) {
            const key = node.key;

            if (this.selectionMode) {
                let _selectionKeys = this.selectionKeys ? {...this.selectionKeys} : {};

                if (_selectionKeys[key]) {
                    delete _selectionKeys[key];
                    this.$emit('node-unselect', node);
                }
                else {
                    if (this.selectionMode === 'single') {
                        _selectionKeys = {};
                    }

                    _selectionKeys[key] = true;
                    this.$emit('node-select', node);
                }

                this.$emit('update:selectionKeys', _selectionKeys);
            }
        },
        onNodeToggle(node) {
            const key = node.key;

            if (this.d_collapsedKeys[key]) {
                delete this.d_collapsedKeys[key];
                this.$emit('node-expand', node);
            }
            else {
                this.d_collapsedKeys[key] = true;
                this.$emit('node-collapse', node);
            }

            this.d_collapsedKeys = {...this.d_collapsedKeys};
            this.$emit('update:collapsedKeys', this.d_collapsedKeys);
        }
    },
    components: {
        'OrganizationChartNode': OrganizationChartNode
    }
}
</script>

<style>
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 .75rem;
}

.p-organizationchart-node-content {
    display: inline-block;
    position: relative;
}

.p-organizationchart-node-content .p-node-toggler {
    position: absolute;
    bottom: -.75rem;
    margin-left: -.75rem;
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
}

.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
    position: relative;
    top: .25rem;
}

.p-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
}

.p-organizationchart-line-right {
    border-radius: 0px;
}

 .p-organizationchart-line-left {
    border-radius: 0;
}

.p-organizationchart-selectable-node {
    cursor: pointer;
}
</style>
