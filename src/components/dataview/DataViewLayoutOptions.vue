<template>
	<div class="p-dataview-layout-options p-selectbutton p-buttonset">
		<button :class="buttonListClass" @click="changeLayout($event,'list')">
			<i class="pi pi-bars p-button-icon-left"></i>
			<span class="p-button-text p-clickable">p-btn</span>
		</button>
		<button :class="buttonGridClass" @click="changeLayout($event,'grid')">
			<i class="pi pi-th-large p-button-icon-left"></i>
			<span class="p-button-text p-clickable">p-btn</span>
		</button>
	</div>
</template>
<script>
	export default {
		props: {
			layout: {
				type: String,
				default: null
			}
		},
		computed: {
			buttonListClass(){
				return [
					'p-button p-button-icon-only',
					{'p-highlight': this.layout === 'list'}
				]
			},
			buttonGridClass(){
				return [
					'p-button p-button-icon-only',
					{'p-highlight': this.layout === 'grid'}
				]
			}
		},
		methods: {
			changeLayout(event, layoutMode){
				this.$emit('change', {originalEvent: event, value: layoutMode});
			}
		}
	}
</script>