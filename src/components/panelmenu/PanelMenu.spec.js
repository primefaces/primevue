import { mount } from '@vue/test-utils';
import PanelMenu from './PanelMenu.vue';

describe('PanelMenu', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(PanelMenu, {
            global: {
                stubs: {
                    'router-link': true
                }
            },
            props: {
                model: [
                    {
                        key: '2',
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                key: '2_0',
                                label: 'New',
                                icon: 'pi pi-fw pi-user-plus',
                            },
                            {
                                key: '2_1',
                                label: 'Delete',
                                icon: 'pi pi-fw pi-user-minus',
                            },
                            {
                                key: '2_2',
                                label: 'Search',
                                icon: 'pi pi-fw pi-users',
                                items: [
                                    {
                                        key: '2_2_0',
                                        label: 'Filter',
                                        icon: 'pi pi-fw pi-filter',
                                        items: [
                                            {
                                                key: '2_2_0_0',
                                                label: 'Print',
                                                icon: 'pi pi-fw pi-print'
                                            }
                                        ]
                                    },
                                    {
                                        key: '2_2_1',
                                        icon: 'pi pi-fw pi-bars',
                                        label: 'List'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-panelmenu.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-menuitem').length).toBe(6);
        expect(wrapper.findAll('.p-toggleable-content').length).toBe(7);
        expect(wrapper.findAll('.p-submenu-list').length).toBe(3);
    });

    it('should toggle', async () => {
        expect(wrapper.findAll('.p-toggleable-content')[0].attributes().style).toBe('display: none;');

        await wrapper.vm.onItemClick({}, wrapper.vm.model[0]);

        expect(wrapper.find('.p-panelmenu-header-link > .p-panelmenu-icon').classes()).toContain('pi-chevron-down');
        expect(wrapper.findAll('.p-toggleable-content')[0].attributes().style).toBe(undefined);
    });

    it('should update expandedKeys', async () => {
        await wrapper.setProps({ expandedKeys: {'2': true} });

        await wrapper.vm.onItemClick({}, wrapper.vm.model[0].items[2]);

        expect(wrapper.emitted()['update:expandedKeys'][0]).toEqual([{ '2': true, '2_2': true }]);
    });
});