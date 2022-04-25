import { config, mount } from '@vue/test-utils';
import BlockUI from './BlockUI.vue';
import Panel from '@/components/panel/Panel.vue';
import Button from '@/components/button/Button.vue';

config.global.mocks = {
    $primevue: {
        config: {
            zIndex: {
                modal: 1100
            }
        }
    }
}

describe('BlockUI.vue', () => {
    it('should blocked and unblocked the panel', async () => {
        const wrapper = mount({
            template: `
                <Button type="button" label="Block" @click="blockPanel()"></Button>
                <Button type="button" label="Unblock" @click="unblockPanel()"></Button>

                <BlockUI :blocked="blockedPanel">
                    <Panel header="Godfather I" style="margin-top: 20px">
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family.</p>
                    </Panel>
                </BlockUI>
            `,
            components: {
                BlockUI,
                Panel,
                Button
            },
            data() {
                return {
                    blockedPanel: false
                }
            },
            methods: {
                blockPanel() {
                    this.blockedPanel = true;
                },
                unblockPanel() {
                    this.blockedPanel = false;
                }
            }
        });

        expect(wrapper.find('.p-blockui-container').exists()).toBe(true);

        const buttons = wrapper.findAll('.p-button');

        await buttons[0].trigger('click');

        expect(wrapper.find('.p-blockui').exists()).toBe(true);
        expect(wrapper.find('.p-blockui').classes()).toContain('p-component-overlay-enter');
        expect(wrapper.find('.p-blockui').attributes().style).toEqual('z-index: 1101;');

        await buttons[1].trigger('click');

        expect(wrapper.find('.p-blockui').classes()).toContain('p-component-overlay-leave');
    });
});
