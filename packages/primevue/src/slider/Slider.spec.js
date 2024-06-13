import { mount } from '@vue/test-utils';
import Slider from './Slider.vue';

describe('Slider.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Slider, {
            props: {
                modelValue: null
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-slider.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-slider').classes()).toContain('p-slider-horizontal');
    });

    it('should drag start and end', async () => {
        await wrapper.vm.onDragStart({ preventDefault: () => {}, currentTarget: { focus: () => {} } });

        expect(wrapper.find('.p-slider').classes()).toStrictEqual(['p-slider', 'p-component', 'p-slider-horizontal']);

        await wrapper.vm.onDragEnd();

        expect(wrapper.find('.p-slider').classes()).not.toContain('p-slider-sliding');
    });

    it('should set value', async () => {
        wrapper.element.setAttribute('width', '14rem');

        await wrapper.vm.updateDomData();

        await wrapper.vm.setValue({ pageX: 60 }); // TODO:

        expect(wrapper.emitted()['update:modelValue'][0][0]).toBeGreaterThan(0);
    });

    it('should set value on vertical mode', async () => {
        await wrapper.setProps({ orientation: 'vertical', modelValue: 0 });

        await wrapper.vm.updateDomData();

        await wrapper.vm.setValue({ pageY: 111 }); // TODO:

        expect(wrapper.emitted()['update:modelValue'][0][0]).toBe(0);
    });
});
