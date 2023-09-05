import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import ConfirmDialog from './ConfirmDialog.vue';

describe('ConfirmDialog', () => {
    it('should exist', async () => {
        const wrapper = mount(ConfirmDialog, {
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
                        header: 'Confirmation',
                        icon: 'pi pi-exclamation-triangle'
                    },
                    visible: true
                };
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.p-dialog-mask .p-dialog.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-dialog-title').text()).toBe('Confirmation');
        expect(wrapper.find('.p-confirm-dialog-message').text()).toBe('Are you sure you want to proceed?');

        await wrapper.vm.reject();

        expect(wrapper.find('.p-dialog-mask .p-dialog.p-component').exists()).toBe(false);
    });

    it('should dialog trigger the accept function', async () => {
        const wrapper = mount(ConfirmDialog, {
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
                        header: 'Confirmation',
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
        const CDAcceptBtn = wrapper.find('.p-confirm-dialog-accept');

        await CDAcceptBtn.trigger('click');

        expect(acceptTriggered).toBeCalled();
    });

    it('should dialog trigger the reject function', async () => {
        const wrapper = mount(ConfirmDialog, {
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
                        header: 'Confirmation',
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
        const CDRejectBtn = wrapper.find('.p-confirm-dialog-reject');

        await CDRejectBtn.trigger('click');

        expect(rejectTriggered).toBeCalled();
    });

    it('should dialog close button work', async () => {
        const wrapper = mount(ConfirmDialog, {
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
                        header: 'Confirmation',
                        icon: 'pi pi-exclamation-triangle'
                    },
                    visible: true
                };
            }
        });

        await wrapper.vm.$nextTick();

        const dialogCloseBtn = wrapper.find('.p-dialog-header-close');

        await dialogCloseBtn.trigger('click');

        expect(wrapper.find('.p-dialog-mask .p-dialog.p-component').exists()).toBe(false);
    });

    it('should position work', async () => {
        const wrapper = mount(ConfirmDialog, {
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
                        group: 'positionDialog',
                        message: 'Do you want to delete this record?',
                        header: 'Delete Confirmation',
                        icon: 'pi pi-info-circle',
                        position: 'bottom'
                    },
                    visible: true
                };
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.p-dialog-mask.p-dialog-bottom').exists()).toBe(true);
    });
});
