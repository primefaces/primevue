<template>
    <div class="p-dataview-layout-options p-selectbutton p-buttonset">
        <button role="group" :aria-label="listViewAriaLabel" :class="buttonListClass" @click="changeLayout('list')" type="button">
            <i class="pi pi-bars"></i>
        </button>
        <button role="group" :aria-label="gridViewAriaLabel" :class="buttonGridClass" @click="changeLayout('grid')" type="button">
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
        },
        listViewAriaLabel() {
            return this.$primevue.config.locale.aria.listView;
        },
        gridViewAriaLabel() {
            return this.$primevue.config.locale.aria.gridView;
        }
    }
};
</script>
