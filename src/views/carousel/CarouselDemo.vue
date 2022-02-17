<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>Carousel</h1>
				<p>Carousel is a content slider featuring various customization options.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                    <template #header>
                        <h5>Basic</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                    <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                    <div class="car-buttons mt-5">
                                        <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                        <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                        <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>

            <div class="card">
                <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
                    <template #header>
                        <h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                    <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                    <div class="car-buttons mt-5">
                                        <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                        <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                        <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>

            <div class="card">
                <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="352px"
                            style="max-width: 400px; margin-top: 2em">
                    <template #header>
                        <h5>Vertical</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                    <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                    <div class="car-buttons mt-5">
                                        <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                        <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                        <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
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
import ProductService from '../../service/ProductService';
import CarouselDoc from "./CarouselDoc";

export default {
	data() {
		return {
            products: null,
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
    productService: null,
	created() {
        this.productService = new ProductService();
	},
	mounted() {
        this.productService.getProductsSmall().then(data => this.products = data.slice(0,9));
	},
	components: {
		'CarouselDoc': CarouselDoc
	}
}
</script>

<style lang="scss" scoped>
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
    }

    .product-image {
        width: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
</style>
