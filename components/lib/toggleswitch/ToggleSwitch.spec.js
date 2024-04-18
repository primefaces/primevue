import { mount } from '@vue/test-utils';
import ToggleSwitch from './ToggleSwitch.vue';

describe('ToggleSwitch.vue', () => {
    it('should exist', async () => {
        const wrapper = mount(ToggleSwitch);

        expect(wrapper.find('.p-toggleswitch.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-toggleswitch-slider').exists()).toBe(true);

        await wrapper.vm.onChange({});

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);

        await wrapper.setProps({ modelValue: true });

        expect(wrapper.vm.checked).toBe(true);
        expect(wrapper.find('.p-toggleswitch').classes()).toContain('p-highlight');
    });
});
