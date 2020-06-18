<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>Carousel</h1>
				<p>Carousel is a content slider featuring various customization options.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
                    <template #header>
                        <h5>Basic</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="car-item">
                            <div class="car-content">
                                <div>
                                    <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
                                </div>
                                <div>
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

            <div class="card">
                <Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
                    <template #header>
                        <h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="car-item">
                            <div class="car-content">
                                <div>
                                    <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
                                </div>
                                <div>
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

            <div class="card">
                <Carousel :value="cars" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="325px"
                            style="max-width: 400px; margin-top: 2em">
                    <template #header>
                        <h5>Vertical</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="car-item">
                            <div class="car-content">
                                <div>
                                    <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
                                </div>
                                <div>
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
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0rem;
    }
}

.car-item {
    .car-content {
        border: 1px solid var(--surface-d);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2em 0 2.25em 0;
    }

    .car-title {
        font-weight: 600;
        font-size: 20px;
        margin-top: 24px;
    }

    .car-subtitle {
        margin: .25em 0 2em 0;
    }

    button {
        margin-left: .5rem;

        &:first-child {
            margin-left: 0;
        }
    }
}
</style>