import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import CascadeSelect from './CascadeSelect.vue';

describe('CascadeSelect.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CascadeSelect, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: null,
                options: [
                    {
                        name: 'Australia',
                        code: 'AU',
                        states: [
                            {
                                name: 'New South Wales',
                                cities: [
                                    { cname: 'Sydney', code: 'A-SY' },
                                    { cname: 'Newcastle', code: 'A-NE' },
                                    { cname: 'Wollongong', code: 'A-WO' }
                                ]
                            },
                            {
                                name: 'Queensland',
                                cities: [
                                    { cname: 'Brisbane', code: 'A-BR' },
                                    { cname: 'Townsville', code: 'A-TO' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Canada',
                        code: 'CA',
                        states: [
                            {
                                name: 'Quebec',
                                cities: [
                                    { cname: 'Montreal', code: 'C-MO' },
                                    { cname: 'Quebec City', code: 'C-QU' }
                                ]
                            },
                            {
                                name: 'Ontario',
                                cities: [
                                    { cname: 'Ottawa', code: 'C-OT' },
                                    { cname: 'Toronto', code: 'C-TO' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'United States',
                        code: 'US',
                        states: [
                            {
                                name: 'California',
                                cities: [
                                    { cname: 'Los Angeles', code: 'US-LA' },
                                    { cname: 'San Diego', code: 'US-SD' },
                                    { cname: 'San Francisco', code: 'US-SF' }
                                ]
                            },
                            {
                                name: 'Florida',
                                cities: [
                                    { cname: 'Jacksonville', code: 'US-JA' },
                                    { cname: 'Miami', code: 'US-MI' },
                                    { cname: 'Tampa', code: 'US-TA' },
                                    { cname: 'Orlando', code: 'US-OR' }
                                ]
                            },
                            {
                                name: 'Texas',
                                cities: [
                                    { cname: 'Austin', code: 'US-AU' },
                                    { cname: 'Dallas', code: 'US-DA' },
                                    { cname: 'Houston', code: 'US-HO' }
                                ]
                            }
                        ]
                    }
                ],
                optionLabel: 'cname',
                optionGroupLabel: 'name',
                optionGroupChildren: ['states', 'cities']
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-cascadeselect.p-component').exists()).toBe(true);
    });

    it('should show list and sublist', async () => {
        expect(wrapper.find('.p-cascadeselect.p-component').exists()).toBe(true);

        await wrapper.trigger('click');

        expect(wrapper.find('.p-cascadeselect-panel.p-cascadeselect-items').exists()).toBe(true);
        expect(wrapper.findAll('.p-cascadeselect-item').length).toBe(3);
        expect(wrapper.findAll('.p-cascadeselect-item-text')[0].text()).toBe('Australia');

        const firstGroup = wrapper.findAll('.p-cascadeselect-item-content')[0];

        await firstGroup.trigger('click');

        expect(wrapper.find('.p-cascadeselect-panel.p-cascadeselect-sublist').exists()).toBe(true);

        const sublist = wrapper.find('.p-cascadeselect-panel.p-cascadeselect-sublist');

        expect(sublist.findAll('.p-cascadeselect-item.p-cascadeselect-item-group').length).toBe(2);
        expect(sublist.findAll('.p-cascadeselect-item-text')[0].text()).toBe('New South Wales');
    });

    it('should accept custom icons', async () => {
        wrapper.setProps({
            dropdownIcon: 'pi pi-discord',
            optionGroupIcon: 'pi pi-bell'
        });

        await nextTick();

        expect(wrapper.find('.p-cascadeselect-trigger-icon').classes()).toContain('pi-discord');

        await wrapper.trigger('click');

        expect(wrapper.find('.p-cascadeselect-group-icon').classes()).toContain('pi-bell');
    });
});
