import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
import Dropdown from '@/components/dropdown/Dropdown.vue';

'use strict';

describe('Dropdown', () => {
    let wrapper; 

    beforeEach(() => {
        jest.useFakeTimers();

        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue]
            }
        });
    });

    it('should Dropdown exist', async () => {
        expect(wrapper.find('.p-dropdown.p-component').exists()).toBe(true);

        await wrapper.trigger('click');
        // console.log('before', new Date());
        // Promise.resolve().then(() => jest.advanceTimersByTime(1000));
        jest.advanceTimersByTime(1000);

        // console.log('after', new Date());

        // expect(wrapper.find('.p-dropdowwn-panel')).toBe(true);
        // console.log(wrapper.html());
    })
});