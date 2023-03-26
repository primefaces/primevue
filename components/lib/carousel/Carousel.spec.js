import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import Carousel from './Carousel.vue';

describe('Carousel.vue', () => {
    it('should exist', async () => {
        const wrapper = mount(Carousel, {
            global: {
                plugins: [PrimeVue]
            },
            props: {
                value: [
                    {
                        id: '1000',
                        code: 'vbb124btr',
                        name: 'Game Controller',
                        description: 'Product Description',
                        image: 'game-controller.jpg',
                        price: 99,
                        category: 'Electronics',
                        quantity: 2,
                        inventoryStatus: 'LOWSTOCK',
                        rating: 4
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
                    },
                    {
                        id: '1003',
                        code: '244wgerg2',
                        name: 'Blue T-Shirt',
                        description: 'Product Description',
                        image: 'blue-t-shirt.jpg',
                        price: 29,
                        category: 'Clothing',
                        quantity: 25,
                        inventoryStatus: 'INSTOCK',
                        rating: 5
                    }
                ]
            },
            slots: {
                header: 'Basic',
                item: `<template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                            </div>
                        </div>
                    </div>
                </template>
                `
            }
        });

        expect(wrapper.findAll('.p-carousel-item').length).toBe(4);

        const firstItem = wrapper.findAll('.p-carousel-item')[0];

        expect(firstItem.classes()).toContain('p-carousel-item-active');

        const nextBtn = wrapper.find('.p-carousel-next');

        await nextBtn.trigger('click');

        expect(firstItem.classes()).not.toContain('p-carousel-item-active');
    });
});
