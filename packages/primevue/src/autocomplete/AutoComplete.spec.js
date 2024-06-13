import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import { nextTick } from 'vue';
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
                        { name: 'Afghanistan', code: 'AF' },
                        { name: 'Bahrain', code: 'BH' },
                        { name: 'Chile', code: 'CL' },
                        { name: 'Denmark', code: 'DK' }
                    ]
                };
            }
        });

        await wrapper.trigger('click');
    });

    it('should exists', () => {
        expect(wrapper.find('.p-autocomplete.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-autocomplete-input').exists()).toBe(true);
    });

    it('search complete', async () => {
        const event = { target: { value: 'b' } };

        wrapper.vm.onInput(event);
        await wrapper.vm.$nextTick();

        wrapper.vm.search(event, event.target.value, 'input');
        await wrapper.vm.$nextTick();

        await wrapper.setProps({
            suggestions: [{ name: 'Bahrain', code: 'BH' }]
        });

        expect(wrapper.find('.p-autocomplete-items').exists()).toBe(true);
        expect(wrapper.findAll('.p-autocomplete-item').length).toBe(1);
    });

    it('should show overlay and empty-message if there are no suggestions', async () => {
        const event = { target: { value: 'b' } };

        wrapper.vm.search(event, event.target.value, 'input');
        await wrapper.vm.$nextTick();

        await wrapper.setProps({
            suggestions: []
        });

        expect(wrapper.find('.p-autocomplete-items').exists()).toBe(true);
        expect(wrapper.findAll('.p-autocomplete-item').length).toBe(0);
        expect(wrapper.find('.p-autocomplete-empty-message').exists()).toBe(true);
    });

    it('dropdown', () => {
        it('should have correct custom icon', async () => {
            wrapper.setProps({
                dropdown: true,
                dropdownIcon: 'pi pi-discord'
            });

            await nextTick();

            const token = wrapper.find('.p-button').find('span');

            expect(token.classes()).toContain('pi-discord');
        });
    });

    it('multiple', () => {
        it('should have correct custom icon', async () => {
            wrapper.setProps({
                multiple: true,
                removeTokenIcon: 'pi pi-discord',
                modelValue: ['foo', 'bar']
            });

            await nextTick();

            wrapper.findAll('.p-autocomplete-token-icon').forEach((tokenIcon) => {
                expect(tokenIcon.classes()).toContain('pi-discord');
            });
        });
    });
});
