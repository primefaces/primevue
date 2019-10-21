<template>
	<div class="carousel-demo">
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>Carousel</h1>
				<p>Carousel.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
				<template #header>
					<h2>Basic</h2>
				</template>
				<template #item="slotProps">
					<div class="car-details">
						<div class="p-grid p-nogutter">
							<div class="p-col-12">
								<img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
							</div>
							<div class="p-col-12 car-data">
								<div class="car-title">{{slotProps.data.brand}}</div>
								<div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div>

								<div class="car-buttons">
									<Button icon="pi pi-search" class="p-button-secondary" />
									<Button icon="pi pi-star" class="p-button-secondary" />
									<Button icon="pi pi-cog" class="p-button-secondary" />
								</div>
							</div>
						</div>
					</div>
				</template>
			</Carousel>
			<Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
				<template #header>
					<h2>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h2>
				</template>
				<template #item="slotProps">
					<div class="car-details">
						<div class="p-grid p-nogutter">
							<div class="p-col-12">
								<img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
							</div>
							<div class="p-col-12 car-data">
								<div class="car-title">{{slotProps.data.brand}}</div>
								<div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div>

								<div class="car-buttons">
									<Button icon="pi pi-search" class="p-button-secondary" />
									<Button icon="pi pi-star" class="p-button-secondary" />
									<Button icon="pi pi-cog" class="p-button-secondary" />
								</div>
							</div>
						</div>
					</div>
				</template>
			</Carousel>
			<Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" :responsiveOptions="responsiveOptions" verticalViewPortHeight="330px"
						style="max-width: 400px; margin-top: 2em">
				<template #header>
					<h2>Vertical</h2>
				</template>
				<template #item="slotProps">
					<div class="car-details">
						<div class="p-grid p-nogutter">
							<div class="p-col-12">
								<img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
							</div>
							<div class="p-col-12 car-data">
								<div class="car-title">{{slotProps.data.brand}}</div>
								<div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div>

								<div class="car-buttons">
									<Button icon="pi pi-search" class="p-button-secondary" />
									<Button icon="pi pi-star" class="p-button-secondary" />
									<Button icon="pi pi-cog" class="p-button-secondary" />
								</div>
							</div>
						</div>
					</div>
				</template>
			</Carousel>
		</div>
	</div>
</template>

<script>
import CarService from "../../service/CarService";

export default {
	data() {
		return {
			cars: null,
			responsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
				},
				{
					breakpoint: '600px',
					numVisible: 2,
					numScroll: 2
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
		}
	},
	carService: null,
	created() {
		this.carService = new CarService();
	},
	mounted() {
		this.carService.getCarsSmall().then(data => this.cars = data);
	},
	name: "CarouselDemo",
}
</script>

<style>
.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-details > .p-grid {
	border: 1px solid #b3c2ca;
	border-radius: 3px;
	margin: .3em;
	text-align: center;
	padding: 2em 0 2.25em 0;
}

.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data .car-title {
	font-weight: 700;
	font-size: 20px;
	margin-top: 24px;
}

.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data .car-subtitle {
	margin: .25em 0 2em 0;
}

.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data button {
	margin-left: .5em;
}

.carousel-demo .p-carousel .p-carousel-content .p-carousel-item .car-data button:first-child {
	margin-left: 0;
}

.carousel-demo .p-carousel.custom-carousel .p-carousel-dot-icon {
	width: 16px !important;
	height: 16px !important;
	border-radius: 50%;
}

.carousel-demo .p-carousel.p-carousel-horizontal .p-carousel-content .p-carousel-item.p-carousel-item-start .car-details > .p-grid {
	margin-left: .6em;
}

.carousel-demo .p-carousel.p-carousel-horizontal .p-carousel-content .p-carousel-item.p-carousel-item-end .car-details > .p-grid {
	margin-right: .6em;
}
</style>