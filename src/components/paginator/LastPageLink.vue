<template>
	<button :class="containerClass" @click="$emit('click',$event)">
		<span class="p-paginator-icon pi pi-step-forward"></span>
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
				return ['p-paginator-last p-paginator-element p-link', {
					'p-disabled': this.disabled
				}];
			}
		}
	}
</script>