import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import ContextMenu from './ContextMenu.vue';

describe('ContextMenu.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ContextMenu, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    'router-link': true,
                    teleport: true
                }
            },
            props: {
                model: [
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        items: [
                            {
                                label: 'New',
                                icon: 'pi pi-fw pi-plus',
                                items: [
                                    {
                                        label: 'Bookmark',
                                        icon: 'pi pi-fw pi-bookmark'
                                    },
                                    {
                                        label: 'Video',
                                        icon: 'pi pi-fw pi-video'
                                    }
                                ]
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-trash'
                            },
                            {
                                separator: true
                            },
                            {
                                label: 'Export',
                                icon: 'pi pi-fw pi-external-link'
                            }
                        ]
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Left',
                                icon: 'pi pi-fw pi-align-left'
                            },
                            {
                                label: 'Right',
                                icon: 'pi pi-fw pi-align-right'
                            },
                            {
                                label: 'Center',
                                icon: 'pi pi-fw pi-align-center'
                            },
                            {
                                label: 'Justify',
                                icon: 'pi pi-fw pi-align-justify'
                            }
                        ]
                    },
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'New',
                                icon: 'pi pi-fw pi-user-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-user-minus'
                            },
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-users',
                                items: [
                                    {
                                        label: 'Filter',
                                        icon: 'pi pi-fw pi-filter',
                                        items: [
                                            {
                                                label: 'Print',
                                                icon: 'pi pi-fw pi-print'
                                            }
                                        ]
                                    },
                                    {
                                        icon: 'pi pi-fw pi-bars',
                                        label: 'List'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Events',
                        icon: 'pi pi-fw pi-calendar',
                        items: [
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                items: [
                                    {
                                        label: 'Save',
                                        icon: 'pi pi-fw pi-calendar-plus'
                                    },
                                    {
                                        label: 'Delete',
                                        icon: 'pi pi-fw pi-calendar-minus'
                                    }
                                ]
                            },
                            {
                                label: 'Archive',
                                icon: 'pi pi-fw pi-calendar-times',
                                items: [
                                    {
                                        label: 'Remove',
                                        icon: 'pi pi-fw pi-calendar-minus'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Quit',
                        icon: 'pi pi-fw pi-power-off'
                    }
                ]
            }
        });
    });

    it('should exist', async () => {
        const event = { pageX: 100, pageY: 120, preventDefault: () => {}, stopPropagation: () => {} };
        const show = vi.spyOn(wrapper.vm, 'show');

        wrapper.vm.show(event);
        await wrapper.setData({ visible: true });

        expect(show).toHaveBeenCalled();
        expect(wrapper.find('.p-contextmenu.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-menuitem').length).toBe(5);
        expect(wrapper.findAll('.p-menuitem-text')[0].text()).toBe('File');
    });

    it('should hide menu', async () => {
        const hide = vi.spyOn(wrapper.vm, 'hide');

        await wrapper.setData({ visible: true });

        wrapper.vm.hide();
        await wrapper.setData({ visible: false });

        expect(hide).toHaveBeenCalled();
        expect(wrapper.find('.p-contextmenu.p-component').exists()).toBe(false);
    });
});
