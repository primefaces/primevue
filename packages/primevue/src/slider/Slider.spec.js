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

    it('should handle values outside range by filling the slider', async () => {
        await wrapper.setProps({ min: 0, max: 200, modelValue: [-50, 250], range: true });

        expect(wrapper.vm.rangeStartPosition).toBe(0);

        expect(wrapper.vm.rangeEndPosition).toBe(100);

        await wrapper.setProps({ min: -200, max: 200, modelValue: [-250, 250], range: true });

        expect(wrapper.vm.rangeStartPosition).toBe(0);

        expect(wrapper.vm.rangeEndPosition).toBe(100);
    });

    it('should handle values within range', async () => {
        await wrapper.setProps({ min: -100, max: 100, modelValue: [0, 50], range: true });

        expect(wrapper.vm.rangeStartPosition).toBe(50);

        expect(wrapper.vm.rangeEndPosition).toBe(75);
    });

    it('should handle exact min and max values', async () => {
        await wrapper.setProps({ min: -100, max: 100, modelValue: [-100, 100], range: true });

        expect(wrapper.vm.rangeStartPosition).toBe(0);

        expect(wrapper.vm.rangeEndPosition).toBe(100);
    });

    it('should handle fully positive range', async () => {
        await wrapper.setProps({ min: -100, max: 100, modelValue: [0, 100], range: true });

        expect(wrapper.vm.rangeStartPosition).toBe(50);

        expect(wrapper.vm.rangeEndPosition).toBe(100);
    });

    it('should handle fully negative range', async () => {
        await wrapper.setProps({ min: -200, max: -100, modelValue: [-200, -150], range: true });

        expect(wrapper.vm.rangeStartPosition).toBe(0);

        expect(wrapper.vm.rangeEndPosition).toBe(50);
    });

    it('should treat 0 as a valid start value', async () => {
        await wrapper.setProps({ min: -100, max: 100, modelValue: [0, 50], range: true });

        expect(wrapper.vm.rangeStartPosition).toBe(50);

        expect(wrapper.vm.rangeEndPosition).toBe(75);
    });
});
