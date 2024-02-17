<template>
    <div :class="cx('root')" role="group" v-bind="ptmi('root')">
        <button :aria-label="listViewAriaLabel" :class="cx('listButton')" @click="changeLayout('list')" type="button" :aria-pressed="isListButtonPressed" v-bind="ptm('listButton')">
            <slot name="listicon">
                <BarsIcon v-bind="ptm('listIcon')" />
            </slot>
        </button>
        <button :aria-label="gridViewAriaLabel" :class="cx('gridButton')" @click="changeLayout('grid')" type="button" :aria-pressed="isGridButtonPressed" v-bind="ptm('gridButton')">
            <slot name="gridicon">
                <ThLargeIcon v-bind="ptm('gridIcon')" />
            </slot>
        </button>
    </div>
</template>

<script>
import BarsIcon from 'primevue/icons/bars';
import ThLargeIcon from 'primevue/icons/thlarge';
import BaseDataViewLayoutOptions from './BaseDataViewLayoutOptions.vue';

export default {
    name: 'DataViewLayoutOptions',
    extends: BaseDataViewLayoutOptions,
    inheritAttrs: false,
    emits: ['update:modelValue'],
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
