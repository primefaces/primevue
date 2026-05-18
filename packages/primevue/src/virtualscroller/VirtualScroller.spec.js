import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import VirtualScroller from './VirtualScroller.vue';

window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
};

const buildItems = (count) => Array.from({ length: count }, (_, i) => ({ id: i }));

const mountScroller = (props = {}) => {
    const wrapper = mount(VirtualScroller, {
        global: { plugins: [PrimeVue] },
        props: {
            items: buildItems(20),
            itemSize: 30,
            style: { height: '120px', width: '200px' },
            ...props
        }
    });

    // jsdom does not report element visibility, so viewInit() skips init().
    // getContentPosition reads parseFloat('') -> NaN in jsdom; stub it to 0.
    wrapper.vm.getContentPosition = () => ({ left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 });
    wrapper.vm.init();

    return wrapper;
};

describe('VirtualScroller.vue', () => {
    it('should exist', () => {
        const wrapper = mountScroller();

        expect(wrapper.find('.p-virtualscroller').exists()).toBe(true);
    });

    describe('uniform-size path (getItemSize not provided)', () => {
        it('should not build cumulative sizes', () => {
            const wrapper = mountScroller();

            expect(wrapper.vm.cumulativeSizes).toBe(null);
        });

        it('should compute spacer height from items.length * itemSize', () => {
            const wrapper = mountScroller();

            expect(wrapper.vm.spacerStyle.height).toBe('600px');
        });

        it('should compute index from scrollTop via floor division', () => {
            const wrapper = mountScroller();

            expect(wrapper.vm.getIndexAtOffset(0)).toBe(0);
            expect(wrapper.vm.getIndexAtOffset(90)).toBe(3);
            expect(wrapper.vm.getIndexAtOffset(599)).toBe(19);
        });
    });

    describe('variable-size path (getItemSize provided)', () => {
        // header on every fifth row: sizes 80, 30, 30, 30, 30, 80, 30, ...
        const stepSize = (index) => (index % 5 === 0 ? 80 : 30);

        it('should build cumulative sizes from getItemSize', () => {
            const wrapper = mountScroller({ getItemSize: stepSize });

            const sizes = wrapper.vm.cumulativeSizes;

            expect(sizes.length).toBe(21);
            expect(sizes[0]).toBe(0);
            expect(sizes[1]).toBe(80);
            expect(sizes[5]).toBe(80 + 30 * 4);
            expect(sizes[20]).toBe(80 * 4 + 30 * 16);
        });

        it('should compute spacer height from cumulative total', () => {
            const wrapper = mountScroller({ getItemSize: stepSize });

            expect(wrapper.vm.spacerStyle.height).toBe(`${80 * 4 + 30 * 16}px`);
        });

        it('getItemOffset should return the y-coordinate of items[index]', () => {
            const wrapper = mountScroller({ getItemSize: stepSize });

            expect(wrapper.vm.getItemOffset(0)).toBe(0);
            expect(wrapper.vm.getItemOffset(1)).toBe(80);
            expect(wrapper.vm.getItemOffset(5)).toBe(80 + 30 * 4);
        });

        it('getIndexAtOffset should binary-search the cumulative array', () => {
            const wrapper = mountScroller({ getItemSize: stepSize });

            expect(wrapper.vm.getIndexAtOffset(0)).toBe(0);
            expect(wrapper.vm.getIndexAtOffset(79)).toBe(0);
            expect(wrapper.vm.getIndexAtOffset(80)).toBe(1);
            expect(wrapper.vm.getIndexAtOffset(199)).toBe(4);
            expect(wrapper.vm.getIndexAtOffset(200)).toBe(5);
            expect(wrapper.vm.getIndexAtOffset(-50)).toBe(0);
            expect(wrapper.vm.getIndexAtOffset(99999)).toBe(19);
        });

        it('should rebuild cumulative sizes when getItemSize reference changes', async () => {
            const wrapper = mountScroller({ getItemSize: stepSize });

            expect(wrapper.vm.spacerStyle.height).toBe(`${80 * 4 + 30 * 16}px`);

            await wrapper.setProps({ getItemSize: () => 40 });
            wrapper.vm.init();

            expect(wrapper.vm.spacerStyle.height).toBe('800px');
        });

        it('should fall back to uniform math when getItemSize is removed', async () => {
            const wrapper = mountScroller({ getItemSize: stepSize });

            expect(wrapper.vm.cumulativeSizes).not.toBe(null);

            await wrapper.setProps({ getItemSize: null });
            wrapper.vm.init();

            expect(wrapper.vm.cumulativeSizes).toBe(null);
            expect(wrapper.vm.spacerStyle.height).toBe('600px');
        });
    });
});
