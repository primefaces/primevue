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

        await wrapper.vm.$refs.container.click();

        expect(wrapper.findAll('li.p-multiselect-option').length).toBe(5);
        expect(wrapper.findAll('li.p-multiselect-option')[0].attributes()['aria-label']).toBe('New York');
        expect(wrapper.findAll('li.p-multiselect-option')[0].text()).toBe('New York');
    });

    it('should select an item', async () => {
        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[0]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([[wrapper.vm.options[0]]]);

        await wrapper.setProps({ modelValue: [wrapper.vm.options[0]] });
        await wrapper.vm.$refs.container.click();

        expect(wrapper.findAll('li.p-multiselect-option')[0].attributes()['data-p-selected']).toBe('true');
        expect(wrapper.find('.p-multiselect-label').text()).toBe('New York');
    });

    it('should select multiple item', async () => {
        await wrapper.setProps({ modelValue: [wrapper.vm.options[0]] });

        await wrapper.vm.onOptionSelect({}, wrapper.vm.options[1]);

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([[wrapper.vm.options[0], wrapper.vm.options[1]]]);

        await wrapper.setProps({ modelValue: [wrapper.vm.options[0], wrapper.vm.options[1]] });
        await wrapper.vm.$refs.container.click();

        expect(wrapper.findAll('li.p-multiselect-option')[0].attributes()['data-p-selected']).toBe('true');
        expect(wrapper.findAll('li.p-multiselect-option')[1].attributes()['data-p-selected']).toBe('true');
    });

    it('should chip work', async () => {
        await wrapper.setProps({
            display: 'chip',
            modelValue: [wrapper.vm.options[0]]
        });

        expect(wrapper.find('.p-chip.p-multiselect-chip').exists()).toBe(true);
        expect(wrapper.find('.p-chip.p-multiselect-chip > .p-chip-label').text()).toBe('New York');
    });

    describe('custom icons', () => {
        it('should have custom chip remove icon', async () => {
            await wrapper.setProps({
                display: 'chip',
                modelValue: [wrapper.vm.options[0]],
                removeTokenIcon: 'pi pi-discord'
            });

            const icon = wrapper.find('.p-chip-remove-icon');

            expect(icon.classes()).toContain('pi-discord');
        });

        it('should have custom dropdown icon', async () => {
            await wrapper.setProps({
                dropdownIcon: 'pi pi-discord'
            });

            const icon = wrapper.find('.p-multiselect-dropdown [data-pc-section="dropdownicon"]');

            expect(icon.classes()).toContain('pi-discord');
        });

        it('should have custom filter icon', async () => {
            await wrapper.setProps({
                filter: true,
                filterIcon: 'pi pi-discord'
            });

            await wrapper.vm.$refs.container.click();

            const icon = wrapper.find('.p-multiselect-filter-container [data-pc-section="filtericon"]');

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

            await wrapper.vm.$refs.container.click();

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

            await wrapper.vm.$refs.container.click();
            expect(wrapper.find('.p-multiselect-option-group').exists()).toBe(true);
        });

        it('should show emit the filter event when filter text is entered', async () => {
            await wrapper.setProps({
                options: groupedItems,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items',
                filter: true,
                autoFilterFocus: true
            });

            await wrapper.vm.$refs.container.click();
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

            await wrapper.vm.$refs.container.click();
            const input = await wrapper.find('input.p-multiselect-filter');

            input.value = 'Ber';

            await wrapper.vm.onFilterChange({ target: input });
            expect(wrapper.findAll('.p-multiselect-list').length).toBe(1);
            expect(wrapper.find('.p-multiselect-option-group').text()).toBe('Germany');
        });
    });

    describe('option group validation', () => {
        it('should handle optionGroupLabel set with non-grouped data correctly', async () => {
            const simpleOptions = [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' }
            ];

            await wrapper.setProps({
                options: simpleOptions,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items'
            });

            const visibleOptions = wrapper.vm.visibleOptions;

            expect(visibleOptions.length).toBe(3);

            expect(wrapper.vm.isOptionGroup(simpleOptions[0])).toBe(false);
            expect(wrapper.vm.isOptionGroup(simpleOptions[1])).toBe(false);
            expect(wrapper.vm.isOptionGroup(simpleOptions[2])).toBe(false);

            await wrapper.vm.$refs.container.click();

            expect(wrapper.findAll('.p-multiselect-option').length).toBe(3);
            expect(wrapper.find('.p-multiselect-option-group').exists()).toBe(false);
        });

        it('should handle empty group data correctly', async () => {
            const optionsWithEmptyGroups = [{ name: 'Group 1', items: [] }, { name: 'Group 2', items: null }, { name: 'Group 3' }];

            await wrapper.setProps({
                options: optionsWithEmptyGroups,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items',
                optionLabel: 'name'
            });

            const visibleOptions = wrapper.vm.visibleOptions;
            const groupHeaders = visibleOptions.filter((opt) => opt.group === true);

            expect(groupHeaders.length).toBe(1);
            expect(groupHeaders[0].optionGroup).toEqual(optionsWithEmptyGroups[0]);
        });

        it('should correctly identify actual group data', async () => {
            const actualGroupedData = [
                {
                    name: 'USA',
                    items: [
                        { name: 'New York', value: 'NY' },
                        { name: 'California', value: 'CA' }
                    ]
                },
                {
                    name: 'Europe',
                    items: [
                        { name: 'London', value: 'LON' },
                        { name: 'Paris', value: 'PAR' }
                    ]
                }
            ];

            await wrapper.setProps({
                options: actualGroupedData,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items',
                optionLabel: 'name'
            });

            const visibleOptions = wrapper.vm.visibleOptions;
            const groupOptions = visibleOptions.filter((opt) => opt.group === true);

            groupOptions.forEach((groupOpt) => {
                expect(wrapper.vm.isOptionGroup(groupOpt)).toBe(true);
            });

            await wrapper.vm.$refs.container.click();

            expect(wrapper.findAll('.p-multiselect-option-group').length).toBe(2);
        });

        it('should not treat options as groups when optionGroupLabel is not set', async () => {
            const optionsWithGroupStructure = [
                {
                    name: 'Has Items Property',
                    items: [
                        { name: 'Child 1', value: 'c1' },
                        { name: 'Child 2', value: 'c2' }
                    ]
                }
            ];

            await wrapper.setProps({
                options: optionsWithGroupStructure,
                optionLabel: 'name'
            });

            const visibleOptions = wrapper.vm.visibleOptions;

            expect(visibleOptions).toEqual(optionsWithGroupStructure);

            expect(wrapper.vm.isOptionGroup(optionsWithGroupStructure[0])).toBe(false);
        });

        it('should reproduce the original bug scenario', async () => {
            const simpleOptions = [
                { name: 'Option 1', value: 'option1' },
                { name: 'Option 2', value: 'option2' },
                { name: 'Option 3', value: 'option3' }
            ];

            await wrapper.setProps({
                options: simpleOptions,
                optionLabel: 'name',
                optionValue: 'value',
                optionGroupLabel: 'category',
                optionGroupChildren: 'items'
            });

            await wrapper.vm.$refs.container.click();

            const checkboxes = wrapper.findAll('.p-checkbox');

            expect(checkboxes.length).toBe(4);

            const clickableOptions = wrapper.findAll('.p-multiselect-option');

            expect(clickableOptions.length).toBe(3);

            expect(wrapper.find('.p-multiselect-option-group').exists()).toBe(false);
        });

        it('should handle mixed data (groups and regular options) correctly', async () => {
            const mixedOptions = [
                { name: 'Regular Option 1', value: 'reg1' },
                {
                    name: 'Group 1',
                    items: [
                        { name: 'Group 1 Option 1', value: 'g1o1' },
                        { name: 'Group 1 Option 2', value: 'g1o2' }
                    ]
                },
                { name: 'Regular Option 2', value: 'reg2' },
                {
                    name: 'Group 2',
                    items: [{ name: 'Group 2 Option 1', value: 'g2o1' }]
                },
                { name: 'Regular Option 3', value: 'reg3' }
            ];

            await wrapper.setProps({
                options: mixedOptions,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items',
                optionLabel: 'name',
                optionValue: 'value'
            });

            const visibleOptions = wrapper.vm.visibleOptions;

            expect(visibleOptions.length).toBe(8);

            const groupHeaders = visibleOptions.filter((opt) => opt.group === true);
            const regularOptions = visibleOptions.filter((opt) => !opt.group);

            expect(groupHeaders.length).toBe(2);
            expect(regularOptions.length).toBe(6);

            await wrapper.vm.$refs.container.click();

            expect(wrapper.findAll('.p-multiselect-option-group').length).toBe(2);
            expect(wrapper.findAll('.p-multiselect-option').length).toBe(6);
        });

        it('should handle mixed data with empty groups correctly', async () => {
            const mixedOptionsWithEmpty = [
                { name: 'Regular Option', value: 'reg1' },
                { name: 'Empty Group 1', items: [] },
                {
                    name: 'Valid Group',
                    items: [{ name: 'Group Option', value: 'gopt1' }]
                },
                { name: 'Not A Group', items: null },
                { name: 'Another Regular', value: 'reg2' }
            ];

            await wrapper.setProps({
                options: mixedOptionsWithEmpty,
                optionGroupLabel: 'name',
                optionGroupChildren: 'items',
                optionLabel: 'name',
                optionValue: 'value'
            });

            const visibleOptions = wrapper.vm.visibleOptions;

            expect(visibleOptions.length).toBe(6);

            const groupHeaders = visibleOptions.filter((opt) => opt.group === true);

            expect(groupHeaders.length).toBe(2);

            await wrapper.vm.$refs.container.click();

            expect(wrapper.findAll('.p-multiselect-option-group').length).toBe(2);
            expect(wrapper.findAll('.p-multiselect-option').length).toBe(4);
        });
    });
});
