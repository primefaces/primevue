import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import Popover from './Popover.vue';

describe('Popover.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Popover, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                showCloseIcon: true
            },
            slots: {
                default: 'PrimeVue'
            }
        });

        await wrapper.vm.toggle({}, {});
    });

    it('should exist', () => {
        expect(wrapper.find('.p-popover.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').text()).toBe('PrimeVue');
        expect(wrapper.find('.p-popover-close').exists()).toBe(true);
    });
});
