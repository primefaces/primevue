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

    it('should exist', async () => {
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

        const event = { day: 8, month: 2, year: 2022, today: false, selectable: true };

        const onDateSelect = jest.spyOn(wrapper.vm, 'onDateSelect');

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

    it('should respect custom icon settings', async () => {
        await wrapper.setProps({
            previousIcon: 'pi pi-discord',
            nextIcon: 'pi pi-facebook',
            incrementIcon: 'pi pi-linkedin',
            decrementIcon: 'pi pi-microsoft',
            inline: true
        });

        const previousIcon = wrapper.find('.p-datepicker-prev-icon');
        const nextIcon = wrapper.find('.p-datepicker-next-icon');

        expect(previousIcon.classes()).toContain('pi-discord');
        expect(nextIcon.classes()).toContain('pi-facebook');

        await wrapper.setProps({
            timeOnly: true,
            hourFormat: '12'
        });

        expect(wrapper.findAll('.pi-linkedin')).toHaveLength(3);
        expect(wrapper.findAll('.pi-microsoft')).toHaveLength(3);
    });
});
