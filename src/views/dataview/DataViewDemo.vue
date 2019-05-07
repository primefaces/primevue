<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataView</h1>
				<p>DataView displays data in grid or list layout with pagination and sorting features.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<h3 class="first">Default</h3>
			<DataView :value="cars" :layout="layout" paginatorPosition='both' :paginator="true" :rows="20">
				<template #header>
					<div class="p-grid">
						<div class="p-col-6" style="text-align: right"></div>
						<div class="p-col-6" style="text-align: right">
							<DataViewLayoutOptions :layout="layout" @change="changeMode"></DataViewLayoutOptions>
						</div>
					</div>
				</template>
				<template #listItem="slotProps" >
					<div class="p-col-12 car-details" style="padding: 2em; border-bottom: 1px solid #d9d9d9">
						<div class="p-grid">
							<div class="p-col-12 p-md-3">
								<img :src="'/demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
							</div>
							<div class="p-col-12 p-md-8 car-data">
								<div>Vin: <b>{{slotProps.data.vin}}</b></div>
								<div>Year: <b>{{slotProps.data.year}}</b></div>
								<div>Brand: <b>{{slotProps.data.brand}}</b></div>
								<div>Color: <b>{{slotProps.data.color}}</b></div>
							</div>

							<div class="p-col-12 p-md-1 search-icon" style="margin-top: 40px">
								<Button icon="pi pi-search"></Button>
							</div>
						</div>
					</div>
				</template>
				<template #gridItem="slotProps">
					<div style="padding: .5em" class="p-col-12 p-md-3">
						<img :src="'/demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
						<div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>
						<hr class="ui-widget-content" style="border-top: 0" />
						<Button icon="pi pi-search"></Button>
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
			changeMode(event) {
				this.layout = event.value;
			}
		},
		components: {
			'DataViewDoc': DataViewDoc
		}
	}
</script>

<style scoped>

</style>