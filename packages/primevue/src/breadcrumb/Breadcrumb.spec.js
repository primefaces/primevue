import { mount } from '@vue/test-utils';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

describe('Breadcrumb', () => {
    it('should exist', () => {
        const wrapper = mount(Breadcrumb, {
            global: {
                stubs: {
                    'router-link': true
                },
                components: {
                    BreadcrumbItem
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
        expect(wrapper.findAll('.p-breadcrumb-separator').length).toBe(5);
        expect(wrapper.findAll('.p-breadcrumb-item-label').length).toBe(5);
    });
});
