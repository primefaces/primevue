import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Tag from './Tag.vue';

describe('Tag.vue', () => {
    it('is Tag element exist', () => {
        const wrapper = mount(Tag);

        expect(wrapper.find('.p-tag.p-component').exists()).toBe(true);
    });
});

describe('Tag.vue', () => {
    it('renders props severity when passed', () => {
        const severity = 'info';
        const wrapper = mount(Tag, {
            props: { severity }
        });

        expect(wrapper.find('.p-tag-' + severity).exists()).toBe(true);
    });
});

describe('Tag.vue', () => {
    it('renders props value when passed', () => {
        const value = 'submit';
        const wrapper = mount(Tag, {
            props: { value }
        });

        expect(wrapper.find('span').text()).toBe(value);
    });
});

describe('Tag.vue', () => {
    it('renders props icon when passed', () => {
        const icon = 'pi pi-discord';
        const wrapper = mount(Tag, {
            props: { icon }
        });
        const array = icon.split(' ');
        const lastIcon = '.' + array.join('.');

        expect(wrapper.find('.p-tag-icon').isVisible()).toBe(true);
        expect(wrapper.find('.p-tag-icon' + lastIcon).exists()).toBe(true);
    });
});

describe('Tag.vue', () => {
    it('should be rounded', () => {
        const wrapper = mount(Tag, {
            props: { rounded: true }
        });

        expect(wrapper.find('.p-tag-rounded').exists()).toBe(true);
    });
});

describe('Tag.vue', () => {
    it('should render default slot', () => {
        const wrapper = mount(Tag, {
            slots: {
                default: h('i', { class: 'pi pi-discord' }, '')
            }
        });

        expect(wrapper.html()).toBe('<span class="p-tag p-component" data-pc-name="tag" data-pc-section="root"><!--v-if--><i class="pi pi-discord"></i></span>');
    });
});
