<template>
	<div class="p-dataview-layout-options p-selectbutton p-buttonset">
		<button :class="buttonListClass" @click="changeLayout('list')" type="button">
			<i class="pi pi-bars"></i>
			<span class="p-button-text">&nbsp;</span>
		</button>
		<button :class="buttonGridClass" @click="changeLayout('grid')" type="button">
			<i class="pi pi-th-large"></i>
			<span class="p-button-text">&nbsp;</span>
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