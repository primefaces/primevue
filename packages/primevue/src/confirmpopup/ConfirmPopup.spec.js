import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import ConfirmPopup from './ConfirmPopup.vue';

describe('ConfirmPopup', () => {
    it('should exist', async () => {
        const wrapper = mount(ConfirmPopup, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                    transition: false
                }
            },
            data() {
                return {
                    confirmation: {
                        message: 'Are you sure you want to proceed?',
                        icon: 'pi pi-exclamation-triangle'
                    },
                    visible: true
                };
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('[role="alertdialog"]').isVisible()).toBe(true);
        expect(wrapper.find('.p-confirmpopup-message').text()).toBe('Are you sure you want to proceed?');
        expect(wrapper.find('.p-confirmpopup-accept-button').text()).toBe('Yes');
        expect(wrapper.find('.p-confirmpopup-reject-button').text()).toBe('No');
    });

    it('should dialog trigger the accept function', async () => {
        const wrapper = mount(ConfirmPopup, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                    transition: false
                }
            },
            data() {
                return {
                    confirmation: {
                        message: 'Are you sure you want to proceed?',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {},
                        reject: () => {}
                    },
                    visible: true
                };
            }
        });

        await wrapper.vm.$nextTick();

        const acceptTriggered = vi.spyOn(wrapper.componentVM.confirmation, 'accept');
        const CDAcceptBtn = wrapper.find('.p-confirmpopup-accept-button');

        await CDAcceptBtn.trigger('click');

        expect(acceptTriggered).toBeCalled();
    });

    it('should dialog trigger the reject function', async () => {
        const wrapper = mount(ConfirmPopup, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                    transition: false
                }
            },
            data() {
                return {
                    confirmation: {
                        message: 'Are you sure you want to proceed?',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {},
                        reject: () => {}
                    },
                    visible: true
                };
            }
        });

        await wrapper.vm.$nextTick();

        const rejectTriggered = vi.spyOn(wrapper.componentVM.confirmation, 'reject');
        const CDRejectBtn = wrapper.find('.p-confirmpopup-reject-button');

        await CDRejectBtn.trigger('click');

        expect(rejectTriggered).toBeCalled();
    });
});
