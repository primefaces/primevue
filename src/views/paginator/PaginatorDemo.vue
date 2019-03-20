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
			<Paginator :first="first" :rows="rows" :totalRecords="totalRecords" @change="onPageChange($event)" :rowsPerPageOptions="[10,20,30]"></Paginator>

			<h3>Custom Template</h3>
			<Paginator :first="first2" :rows="rows2" :totalRecords="totalRecords2" @change="onPageChangeCustom($event)" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
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
        onPageChange(event) {
            this.first = event.first;
            this.rows = event.rows;
        },
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