import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import Galleria from './Galleria.vue';

describe('Gallleria.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Galleria, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                value: [
                    {
                        itemImageSrc: 'images/galleria/galleria1.jpg',
                        thumbnailImageSrc: 'images/galleria/galleria1s.jpg',
                        alt: 'Description for Image 1',
                        title: 'Title 1'
                    },
                    {
                        itemImageSrc: 'images/galleria/galleria2.jpg',
                        thumbnailImageSrc: 'images/galleria/galleria2s.jpg',
                        alt: 'Description for Image 2',
                        title: 'Title 2'
                    },
                    {
                        itemImageSrc: 'images/galleria/galleria3.jpg',
                        thumbnailImageSrc: 'images/galleria/galleria3s.jpg',
                        alt: 'Description for Image 3',
                        title: 'Title 3'
                    }
                ],
                numVisible: 2
            },
            slots: {
                item: `
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                    </template>
                `
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-galleria.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-galleria-item-container > .p-galleria-item').length).toBe(1);
        expect(wrapper.findAll('.p-galleria-thumbnail-item-active').length).toBe(2);
    });

    it('should active item change', async () => {
        expect(wrapper.find('.p-galleria-item-container img').attributes().alt).toBe('Description for Image 1');

        wrapper.vm.onActiveItemChange(1);
        await wrapper.setProps({ activeIndex: 1 });

        expect(wrapper.find('.p-galleria-item-container img').attributes().alt).toBe('Description for Image 2');
        expect(wrapper.emitted()['update:activeIndex'][0]).toEqual([1]);
    });
});
