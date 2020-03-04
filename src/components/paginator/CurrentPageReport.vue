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
		computed: {
            text() {
                return this.template.replace("{currentPage}", this.page + 1).replace("{totalPages}", this.pageCount);
            }
		}
	}
</script>