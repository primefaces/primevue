import { mount } from '@vue/test-utils';
import Breadcrumb from './Breadcrumb.vue';

describe('Breadcrumb', () => {
    it('should exist', () => {
        const wrapper = mount(Breadcrumb, {
            global: {
                stubs: {
                    'router-link': true
                },
                mocks: {
                    $router: {
                        currentRoute: {
                            path: vi.fn()
                        }
                    }
                }
            },
            props: {
                home: { icon: 'pi pi-home', to: '/' },
                model: [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }]
            }
        });

        expect(wrapper.find('.p-breadcrumb.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-menuitem-separator').length).toBe(5);
        expect(wrapper.findAll('.p-menuitem-text').length).toBe(5);
    });

    it('should have custom separator slot if provided', () => {
        const wrapper = mount(Breadcrumb, {
            global: {
                stubs: ['router-link']
            },
            props: {
                home: { icon: 'pi pi-home', to: '/' },
                model: [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }],
                separatorIcon: 'pi pi-discord'
            },
            slots: {
                separator: '<span class="pi pi-discord" aria-hidden="true"></span>'
            }
        });

        const icons = wrapper.findAll('.p-menuitem-separator span');

        icons.forEach((icon) => expect(icon.classes()).toContain('pi-discord'));
    });
});
