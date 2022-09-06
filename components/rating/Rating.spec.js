import { mount } from '@vue/test-utils';
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
        expect(wrapper.emitted()['change'][0]).toEqual([{originalEvent: {}, value: 5}]);
    });

    it('should click', async () => {
        await wrapper.vm.onStarClick({}, 1);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([1]);

        await wrapper.setProps({ modelValue: 1 });

        expect(wrapper.findAll('.p-rating-icon')[1].classes()).toContain('pi-star-fill');
        expect(wrapper.findAll('.p-rating-icon')[2].classes()).not.toContain('pi-star-fill');
    });

    it('should cancel', async () => {
        await wrapper.vm.onCancelClick({});

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([null]);
    });

    it('should not cancel', async () => {
        await wrapper.setProps({ cancel: false });

        expect(wrapper.find('.p-rating-cancel').exists()).toBe(false);
    });
});