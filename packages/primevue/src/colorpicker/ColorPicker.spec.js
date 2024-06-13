import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import ColorPicker from './ColorPicker.vue';

describe('ColorPicker.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ColorPicker, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: null
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-colorpicker.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-colorpicker-preview.p-inputtext').exists()).toBe(true);
    });

    it('should input click triggered', async () => {
        const input = wrapper.find('.p-colorpicker-preview.p-inputtext');
        const onInputClick = vi.spyOn(wrapper.vm, 'onInputClick');

        await input.trigger('click');

        expect(onInputClick).toHaveBeenCalled();
        expect(wrapper.find('.p-colorpicker-panel').exists()).toBe(true);
        expect(wrapper.find('.p-colorpicker-color-selector').exists()).toBe(true);
        expect(wrapper.find('.p-colorpicker-hue').exists()).toBe(true);
    });

    it('should mouse events triggered', async () => {
        const input = wrapper.find('.p-colorpicker-preview.p-inputtext');

        await input.trigger('click');

        const onColorMousedown = vi.spyOn(wrapper.vm, 'onColorMousedown');
        const onHueMousedown = vi.spyOn(wrapper.vm, 'onHueMousedown');
        const event = { pageX: 100, pageY: 120, preventDefault: () => {} };
        const event2 = { pageX: 70, pageY: 20, preventDefault: () => {} };

        wrapper.vm.onColorMousedown(event);

        expect(onColorMousedown).toHaveBeenCalled();
        expect(wrapper.find('.p-colorpicker-preview.p-inputtext').element.style.backgroundColor).not.toBe('rgb(255, 0, 0)');

        wrapper.vm.onHueMousedown(event2);

        expect(onHueMousedown).toHaveBeenCalled();
        expect(wrapper.find('.p-colorpicker-preview.p-inputtext').element.style.backgroundColor).not.toBe('rgb(255, 0, 0)');
    });
});
