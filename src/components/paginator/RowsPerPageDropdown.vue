<template>
	<RPPDropdown :value="rows" :options="rowsOptions" optionLabel="label" optionValue="value"
        @input="onChange($event)" :disabled="disabled"></RPPDropdown>
</template>

<script>
import Dropdown from '../dropdown/Dropdown';

export default {
    inheritAttrs: false,
    props: {
        options: Array,
        rows: Number,
        disabled: Boolean
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