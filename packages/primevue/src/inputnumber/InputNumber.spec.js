import { mount } from '@vue/test-utils';
import InputNumber from './InputNumber.vue';

describe('InputNumber.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(InputNumber, {
            props: {
                modelValue: 1
            }
        });
    });

    it('is exist', () => {
        expect(wrapper.find('.p-inputnumber.p-component').exists()).toBe(true);
        expect(wrapper.find('input.p-inputnumber-input').exists()).toBe(true);
    });

    it('is keydown called when down and up keys pressed', async () => {
        await wrapper.vm.onInputKeyDown({
            code: 'ArrowUp',
            target: { value: 1 },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([2]);

        await wrapper.vm.onInputKeyDown({
            code: 'ArrowDown',
            target: { value: 2 },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][1]).toEqual([1]);
    });

    it('is keydown called when tab key pressed', async () => {
        await wrapper.vm.onInputKeyDown({
            code: 'Tab',
            target: { value: '12' },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([12]);
        expect(wrapper.find('input.p-inputnumber-input').attributes()['aria-valuenow']).toBe('12');
    });

    it('is keydown called when enter key pressed', async () => {
        await wrapper.vm.onInputKeyDown({
            code: 'Enter',
            target: { value: '12' },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([12]);
        expect(wrapper.find('input.p-inputnumber-input').attributes()['aria-valuenow']).toBe('12');
    });

    it('is keypress called when pressed a number', async () => {
        wrapper.find('input.p-inputnumber-input').element.setSelectionRange(2, 2);

        await wrapper.vm.onInputKeyPress({
            key: '1',
            preventDefault: () => {}
        });

        expect(wrapper.emitted().input[0][0].value).toBe(11);
    });

    it('is keypress called when pressed minus', async () => {
        wrapper.find('input.p-inputnumber-input').element.setSelectionRange(0, 0);

        await wrapper.vm.onInputKeyPress({
            key: '-',
            preventDefault: () => {}
        });

        expect(wrapper.emitted().input[0][0].value).toBe(-1);
    });

    it('should have min boundary', async () => {
        await wrapper.setProps({ modelValue: 95, min: 95 });

        await wrapper.vm.onInputKeyDown({
            code: 'ArrowDown',
            target: { value: 96 },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([95]);

        await wrapper.vm.onInputKeyDown({
            code: 'ArrowDown',
            target: { value: 95 },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][1]).toEqual([95]);
    });

    it('should have max boundary', async () => {
        await wrapper.setProps({ modelValue: 99, max: 100 });

        await wrapper.vm.onInputKeyDown({
            code: 'ArrowUp',
            target: { value: 99 },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([100]);

        await wrapper.vm.onInputKeyDown({
            code: 'ArrowUp',
            target: { value: 100 },
            preventDefault: () => {}
        });

        expect(wrapper.emitted()['update:modelValue'][1]).toEqual([100]);
    });

    it('should have currency', async () => {
        await wrapper.setProps({ modelValue: 12345, mode: 'currency', currency: 'USD', locale: 'en-US' });

        expect(wrapper.find('input.p-inputnumber-input').element._value).toBe('$12,345.00');
    });

    it('should have prefix', async () => {
        await wrapper.setProps({ modelValue: 20, prefix: '%' });

        expect(wrapper.find('input.p-inputnumber-input').element._value).toBe('%20');
    });

    it('should emit correct events when user types a value', async () => {
        await wrapper.setProps({ modelValue: 1980 });
        const input = await wrapper.find('input.p-inputnumber-input');

        input.trigger('keydown', { key: 'Backspace' });
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([198]);
        expect(wrapper.emitted()['value-change'][0]).toEqual([198]);
        expect(wrapper.emitted().input[0]).toEqual([expect.objectContaining({ value: 198, formattedValue: '1,980' })]);
        expect(input.element.value).toBe('198');

        input.trigger('keypress', { key: '5' });
        expect(wrapper.emitted()['update:modelValue'][1]).toEqual([1985]);
        expect(wrapper.emitted()['value-change'][1]).toEqual([1985]);
        expect(wrapper.emitted().input[1]).toEqual([expect.objectContaining({ value: 1985, formattedValue: '198' })]);
        expect(input.element.value).toBe('1,985');
    });

    it('should only emit one of each event type when typing values', async () => {
        await wrapper.setProps({ modelValue: 1234 });
        const input = await wrapper.find('input.p-inputnumber-input');

        expect(input.element.value).toBe('1,234');

        input.trigger('keydown', { key: 'Backspace' });

        expect(wrapper.emitted()['update:modelValue'].length).toBe(1);
        expect(wrapper.emitted()['value-change'].length).toBe(1);
        expect(wrapper.emitted().input.length).toBe(1);

        input.trigger('keypress', { key: '5' });

        expect(wrapper.emitted()['update:modelValue'].length).toBe(2);
        expect(wrapper.emitted()['value-change'].length).toBe(2);
        expect(wrapper.emitted().input.length).toBe(2);

        expect(input.element.value).toBe('1,235');
    });
});
