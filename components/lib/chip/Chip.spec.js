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

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should exists', () => {
        expect(wrapper.find('.p-chip.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-chip-icon').classes()).toContain('pi-primevue');
        expect(wrapper.find('.p-chip-text').text()).toBe('PrimeVue');
        expect(wrapper.find('.p-chip-remove-icon').exists()).toBe(true);
    });

    it('should close icon work', async () => {
        await wrapper.find('.p-chip-remove-icon').trigger('click');

        expect(wrapper.find('.p-chip.p-component').exists()).toBe(false);
    });

    it('When removable is true and keydown triggered OnKeydown method should be called', async () => {
        const closeSpy = vi.spyOn(wrapper.vm, 'onKeydown');

        wrapper.vm.onKeydown({ key: 'Enter' });

        expect(closeSpy).toHaveBeenCalled();
    });
    it('When onKeyDown method triggered close method should be called', async () => {
        const closeSpy = vi.spyOn(wrapper.vm, 'close');

        await wrapper.vm.onKeydown({ key: 'Enter' });

        expect(closeSpy).toHaveBeenCalled();
    });
});
