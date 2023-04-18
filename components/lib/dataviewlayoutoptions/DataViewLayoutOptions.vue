<template>
    <div class="p-dataview-layout-options p-selectbutton p-buttonset" role="group">
        <button :aria-label="listViewAriaLabel" :class="buttonListClass" @click="changeLayout('list')" type="button" :aria-pressed="isListButtonPressed">
            <slot name="listicon">
                <BarsIcon />
            </slot>
        </button>
        <button :aria-label="gridViewAriaLabel" :class="buttonGridClass" @click="changeLayout('grid')" type="button" :aria-pressed="isGridButtonPressed">
            <slot name="gridicon">
                <ThLargeIcon />
            </slot>
        </button>
    </div>
</template>

<script>
import BarsIcon from 'primevue/icons/bars';
import ThLargeIcon from 'primevue/icons/thlarge';

export default {
    name: 'DataViewLayoutOptions',
    emits: ['update:modelValue'],
    props: {
        modelValue: String
    },
    data() {
        return {
            isListButtonPressed: false,
            isGridButtonPressed: false
        };
    },
    methods: {
        changeLayout(layout) {
            this.$emit('update:modelValue', layout);

            if (layout === 'list') {
                this.isListButtonPressed = true;
                this.isGridButtonPressed = false;
            } else if (layout === 'grid') {
                this.isGridButtonPressed = true;
                this.isListButtonPressed = false;
            }
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
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listView : undefined;
        },
        gridViewAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.gridView : undefined;
        }
    },
    components: {
        BarsIcon: BarsIcon,
        ThLargeIcon: ThLargeIcon
    }
};
</script>
