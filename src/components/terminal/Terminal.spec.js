import { mount } from '@vue/test-utils';
import TerminalService from '@/components/terminalservice/TerminalService';
import Terminal from './Terminal.vue';

describe('Terminal.vue', () => {
    it('should return valid command', async () => {
        const wrapper = mount({
            components: {
                Terminal
            },
            template: `<Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" />`,
            mounted() {
                TerminalService.on('command', this.commandHandler);
            },
            beforeUnmount() {
                TerminalService.off('command', this.commandHandler);
            },
            methods: {
                commandHandler(text) {
                    let response;
                    let argsIndex = text.indexOf(' ');
                    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

                    switch(command) {
                        case "d":
                            response = 'Valid command';
                            break;

                        default:
                            response = "Unknown command: " + command;
                    }

                    TerminalService.emit('response', response);
                }
            }
        });

        expect(wrapper.find('.p-terminal.p-component').exists()).toBe(true);
        expect(wrapper.find('input.p-terminal-input').exists()).toBe(true);

        wrapper.find('input.p-terminal-input').setValue('d');

        wrapper.find('.p-terminal-input').trigger('keydown', {
            keyCode: 13
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.p-terminal-response').text()).toBe('Valid command');
    });

    it('should return invalid command', async () => {
        const wrapper = mount({
            components: {
                Terminal
            },
            template: `<Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" />`,
            mounted() {
                TerminalService.on('command', this.commandHandler);
            },
            beforeUnmount() {
                TerminalService.off('command', this.commandHandler);
            },
            methods: {
                commandHandler(text) {
                    let response;
                    let argsIndex = text.indexOf(' ');
                    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

                    switch(command) {
                        case "d":
                            response = 'Valid command';
                            break;

                        default:
                            response = "Unknown command: " + command;
                    }

                    TerminalService.emit('response', response);
                }
            }
        });

        expect(wrapper.find('.p-terminal.p-component').exists()).toBe(true);
        expect(wrapper.find('input.p-terminal-input').exists()).toBe(true);

        wrapper.find('input.p-terminal-input').setValue('dd');

        wrapper.find('.p-terminal-input').trigger('keydown', {
            keyCode: 13
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.p-terminal-response').text()).toBe('Unknown command: dd');
    });
});