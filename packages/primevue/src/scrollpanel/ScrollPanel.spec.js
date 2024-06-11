import { shallowMount } from '@vue/test-utils';
import ScrollPanel from './ScrollPanel.vue';

describe('ScrollPanel.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(ScrollPanel, {
            slots: {
                default: `
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                `
            }
        });

        wrapper.element.setAttribute('width', '200px');
        wrapper.element.setAttribute('height', '200px');
    });

    it('should exist', () => {
        expect(wrapper.find('.p-scrollpanel.p-component').exists()).toBe(true);
    });

    it('should scroll down y', async () => {
        const event = { pageY: 100, preventDefault: () => {} };

        await wrapper.vm.onYBarMouseDown(event);

        expect(wrapper.find('.p-scrollpanel-bar-y').classes()).toContain('p-scrollpanel-grabbed');
    });

    it('should scroll down x', async () => {
        const event = { pageX: 100, preventDefault: () => {} };

        await wrapper.vm.onXBarMouseDown(event);

        expect(wrapper.find('.p-scrollpanel-bar-x').classes()).toContain('p-scrollpanel-grabbed');
    });
});
