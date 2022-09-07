import { config, mount } from '@vue/test-utils';
import Password from './Password.vue';

config.global.mocks = {
    $primevue: {
        config: {
            'z-index': 5,
            inputStyle: 'filled',
            ripple: false,
            locale: {}
        }
    }
};
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
        expect(wrapper.find('.p-password-info').text()).toBe('');

        await wrapper.vm.onKeyUp(event);

        expect(wrapper.find('.p-password-info').text()).toBe('');

        expect(wrapper.find('.p-password-strength').classes()).toContain('weak');
    });

    it('should toggle mask', async () => {
        await wrapper.setProps({ toggleMask: true });

        expect(wrapper.find('.pi.pi-eye').exists()).toBe(true);

        await wrapper.vm.onMaskToggle();

        expect(wrapper.find('.pi.pi-eye').exists()).toBe(false);
        expect(wrapper.find('.pi.pi-eye-slash').exists()).toBe(true);
    });
});
