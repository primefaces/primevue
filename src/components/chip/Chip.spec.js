import { mount } from '@vue/test-utils';
import Chip from './Chip.vue';

describe('Chip.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Chip, {
            props: {
                label: 'PrimeVue',
                icon: 'pi pi-primevue',
                removable: true
            }
        });
    });
    
    it('should exists', () => {
        expect(wrapper.find('.p-chip.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-chip-icon').classes()).toContain('pi-primevue');
        expect(wrapper.find('.p-chip-text').text()).toBe('PrimeVue');
        expect(wrapper.find('.p-chip-remove-icon').exists()).toBe(true);
    });

    it('should close icon work', async () => {
        await wrapper.find('.p-chip-remove-icon').trigger('click')
        
        expect(wrapper.find('.p-chip.p-component').exists()).toBe(false);
    });
});