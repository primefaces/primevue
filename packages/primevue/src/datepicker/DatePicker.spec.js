import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import DatePicker from './DatePicker.vue';

describe('DatePicker.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(DatePicker, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: ''
            }
        });
    });

    it('should exist', async () => {
        expect(wrapper.find('.p-datepicker.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-datepicker-input').exists()).toBe(true);

        let input = wrapper.find('.p-datepicker-input');

        await input.trigger('focus');

        expect(wrapper.find('.p-datepicker.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-datepicker-today').exists()).toBe(true);
        expect(wrapper.find('.p-datepicker-prev-button').exists()).toBe(true);
        expect(wrapper.find('.p-datepicker-prev-next').exists()).toBe(false);
        expect(wrapper.find('.p-datepicker-today').text()).toEqual(new Date().getDate().toString());
    });

    it('should select a date', async () => {
        await wrapper.setProps({ inline: true });

        const event = { day: 8, month: 2, year: 2022, today: false, selectable: true };

        const onDateSelect = vi.spyOn(wrapper.vm, 'onDateSelect');

        await wrapper.vm.onDateSelect({ currentTarget: { focus: () => {} } }, event);
        expect(onDateSelect).toHaveBeenCalled();
    });

    it('should calculate the correct view date when in range mode', async () => {
        const dateOne = new Date();
        const dateTwo = new Date();

        dateTwo.setFullYear(dateOne.getFullYear(), dateOne.getMonth(), dateOne.getDate() + 1);
        await wrapper.setProps({ selectionMode: 'range', showTime: true, modelValue: [dateOne, dateTwo] });

        expect(wrapper.vm.viewDate).toEqual(dateTwo);
    });

    it('should open a year view when there is selected date (fix: #6203)', async () => {
        const dateOne = new Date();

        dateOne.setFullYear(1988, 9, 10);

        await wrapper.setProps({ modelValue: dateOne });

        const input = wrapper.find('.p-datepicker-input');

        await input.trigger('focus');

        const yearSelectButton = wrapper.find('.p-datepicker .p-datepicker-select-year');

        expect(yearSelectButton.exists()).toBe(true);
        expect(yearSelectButton.text()).toBe('1988');

        await yearSelectButton.trigger('click');

        expect(wrapper.find('.p-datepicker-decade').exists()).toBe(true);
        expect(wrapper.find('.p-datepicker-decade').text()).toBe('1980 - 1989');
    });

    it('should not show other months when showOtherMonths is false', async () => {
        const dateOne = new Date();

        dateOne.setFullYear(1988, 5, 15);

        await wrapper.setProps({ modelValue: dateOne, showOtherMonths: false });

        const input = wrapper.find('.p-datepicker-input');

        await input.trigger('focus');

        expect(wrapper.find('.p-datepicker-other-month span').exists()).toBe(false);

        await input.trigger('blur');

        await wrapper.setProps({ showOtherMonths: true });

        await input.trigger('focus');

        expect(wrapper.find('.p-datepicker-other-month span').exists()).toBe(true);
    });
});
