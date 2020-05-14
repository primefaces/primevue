<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Inplace</h1>
                <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Input</h3>
            <Inplace :closable="true">
                <template #display>
                    {{text || 'Click to Edit'}}
                </template>
                <template #content>
                    <InputText v-model="text" autoFocus />
                </template>
            </Inplace>

            <h3>Image</h3>
            <Inplace>
                <template #display>
                    <span class="pi pi-search" style="vertical-align: middle"></span>
                    <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
                </template>
                <template #content>
                    <img src="demo/images/nature/nature1.jpg" />
                </template>
            </Inplace>

            <h3>Lazy Data</h3>
            <Inplace @open="loadData">
                <template #display>
                    View Data
                </template>
                <template #content>
                    <DataTable :value="cars">
                        <Column field="vin" header="Vin"></Column>
                        <Column field="year" header="Year"></Column>
                        <Column field="brand" header="Brand"></Column>
                        <Column field="color" header="Color"></Column>
                    </DataTable>
                </template>
            </Inplace>
        </div>

        <InplaceDoc />
    </div>
</template>

<script>
import CarService from '../../service/CarService';
import InplaceDoc from './InplaceDoc';

export default {
     data() {
        return {
            text: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    methods: {
        loadData() {
             this.carService.getCarsSmall().then(data => this.cars = data);
        }
    },
    components: {
        'InplaceDoc': InplaceDoc
    }
}
</script>
