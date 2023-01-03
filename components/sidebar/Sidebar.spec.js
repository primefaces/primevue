import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import { describe, expect, it } from 'vitest';
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
                default: `<h3>Left Sidebar</h3>`,
                header: `<span class="header">Header Template</span>`
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

    it('should have custom close icon when provided', async () => {
        await wrapper.setProps({ closeIcon: 'pi pi-discord' });
        const icon = wrapper.find('.p-sidebar-close-icon');

        expect(icon.classes()).toContain('pi-discord');
    });

    it('should header slot rendered', () => {
        expect(wrapper.find('.p-sidebar-header').exists()).toBe(true);
        expect(wrapper.find('.p-sidebar-header-content').exists()).toBe(true);
        expect(wrapper.find('span.header').exists()).toBe(true);
        expect(wrapper.find('span.header').text()).toBe('Header Template');
    });

    it('should default slot rendered', () => {
        expect(wrapper.find('h3').exists()).toBe(true);
        expect(wrapper.find('h3').text()).toBe('Left Sidebar');
    });

    it('should keydown work', async () => {
        const event = { code: 'Escape' };

        await wrapper.vm.onKeydown(event);

        expect(wrapper.emitted()['update:visible'][0]).toEqual([false]);
    });
});

describe('when visible is false', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Sidebar, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                    transition: false
                }
            },
            props: {
                visible: true,
                bazeZIndex: 1000
            }
        });
    });

    it('should show and hide emit work', async () => {
        expect(wrapper.emitted()['show'][0]).toEqual([]);

        await wrapper.setProps({ visible: false });

        expect(wrapper.emitted()['hide'][0]).toEqual([]);
    });

    it('should be destroyed', () => {
        wrapper.unmount();
        expect(wrapper.componentVM.container).toBe(null);
        expect(wrapper.componentVM.mask).toBe(null);
    });
});
