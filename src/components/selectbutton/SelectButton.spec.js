import { mount } from '@vue/test-utils';
import SelectButton from './SelectButton.vue';

describe('SelectButton.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SelectButton, {
            props: {
                modelValue: null,
                options: ['Off', 'On']
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-selectbutton.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-button.p-component').length).toBe(2);
    });

    it('should option select', async () => {
        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[0]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['Off']);

        await wrapper.setProps({ modelValue: wrapper.vm.options[0] });

        expect(wrapper.findAll('.p-button.p-component')[0].classes()).toContain('p-highlight');
    });
});

describe('multiple select', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SelectButton, {
            props: {
                modelValue: null,
                options: [
                    { name: 'Option 1', value: 1 },
                    { name: 'Option 2', value: 2 },
                    { name: 'Option 3', value: 3 }
                ],
                optionLabel: 'name',
                multiple: true
            }
        });
    });

    it('should select', async () => {
        await wrapper.setProps({ modelValue: wrapper.vm.options });

        expect(wrapper.findAll('.p-highlight').length).toBe(3);
    });
});
