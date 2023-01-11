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

    it('When disabled true and onClick triggered click emit should not be called', async () => {
        await wrapper.setProps({ disabled: true });
        await wrapper.vm.onClick();

        expect(wrapper.emitted()['click']).toEqual(undefined);
        expect(wrapper.emitted()['update:modelValue']).toEqual(undefined);
    });

    it('When disabled false and onClick triggered click emit should be called', async () => {
        await wrapper.vm.onClick();

        expect(wrapper.emitted()['update:modelValue'].length).toEqual(1);
        expect(wrapper.emitted().change.length).toEqual(1);
    });

    it('When value and modelValue equal and onClick triggered change emit should not be called', async () => {
        await wrapper.setProps({ modelValue: 'test', value: 'test' });
        await wrapper.vm.onClick();

        expect(wrapper.emitted()['change']).toEqual(undefined);
    });

    it('When modelValue changed, Checked should be effected', async () => {
        await wrapper.setProps({ modelValue: 'Tatooine' });

        expect(wrapper.vm.checked).toBe(true);
        expect(wrapper.find('.p-radiobutton').classes()).toContain('p-radiobutton-checked');
    });

    it('When component cliked OnClick method should be called', async () => {
        const spy = vi.spyOn(wrapper.vm, 'onClick');

        await wrapper.find('.p-radiobutton').trigger('click');

        expect(spy).toHaveBeenCalled();
    });

    it('When component focused onFocus method should be called', async () => {
        await wrapper.setProps({ inputId: 'test' });

        const spy = vi.spyOn(wrapper.vm, 'onFocus');

        await wrapper.find('#test').trigger('focus');

        expect(spy).toHaveBeenCalled();
    });

    it('When onFocus method triggered, false should be true', async () => {
        await wrapper.vm.onFocus();

        expect(wrapper.vm.focused).toBeTruthy();
        expect(wrapper.emitted().focus.length).toEqual(1);
    });

    it('When component blur onBlur method should be called', async () => {
        await wrapper.setProps({ inputId: 'test' });

        const blurSpy = vi.spyOn(wrapper.vm, 'onBlur');

        await wrapper.find('#test').trigger('blur');

        expect(blurSpy).toHaveBeenCalled();
    });

    it('When onBlur method triggered, false should be false', async () => {
        await wrapper.vm.onBlur();

        expect(wrapper.vm.focus).toBeFalsy();
        expect(wrapper.emitted().blur.length).toEqual(1);
    });
});
