<template>
	<Dropdown v-model="selectedRow" :options="rowOptions" optionLabel="name" @change="$emit('rowsChange',$event)" :placeholder="String(value)"></Dropdown>
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
				if(this.options) {
					for(var i= 0; i<this.options.length; i++) {
						newOption.push({name: String(this.options[i]), code: this.options[i]})
					}
				}
				return newOption;
			}
		}

	}
</script>