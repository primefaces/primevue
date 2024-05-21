import { mount } from '@vue/test-utils';
import SplitterPanel from './SplitterPanel.vue';

describe('SplitterPanel.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(SplitterPanel, {
            attrs: {
                class: 'flex align-items-center justify-content-center'
            },
            slots: {
                default: 'Panel 1'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-splitterpanel').exists()).toBe(true);
        expect(wrapper.attributes().class).toBe('p-splitterpanel flex align-items-center justify-content-center');
        expect(wrapper.find('.p-splitterpanel').text()).toBe('Panel 1');
    });
});
