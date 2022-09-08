import { config, mount } from '@vue/test-utils';
import Rating from './Rating.vue';

config.global.mocks = {
    $primevue: {
        config: {
            locale: {
                aria: {
                    stars: '5'
                }
            }
        }
    }
};
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

    it('should not cancel', async () => {
        await wrapper.setProps({ cancel: false });

        expect(wrapper.find('.p-rating-cancel').exists()).toBe(false);
    });
});
