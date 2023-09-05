import { config, mount } from '@vue/test-utils';
import Ripple from './Ripple';

config.global.mocks = {
    $primevue: {
        config: {
            ripple: true
        }
    }
};

config.global.directives = {
    Ripple
};

describe('Ripple', () => {
    it('should exist', async () => {
        const wrapper = mount({
            template: `
                <div class="card p-ripple" v-ripple>Default</div>
            `
        });

        const card = wrapper.find('.card');

        expect(wrapper.find('.p-ink').exists()).toBe(true);

        await card.trigger('mousedown');

        expect(wrapper.find('.p-ink').classes()).toContain('p-ink-active');
    });
});
