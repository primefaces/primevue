<template>
    <span class="p-paginator-pages">
        <button v-for="pageLink of value" :key="pageLink" :class="['p-paginator-page p-paginator-element p-link', {'p-highlight': ((pageLink - 1) === page)}]" type="button"
            @click="onPageLinkClick($event, pageLink)">{{pageLink}}</button>
    </span>
</template>
<script>
	export default {
		inheritAttrs: false,
		props: {
			value: Array,
			page: Number
		},
		methods: {
			onPageLinkClick(event, pageLink) {
				this.$emit('click', {
					originalEvent: event,
					value: pageLink
				});
			}
		}
	}
</script>