import { mount } from '@vue/test-utils';
import ToggleButton from './ToggleButton.vue';

describe('ToggleButton', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ToggleButton, {
            props: {
                modelValue: false,
                onIcon: 'pi pi-check',
                offIcon: 'pi pi-times'
            }
        });
    });

    it('is ToggleButton exist', () => {
        expect(wrapper.find('.p-togglebutton.p-component').exists()).toBe(true);
        expect(wrapper.find('span.pi-times.p-button-icon').exists()).toBe(true);
    });

    it('should have onIcon', async () => {
        await wrapper.setProps({ modelValue: true });

        expect(wrapper.find('span.pi-check').exists()).toBe(true);
    });

    it('should change works', async () => {
        await wrapper.vm.onChange({});

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);

        await wrapper.setProps({ modelValue: true });
        await wrapper.vm.onChange({});

        expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false]);
    });

    it('should be customized', async () => {
        await wrapper.setProps({
            modelValue: true,
            onLabel: 'I confirm',
            offLabel: 'I reject',
            style: 'width: 10em'
        });

        expect(wrapper.find('.p-button-label').text()).toBe('I confirm');
        expect(wrapper.attributes().style).toContain('width: 10em');

        await wrapper.setProps({ modelValue: false });

        expect(wrapper.find('.p-button-label').text()).toBe('I reject');
    });
});
