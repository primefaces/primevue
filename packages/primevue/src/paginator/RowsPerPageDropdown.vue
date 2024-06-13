<template>
    <RPPSelect
        :modelValue="rows"
        :options="rowsOptions"
        optionLabel="label"
        optionValue="value"
        @update:modelValue="onChange($event)"
        :class="cx('pcRowPerPageDropdown')"
        :disabled="disabled"
        :unstyled="unstyled"
        :pt="ptm('pcRowPerPageDropdown')"
        data-pc-group-section="pagedropdown"
    >
        <template v-if="templates['rowsperpagedropdownicon']" #dropdownicon="slotProps">
            <component :is="templates['rowsperpagedropdownicon']" :class="slotProps.class" />
        </template>
    </RPPSelect>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import Select from 'primevue/select';

export default {
    name: 'RowsPerPageDropdown',
    hostName: 'Paginator',
    extends: BaseComponent,
    emits: ['rows-change'],
    props: {
        options: Array,
        rows: Number,
        disabled: Boolean,
        templates: null
    },
    methods: {
        onChange(value) {
            this.$emit('rows-change', value);
        }
    },
    computed: {
        rowsOptions() {
            let opts = [];

            if (this.options) {
                for (let i = 0; i < this.options.length; i++) {
                    opts.push({ label: String(this.options[i]), value: this.options[i] });
                }
            }

            return opts;
        }
    },
    components: {
        RPPSelect: Select
    }
};
</script>
