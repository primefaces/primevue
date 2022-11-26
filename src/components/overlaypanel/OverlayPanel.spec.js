import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import OverlayPanel from './OverlayPanel.vue';

describe('OverlayPanel.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(OverlayPanel, {
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
        expect(wrapper.find('.p-overlaypanel.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-overlaypanel-content').exists()).toBe(true);
        expect(wrapper.find('.p-overlaypanel-content').text()).toBe('PrimeVue');
        expect(wrapper.find('.p-overlaypanel-close').exists()).toBe(true);
    });
});
