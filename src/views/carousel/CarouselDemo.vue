<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>Carousel</h1>
				<p>Carousel is a content slider featuring various customization options.</p>
			</div>
		</div>

		<div class="content-section implementation">
			<Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
				<template #header>
					<h3>Basic</h3>
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
					<h3>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h3>
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

			<Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px"
						style="max-width: 400px; margin-top: 2em">
				<template #header>
					<h3>Vertical</h3>
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

		<CarouselDoc/>
	</div>
</template>

<script>
import CarService from "../../service/CarService";
import CarouselDoc from "./CarouselDoc";

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
	components: {
		'CarouselDoc': CarouselDoc
	},
}
</script>

<style lang="scss" scoped>
.p-carousel {

	.p-carousel-header {
		h3 {
			font-weight: 500;
			font-size: 18px;
		}
	}

	.p-carousel-content {
		.p-carousel-item {
			.car-details {
				> .p-grid {
					border: 1px solid #dee2e6;
					border-radius: 3px;
					margin: .3em;
					text-align: center;
					padding: 2em 0 2.25em 0;
				}
			}

			.car-data {
				.car-title {
					font-weight: 600;
					font-size: 20px;
					margin-top: 24px;
				}

				.car-subtitle {
					margin: .25em 0 2em 0;
				}

				button {
					margin-left: .5em;

					&:first-child {
						margin-left: 0;
					}
				}
			}
		}
	}

	&.custom-carousel {
		/deep/ .p-carousel-dot-icon  {
			width: 16px !important;
			height: 16px !important;
			border-radius: 50%;
		}
	}

	&.p-carousel-horizontal {
		.p-carousel-content {
			.p-carousel-item {
				&.p-carousel-item-start {
					.car-details {
						> .p-grid {
							margin-left: .6em;
						}
					}
				}

				&.p-carousel-item-end {
					.car-details {
						> .p-grid {
							margin-right: .6em;
						}
					}
				}
			}
		}
	}
}

/* Dark Theme such as luna-amber, luna-blue, luna-green and luna-pink */
.dark-theme {
	.p-carousel {
		.p-carousel-content {
			.p-carousel-item {
				.car-details {
					> .p-grid {
						border: 1px solid #191919;
						background-color: #323232;
					}
				}
			}
		}
	}
}
</style>