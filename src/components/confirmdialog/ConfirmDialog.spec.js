import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
import ConfirmDialog from './ConfirmDialog.vue';

describe('ConfirmDialog', () => {
    it('should exist', async() => {
        const wrapper = mount(ConfirmDialog, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                    transition: false
                },
            },
            data() {
                return {
                    confirmation: {
                        message: 'Are you sure you want to proceed?',
                        header: 'Confirmation',
                        icon: 'pi pi-exclamation-triangle'
                    }
                }
            }
        });

        await wrapper.setData({ visible: true });
        
        expect(wrapper.find('.p-dialog-mask .p-dialog.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-dialog-title').text()).toBe('Confirmation');
        expect(wrapper.find('.p-confirm-dialog-message').text()).toBe('Are you sure you want to proceed?');

        await wrapper.vm.reject();

        expect(wrapper.find('.p-dialog-mask .p-dialog.p-component').exists()).toBe(false);
    });

    it('should dialog trigger the accept function', async() => {
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
                        accept: () => {
                            console.log('accept')
                        },
                        reject: () => {
                            console.log('reject');
                            
                        }
                    }
                }
            }
        });
    
        const acceptTriggered = jest.spyOn(wrapper.componentVM.confirmation, 'accept');
    
        await wrapper.setData({ visible: true });
    
        const CDAcceptBtn = wrapper.find('.p-confirm-dialog-accept');

        await CDAcceptBtn.trigger('click');
    
        expect(acceptTriggered).toBeCalled();
    });

    it('should dialog trigger the reject function', async() => {
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
                        accept: () => {
                            console.log('accept')
                        },
                        reject: () => {
                            console.log('reject');
                            
                        }
                    }
                }
            }
        });
    
        const rejectTriggered = jest.spyOn(wrapper.componentVM.confirmation, 'reject');

        await wrapper.setData({ visible: true });

        const CDRejectBtn = wrapper.find('.p-confirm-dialog-reject');
    
        await CDRejectBtn.trigger('click');
    
        expect(rejectTriggered).toBeCalled();
    });

    it('should dialog close button work', async() => {
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
                    }
                }
            }
        });

        await wrapper.setData({ visible: true });
        
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
                    }
                }
            }
        });

        await wrapper.setData({ visible: true });

        expect(wrapper.find('.p-dialog-mask.p-dialog-bottom').exists()).toBe(true);
    });
});