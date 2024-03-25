<template>
    <SelectButton :class="cx('root')" :modelValue="modelValue" :options="options" :allowEmpty="false" :unstyled="unstyled" :pt="{ ...ptm('selectbutton'), ...ptm('root') }" @update:modelValue="changeLayout">
        <template #option="{ option }">
            <slot v-if="option === 'list'" name="listicon">
                <BarsIcon v-bind="ptm('listIcon')" />
            </slot>
            <slot v-else-if="option === 'grid'" name="gridicon">
                <ThLargeIcon v-bind="ptm('gridIcon')" />
            </slot>
        </template>
    </SelectButton>
</template>

<script>
import BarsIcon from 'primevue/icons/bars';
import ThLargeIcon from 'primevue/icons/thlarge';
import SelectButton from 'primevue/selectbutton';
import BaseDataViewLayoutOptions from './BaseDataViewLayoutOptions.vue';

export default {
    name: 'DataViewLayoutOptions',
    extends: BaseDataViewLayoutOptions,
    inheritAttrs: false,
    emits: ['update:modelValue'],
    data() {
        return {
            options: ['list', 'grid']
        };
    },
    methods: {
        changeLayout(layout) {
            this.$emit('update:modelValue', layout);
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
        SelectButton,
        BarsIcon,
        ThLargeIcon
    }
};
</script>
