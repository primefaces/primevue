<template>
    <div class="p-dataview-layout-options p-selectbutton p-buttonset">
        <button :class="buttonListClass" @click="changeLayout('list')" type="button">
            <i class="pi pi-bars"></i>
        </button>
        <button :class="buttonGridClass" @click="changeLayout('grid')" type="button">
            <i class="pi pi-th-large"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'DataViewLayoutOptions',
    emits: ['update:modelValue'],
    props: {
        modelValue: String
    },
    methods: {
        changeLayout(layout) {
            this.$emit('update:modelValue', layout);
        }
    },
    computed: {
        buttonListClass() {
            return ['p-button p-button-icon-only', { 'p-highlight': this.modelValue === 'list' }];
        },
        buttonGridClass() {
            return ['p-button p-button-icon-only', { 'p-highlight': this.modelValue === 'grid' }];
        }
    }
};
</script>
