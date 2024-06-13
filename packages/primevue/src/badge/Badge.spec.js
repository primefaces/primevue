import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import Badge from './Badge.vue';

let wrapper = null;

describe('Badge.vue', () => {
    beforeEach(() => {
        wrapper = mount(Badge, {
            props: {
                value: '29',
                severity: 'warn',
                size: 'large'
            }
        });
    });
    it('should exist', () => {
        expect(wrapper.find('.p-badge.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-badge-warn').exists()).toBe(true);
        expect(wrapper.find('.p-badge-lg').exists()).toBe(true);
        expect(wrapper.find('.p-badge-no-gutter').exists()).toBe(false);

        expect(wrapper.vm.containerClass).not.toBe('p-overlay-badge');
    });
});
