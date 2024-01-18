import { mount } from '@vue/test-utils';
import InputSwitch from './InputSwitch.vue';

describe('InputSwitch.vue', () => {
    it('should exist', async () => {
        const wrapper = mount(InputSwitch);

        expect(wrapper.find('.p-inputswitch.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-inputswitch-slider').exists()).toBe(true);

        await wrapper.vm.onChange({});

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);

        await wrapper.setProps({ modelValue: true });

        expect(wrapper.vm.checked).toBe(true);
        expect(wrapper.find('.p-inputswitch').classes()).toContain('p-highlight');
    });
});
