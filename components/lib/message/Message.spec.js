import { config, mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import Message from './Message.vue';

config.global.mocks = {
    $primevue: {
        config: {
            locale: {
                aria: {
                    close: 'Close'
                }
            }
        }
    }
};

describe('Message.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Message, {
            props: {
                severity: 'error'
            },
            slots: {
                default: 'Error Message Content'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-message.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-message.p-component').classes()).toContain('p-message-error');
        expect(wrapper.find('.p-message-text').text()).toContain('Error Message Content');
    });

    it('should close the message', async () => {
        await wrapper.vm.close({});

        expect(wrapper.vm.visible).toBe(false);
        expect(wrapper.emitted().close[0]).toEqual([{}]);
    });

    it('should have custom close icon if provided', async () => {
        await wrapper.setProps({ closeIcon: 'pi pi-discord' });
        const icon = wrapper.find('.p-message-close-icon');

        expect(icon.classes()).toContain('pi-discord');
    });
});

describe('Message.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Message, {
            plugins: [PrimeVue],
            props: {
                severity: 'error',
                life: 3000,
                sticky: false
            },
            stubs: {
                transition: false
            },
            slots: {
                default: 'Error Message Content'
            }
        });
    });

    it('should sticky and life works', () => {
        setTimeout(() => {
            expect(wrapper.vm.visible).toBe(false);
        }, 3001);
    });
});
