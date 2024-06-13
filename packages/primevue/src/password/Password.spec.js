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
        expect(wrapper.find('.p-password-panel').exists()).toBe(true);
    });

    it('should update modelValue', async () => {
        await wrapper.vm.onInput(event);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['P']);
    });

    it('should meter update', async () => {
        expect(wrapper.find('.p-password-info').text()).toBe('Enter a password');

        await wrapper.vm.onKeyUp(event);

        expect(wrapper.find('.p-password-info').text()).toBe('Weak');

        expect(wrapper.find('.p-password-strength').classes()).toContain('weak');
    });

    it('should toggle mask', async () => {
        await wrapper.setProps({ toggleMask: true, showIcon: 'pi pi-eye', hideIcon: 'pi pi-eye-slash' });

        expect(wrapper.find('.pi.pi-eye').exists()).toBe(true);

        await wrapper.vm.onMaskToggle();

        expect(wrapper.find('.pi.pi-eye').exists()).toBe(false);
        expect(wrapper.find('.pi.pi-eye-slash').exists()).toBe(true);
    });
});
