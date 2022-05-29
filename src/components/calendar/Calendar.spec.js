import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
import Calendar from './Calendar.vue';

describe('Calendar.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calendar, {
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
    it('should exist', async() => {
        expect(wrapper.find('.p-calendar.p-component').exists()).toBe(true);
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

        const event = {day: 8, month: 2, year: 2022, today: false, selectable: true};

        const onDateSelect = jest.spyOn(wrapper.vm, 'onDateSelect');

        await wrapper.vm.onDateSelect({currentTarget: {focus: () => {}}}, event);
        expect(onDateSelect).toHaveBeenCalled()
    });

    it('should update the meta data when minDate changes', async () => {
        const minDate = new Date();
        await wrapper.setProps({ minDate, modelValue: null  });
        expect(wrapper.vm.$data.currentMonth).toEqual(minDate.getMonth())
        const newDate = new Date(minDate.setMonth(minDate.getMonth()+1));
        await wrapper.setProps({ minDate: newDate  });
        expect(wrapper.vm.$data.currentMonth).toEqual(newDate.getMonth());
    });
});
