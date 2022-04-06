import { mount } from '@vue/test-utils';
import Toast from './Toast.vue';

describe('Toast.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Toast, {
            global: {
                mocks: {
                    $primevue: {
                        config: {
                            'ripple': true
                        }
                    }
                },
                stubs: {
                    teleport: true
                }
            },
            data() {
                return {
                    messages: [{severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000}]
                }
            }
        })
    });

    it('should exist', () => {
        expect(wrapper.find('.p-toast.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-toast-message').classes()).toContain('p-toast-message-success');
        expect(wrapper.find('.p-toast-summary').text()).toBe('Success Message');
        expect(wrapper.find('.p-toast-detail').text()).toBe('Message Content');
    });

    it('should position is changed', async () => {
        await wrapper.setProps({ position: 'bottom-left' });

        expect(wrapper.find('.p-toast.p-component').classes()).toContain('p-toast-bottom-left');
    });

    it('should show grouped toast', async () => {
        await wrapper.setProps({ group: 'br' });

        expect(wrapper.find('.p-toast.p-component').exists()).toBe(true);
    });

    it('should close toast', async () => {
        await wrapper.vm.remove({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});

        expect(wrapper.find('.p-toast-message').exists()).toBe(false);
    });

    it('should show multiple toast', async () => {
        await wrapper.setData({
            messages: [
                {severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000},
                {severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000},
                {severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}
            ]
        });

        expect(wrapper.findAll('.p-toast-message').length).toBe(3);
    });

    it('should close multiple toast', async () => {
        await wrapper.setData({
            messages: [
                {severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000},
                {severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000},
                {severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}
            ]
        });

        await wrapper.vm.onRemoveAllGroups();

        expect(wrapper.findAll('.p-toast-message').length).toBe(0);
    });

    it('should close grouped toast', async () => {
        await wrapper.setProps({ group: 'br' });

        await wrapper.vm.onRemoveGroup('br');

        expect(wrapper.findAll('.p-toast-message').length).toBe(0);
    });
});