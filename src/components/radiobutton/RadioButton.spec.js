import { mount } from '@vue/test-utils';
import RadioButton from './RadioButton.vue';

describe('RadioButton.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(RadioButton, {
            props: {
                value: 'Tatooine',
                modelValue: null
            }
        });
    });

    it('shoukd exist', () => {
        expect(wrapper.find('.p-radiobutton.p-component').exists()).toBe(true);
        expect(wrapper.find('input').attributes().type).toBe('radio');
    });

    it('should clicked', async () => {
        await wrapper.vm.onClick({});

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['Tatooine']);
        expect(wrapper.emitted().change[0]).toEqual([{}]);
    });

    it('should checked', async () => {
        await wrapper.setProps({ modelValue: 'Tatooine'});

        expect(wrapper.vm.checked).toBe(true);
        expect(wrapper.find('.p-radiobutton').classes()).toContain('p-radiobutton-checked');
    });
});