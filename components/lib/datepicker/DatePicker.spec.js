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
                modelValue: new Date()
            }
        });
    });

    it('should exist', async () => {
        expect(wrapper.find('.p-datepicker.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-inputtext').exists()).toBe(true);

        let input = wrapper.find('.p-inputtext');

        await input.trigger('focus');

        expect(wrapper.find('.p-datepicker.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-datepicker-today').exists()).toBe(true);
        expect(wrapper.find('.p-highlight').exists()).toBe(true);
        expect(wrapper.find('.p-highlight').text()).toEqual(new Date().getDate().toString());
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
});
