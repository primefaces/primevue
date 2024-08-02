import { mount } from '@vue/test-utils';
import ProgressSpinner from './ProgressSpinner.vue';

describe('ProgressSpinner.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ProgressSpinner, {
            props: {
                strokeWidth: '8',
                fill: 'green',
                animationDuration: '.5s'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-progressspinner').exists()).toBe(true);
        expect(wrapper.find('svg.p-progressspinner-spin').exists()).toBe(true);
        expect(wrapper.find('svg.p-progressspinner-spin').attributes().style).toBe('animation-duration: .5s;');
        expect(wrapper.find('circle.p-progressspinner-circle').attributes().fill).toBe('green');
        expect(wrapper.find('circle.p-progressspinner-circle').attributes().strokeMiterlimit).toBe('10');
    });
});
