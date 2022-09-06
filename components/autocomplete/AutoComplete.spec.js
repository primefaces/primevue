import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
import AutoComplete from './AutoComplete.vue';

describe('AutoComplete.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(AutoComplete, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                suggestions: null,
                field: 'name'
            },
            data() {
                return {
                    countries: [
                        {"name": "Afghanistan", "code": "AF"},
                        {"name": "Bahrain", "code": "BH"},
                        {"name": "Chile", "code": "CL"},
                        {"name": "Denmark", "code": "DK"}
                    ]
                }
            }
        });

        await wrapper.trigger('click');
    });

    it('should exists', () => {
        expect(wrapper.find('.p-autocomplete.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-autocomplete-input').exists()).toBe(true);
    });

    it('search copmlete', async () => {
        const event = {'target': { 'value': 'b' }};

        wrapper.vm.onInput(event);
        await wrapper.vm.$nextTick();

        wrapper.vm.search(event , event.target.value, 'input');
        await wrapper.vm.$nextTick();

        await wrapper.setProps({
            suggestions: [
                {"name": "Bahrain", "code": "BH"}
            ]
        });

        expect(wrapper.find('.p-autocomplete-items').exists()).toBe(true);
        expect(wrapper.findAll('.p-autocomplete-item').length).toBe(1);
    });
});