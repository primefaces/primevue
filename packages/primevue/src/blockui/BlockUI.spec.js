import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import { beforeEach, expect, vi } from 'vitest';

vi.mock('@primeuix/utils/dom', async (importOriginal) => {
    const actual = await importOriginal();

    return {
        ...actual,
        hasCSSAnimation: () => 1
    };
});
import BlockUI from './BlockUI.vue';

let wrapper = null;

describe('BlockUI.vue', () => {
    beforeEach(() => {
        wrapper = mount(BlockUI, {
            attachTo: document.body,
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            }
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('When blocked props is true, block method should be triggered on mounted hook', async () => {
        const blockUiSpy = vi.spyOn(BlockUI.methods, 'block');

        wrapper = mount(BlockUI, {
            props: {
                blocked: true
            }
        });

        expect(blockUiSpy).toHaveBeenCalled();
    });

    it('When blocked props value is changed, block or unblock method should be triggered', async () => {
        const blockSpy = vi.spyOn(wrapper.vm, 'block');
        const unblockSpy = vi.spyOn(wrapper.vm, 'unblock');

        await wrapper.setProps({ blocked: true });

        expect(blockSpy).toHaveBeenCalled();

        await wrapper.setProps({ blocked: false });

        expect(unblockSpy).toHaveBeenCalled();
    });

    it('When block method triggered, mask should be added on DOM', async () => {
        await wrapper.setProps({ fullScreen: true });
        await wrapper.vm.block();

        expect(document.querySelector('.p-blockui')).not.toBe(null);
    });

    it('When removeMask method triggered, isBlocked should be false and emitted', async () => {
        wrapper = mount(BlockUI, {
            props: {
                blocked: true
            },
            slots: {
                default: 'test'
            }
        });
        await wrapper.vm.removeMask();

        expect(wrapper.vm.isBlocked).toBe(false);
        expect(wrapper.emitted().unblock.length).toBe(1);
    });

    it('When unblock is called, mask should be removed on animationend', async () => {
        await wrapper.setProps({ blocked: true });

        const mask = wrapper.vm.mask;

        expect(mask).not.toBe(null);
        expect(wrapper.element.querySelector('.p-blockui-mask')).not.toBe(null);

        await wrapper.setProps({ blocked: false });
        mask.dispatchEvent(new Event('animationend'));

        expect(wrapper.element.querySelector('.p-blockui-mask')).toBe(null);
        expect(wrapper.vm.isBlocked).toBe(false);
    });
});
