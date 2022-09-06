import { mount } from '@vue/test-utils';
import ScrollTop from './ScrollTop.vue';

describe('ScrollTop.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ScrollTop);
    });

    it('should exist', async() => {
        await wrapper.setData({ visible: true });

        expect(wrapper.find('.p-scrolltop.p-component').exists()).toBe(true);
    });
});