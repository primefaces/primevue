import { mount } from '@vue/test-utils';
import Chips from './Chips.vue';

describe('Chips.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Chips, {
            props: {
                modelValue: null
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-chips.p-component.p-inputwrapper').exists()).toBe(true);
        expect(wrapper.find('ul.p-chips-multiple-container').exists()).toBe(true);
        expect(wrapper.find('li.p-chips-input-token').exists()).toBe(true);
    });

    it('should add item', async () => {
        const addItem = vi.spyOn(wrapper.vm, 'addItem');

        await wrapper.vm.addItem({}, 'PrimeVue', false);

        await wrapper.setProps({ modelValue: ['PrimeVue'] });

        expect(addItem).toHaveBeenCalled();
        expect(wrapper.findAll('.p-chips-token').length).toBe(1);
        expect(wrapper.find('.p-chips-token-label').exists()).toBe(true);
        expect(wrapper.find('.p-chips-token-label').text()).toBe('PrimeVue');
    });

    it('should have correct custom chip removal icon', async () => {
        await wrapper.setProps({
            modelValue: ['foo', 'bar'],
            removeTokenIcon: 'pi pi-discord'
        });

        const icon = wrapper.find('.p-chips-token-icon');

        expect(icon.classes()).toContain('pi-discord');
    });
});
