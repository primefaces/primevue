<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FilterService</h1>
                <p>FilterService is a helper utility to filter collections against constraints.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Table Integration</h5>
                <p>A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter.</p>

                <DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
                    dataKey="id" v-model:filters="filters" filterDisplay="row" :loading="loading">
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                        <template #body="{data}">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                            <span class="image-text">{{data.country.name}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by country - ${filterModel.matchMode}`" />
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>

        <FilterServiceDoc />
    </div>
</template>

<script>
import FilterServiceDoc from './FilterServiceDoc';
import {FilterMatchMode,FilterService} from 'primevue/api';
import CustomerService from '../../service/CustomerService';

const YOUR_FILTER = 'YOUR FILTER';

export default {
    data() {
        return {
            customers: null,
            filters: {
                'name': {value: null, matchMode: YOUR_FILTER},
                'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
            },
            matchModeOptions: [
                {label: 'Your Equals', value: YOUR_FILTER},
                {label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
            ],
            loading: true
        }
    },
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {
            this.customers = data; 
            this.loading = false;
        });

        FilterService.register(YOUR_FILTER, (value, filter) => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
            
            return value.toString() === filter.toString();
        });
    },
    components: {
        'FilterServiceDoc': FilterServiceDoc
    }
}
</script>