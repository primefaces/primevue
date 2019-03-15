<template>
	<Dropdown :value="value" v-model="selectedRow" :options="rowOptions" optionLabel="label" @change="$emit('change',$event)"></Dropdown>
</template>
<script>
	export default {
		inheritAttrs: false,
		props: {
			options: Array,
			value: Number
		},
		data() {
			return {
				selectedRow: null
			}
		},
		computed: {
			rowOptions() {
				var newOption = []
				for(var i= 0; i<this.options.length; i++) {
					newOption.push({label: String(this.options[i]), code: this.options[i]})
				}
				return newOption;
			}
		}
	}
</script>