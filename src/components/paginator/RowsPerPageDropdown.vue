<template>
	<RPPDropdown :modelValue="rows" :options="rowsOptions" optionLabel="label" optionValue="value"
        @update:modelValue="onChange($event)" class="p-paginator-rpp-options"></RPPDropdown>
</template>

<script>
import Dropdown from 'primevue/dropdown';

export default {
    name: 'RowsPerPageDropdown',
    inheritAttrs: false,
    emits: ['rows-change'],
    props: {
        options: Array,
        rows: Number
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
                for(let i= 0; i < this.options.length; i++) {
                    opts.push({label: String(this.options[i]), value: this.options[i]})
                }
            }
            return opts;
        }
    },
    components: {
        'RPPDropdown': Dropdown
    }
}
</script>
