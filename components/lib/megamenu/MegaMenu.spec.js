import { mount } from '@vue/test-utils';
import MegaMenu from './MegaMenu.vue';

describe('MegaMenu.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(MegaMenu, {
            global: {
                stubs: {
                    'router-link': true
                }
            },
            props: {
                model: [
                    {
                        label: 'Videos',
                        icon: 'pi pi-fw pi-video',
                        items: [
                            [
                                {
                                    label: 'Video 1',
                                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                                },
                                {
                                    label: 'Video 2',
                                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                                }
                            ]
                        ]
                    },
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            [
                                {
                                    label: 'User 1',
                                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                                }
                            ],
                            [
                                {
                                    label: 'User 2',
                                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                                },
                                {
                                    label: 'User 3',
                                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                                }
                            ]
                        ]
                    }
                ]
            }
        });
    });

    it('should exists', () => {
        expect(wrapper.find('.p-megamenu.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-megamenu-root-list').exists()).toBe(true);
        expect(wrapper.findAll('ul.p-megamenu-submenu').length).toBe(5);
        expect(wrapper.findAll('li.p-menuitem').length).toBe(12);
        expect(wrapper.findAll('li.p-menuitem')[0].findAll('span.p-menuitem-text')[0].text()).toBe('Videos');
        expect(wrapper.findAll('li.p-megamenu-submenu-header')[0].text()).toBe('Video 1');
        expect(wrapper.findAll('li.p-menuitem')[1].findAll('span.p-menuitem-text')[0].text()).toBe('Video 1.1');
    });

    it('should select item', async () => {
        const firstItem = wrapper.findAll('li.p-menuitem')[0];

        await firstItem.find('.p-menuitem-content').trigger('click');

        expect(firstItem.classes()).toContain('p-menuitem-active');
    });

    it('should deselect item', async () => {
        const firstItem = wrapper.findAll('li.p-menuitem')[0];
        const firstItemContent = firstItem.find('.p-menuitem-content');

        await firstItemContent.trigger('click');
        await firstItemContent.trigger('click');

        expect(firstItem.classes()).not.toContain('p-menuitem-active');
    });

    it('should orientation work', async () => {
        await wrapper.setProps({ orientation: 'vertical' });

        expect(wrapper.find('.p-megamenu-vertical').exists()).toBe(true);
    });
});
