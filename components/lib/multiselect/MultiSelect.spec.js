import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import MultiSelect from './MultiSelect.vue';

describe('MultiSelect.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(MultiSelect, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: null,
                options: [
                    { name: 'New York', code: 'NY' },
                    { name: 'Rome', code: 'RM' },
                    { name: 'London', code: 'LDN' },
                    { name: 'Istanbul', code: 'IST' },
                    { name: 'Paris', code: 'PRS' }
                ],
                optionLabel: 'name',
                placeholder: 'Select Cities',
                highlightOnSelect: true
            }
        });
    });

    it('should exist', async () => {
        expect(wrapper.find('.p-multiselect.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-multiselect-label.p-placeholder').text()).toBe('Select Cities');
        expect(wrapper.find('.p-multiselect-panel').exists()).toBe(false);

        await wrapper.vm.onContainerClick();

        expect(wrapper.findAll('li.p-multiselect-item').length).toBe(5);
        expect(wrapper.findAll('li.p-multiselect-item')[0].attributes()['aria-label']).toBe('New York');
        expect(wrapper.findAll('li.p-multiselect-item')[0].text()).toBe('New York');
    });

    it('should select an item', async () => {
        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[0]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([[wrapper.vm.options[0]]]);

        await wrapper.setProps({ modelValue: [wrapper.vm.options[0]] });
        await wrapper.vm.onContainerClick();

        expect(wrapper.findAll('li.p-multiselect-item')[0].attributes()['data-p-selected']).toBe('true');
        expect(wrapper.find('.p-multiselect-label').text()).toBe('New York');
    });

    it('should select multiple item', async () => {
        await wrapper.setProps({ modelValue: [wrapper.vm.options[0]] });

        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[1]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([[wrapper.vm.options[0], wrapper.vm.options[1]]]);

        await wrapper.setProps({ modelValue: [wrapper.vm.options[0], wrapper.vm.options[1]] });
        await wrapper.vm.onContainerClick();

        expect(wrapper.findAll('li.p-multiselect-item')[0].attributes()['data-p-selected']).toBe('true');
        expect(wrapper.findAll('li.p-multiselect-item')[1].attributes()['data-p-selected']).toBe('true');
    });

    it('should close panel', async () => {
        await wrapper.vm.onCloseClick();

        expect(wrapper.find('.p-multiselect-panel').exists()).toBe(false);
    });

    it('should chip work', async () => {
        await wrapper.setProps({
            display: 'chip',
            modelValue: [wrapper.vm.options[0]]
        });

        expect(wrapper.find('.p-multiselect-token').exists()).toBe(true);
        expect(wrapper.find('.p-multiselect-token-label').text()).toBe('New York');
    });

    describe('custom icons', () => {
        it('should have custom chip remove icon', async () => {
            await wrapper.setProps({
                display: 'chip',
                modelValue: [wrapper.vm.options[0]],
                removeTokenIcon: 'pi pi-discord'
            });

            const icon = wrapper.find('.p-multiselect-token-icon');

            expect(icon.classes()).toContain('pi-discord');
        });

        it('should have custom dropdown icon', async () => {
            await wrapper.setProps({
                dropdownIcon: 'pi pi-discord'
            });

            const icon = wrapper.find('.p-multiselect-trigger-icon');

            expect(icon.classes()).toContain('pi-discord');
        });

        it('should have custom filter icon', async () => {
            await wrapper.setProps({
                filter: true,
                filterIcon: 'pi pi-discord'
            });

            await wrapper.vm.onContainerClick();

            const icon = wrapper.find('.p-multiselect-filter-icon');

            expect(icon.classes()).toContain('pi-discord');
        });

        it('should have custom close icon', async () => {
            await wrapper.setProps({
                closeIcon: 'pi pi-discord'
            });

            await wrapper.vm.onContainerClick();

            const icon = wrapper.find('.p-multiselect-close-icon');

            expect(icon.classes()).toContain('pi-discord');
        });

        it('should have custom checkbox icons', async () => {
            await wrapper.setProps({
                checkboxIcon: 'pi pi-discord'
            });

            await wrapper.setProps({
                checkboxIcon: 'pi pi-discord',
                modelValue: wrapper.vm.options
            });

            await wrapper.vm.onContainerClick();

            wrapper.findAll('.p-checkbox-icon').forEach((icon) => {
                expect(icon.classes()).toContain('pi-discord');
            });
        });
    });

    const groupedItems = [
        {
            name: 'Germany',
            code: 'DE',
            items: [
                { name: 'Berlin', value: 'Berlin' },
                { name: 'Frankfurt', value: 'Frankfurt' },
                { name: 'Hamburg', value: 'Hamburg' },
                { name: 'Munich', value: 'Munich' }
            ]
        },
        {
            name: 'USA',
            code: 'US',
            items: [
                { name: 'Chicago', value: 'Chicago' },
                { name: 'Los Angeles', value: 'Los Angeles' },
                { name: 'New York', value: 'New York' },
                { name: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            name: 'Japan',
            code: 'JP',
            items: [
                { name: 'Kyoto', value: 'Kyoto' },
                { name: 'Osaka', value: 'Osaka' },
                { name: 'Tokyo', value: 'Tokyo' },
                { name: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    describe('grouped', () => {
        it('should show group labels', async () => {
            await wrapper.setProps({
                options: groupedItems,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items'
            });

            await wrapper.vm.onContainerClick();
            expect(wrapper.find('.p-multiselect-item-group').exists()).toBe(true);
        });

        it('should show emit the filter event when filter text is entered', async () => {
            await wrapper.setProps({
                options: groupedItems,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items',
                filter: true,
                autoFilterFocus: true
            });

            await wrapper.vm.onContainerClick();
            const input = await wrapper.find('input.p-multiselect-filter');

            input.setValue('Ber');
            input.trigger('input');

            expect(wrapper.emitted()).toHaveProperty('filter');
        });

        it('should show relevant group labels for filtered items', async () => {
            await wrapper.setProps({
                options: groupedItems,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items',
                filter: true,
                autoFilterFocus: true
            });

            await wrapper.vm.onContainerClick();
            const input = await wrapper.find('input.p-multiselect-filter');

            input.value = 'Ber';

            await wrapper.vm.onFilterChange({ target: input });
            expect(wrapper.findAll('.p-multiselect-item-group').length).toBe(1);
            expect(wrapper.find('.p-multiselect-item-group').text()).toBe('Germany');
        });
    });
});
