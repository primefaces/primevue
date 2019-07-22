<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>DeferredContent</h1>
                <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll..</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div style="height: 800px">
                Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
            </div>

            <DeferredContent @load="onImageLoad">
                <img src="demo/images/nature/nature4.jpg" alt="Nature"/>
            </DeferredContent>

            <div style="height: 500px">
            </div>

            <DeferredContent @load="onDataLoad">
                <DataTable :value="cars">
                    <Column field="vin" header="Vin"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="brand" header="Brand"></Column>
                    <Column field="color" header="Color"></Column>
                </DataTable>
            </DeferredContent>
        </div>

        <DeferredContentDoc />
    </div>
</template>
<script>
import CarService from '../../service/CarService';
import DeferredContentDoc from './DeferredContentDoc';

export default {
    data() {
        return {
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    methods: {
        onImageLoad() {
            this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
        },
        onDataLoad() {
            this.carService.getCarsSmall().then(data => this.cars = data);
            this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
        }
    },
    components: {
        'DeferredContentDoc': DeferredContentDoc
    }
}
</script>