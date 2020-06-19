<template>
	<button :class="containerClass" v-on="$listeners" type="button">
		<span class="p-paginator-icon pi pi-angle-left"></span>
	</button>
</template>
<script>
	export default {
		computed: {
			containerClass() {
				return ['p-paginator-prev p-paginator-element p-link', {
					'p-disabled': this.$attrs.disabled
				}];
			}
		}
	}
</script>