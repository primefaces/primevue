<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>PickList</h1>
                <p>PickList is used to reorder items between different lists.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <PickList v-model="products" listStyle="height:342px" dataKey="id">
                    <template #sourceheader>
                        Available
                    </template>
                    <template #targetheader>
                        Selected
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="image-container">
                                <img :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                            </div>
                            <div class="product-list-detail">
                                <h6 class="p-mb-2">{{slotProps.item.name}}</h6>
                                <i class="pi pi-tag product-category-icon"></i>
                                <span class="product-category">{{slotProps.item.category}}</span>
                            </div>
                            <div class="product-list-action">
                                <h6 class="p-mb-2">${{slotProps.item.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.inventoryStatus}}</span>
                            </div>
                        </div>
                    </template>
                </PickList>
            </div>
        </div>

        <PickListDoc />
    </div>
</template>

<script>
import PickListDoc from './PickListDoc';
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = [data, []]);
    },
    components: {
        'PickListDoc': PickListDoc
    }
}
</script>

<style lang="scss" scoped>
.product-item {
	display: flex;
	align-items: center;
	padding: .5rem;
	width: 100%;

	img {
		width: 75px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin-right: 1rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.product-list-action {
		display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .product-category-icon {
        vertical-align: middle;
        margin-right: .5rem;
        font-size: .875rem;
    }

    .product-category {
        vertical-align: middle;
        line-height: 1;
        font-size: .875rem;
    }
}

@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;

        .image-container {
            width: 100%;
            text-align: center;
        }

        img {
            margin: 0 0 1rem 0;
            width: 100px;
        }
    }
}
</style>