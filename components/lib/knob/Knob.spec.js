import { mount } from '@vue/test-utils';
import Knob from './Knob.vue';

describe('Knob.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Knob, {
            props: {
                modelValue: 20
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-knob.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-knob-text').text()).toBe('20');
    });

    it('should change with click event', async () => {
        const event = { offsetX: 100, offsetY: 100 };

        await wrapper.vm.onClick(event);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([95]);
    });

    it('should min - max work', async () => {
        await wrapper.setProps({ min: -50, max: 50 });

        const event = { offsetX: 100, offsetY: 100 };

        await wrapper.vm.onClick(event);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([45]);
    });

    it('should step work', async () => {
        await wrapper.setProps({ step: 10 });

        const event = { offsetX: 18, offsetY: 30 };

        await wrapper.vm.onClick(event);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([30]);
    });

    it('should work with string valueTemplate', async () => {
        await wrapper.setProps({ valueTemplate: '{value}%' });

        expect(wrapper.find('.p-knob-text').text()).toBe('20%');
    });

    it('should work with function valueTemplate', async () => {
        await wrapper.setProps({ valueTemplate: (val) => val * 10 });

        expect(wrapper.find('.p-knob-text').text()).toBe('200');
    });
});
