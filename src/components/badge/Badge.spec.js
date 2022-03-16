import { mount } from '@vue/test-utils';
import Badge from './Badge.vue';
import Button from '@/components/button/Button.vue';

describe('Badge.vue', () => {
    it('should exist', () => {
        const wrapper = mount(Badge, {
            props: {
                value: '29',
                severity: 'warning',
                size: 'large'
            }
        });

        expect(wrapper.find('.p-badge.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-badge-warning').exists()).toBe(true);
        expect(wrapper.find('.p-badge-lg').exists()).toBe(true);
        expect(wrapper.find('.p-badge-no-gutter').exists()).toBe(false);
    });

    it('badge classes should exist', () => {
        const wrapper = mount({
            template: '<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />',
            components: {
                Button
            }
        });

        expect(wrapper.find('.p-badge.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-badge-danger').exists()).toBe(true);
        expect(wrapper.find('.p-badge-no-gutter').exists()).toBe(true);
    });
});