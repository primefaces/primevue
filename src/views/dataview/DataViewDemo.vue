<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataView</h1>
				<p>DataView displays data in grid or list layout with pagination and sorting features.</p>
			</div>
		</div>

		<div class="content-section implementation dataview-demo">
			<h3 class="first">Default</h3>
			<DataView :value="cars" :layout="layout" paginatorPosition='both' :paginator="true" :rows="20" :sortOrder="sortOrder" :sortField="sortField">
				<template #header>
					<div class="p-grid p-nogutter">
						<div class="p-col-6" style="text-align: left">
							<Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/>
						</div>
						<div class="p-col-6" style="text-align: right">
							<DataViewLayoutOptions v-model="layout" />
						</div>
					</div>
				</template>
				<template #listItem="slotProps" >
					<div class="p-col-12 car-details" style="padding: 2em; border-bottom: 1px solid #d9d9d9">
						<div class="p-grid">
							<div class="p-col-12 p-md-3">
								<img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
							</div>
							<div class="p-col-12 p-md-8 car-details">
								<div class="p-grid">
									<div class="p-col-12">Vin: <b>{{slotProps.data.vin}}</b></div>

									<div class="p-col-12">Year: <b>{{slotProps.data.year}}</b></div>

									<div class="p-col-12">Brand: <b>{{slotProps.data.brand}}</b></div>

									<div class="p-col-12">Color: <b>{{slotProps.data.color}}</b></div>
								</div>
							</div>
							<div class="p-col-12 p-md-1 search-icon" style="margin-top: 40px">
								<Button icon="pi pi-search"></Button>
							</div>
						</div>
					</div>
				</template>
				<template #gridItem="slotProps">
					<div style="padding: .5em" class="p-col-12 p-md-3">
						<Panel :header="slotProps.data.vin" style="text-align: center">
							<img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
							<div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>
							<hr class="ui-widget-content" style="border-top: 0" />
							<Button icon="pi pi-search"></Button>
						</Panel>
					</div>
				</template>
			</DataView>
		</div>

		<DataViewDoc />
	</div>
</template>

<script>
import CarService from '../../service/CarService';
import DataViewDoc from './DataViewDoc';

export default {
    data() {
        return {
            cars: null,
            layout: 'list',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                {label: 'Newest First', value: '!year'},
                {label: 'Oldest First', value: 'year'},
                {label: 'Brand', value: 'brand'}
            ]
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsLarge().then(data => this.cars = data);
    },
    methods: {
        onSortChange(event){
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            }
            else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    },
    components: {
        'DataViewDoc': DataViewDoc
    }
}
</script>

<style lang="scss">
.dataview-demo {
	.ui-button {
		margin-top: 3em;
	}

	.filter-container {
		text-align: center;
	}

	.car-data > div {
		padding: .429em;
    }
    
    .p-dropdown {
        width: 12em;
    }
}

@media (max-width: 767px) {
	.dataview-demo {
		.car-details, .search-icon {
			text-align: center;
			margin-top: 0;
		}

		.filter-container {
			text-align: left;
		}
	}
}

</style>