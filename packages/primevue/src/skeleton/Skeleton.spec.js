import { mount } from '@vue/test-utils';
import Skeleton from './Skeleton.vue';

describe('Skeleton.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Skeleton);
    });

    it('should exist', () => {
        expect(wrapper.find('.p-skeleton.p-component').exists()).toBe(true);
    });

    it('should get width and height', async () => {
        await wrapper.setProps({ width: '5rem', height: '2rem', borderRadius: '10px' });

        expect(wrapper.find('.p-skeleton').attributes().style).toEqual('position: relative; width: 5rem; height: 2rem; border-radius: 10px;');
    });

    it('should get size', async () => {
        await wrapper.setProps({ size: '4rem' });

        expect(wrapper.find('.p-skeleton').attributes().style).toEqual('position: relative; width: 4rem; height: 4rem;');
    });

    it('should get shape', async () => {
        await wrapper.setProps({ shape: 'circle' });

        expect(wrapper.find('.p-skeleton').classes()).toContain('p-skeleton-circle');
    });

    it('should remove animation', async () => {
        await wrapper.setProps({ animation: 'none' });

        expect(wrapper.find('.p-skeleton').classes()).toContain('p-skeleton-none');
    });
});
