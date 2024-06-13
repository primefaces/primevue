import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import DataView from './DataView.vue';

describe('DataView.vue', () => {
    it('should exist', () => {
        const wrapper = mount(DataView, {
            global: {
                plugins: [PrimeVue]
            },
            props: {
                value: [
                    {
                        id: '1000',
                        code: 'f230fh0g3',
                        name: 'Bamboo Watch',
                        description: 'Product Description',
                        image: 'bamboo-watch.jpg',
                        price: 65,
                        category: 'Accessories',
                        quantity: 24,
                        inventoryStatus: 'INSTOCK',
                        rating: 5
                    },
                    {
                        id: '1001',
                        code: 'nvklal433',
                        name: 'Black Watch',
                        description: 'Product Description',
                        image: 'black-watch.jpg',
                        price: 72,
                        category: 'Accessories',
                        quantity: 61,
                        inventoryStatus: 'INSTOCK',
                        rating: 4
                    },
                    {
                        id: '1002',
                        code: 'zz21cz3c1',
                        name: 'Blue Band',
                        description: 'Product Description',
                        image: 'blue-band.jpg',
                        price: 79,
                        category: 'Fitness',
                        quantity: 2,
                        inventoryStatus: 'LOWSTOCK',
                        rating: 3
                    }
                ],
                layout: 'grid',
                paginator: true,
                rows: 3
            },
            slots: {
                grid: `
                    <template #grid="slotProps">
                        <div class="grid">
                            <div v-for="(item, index) in slotProps.items" :key="index"  class="col-12 md:col-4">
                                <div class="product-grid-item card">
                                    <div class="product-grid-item-top">
                                        <div>
                                            <i class="pi pi-tag product-category-icon"></i>
                                            <span class="product-category">{{item.category}}</span>
                                        </div>
                                        <span :class="'product-badge status-'+item.inventoryStatus.toLowerCase()">{{item.inventoryStatus}}</span>
                                    </div>
                                    <div class="product-grid-item-content">
                                        <img :src="'images/product/' + item.image" :alt="item.name"/>
                                        <div class="product-name">{{item.name}}</div>
                                        <div class="product-description">{{item.description}}</div>
                                    </div>
                                    <div class="product-grid-item-bottom">
                                        <span class="product-price">\${{item.price}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                `
            }
        });

        expect(wrapper.find('.p-dataview.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-dataview-grid').exists()).toBe(true);
        expect(wrapper.findAll('.product-grid-item').length).toBe(3);
        expect(wrapper.find('.p-paginator.p-component').exists()).toBe(true);
    });
});
