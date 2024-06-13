import { mount } from '@vue/test-utils';
import Textarea from './Textarea.vue';

describe('Textarea.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Textarea, {
            props: {
                modelValue: '',
                rows: 1,
                cols: 1
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-textarea.p-component').exists()).toBe(true);
        expect(wrapper.attributes().rows).toBe('1');
        expect(wrapper.attributes().cols).toBe('1');
    });

    it('should be autoresized', async () => {
        await wrapper.setProps({ autoResize: true });

        expect(wrapper.find('.p-textarea-resizable').exists()).toBe(true);
    });

    it('should input', async () => {
        await wrapper.vm.onInput({ target: { value: 'primevue' } });

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['primevue']);
    });

    it('should resize', async () => {
        const firstHeight = wrapper.attributes().style;

        await wrapper.setProps({ autoResize: true });

        await wrapper.vm.onInput({ target: { value: 'primevue' } });

        expect(wrapper.attributes().style).not.toEqual(firstHeight);
    });
});
