import { addClass, removeClass } from '@primeuix/utils/dom';
import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import { describe, expect, it, vi } from 'vitest';
import Drawer from './Drawer.vue';
vi.mock('@primeuix/utils/dom', async (getModule) => {
    const original = await getModule();

    return {
        ...original,
        addClass: vi.fn(),
        removeClass: vi.fn()
    };
});
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
        await wrapper.vm.onKeydown({ code: 'Escape' });

        expect(wrapper.emitted()['update:visible'].length).toBe(1);
    });

    it('When keydown is triggered , hide method should be triggered', async () => {
        const closeBtn = wrapper.find('.p-drawer-close-button');

        await closeBtn.trigger('click');

        expect(wrapper.emitted()['update:visible'].length).toBe(1);
    });

    it('When component is unmount , unbindOutsideClickListenerSpy method should be triggered', async () => {
        const unbindOutsideClickListenerSpy = vi.spyOn(wrapper.vm, 'unbindOutsideClickListener');

        await wrapper.unmount();

        expect(unbindOutsideClickListenerSpy).toHaveBeenCalled();
        expect(Drawer.container).toBe(null);
    });

    it('When onBeforeLeave is triggered , addClass util should be called', async () => {
        await wrapper.setProps({ modal: true });
        wrapper.vm.onBeforeLeave();

        expect(addClass).toHaveBeenCalled();
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
