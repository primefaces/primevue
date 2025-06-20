import { mount } from '@vue/test-utils';
import ToggleSwitch from './ToggleSwitch.vue';

describe('ToggleSwitch.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ToggleSwitch);
    });

    it('should exist', async () => {
        expect(wrapper.find('.p-toggleswitch.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-toggleswitch-slider').exists()).toBe(true);

        await wrapper.vm.onChange({});

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);

        await wrapper.setProps({ modelValue: true });
        //
        expect(wrapper.vm.checked).toBe(true);
        expect(wrapper.find('.p-toggleswitch').classes()).toContain('p-toggleswitch-checked');
    });

    it('should respect controlled modelValue state', async () => {
        await wrapper.setProps({ modelValue: true });

        await wrapper.vm.onChange({});
        expect(wrapper.vm.checked).toBe(true);

        await wrapper.setProps({ modelValue: false });
        expect(wrapper.vm.checked).toBe(false);
    });
});
