<template>
    <div ref="container" :class="cx('root')" v-bind="ptm('root')" data-pc-name="splitterpanel">
        <slot></slot>
    </div>
</template>

<script>
import BaseSplitterPanel from './BaseSplitterPanel.vue';

export default {
    name: 'SplitterPanel',
    extends: BaseSplitterPanel,
    computed: {
        isNested() {
            return this.$slots.default().some((child) => {
                return child.type.name === 'Splitter';
            });
        }
    }
};
</script>
