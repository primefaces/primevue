import { mount } from '@vue/test-utils';
import Divider from './Divider.vue';

describe('Divider.vue', () => {
    it('should exist', () => {
        const wrapper = mount(Divider);

        expect(wrapper.find('.p-divider.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-divider.p-component').classes()).toContain('p-divider-horizontal');
        expect(wrapper.find('.p-divider.p-component').classes()).toContain('p-divider-left');
    });

    it('should exist', () => {
        const wrapper = mount(Divider, {
            props: {
                layout: 'vertical',
                align: 'center',
                type: 'dashed'
            }
        });

        expect(wrapper.find('.p-divider-vertical').exists()).toBe(true);
        expect(wrapper.find('.p-divider-dashed').exists()).toBe(true);
        expect(wrapper.find('.p-divider-center').exists()).toBe(true);
    });
});
