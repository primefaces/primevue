import { mount } from '@vue/test-utils';
import InputChips from './InputChips.vue';

describe('InputChips.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(InputChips, {
            props: {
                modelValue: null
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-inputchips.p-component.p-inputwrapper').exists()).toBe(true);
        expect(wrapper.find('ul.p-inputwrapper-filled').exists()).toBe(false);
        expect(wrapper.find('li.p-inputchips-input-item').exists()).toBe(true);
    });

    it('should add item', async () => {
        const addItem = vi.spyOn(wrapper.vm, 'addItem');

        await wrapper.vm.addItem({}, 'PrimeVue', false);

        await wrapper.setProps({ modelValue: ['PrimeVue'] });

        expect(addItem).toHaveBeenCalled();
        expect(wrapper.findAll('.p-chip').length).toBe(1);
        expect(wrapper.find('.p-chip-label').exists()).toBe(true);
        expect(wrapper.find('.p-chip-label').text()).toBe('PrimeVue');
    });

    it('should have correct custom chip removal icon', async () => {
        await wrapper.setProps({
            modelValue: ['foo', 'bar'],
            chipIcon: 'pi pi-discord'
        });

        const icon = wrapper.find('[data-pc-section="removeicon"]');

        expect(icon.classes()).toContain('pi-discord');
    });
});
