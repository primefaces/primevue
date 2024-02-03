<template>
    <JTPDropdown
        :modelValue="page"
        :options="pageOptions"
        optionLabel="label"
        optionValue="value"
        @update:modelValue="onChange($event)"
        :class="cx('jumpToPageDropdown')"
        :disabled="disabled"
        :unstyled="unstyled"
        :pt="ptm('jumpToPageDropdown')"
        data-pc-group-section="pagedropdown"
    >
        <template v-if="templates['jumptopagedropdownicon']" #dropdownicon="slotProps">
            <component :is="templates['jumptopagedropdownicon']" :class="slotProps.class" />
        </template>
    </JTPDropdown>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Dropdown from 'primevue/dropdown';

export default {
    name: 'JumpToPageDropdown',
    hostName: 'Paginator',
    extends: BaseComponent,
    emits: ['page-change'],
    props: {
        page: Number,
        pageCount: Number,
        disabled: Boolean,
        templates: null
    },
    methods: {
        onChange(value) {
            this.$emit('page-change', value);
        }
    },
    computed: {
        pageOptions() {
            let opts = [];

            for (let i = 0; i < this.pageCount; i++) {
                opts.push({ label: String(i + 1), value: i });
            }

            return opts;
        }
    },
    components: {
        JTPDropdown: Dropdown
    }
};
</script>
