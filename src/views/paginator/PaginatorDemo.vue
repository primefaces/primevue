<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>Paginator</h1>
				<p>Paginator is a generic widget to display content in paged format.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<h3 class="first">Default</h3>
			<Paginator :first="first" :rows="rows" :totalRecords="120" @change="onPageChange($event)" :rowsPerPageOptions="[10,20,30]"></Paginator>

			<h3 class="first">Custom Template</h3>
			<Paginator :first="first2" :rows="rows2" :totalRecords="120" @change="onPageChange2($event)" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				first:0,
				rows:10,
				first2:0,
				rows2:10
			}
		},
		methods: {
			onPageChange(event){
				this.first = event.first;
				this.rows = event.rows;
			},
			onPageChange2(event){
				this.first2 = event.first;
				this.rows2 = event.rows;
			}
		}
	}
</script>

<style lang="scss">
</style>
