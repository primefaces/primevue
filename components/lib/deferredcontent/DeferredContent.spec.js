import { mount } from '@vue/test-utils';
import DeferredContent from './DeferredContent.vue';

describe('DeferredContent', () => {
    it('should exist', async () => {
        const wrapper = mount(DeferredContent, {
            slots: {
                default: '<img src="/images/nature/nature4.jpg" alt="Nature"/>'
            }
        });

        await wrapper.setData({ loaded: true });
        expect(wrapper.find('img').exists()).toBe(true);
    });
});
