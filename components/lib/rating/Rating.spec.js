import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import Rating from './Rating.vue';

describe('Rating.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Rating);
    });

    it('should exist', () => {
        expect(wrapper.find('.p-rating').exists()).toBe(true);
        expect(wrapper.find('.p-rating-icon').exists()).toBe(true);
    });

    it('should update model', async () => {
        await wrapper.vm.updateModel({}, 5);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([5]);
        expect(wrapper.emitted()['change'][0]).toEqual([{ originalEvent: {}, value: 5 }]);
    });

    it('when onBlur method triggered blur emitted with parameter', async () => {
        await wrapper.vm.onBlur(true);

        expect(wrapper.vm.focusedOptionIndex).toEqual(-1);
        expect(wrapper.emitted()['blur'][0]).toEqual([true]);
    });

    it('When star is clicked, onOptionClick method should triggered', async () => {
        await wrapper.find('.p-rating-item').trigger('click');

        expect(wrapper.find('[data-p-focused="true"]').exists()).toBe(true);
    });

    it('When input focused, focusedOptionIndex value should changed', async () => {
        await wrapper.vm.onFocus(true, 5);

        expect(wrapper.vm.focusedOptionIndex).toEqual(5);
        expect(wrapper.emitted().focus[0]).toEqual([true]);
    });

    it('When input changed, onOptionSelect method should triggered', async () => {
        const onOptionSelectSpy = vi.spyOn(wrapper.vm, 'onOptionSelect');

        await wrapper.vm.onChange();

        expect(onOptionSelectSpy).toHaveBeenCalled();
    });

    it('When input changed, onOptionSelect method should triggered', async () => {
        await wrapper.setProps({ onIcon: 'test-icon' });
        await wrapper.setProps({ modelValue: 5 });

        expect(wrapper.find('.test-icon').exists()).toBe(true);
    });
});
