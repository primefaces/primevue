import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
import Sidebar from './Sidebar.vue';

describe('Sidebar.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Sidebar, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                visible: true,
                bazeZIndex: 1000
            },
            slots: {
                default: `<h3>Left Sidebar</h3>`
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-sidebar.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-sidebar').classes()).toContain('p-sidebar-left');
        expect(wrapper.find('.p-sidebar').classes()).toContain('p-sidebar-active');
    });

    it('should close', async () => {
        await wrapper.vm.hide();

        expect(wrapper.emitted()['update:visible'][0]).toEqual([false]);

        await wrapper.setProps({ visible: false });

        expect(wrapper.find('.p-sidebar.p-component').exists()).toBe(false);
    });

    it('should set position', async () => {
        await wrapper.setProps({ position: 'bottom' });

        expect(wrapper.find('.p-sidebar').classes()).toContain('p-sidebar-bottom');
    });

    it('should set position', async () => {
        await wrapper.setProps({ position: 'full' });

        expect(wrapper.vm.fullScreen).toBe(true);
        expect(wrapper.find('.p-sidebar').classes()).toContain('p-sidebar-full');
    });
});