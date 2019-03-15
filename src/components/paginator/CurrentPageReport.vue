<template>
	<span class="p-paginator-current">{{text}}</span>
</template>
<script>
	export default {
		inheritAttrs: false,
		props: {
			pageCount: Number,
			page: Number,
			template: {
				type: String,
				default: '({currentPage} of {totalPages})'
			}
		},
		data() {
			return {
				text: ''
			}
		},
		watch: {
			page() {
				this.text = this.template
					.replace("{currentPage}", this.page + 1)
					.replace("{totalPages}", this.pageCount);
			}
		},
		mounted() {
			this.text = this.template
				.replace("{currentPage}", this.page + 1)
				.replace("{totalPages}", this.pageCount);
		}
	}
</script>