import { mount } from '@vue/test-utils';
import Image from './Image.vue';

describe('Image.vue', () => {
    it('should exist', () => {
        const wrapper = mount(Image, {
            global: {
                stubs: {
                    teleport: true
                }
            },
            props: {
                src: 'demo/images/galleria/galleria1.jpg'
            }
        });

        expect(wrapper.find('.p-image.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-image.p-component img').attributes().src).toBe('demo/images/galleria/galleria1.jpg');
    });

    it('should preview', async() => {
        const wrapper = mount(Image, {
            global: {
                stubs: {
                    teleport: true
                }
            },
            props: {
                src: 'demo/images/galleria/galleria1.jpg',
                preview: true
            }
        });

        expect(wrapper.find('.p-image-preview-container').exists()).toBe(true);
        expect(wrapper.find('.p-image-preview-indicator').exists()).toBe(true);
        expect(wrapper.find('.p-image-mask').exists()).toBe(false);

        await wrapper.setData({ maskVisible: true});

        expect(wrapper.find('.p-image-mask').exists()).toBe(true);
        expect(wrapper.find('.p-image-toolbar').exists()).toBe(true);

        await wrapper.setData({ maskVisible: false});

        expect(wrapper.find('.p-image-mask').exists()).toBe(false);
    });
});