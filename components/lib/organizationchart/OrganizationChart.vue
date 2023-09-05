<template>
    <div :class="cx('root')" v-bind="ptm('root')">
        <OrganizationChartNode
            :node="value"
            :templates="$slots"
            @node-toggle="onNodeToggle"
            :collapsedKeys="d_collapsedKeys"
            :collapsible="collapsible"
            @node-click="onNodeClick"
            :selectionMode="selectionMode"
            :selectionKeys="selectionKeys"
            :pt="pt"
            :unstyled="unstyled"
        />
    </div>
</template>

<script>
import BaseOrganizationChart from './BaseOrganizationChart.vue';
import OrganizationChartNode from './OrganizationChartNode.vue';

export default {
    name: 'OrganizationChart',
    extends: BaseOrganizationChart,
    emits: ['node-unselect', 'node-select', 'update:selectionKeys', 'node-expand', 'node-collapse', 'update:collapsedKeys'],
    data() {
        return {
            d_collapsedKeys: this.collapsedKeys || {}
        };
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
                let _selectionKeys = this.selectionKeys ? { ...this.selectionKeys } : {};

                if (_selectionKeys[key]) {
                    delete _selectionKeys[key];
                    this.$emit('node-unselect', node);
                } else {
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
            } else {
                this.d_collapsedKeys[key] = true;
                this.$emit('node-collapse', node);
            }

            this.d_collapsedKeys = { ...this.d_collapsedKeys };
            this.$emit('update:collapsedKeys', this.d_collapsedKeys);
        }
    },
    components: {
        OrganizationChartNode: OrganizationChartNode
    }
};
</script>
