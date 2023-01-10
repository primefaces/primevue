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
                visible: false,
                bazeZIndex: 1000
            },
            slots: {
                default: `<h3>Left Sidebar</h3>`,
                header: `<span class="header">Header Template</span>`
            }
        });
        wrapper.setProps({ visible: true });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('When component is mounted, sidebar should be exist', () => {
        expect(wrapper.find('.p-sidebar.p-component').exists()).toBe(true);
    });

    it('When mask element triggered, sidebar should be hide', async () => {
        const unbindOutsideClickListenerSpy = vi.spyOn(wrapper.vm, 'unbindOutsideClickListener');

        await wrapper.find('.p-sidebar-mask').trigger('mousedown');

        expect(wrapper.emitted()['update:visible'].length).toBe(1);
        expect(unbindOutsideClickListenerSpy).toHaveBeenCalled();
    });

    it('When transition trigger to onEnter, sidebar should be visible', async () => {
        const focusSpy = vi.spyOn(wrapper.vm, 'focus');

        await wrapper.vm.onEnter();

        expect(wrapper.emitted().show.length).toBe(1);
        expect(wrapper.vm.maskVisible).toBeTruthy();
        expect(focusSpy).toHaveBeenCalled();
    });

    it('When transition trigger to onLeave, unbindOutsideClickListener should be triggered', async () => {
        const unbindOutsideClickListenerSpy = vi.spyOn(wrapper.vm, 'unbindOutsideClickListener');

        await wrapper.vm.onLeave();

        expect(wrapper.emitted().hide.length).toBe(1);
        expect(unbindOutsideClickListenerSpy).toHaveBeenCalled();
    });

    it('When transition trigger to onAfterEnter, bindOutsideClickListener should be triggered', async () => {
        const bindOutsideClickListenerSpy = vi.spyOn(wrapper.vm, 'bindOutsideClickListener');

        await wrapper.vm.onAfterEnter();

        expect(bindOutsideClickListenerSpy).toHaveBeenCalled();
    });

    it('When keydown is triggered , hide method should be triggered', async () => {
        const hideSpy = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.find('.p-sidebar').trigger('keydown', { code: 'Escape' });

        expect(hideSpy).toHaveBeenCalled();
    });

    it('When keydown is triggered , hide method should be triggered', async () => {
        const hideSpy = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.find('.p-sidebar-close').trigger('click');

        expect(hideSpy).toHaveBeenCalled();
    });

    it('When component is unmount , unbindOutsideClickListenerSpy method should be triggered', async () => {
        const unbindOutsideClickListenerSpy = vi.spyOn(wrapper.vm, 'unbindOutsideClickListener');

        await wrapper.unmount();

        expect(unbindOutsideClickListenerSpy).toHaveBeenCalled();
        expect(Sidebar.container).toBe(null);
    });
});
