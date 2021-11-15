<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>Paginator</h1>
				<p>Paginator is a generic component to display content in paged format.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Paginator :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10,20,30]"></Paginator>

                <h5>Custom</h5>
                <Paginator v-model:first="first" :rows="1" :totalRecords="totalRecords2"
                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <template #start>
                        <Button type="button" icon="pi pi-refresh" @click="reset()"/>
                    </template>
                    <template #end>
                        <Button type="button" icon="pi pi-search" />
                    </template>
                </Paginator>

                <div class="image-gallery">
                    <img :src="'demo/images/nature/' + image + '.jpg'" />
                </div>
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
            totalRecords: 120,
            totalRecords2: 12
        }
    },
    methods: {
        reset() {
            this.first = 0;
        }
    },
    computed: {
        image() {
            return 'nature' + (this.first + 1);
        }
    },
    components: {
        'PaginatorDoc': PaginatorDoc
    }
}
</script>

<style scoped>
.image-gallery {
    text-align: center;
    padding: 1rem;
}
</style>