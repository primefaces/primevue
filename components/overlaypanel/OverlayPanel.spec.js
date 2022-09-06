import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
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
                showCloseIcon: true,
                ariaCloseLabel: 'exit'
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
        expect(wrapper.find('.p-overlaypanel-close').attributes()['aria-label']).toBe('exit');
    });

    it('should toggle itself', async () => {
        await wrapper.vm.toggle({}, {});

        expect(wrapper.find('.p-overlaypanel.p-component').exists()).toBe(false);
    });

    it('should close icon work', async () => {
        await wrapper.vm.hide();

        expect(wrapper.vm.visible).toBe(false);
    });
});