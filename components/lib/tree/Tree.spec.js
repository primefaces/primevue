import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import { nextTick } from 'vue';
import Tree from './Tree.vue';

describe('Tree.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Tree, {
            props: {
                value: [
                    {
                      key: "0",
                      label: "Documents",
                      data: "Documents Folder",
                      icon: "pi pi-fw pi-inbox",
                      children: [],
                    },
                ],
            },
            slots: {
                default: `<input data-tree-input />`
            },
        });
    });

    it('should exists', () => {
        expect(wrapper.find('.p-tree.p-component').exists()).toBe(true);
    });

    it('triggers event', async () => {
        wrapper.trigger('keydown.space')
        expect(wrapper.emitted('keydown')).toBeTruthy()
    });

    it('stops event propagation from content', async () => {
        // If the event propagation is not stopped from content, then inputs would not work as expected
        let textInput = wrapper.find('input[data-tree-input]')

        await textInput.trigger('keydown.space')

        expect(wrapper.emitted('keydown')).toBeFalsy()
    });
});
