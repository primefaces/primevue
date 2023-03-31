<template>
    <div ref="container" :class="containerClass" v-bind="ptm('root')">
        <slot></slot>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'SplitterPanel',
    extends: BaseComponent,
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
            default: null
        }
    },
    computed: {
        containerClass() {
            return ['p-splitter-panel', { 'p-splitter-panel-nested': this.isNested }];
        },
        isNested() {
            return this.$slots.default().some((child) => {
                return child.type.name === 'Splitter';
            });
        }
    }
};
</script>
