<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataView</h1>
				<p>DataView displays data in grid or list layout with pagination and sorting features.</p>
			</div>
			<AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
					<template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6" style="text-align: left">
                                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
                            </div>
                            <div class="col-6" style="text-align: right">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
					</template>

					<template #list="slotProps">
						<div class="col-12">
							<div class="product-list-item">
								<img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name"/>
								<div class="product-list-detail">
									<div class="product-name">{{slotProps.data.name}}</div>
									<div class="product-description">{{slotProps.data.description}}</div>
									<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
									<i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>
								</div>
								<div class="product-list-action">
									<span class="product-price">${{slotProps.data.price}}</span>
									<Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
									<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
								</div>
							</div>
						</div>
					</template>

					<template #grid="slotProps">
						<div class="col-12 md:col-4">
							<div class="product-grid-item card">
								<div class="product-grid-item-top">
									<div>
										<i class="pi pi-tag product-category-icon"></i>
										<span class="product-category">{{slotProps.data.category}}</span>
									</div>
									<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
								</div>
								<div class="product-grid-item-content">
									<img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name"/>
									<div class="product-name">{{slotProps.data.name}}</div>
									<div class="product-description">{{slotProps.data.description}}</div>
									<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
								</div>
								<div class="product-grid-item-bottom">
									<span class="product-price">${{slotProps.data.price}}</span>
									<Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
								</div>
							</div>
						</div>
					</template>
				</DataView>
            </div>
		</div>

		<DataViewDoc />
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';
import DataViewDoc from './DataViewDoc';

export default {
    data() {
        return {
            products: null,
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                {label: 'Price High to Low', value: '!price'},
                {label: 'Price Low to High', value: 'price'},
            ]
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
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

<style lang="scss" scoped>
.p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
	font-size: 1.5rem;
	font-weight: 700;
}

.product-description {
	margin: 0 0 1rem 0;
}

.product-category-icon {
	vertical-align: middle;
	margin-right: .5rem;
}

.product-category {
	font-weight: 600;
	vertical-align: middle;
}

::v-deep(.product-list-item) {
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;

	img {
		width: 150px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin-right: 2rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.p-rating {
		margin: 0 0 .5rem 0;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: .5rem;
		align-self: flex-end;
	}

	.product-list-action {
		display: flex;
		flex-direction: column;
	}

	.p-button {
		margin-bottom: .5rem;
	}
}

::v-deep(.product-grid-item) {
	margin: .5rem;
	border: 1px solid var(--surface-border);

	.product-grid-item-top,
	.product-grid-item-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	img {
		width: 75%;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin: 2rem 0;
	}

	.product-grid-item-content {
		text-align: center;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
	}
}

@media screen and (max-width: 576px) {
	.product-list-item {
		flex-direction: column;
		align-items: center;

		img {
			width: 75%;
			margin: 2rem 0;
		}

		.product-list-detail {
			text-align: center;
		}

		.product-price {
			align-self: center;
		}

		.product-list-action {
			display: flex;
			flex-direction: column;
		}

		.product-list-action {
			margin-top: 2rem;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}
}
</style>