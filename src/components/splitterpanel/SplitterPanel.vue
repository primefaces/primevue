<template>
    <div ref="container" :class="containerClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SplitterPanel',
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
            return ['p-splitter-panel', {'p-splitter-panel-nested': this.isNested}];
        },
        isNested() {
            return this.$slots.default().some(child => {
                return child.type.name === 'Splitter';
            });
        }
    }
}
</script>
