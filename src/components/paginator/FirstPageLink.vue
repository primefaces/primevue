<template>
	<button :class="containerClass" @click="$emit('click',$event)">
		<span class="p-paginator-icon pi pi-step-backward"></span>
	</button>
</template>
<script>
	export default {
		inheritAttrs: false,
		props: {
			disabled: {
				type: null,
				default: false
			}
		},
		computed: {
			containerClass() {
				return ['p-paginator-first p-paginator-element p-link', {
					'p-disabled': this.disabled
				}];
			}
		}
	}
</script>