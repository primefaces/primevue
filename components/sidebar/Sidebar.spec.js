import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import { describe, expect, it } from 'vitest';
import DomHandler from '../utils/DomHandler';
import Sidebar from './Sidebar.vue';
describe('Sidebar.vue', () => {
    let wrapper;

    beforeEach(async () => {
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

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('When component is mounted, sidebar should be exist', async () => {
        expect(wrapper.find('.p-sidebar-mask').exists()).toBeTruthy();
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
        expect(wrapper.vm.containerVisible).toBeTruthy();
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

    it('When hide is triggered , removeClass util should be called', async () => {
        const removeClassSpy = vi.spyOn(DomHandler, 'removeClass');

        await wrapper.setProps({ blockScroll: true });
        wrapper.vm.hide();

        expect(removeClassSpy).toHaveBeenCalled();
    });

    it('When onEnter is triggered , addClass util should be called', async () => {
        const addClassSpy = vi.spyOn(DomHandler, 'addClass');

        await wrapper.setProps({ blockScroll: true });
        wrapper.vm.onEnter();

        expect(addClassSpy).toHaveBeenCalled();
    });

    it('When onBeforeLeave is triggered , addClass util should be called', async () => {
        const addClassSpy = vi.spyOn(DomHandler, 'addClass');

        await wrapper.setProps({ modal: true });
        wrapper.vm.onBeforeLeave();

        expect(addClassSpy).toHaveBeenCalled();
    });

    it('When onAfterLeave is triggered , containerVisible should be false', async () => {
        wrapper.vm.onAfterLeave();

        expect(wrapper.vm.containerVisible).toBeFalsy();
    });
});
