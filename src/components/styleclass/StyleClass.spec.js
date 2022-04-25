import { config, mount } from '@vue/test-utils';
import StyleClass from './StyleClass';
import Button from '@/components/button/Button.vue';
import InputText from '@/components/inputtext/InputText.vue';

config.global.directives = {
    'styleclass': StyleClass
}

describe('StyleClass', () => {
    it('should work with next selector', async () => {
        const wrapper = mount({
            template: `
                <Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" />
                <InputText class="block mt-3" />
            `,
            components: {
                Button,
                InputText
            }
        });

        const button = wrapper.find('.p-button');
        const input = wrapper.find('.p-inputtext');

        expect(input.classes()).not.toContain('p-disabled');

        await button.trigger('click');

        expect(input.classes()).toContain('p-disabled');

        await button.trigger('click');

        expect(input.classes()).not.toContain('p-disabled');
    });
});