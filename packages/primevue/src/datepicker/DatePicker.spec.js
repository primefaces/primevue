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

    it('should correctly set the year when view="year" and value is set via the input', async () => {
        const dateOne = new Date();
        const dateTwo = new Date();

        dateTwo.setFullYear(1988, 5, 15);

        await wrapper.setProps({ view: 'year', dateFormat: 'yy', modelValue: dateOne });

        const input = wrapper.find('.p-datepicker-input');

        await input.trigger('focus');

        expect(wrapper.find('.p-datepicker-decade').exists()).toBe(true);
        expect(wrapper.find('.p-datepicker-decade').text()).toBe('2020 - 2029');

        await wrapper.setProps({ modelValue: dateTwo });

        expect(wrapper.find('.p-datepicker-decade').text()).toBe('1980 - 1989');
    });

    it('should preserve view when selecting start date in range mode with preserveViewOnRangeStart enabled', async () => {
        const startMonth = 5; // June
        const startYear = 2024;

        await wrapper.setProps({
            inline: true,
            selectionMode: 'range',
            numberOfMonths: 2,
            preserveViewOnRangeStart: true,
            modelValue: null
        });

        // Set the initial view to a specific month
        wrapper.vm.currentMonth = startMonth;
        wrapper.vm.currentYear = startYear;
        await wrapper.vm.$nextTick();

        const initialMonth = wrapper.vm.currentMonth;
        const initialYear = wrapper.vm.currentYear;

        // Simulate internal selection flow: updateModel sets rawValue before watcher runs
        const startDate = new Date(startYear, startMonth + 1, 15); // July 15, 2024

        wrapper.vm.rawValue = [startDate, null];
        wrapper.vm.updateCurrentMetaData();
        await wrapper.vm.$nextTick();

        // The view should NOT have jumped - currentMonth and currentYear should remain the same
        expect(wrapper.vm.currentMonth).toBe(initialMonth);
        expect(wrapper.vm.currentYear).toBe(initialYear);
    });

    it('should update view when selecting start date in range mode without preserveViewOnRangeStart', async () => {
        const startMonth = 5; // June
        const startYear = 2024;

        await wrapper.setProps({
            inline: true,
            selectionMode: 'range',
            numberOfMonths: 2,
            preserveViewOnRangeStart: false,
            modelValue: null
        });

        // Set the initial view to a specific month
        wrapper.vm.currentMonth = startMonth;
        wrapper.vm.currentYear = startYear;
        await wrapper.vm.$nextTick();

        // Simulate internal selection flow: updateModel sets rawValue before watcher runs
        const startDate = new Date(startYear, startMonth + 1, 15); // July 15, 2024

        wrapper.vm.rawValue = [startDate, null];
        wrapper.vm.updateCurrentMetaData();
        await wrapper.vm.$nextTick();

        // The view SHOULD have jumped to show the selected month as the first month
        expect(wrapper.vm.currentMonth).toBe(startMonth + 1); // July
        expect(wrapper.vm.currentYear).toBe(startYear);
    });

    it('should update view when range selection is complete even with preserveViewOnRangeStart enabled', async () => {
        const startMonth = 5; // June
        const startYear = 2024;

        await wrapper.setProps({
            inline: true,
            selectionMode: 'range',
            numberOfMonths: 2,
            preserveViewOnRangeStart: true,
            modelValue: null
        });

        // Set the initial view to a specific month
        wrapper.vm.currentMonth = startMonth;
        wrapper.vm.currentYear = startYear;
        await wrapper.vm.$nextTick();

        // Simulate completing a range selection (both dates set)
        const startDate = new Date(startYear, startMonth + 1, 15); // July 15, 2024
        const endDate = new Date(startYear, startMonth + 1, 20); // July 20, 2024

        wrapper.vm.rawValue = [startDate, endDate];
        wrapper.vm.updateCurrentMetaData();
        await wrapper.vm.$nextTick();

        // When both dates are set, the view should update normally
        expect(wrapper.vm.currentMonth).toBe(startMonth + 1); // July
        expect(wrapper.vm.currentYear).toBe(startYear);
    });
});
