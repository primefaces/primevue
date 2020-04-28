<template>
	<button :class="containerClass" v-on="$listeners" type="button">
		<span class="p-paginator-icon pi pi-step-backward"></span>
	</button>
</template>
<script>
	export default {
		computed: {
			containerClass() {
				return ['p-paginator-first p-paginator-element p-link', {
					'p-disabled': this.$attrs.disabled
				}];
			}
		}
	}
</script>