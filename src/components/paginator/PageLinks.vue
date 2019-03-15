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
		},
		render() {
			return (<span class="p-paginator-pages">
					{this.value.map((pageLink, i) => {
						 return <button key={pageLink} class={['p-paginator-page p-paginator-element p-link', {
						'p-highlight': ((pageLink - 1) === this.page)}]} on-click={e => this.onPageLinkClick(e, pageLink)}>{pageLink}</button>
						})
					}
				</span>)
		}
	}
</script>