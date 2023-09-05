import { mount } from '@vue/test-utils';
import { beforeEach, expect } from 'vitest';
import BlockUI from './BlockUI.vue';

let wrapper = null;

describe('BlockUI.vue', () => {
    beforeEach(() => {
        wrapper = mount(BlockUI);
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
});
