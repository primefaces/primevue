import { mount } from '@vue/test-utils';
import AccordionTab from './AccordionTab.vue';

describe('AccordionTab.vue', () => {
    it('should exists', () => {
        const wrapper = mount(AccordionTab, {
            slots: {
                default: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>'
            }
        });

        expect(wrapper.text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do');
    });
});
