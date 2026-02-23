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

    it('emits filter event with filteredNodes', async () => {
        wrapper = mount(Tree, {
            props: {
                filter: true,
                value: [
                    { key: '0', label: 'Documents', children: [] },
                    { key: '1', label: 'Pictures', children: [] },
                    { key: '2', label: 'Downloads', children: [] }
                ]
            }
        });

        let searchField = wrapper.find('input.p-inputtext');

        await searchField.setValue('Doc');
        await wrapper.vm.$nextTick();
        await searchField.trigger('keyup', { key: 'c' });
        await wrapper.vm.$nextTick();

        const filterEvents = wrapper.emitted('filter');
        const latestFilterEvent = filterEvents[filterEvents.length - 1][0];

        expect(latestFilterEvent.filteredNodes).toBeDefined();
        expect(latestFilterEvent.filteredNodes.length).toBe(1);
        expect(latestFilterEvent.filteredNodes[0].label).toBe('Documents');
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
