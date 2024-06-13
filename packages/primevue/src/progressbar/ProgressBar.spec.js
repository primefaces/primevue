import { mount } from '@vue/test-utils';
import ProgressBar from './ProgressBar.vue';

describe('ProgressBar.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ProgressBar, {
            props: {
                value: 0
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-progressbar.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-progressbar').attributes()['aria-valuemin']).toBe('0');
        expect(wrapper.find('.p-progressbar').attributes()['aria-valuemax']).toBe('100');
    });

    it('should value work', async () => {
        await wrapper.setProps({ value: 10 });

        expect(wrapper.find('.p-progressbar').attributes()['aria-valuenow']).toBe('10');
        expect(wrapper.find('.p-progressbar-label').text()).toBe('10%');
    });

    it('should not show value', async () => {
        await wrapper.setProps({ showValue: false });

        expect(wrapper.find('.p-progressbar-label').exists()).toBe(false);
    });
});
