<template>
    <div ref="container" :class="cx('root')" v-bind="ptmi('root', getPTOptions)">
        <slot></slot>
    </div>
</template>

<script>
import BaseSplitterPanel from './BaseSplitterPanel.vue';

export default {
    name: 'SplitterPanel',
    extends: BaseSplitterPanel,
    inheritAttrs: false,
    data() {
        return {
            nestedState: null
        };
    },
    computed: {
        isNested() {
            return this.$slots.default().some((child) => {
                this.nestedState = child.type.name === 'Splitter' ? true : null;

                return this.nestedState;
            });
        },
        getPTOptions() {
            return {
                context: {
                    nested: this.isNested
                }
            };
        }
    }
};
</script>
