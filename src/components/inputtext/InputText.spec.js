import { mount } from  '@vue/test-utils';
import InputText from '@/components/inputText/InputText.vue';

describe('InputText.vue', () => {
    it('is InputText component exists', async () => {
        const wrapper = mount(InputText);

        expect(wrapper.find('.p-inputtext.p-component').exists()).toBe(true);

        await wrapper.setProps({ modelValue: 'PrimeVue' });

        expect(wrapper.find('.p-filled').exists()).toBe(true);

        const input = wrapper.find('input');
        expect(input.element.value).toEqual('PrimeVue');
    })
});

describe('InputText.vue', () => {
    it('input event', async () => {
        const wrapper = mount(InputText);
        const input = wrapper.find('input');

        // await input.trigger('input', { keyCode: 65 });
        input.element.value = 'a';
        input.trigger('input');

        expect(input.element.value).toEqual('a');
    })
});