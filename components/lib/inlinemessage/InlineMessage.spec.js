import { mount } from '@vue/test-utils';
import InlineMessage from './InlineMessage.vue';

describe('InlineMessage.vue', () => {
    it('should exist', () => {
        const wrapper = mount(InlineMessage, {
            slots: {
                default: 'Username is required'
            },
            props: {
                severity: 'error'
            }
        });

        expect(wrapper.find('.p-inlinemessage.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-inlinemessage.p-component').text()).toBe('Username is required');
        expect(wrapper.find('.p-inlinemessage-error').exists()).toBe(true);
    });
});
