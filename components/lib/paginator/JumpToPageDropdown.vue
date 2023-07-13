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
        data-pc-section="jumptopagedropdown"
    ></JTPDropdown>
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
        disabled: Boolean
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
