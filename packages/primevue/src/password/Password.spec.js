import { mount } from '@vue/test-utils';
import Password from './Password.vue';

describe('Password.vue', () => {
    let wrapper;
    const event = { target: { value: 'P' } };

    beforeEach(async () => {
        wrapper = mount(Password, {
            global: {
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: null
            }
        });

        await wrapper.vm.onFocus();
    });

    it('should exist', () => {
        expect(wrapper.find('.p-password.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-password-overlay').exists()).toBe(true);
    });

    it('should update modelValue', async () => {
        await wrapper.vm.onInput(event);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['P']);
    });

    it('should meter update', async () => {
        expect(wrapper.find('.p-password-content [data-pc-section="metertext"]').text()).toBe('Enter a password');

        await wrapper.vm.onKeyUp(event);

        expect(wrapper.find('.p-password-content [data-pc-section="metertext"]').text()).toBe('Weak');

        expect(wrapper.find('.p-password-meter-label').classes()).toContain('p-password-meter-weak');
    });

    it('should toggle mask', async () => {
        await wrapper.setProps({ toggleMask: true });

        expect(wrapper.find('.p-password-toggle-mask-icon.p-password-unmask-icon').exists()).toBe(true);
        expect(wrapper.find('.p-password-toggle-mask-icon.p-password-mask-icon').exists()).toBe(false);

        await wrapper.vm.onMaskToggle();

        expect(wrapper.find('.p-password-toggle-mask-icon.p-password-unmask-icon').exists()).toBe(false);
        expect(wrapper.find('.p-password-toggle-mask-icon.p-password-mask-icon').exists()).toBe(true);
    });

    it('should respect the autocomplete attribute', async () => {
        await wrapper.setProps({ autocomplete: 'current-password' });

        expect(wrapper.find('input.p-password-input').attributes('autocomplete')).toBe('current-password');
    });

    it('should respect the old way of setting the autocomplete attribute using inputProps', async () => {
        await wrapper.setProps({ inputProps: { autocomplete: 'current-password' } });

        expect(wrapper.find('input.p-password-input').attributes('autocomplete')).toBe('current-password');
    });

    it('should respect the aria-label and aria-labelledby attributes', async () => {
        await wrapper.setProps({ ariaLabel: 'test1', ariaLabelledby: 'test2' });

        expect(wrapper.find('input.p-password-input').attributes('aria-label')).toBe('test1');
        expect(wrapper.find('input.p-password-input').attributes('aria-labelledby')).toBe('test2');
    });
});
