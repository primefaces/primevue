import { mount } from '@vue/test-utils';
import Listbox from './Listbox.vue';

describe('Listbox.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Listbox, {
            props: {
                modelValue: null,
                options: [
                    { name: 'New York', code: 'NY' },
                    { name: 'Rome', code: 'RM' },
                    { name: 'London', code: 'LDN' },
                    { name: 'Istanbul', code: 'IST' },
                    { name: 'Paris', code: 'PRS' }
                ],
                optionLabel: 'name'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-listbox.p-component').exists()).toBe(true);
        expect(wrapper.findAll('li.p-listbox-option').length).toBe(5);
        expect(wrapper.findAll('li.p-listbox-option')[0].attributes()['aria-label']).toBe('New York');
    });

    it('should select a list item', async () => {
        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[0]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([wrapper.vm.options[0]]);

        await wrapper.setProps({ modelValue: wrapper.vm.options[0] });

        expect(wrapper.findAll('li.p-listbox-option')[0].classes()).toContain('p-listbox-option-selected');
    });

    describe('filter', () => {
        it('should have correct custom icon', async () => {
            await wrapper.setProps({
                filter: true,
                filterIcon: 'pi pi-discord'
            });

            const icon = wrapper.find('.p-inputicon [data-pc-section="filtericon"]');

            expect(icon.classes()).toContain('pi-discord');
        });
    });
});
