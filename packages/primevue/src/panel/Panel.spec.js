import { mount } from '@vue/test-utils';
import Panel from './Panel.vue';

describe('Panel.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Panel, {
            props: {
                header: 'PrimeVue'
            },
            slots: {
                default: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-panel.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-panel-content').text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt');
        expect(wrapper.find('.p-panel-title').text()).toBe('PrimeVue');
    });

    it('should be toggleable', async () => {
        await wrapper.setProps({ toggleable: true });

        expect(wrapper.find('.p-panel.p-component').classes()).toContain('p-panel-toggleable');

        await wrapper.vm.toggle({});

        expect(wrapper.emitted().toggle[0]).toEqual([{ originalEvent: {}, value: true }]);
    });
});
