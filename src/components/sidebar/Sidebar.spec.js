import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import Sidebar from './Sidebar.vue';
import { h } from 'vue';

describe('Sidebar.vue', () => {
    const ChildComponent = {
        name: 'Child',
        data() {
            return {
                value: 'Left Sidebar'
            };
        },
        template: `<div>{{ value }}</div>`
    };

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
                baseZIndex: 1000
            },
            slots: {
                default: h(ChildComponent, { 'v-bind:key': 'constant' })
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

    it('should dispose contents', async () => {
        await wrapper.getComponent(ChildComponent).setData({ value: 'Changed' });
        expect(wrapper.getComponent(ChildComponent).html()).toContain('Changed');
        await wrapper.setProps({ visible: false });
        expect(wrapper.findComponent(ChildComponent).exists()).toBe(false);
        await wrapper.setProps({ visible: true });
        expect(wrapper.getComponent(ChildComponent).html()).toContain('Left Sidebar');
    });

    it('should keep alive contents', async () => {
        await wrapper.setProps({ keepAlive: true });
        await wrapper.getComponent(ChildComponent).setData({ value: 'Changed' });
        expect(wrapper.getComponent(ChildComponent).html()).toContain('Changed');
        expect(wrapper.findComponent(ChildComponent).exists()).toBe(true);
        expect(wrapper.getComponent(ChildComponent).html()).toContain('Changed');
        await wrapper.setProps({ visible: true });
        expect(wrapper.getComponent(ChildComponent).html()).toContain('Changed');
    });

    it('should have custom close icon when provided', async () => {
        await wrapper.setProps({ closeIcon: 'pi pi-discord' });
        const icon = wrapper.find('.p-sidebar-close-icon');

        expect(icon.classes()).toContain('pi-discord');
    });
});
