<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>Paginator</h1>
				<p>Paginator is a generic component to display content in paged format.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<h3 class="first">Default</h3>
			<Paginator :first.sync="first" :rows.sync="rows" :totalRecords="totalRecords" :rowsPerPageOptions="[10,20,30]"></Paginator>

			<h3>Custom Template</h3>
			<Paginator :first="first2" :rows="rows2" :totalRecords="totalRecords2" @change="onPageChangeCustom($event)" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                <template #left>
                    <Button type="button" icon="pi pi-refresh" />
                </template>
                <template #right>
                    <Button type="button" icon="pi pi-search" />
                </template>
            </Paginator>
		</div>

        <PaginatorDoc />
	</div>
</template>

<script>
import PaginatorDoc from './PaginatorDoc';

export default {
    data() {
        return {
			first: 0,
            rows: 10,
            totalRecords: 50,
            first2: 0,
            rows2: 1,
            totalRecords2: 12
        }
    },
    methods: {
        onPageChangeCustom(event) {
            this.first2 = event.first;
            this.rows2 = event.rows;
        }
    },
    components: {
        'PaginatorDoc': PaginatorDoc
    }
}
</script>

<style lang="scss">
    .p-button.p-button-icon-only {
        border-radius: 0;
    }
</style>