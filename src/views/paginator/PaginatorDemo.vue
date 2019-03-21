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
			<Paginator :first.sync="first2" :rows="1" :totalRecords="totalRecords2" @page-change="onPageChangeCustom($event)" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                <template #left>
                    <Button type="button" icon="pi pi-refresh" @click="reset()"/>
                </template>
                <template #right>
                    <Button type="button" icon="pi pi-search" />
                </template>
            </Paginator>

            <div class="image-gallery">
                <img :src="'/demo/images/nature/' + image + '.jpg'" />
            </div>
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
            totalRecords2: 12,
            image: 'nature1'
        }
    },
    methods: {
        onPageChangeCustom(event) {
            this.image = 'nature' + (event.page + 1);
        },
        reset() {
            this.first2 = 0;
            this.image = 'nature1';
        }
    },
    components: {
        'PaginatorDoc': PaginatorDoc
    }
}
</script>

<style scoped>
    .p-button.p-button-icon-only {
        border-radius: 0;
    }

    .image-gallery {
        text-align: center;
        padding: 1em;
    }
</style>