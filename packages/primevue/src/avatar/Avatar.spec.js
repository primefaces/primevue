import { mount } from '@vue/test-utils';
import { beforeEach } from 'vitest';
import Avatar from './Avatar.vue';

let wrapper = null;

beforeEach(() => {
    wrapper = mount(Avatar, {
        props: {
            label: 'T',
            size: 'large',
            shape: 'circle',
            image: 'test'
        }
    });
});

describe('Avatar.vue', () => {
    it('should exist', () => {
        expect(wrapper.find('.p-avatar.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-lg').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-circle').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-text').exists()).toBe(true);
        expect(wrapper.find('.p-avatar-text').text()).toBe('T');
    });

    it('should exist', async () => {
        await wrapper.setProps({ image: 'imageTest' });
        const image = wrapper.find('.p-avatar-image');

        await wrapper.vm.onError();

        expect(image.exists()).toBe(true);
        expect(wrapper.emitted().error.length).toBe(1);
    });
});
