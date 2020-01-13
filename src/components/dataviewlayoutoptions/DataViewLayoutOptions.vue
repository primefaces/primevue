<template>
	<div class="p-dataview-layout-options p-selectbutton p-buttonset">
		<button :class="buttonListClass" @click="changeLayout('list')" type="button">
			<i class="pi pi-bars p-button-icon-left"></i>
			<span class="p-button-text p-clickable">p-btn</span>
		</button>
		<button :class="buttonGridClass" @click="changeLayout('grid')" type="button">
			<i class="pi pi-th-large p-button-icon-left"></i>
			<span class="p-button-text p-clickable">p-btn</span>
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			value: String
		},
		computed: {
			buttonListClass(){
				return [
					'p-button p-button-icon-only',
					{'p-highlight': this.value === 'list'}
				]
			},
			buttonGridClass() {
				return [
					'p-button p-button-icon-only',
					{'p-highlight': this.value === 'grid'}
				]
			}
		},
		methods: {
			changeLayout(layout){
				this.$emit('input', layout);
			}
		}
	}
</script>