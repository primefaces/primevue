import { mount } from '@vue/test-utils';
import Splitter from './Splitter.vue';
import SplitterPanel from '@/components/splitterpanel/SplitterPanel.vue';

describe('Splitter.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Splitter, {
            global: {
                components: {
                    SplitterPanel
                }
            },
            slots: {
                default: `
                    <SplitterPanel class="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel class="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                `
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-splitter.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-splitter').classes()).toContain('p-splitter-horizontal');
        expect(wrapper.findAll('.p-splitter-panel').length).toBe(2);
        expect(wrapper.find('.p-splitter-gutter-handle').exists()).toBe(true);
    });

    it('should mousedown', async () => {
        const gutter = wrapper.find('.p-splitter-gutter-handle').element;
        const siblings = wrapper.findAll('.p-splitter-panel');
        await wrapper.vm.onGutterMouseDown({ currentTarget: {gutter, previousElementSibling: siblings[0].element, nextElementSibling: siblings[1].element }, pageX: 123 }, 0);
        
        expect(wrapper.find('.p-splitter').classes()).toContain('p-splitter-resizing');
    });
});