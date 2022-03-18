import { mount } from '@vue/test-utils';
import Message from './Message.vue';

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
});

describe('Message.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Message, {
            props: {
                severity: 'error',
                life: 3000,
                sticky: false
            },
            slots: {
                default: 'Error Message Content'
            }
        });
    });

    it('should sticky and life works', async () => {
        jest.runTimersToTime(3001);
        expect(wrapper.vm.visible).toBe(false);
    });
});