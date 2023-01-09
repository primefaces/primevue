import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { beforeEach, expect } from 'vitest';
import BreadcrumbItem from './BreadcrumbItem.vue';

let wrapper = null;

beforeEach(() => {
    wrapper = shallowMount(BreadcrumbItem, {
        global: {
            mocks: {
                $router: {
                    currentRoute: {
                        path: vi.fn()
                    },
                    navigate: () => true
                }
            },
            stubs: {
                'router-link': RouterLinkStub
            }
        },
        props: {
            item: { label: 'Computer', visible: () => true },
            template: null
        }
    });
});

afterEach(() => {
    vi.clearAllMocks();
});

describe('BreadcrumbItem', () => {
    it('When component is mount, text should be exists', () => {
        expect(wrapper.find('.p-menuitem-text').exists()).toBe(true);
    });

    it('When tag is triggered, onClick method should be called', async () => {
        const onClickSpy = vi.spyOn(wrapper.vm, 'onClick');
        const tag = wrapper.find('a');

        tag.trigger('click');
        expect(tag.exists()).toBe(true);
        expect(onClickSpy).toHaveBeenCalled();
    });

    it('When onClick method called and item has a command callback, callback should be triggered', async () => {
        await wrapper.setProps({ item: { label: 'Computer', visible: () => false, command: vi.fn() } });

        const spy = vi.spyOn(wrapper.vm.item, 'command');

        wrapper.vm.onClick();
        expect(spy).toHaveBeenCalled();
    });

    it('When linkClass method called and isActive-isExactActive, tag classes should be effected', async () => {
        await wrapper.setProps({ exact: true });

        expect(wrapper.vm.linkClass({ isActive: true, isExactActive: true })).toEqual([
            'p-menuitem-link',
            {
                'router-link-active': true,
                'router-link-active-exact': true
            }
        ]);
    });

    it('When item prop has a visible, visible method should be return falsy', async () => {
        await wrapper.setProps({ item: { label: 'Computer', visible: false, command: vi.fn() } });

        expect(wrapper.vm.visible()).toBeFalsy();
    });

    it('When item prop has a disabled function, disabled method should be return truthy', async () => {
        await wrapper.setProps({ item: { disabled: () => true } });

        expect(wrapper.vm.disabled()).toBeTruthy();
    });

    it('When item prop has a label function, disabled method should be return truthy', async () => {
        await wrapper.setProps({ item: { label: () => true } });

        expect(wrapper.vm.label()).toBeTruthy();
    });

    it('When item prop has a icon, icon element class should contain item prop icon', async () => {
        await wrapper.setProps({ item: { icon: 'pi-discord' } });

        expect(wrapper.find('a > span').classes()).toContain('pi-discord');
    });
});
