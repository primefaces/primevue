import { mount } from '@vue/test-utils';
import Tree from './Tree.vue';

describe('Tree.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Tree, {
            props: {
                value: [
                    {
                        key: '0',
                        label: 'Documents',
                        data: 'Documents Folder',
                        icon: 'pi pi-fw pi-inbox',
                        children: []
                    }
                ]
            },
            slots: {
                default: `<input data-tree-input />`
            }
        });
    });

    it('should exists', () => {
        expect(wrapper.find('.p-tree.p-component').exists()).toBe(true);
    });

    it('triggers event', async () => {
        wrapper.trigger('keydown.space');
        expect(wrapper.emitted('keydown')).toBeTruthy();
    });

    it('stops event propagation from content', async () => {
        // If the event propagation is not stopped from content, then inputs would not work as expected
        let textInput = wrapper.find('input[data-tree-input]');

        await textInput.trigger('keydown.space');

        expect(wrapper.emitted('keydown')).toBeFalsy();
    });

    it('emits update:filterValue on filter input', async () => {
        wrapper = mount(Tree, {
            props: {
                filter: true
            }
        });

        let searchField = wrapper.find('input.p-inputtext');
        const key = 't';

        searchField.element.value = key;

        await searchField.trigger('keyup', {
            key
        });

        expect(wrapper.emitted('filter')).toBeTruthy();
        expect(wrapper.emitted('filter')[0][0].value).toEqual(key);
    });

    it('emits filteredNodes in filter event payload', async () => {
        const nodes = [
            {
                key: '0',
                label: 'Documents',
                children: [
                    { key: '0-0', label: 'Work' },
                    { key: '0-1', label: 'Home' }
                ]
            },
            {
                key: '1',
                label: 'Downloads',
                children: []
            }
        ];

        wrapper = mount(Tree, {
            props: {
                value: nodes,
                filter: true,
                filterBy: 'label',
                filterMode: 'lenient'
            }
        });

        let searchField = wrapper.find('input.p-inputtext');

        searchField.element.value = 'Work';

        await searchField.trigger('keyup', { key: 'k' });

        expect(wrapper.emitted('filter')).toBeTruthy();

        const filterEvent = wrapper.emitted('filter')[0][0];

        expect(filterEvent.filteredNodes).toBeDefined();
        expect(Array.isArray(filterEvent.filteredNodes)).toBe(true);
    });

    it('should render icon', ({ expect }) => {
        expect(wrapper.find('span.pi-inbox').exists()).toBeTruthy();
        expect(wrapper.find('span.pi-inbox').classes('p-tree-node-icon')).toBeTruthy();
    });

    it('should render icon slot', ({ expect }) => {
        let wrapper = mount(Tree, {
            slots: {
                nodeicon: `<i data-node-icon/>`
            },
            props: {
                value: [
                    {
                        key: '0',
                        label: 'Documents',
                        data: 'Documents Folder',
                        children: []
                    }
                ]
            }
        });

        const nodeIcon = wrapper.find('i[data-node-icon]');

        expect(nodeIcon.exists()).toBeTruthy();
    });
});
