import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from './Button.vue';

describe('Button.vue', () => {
    it('is Button element exist', () => {
        const wrapper = mount(Button);

        expect(wrapper.find('.p-button.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-button-label').exists()).toBe(true);
    });
});

describe('Button.vue', () => {
    it('is icon exist and right position', () => {
        const icon = 'pi pi-discord';
        const iconPos = 'right';
        const label = 'Save';
        const props = { icon, iconPos };
        let wrapper;

        wrapper = mount(Button, {
            props
        });

        expect(wrapper.find('.p-button-icon-only').exists()).toBe(true);

        wrapper = mount(Button, {
            props: { ...props, label }
        });

        expect(wrapper.find('.p-button-icon.p-button-icon-' + iconPos).exists()).toBe(true);
    });
});

describe('Button.vue', () => {
    it('is badge working', () => {
        const badge = '5';
        const badgeClass = 'p-badge-danger';
        const wrapper = mount(Button, {
            props: { badge, badgeClass }
        });

        expect(wrapper.find('.p-badge').text()).toEqual(badge);
        expect(wrapper.find('.' + badgeClass).exists()).toBe(true);
    });
});

describe('Button.vue', () => {
    it('is loading working', async () => {
        const loadingIcon = 'pi pi-discord';
        const wrapper = mount(Button, {
            props: {
                loading: false,
                loadingIcon
            }
        });

        expect(wrapper.find('.p-disabled').exists()).toBe(false);

        await wrapper.setProps({ loading: true });
        const array = loadingIcon.split(' ');
        const lastIcon = '.' + array.join('.');

        expect(wrapper.find('.p-button-loading').exists()).toBe(true);
        expect(wrapper.find('.p-button-loading-icon' + lastIcon).exists()).toBe(true);

        await wrapper.setProps({ loading: false });

        expect(wrapper.find('.p-button-loading').exists()).toBe(false);
    });
});

describe('Button.vue', () => {
    it('should render default slot', () => {
        const wrapper = mount(Button, {
            slots: {
                default: h('span', { class: 'ml-2 font-bold' }, 'Default PrimeVue Button')
            }
        });

        expect(wrapper.html()).toBe(`<button class="p-button p-component" type="button" data-pc-name="button" data-pc-section="root"><span class="ml-2 font-bold">Default PrimeVue Button</span></button>`);
    });
});
