import { h } from 'vue';
import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
import Dropdown from '@/components/dropdown/Dropdown.vue';

describe('Dropdown.vue', () => {
    let wrapper; 

    beforeEach(async () => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            }
        });

        await wrapper.trigger('click');
    });

    it('should Dropdown exist', () => {
        expect(wrapper.find('.p-dropdown.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-panel').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-empty-message').exists()).toBe(true);
        expect(wrapper.find('.p-focus').exists()).toBe(true);
        expect(wrapper.find('.p-inputwrapper-filled').exists()).toBe(false);
        expect(wrapper.find('.p-inputwrapper-focus').exists()).toBe(true);
    })
});

describe('option checks', () => {
    let wrapper;

    beforeEach(async() => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'}
                ],
                optionLabel: 'name',
                optionValue: 'code',
                placeholder: 'Select a City'
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the options', () => {
        expect(wrapper.find('.p-dropdown-label.p-placeholder').text()).toBe('Select a City');
        expect(wrapper.find('.p-dropdown-items-wrapper > .p-dropdown-items').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-item').exists()).toBe(true);
        expect(wrapper.findAll('.p-dropdown-item').length).toBe(5);
        expect(wrapper.findAll('.p-dropdown-item')[0].text()).toBe('New York');
    });
});

describe('editable checks', () => {
    let wrapper;

    beforeEach(async() => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'}
                ],
                optionLabel: 'name',
                optionValue: 'code',
                placeholder: 'Select a City',
                editable: true
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the options', () => {
        expect(wrapper.find('.p-dropdown-label.p-placeholder').exists()).toBe(false);
        expect(wrapper.find('.p-dropdown-label.p-inputtext').exists()).toBe(true);
    });
});

describe('option groups checks', () => {
    let wrapper;

    beforeEach(async() => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [
                    {
                        label: 'Germany', code: 'DE',
                        items: [
                            {label: 'Berlin', value: 'Berlin'},
                            {label: 'Frankfurt', value: 'Frankfurt'},
                            {label: 'Hamburg', value: 'Hamburg'},
                            {label: 'Munich', value: 'Munich'}
                        ]
                    },
                    {
                        label: 'USA', code: 'US',
                        items: [
                            {label: 'Chicago', value: 'Chicago'},
                            {label: 'Los Angeles', value: 'Los Angeles'},
                            {label: 'New York', value: 'New York'},
                            {label: 'San Francisco', value: 'San Francisco'}
                        ]
                    },
                    {
                        label: 'Japan', code: 'JP',
                        items: [
                            {label: 'Kyoto', value: 'Kyoto'},
                            {label: 'Osaka', value: 'Osaka'},
                            {label: 'Tokyo', value: 'Tokyo'},
                            {label: 'Yokohama', value: 'Yokohama'}
                        ]
                    }
                ],
                optionLabel: 'label',
                optionGroupLabel: 'label',
                optionGroupChildren: 'items'
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the option groups', () => {
        expect(wrapper.findAll('.p-dropdown-item-group').length).toBe(3);
        expect(wrapper.findAll('.p-dropdown-item-group')[0].text()).toBe('Germany');
    });
});

describe('templating checks', () => {
    let wrapper;

    beforeEach(async() => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            slots: {
                header: h('span', {class: 'header-slot'}, 'Header slot'),
                footer: h('span', {class: 'footer-slot'}, 'Footer slot'),
                option: h('span', {class: 'option-slot'}, 'Option slot'),
                optiongroup: h('span', {class: 'optiongroup-slot'}, 'OptionGroup slot'),
                emptyfilter: h('span', {class: 'emptyfilter-slot'}, 'Empty filter slot')
            },
            props: {
                options: [
                    {
                        label: 'Germany', code: 'DE',
                        items: [
                            {label: 'Berlin', value: 'Berlin'},
                            {label: 'Frankfurt', value: 'Frankfurt'},
                            {label: 'Hamburg', value: 'Hamburg'},
                            {label: 'Munich', value: 'Munich'}
                        ]
                    }
                ],
                optionLabel: 'label',
                optionGroupLabel: 'label',
                optionGroupChildren: 'items'
            }
        });

        await wrapper.trigger('click');
    });

    it('should see header and footer slots', () => {
        expect(wrapper.find('.header-slot').exists()).toBe(true);
        expect(wrapper.find('.header-slot').text()).toBe('Header slot');
        expect(wrapper.find('.footer-slot').exists()).toBe(true);
        expect(wrapper.find('.footer-slot').text()).toBe('Footer slot');
        expect(wrapper.find('.option-slot').exists()).toBe(true);
        expect(wrapper.find('.option-slot').text()).toBe('Option slot');
        expect(wrapper.find('.optiongroup-slot').exists()).toBe(true);
        expect(wrapper.find('.optiongroup-slot').text()).toBe('OptionGroup slot');
    });
});

describe('empty templating checks', () => {
    let wrapper;

    beforeEach(async() => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                options: [],
                optionLabel: 'label',
                optionGroupLabel: 'label',
                optionGroupChildren: 'items',
                emptyMessage: 'Need options prop',
                filterValue: 'xd'
            }
        });

        await wrapper.trigger('click');
    });

    it('should see empty slots', () => {
        expect(wrapper.find('.p-dropdown-empty-message').exists()).toBe(true);
        expect(wrapper.find('.p-dropdown-empty-message').text()).toBe('Need options prop');
    });
});

describe('loader checks', () => {
    let wrapper;

    beforeEach(async() => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                loading: true,
                loadingIcon: 'pi pi-discord',
                options: [
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'}
                ],
                optionLabel: 'name',
                optionValue: 'code',
                placeholder: 'Select a City'
            }
        });

        await wrapper.trigger('click');
    });

    it('should show the loader', async () => {
        expect(wrapper.find('.p-dropdown-trigger-icon').classes()).toContain('pi-discord');

        await wrapper.setProps({ loading: false });

        expect(wrapper.find('.p-dropdown-trigger-icon').classes()).not.toContain('pi-discord');
    });
});

describe('filter checks', () => {
    let wrapper;

    beforeEach(async() => {
        wrapper = mount(Dropdown, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                filter: true,
                options: [
                    {name: 'Australia', code: 'AU'},
                    {name: 'Brazil', code: 'BR'},
                    {name: 'China', code: 'CN'},
                    {name: 'Egypt', code: 'EG'},
                    {name: 'France', code: 'FR'},
                    {name: 'Germany', code: 'DE'},
                    {name: 'India', code: 'IN'},
                    {name: 'Japan', code: 'JP'},
                    {name: 'Spain', code: 'ES'},
                    {name: 'United States', code: 'US'}
                ],
                optionLabel: 'name'
            }
        });

        await wrapper.trigger('click');
    });

    it('should make filtering', async () => {
        const filterInput = wrapper.find('.p-dropdown-filter');
        expect(filterInput.exists()).toBe(true);

        const event = {'target':{'value':'c'}};
        const onFilterChange = jest.spyOn(wrapper.vm, 'onFilterChange');

        wrapper.vm.onFilterChange(event);
        await wrapper.vm.$nextTick();
        
        expect(onFilterChange).toHaveBeenCalled();

        await wrapper.setData({filterValue: 'c'});

        expect(wrapper.findAll('.p-dropdown-item').length).toBe(2);
    });
});