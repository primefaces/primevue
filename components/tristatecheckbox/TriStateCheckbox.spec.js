import { mount } from '@vue/test-utils';
import TriStateCheckbox from './TriStateCheckbox.vue';

describe('TriStateCheckbox.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TriStateCheckbox, {
            props: {
                modelValue: null
            }
        });
    });

    it('is TriStateCheckbox exist', () => {
        expect(wrapper.find('.p-checkbox.p-component').exists()).toBe(true);
    });

    it('is state changed', async () => {
        await wrapper.vm.onClick({});

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);

        await wrapper.setProps({modelValue: true});
        await wrapper.vm.onClick({});

        expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false]);

        await wrapper.setProps({modelValue: false});
        await wrapper.vm.onClick({});

        expect(wrapper.emitted()['update:modelValue'][2]).toEqual([null]);
    });

    it('is icon chenaged', async () => {
        expect(wrapper.find('.p-checkbox-icon').classes()).not.toContain('pi-check');
        expect(wrapper.find('.p-checkbox-icon').classes()).not.toContain('pi-times');

        await wrapper.setProps({modelValue: true});

        expect(wrapper.find('.p-checkbox-icon').classes()).toContain('pi-check');

        await wrapper.setProps({modelValue: false});

        expect(wrapper.find('.p-checkbox-icon').classes()).toContain('pi-times');
    });
});