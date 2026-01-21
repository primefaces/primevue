import { mount } from '@vue/test-utils';
import InputOtp from './InputOtp.vue';

describe('InputOtp.vue', () => {
    it('should exists', () => {
        const wrapper = mount(InputOtp);

        expect(wrapper.find('.p-inputotp').exists()).toBe(true);
    });

    it('should apply autofocus to first input only if enabled', () => {
        const wrapper = mount(InputOtp, {
            props: {
                autofocus: true
            },
            attachTo: document.body
        });

        const inputs = wrapper.findAll('input');
        
        expect(inputs[0].attributes('autofocus')).toBeDefined();
        
        for (let i = 1; i < inputs.length; i++) {
            expect(inputs[i].attributes('autofocus')).toBeUndefined();
        }

        wrapper.unmount();
    });
});

