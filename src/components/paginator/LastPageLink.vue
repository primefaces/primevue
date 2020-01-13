<template>
	<button :class="containerClass" v-on="$listeners" type="button">
		<span class="p-paginator-icon pi pi-step-forward"></span>
	</button>
</template>
<script>
	export default {

		computed: {
			containerClass() {
				return ['p-paginator-last p-paginator-element p-link', {
					'p-disabled': this.$attrs.disabled
				}];
			}
		}
	}
</script>