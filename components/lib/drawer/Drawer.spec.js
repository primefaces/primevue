import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import { describe, expect, it } from 'vitest';
import DomHandler from '../utils/DomHandler';
import Drawer from './Drawer.vue';

describe('Drawer.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Drawer, {
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
                default: `<h3>Left Drawer</h3>`,
                header: `<span class="header">Header Template</span>`
            }
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('When mask element triggered, drawer should be hide', async () => {
        const hideSpy = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.find('.p-drawer-mask').trigger('mousedown');

        expect(wrapper.emitted()['update:visible'].length).toBe(1);
        expect(hideSpy).toHaveBeenCalled();
    });

    it('When transition trigger to onEnter, drawer should be visible', async () => {
        const focusSpy = vi.spyOn(wrapper.vm, 'focus');

        await wrapper.vm.onEnter();

        expect(wrapper.emitted().show.length).toBe(1);
        expect(wrapper.vm.containerVisible).toBeTruthy();
        expect(focusSpy).toHaveBeenCalled();
    });

    it('When transition trigger to onLeave, hide should be triggered', async () => {
        await wrapper.vm.onLeave();

        expect(wrapper.emitted().hide.length).toBe(1);
    });

    it('When transition trigger to onAfterEnter, enableDocumentSettings should be triggered', async () => {
        const enableDocumentSettingsSpy = vi.spyOn(wrapper.vm, 'enableDocumentSettings');

        await wrapper.vm.onAfterEnter();

        expect(enableDocumentSettingsSpy).toHaveBeenCalled();
    });

    it('When keydown is triggered , hide method should be triggered', async () => {
        const hideSpy = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.vm.onKeydown({ code: 'Escape' });

        expect(hideSpy).toHaveBeenCalled();
    });

    it('When keydown is triggered , hide method should be triggered', async () => {
        const hideSpy = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.find('.p-drawer-close').trigger('click');

        expect(hideSpy).toHaveBeenCalled();
    });

    it('When component is unmount , unbindOutsideClickListenerSpy method should be triggered', async () => {
        const unbindOutsideClickListenerSpy = vi.spyOn(wrapper.vm, 'unbindOutsideClickListener');

        await wrapper.unmount();

        expect(unbindOutsideClickListenerSpy).toHaveBeenCalled();
        expect(Drawer.container).toBe(null);
    });

    it('When hide is triggered , removeClass util should be called', async () => {
        const removeClassSpy = vi.spyOn(DomHandler, 'removeClass');

        await wrapper.setProps({ blockScroll: true });
        wrapper.vm.disableDocumentSettings();

        expect(removeClassSpy).toHaveBeenCalled();
    });

    it('When onEnter is triggered , addClass util should be called', async () => {
        const addClassSpy = vi.spyOn(DomHandler, 'addClass');

        await wrapper.setProps({ blockScroll: true });
        wrapper.vm.enableDocumentSettings();

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

    it('When component is mounted , dismissable property should still be reactive', async () => {
        await wrapper.setProps({ dismissable: false, visible: true });

        await wrapper.setProps({ dismissable: true });

        expect(wrapper.vm.containerVisible).toBeTruthy();
    });
});
