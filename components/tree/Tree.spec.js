import { mount } from '@vue/test-utils';
import Tree from './Tree.vue';

describe('Tree.vue', () => {
    const nodes = [
        {
            key: '0',
            label: 'Documents',
            data: 'Documents Folder',
            icon: 'pi pi-fw pi-inbox'
        },
        {
            key: '1',
            label: 'Events',
            data: 'Events Folder',
            icon: 'pi pi-fw pi-calendar'
        },
        {
            key: '2',
            label: 'Movies',
            data: 'Movies Folder',
            icon: 'pi pi-fw pi-star-fill'
        }
    ];

    it('should exist', () => {
        const wrapper = mount(Tree, {
            props: {
                value: nodes
            }
        });

        expect(wrapper.classes()).toContain('p-tree');
        expect(wrapper.find('.p-tree-wrapper').exists()).toBe(true);
    });

    it('should have custom filter icon', () => {
        const wrapper = mount(Tree, {
            props: {
                value: nodes,
                filter: true,
                filterIcon: 'pi pi-discord'
            }
        });

        const filterIcon = wrapper.find('.p-tree-filter-icon');

        expect(filterIcon.classes()).toContain('pi-discord');
    });

    it('should have custom checkbox icons', () => {
        const wrapper = mount(Tree, {
            props: {
                value: nodes,
                selectionMode: 'checkbox',
                checkedIcon: 'pi pi-discord',
                partiallyCheckedIcon: 'pi pi-facebook',
                selectionKeys: {
                    0: {
                        checked: true
                    },
                    2: {
                        partialChecked: true
                    }
                }
            }
        });

        expect(wrapper.findAll('.pi-discord')).toHaveLength(1);
        expect(wrapper.findAll('.pi-facebook')).toHaveLength(1);
    });
});
