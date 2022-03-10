import { mount } from '@vue/test-utils';
import Avatar from './Avatar.vue';

describe('Avatar.vue', () => {
    it('should exist', () => {
        const wrapper = mount(Avatar, {
            props: {
                label: 'T',
                size: 'large',
                shape: 'circle'
            }
        });

        expect(wrapper.find('.p-avatar.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-lg').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-circle').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-text').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-text').text()).toBe('T');
    });
});