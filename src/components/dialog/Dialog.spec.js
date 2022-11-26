import PrimeVue from 'primevue/config';
import { mount } from '@vue/test-utils';
import Dialog from './Dialog.vue';

describe('Dialog.vue', () => {
    it('is Dialog element exist', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                    transition: false
                }
            },
            props: {
                visible: false
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        expect(wrapper.find('.p-dialog.p-component').exists()).toBe(false);

        await wrapper.setProps({ visible: true });

        expect(wrapper.find('.p-dialog.p-component').exists()).toBe(true);
    });

    it('slot checks', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            slots: {
                default: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
                footer: '<p>Dialog Footer</p>'
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        await wrapper.setProps({ visible: true });

        expect(wrapper.find('.p-dialog-content').exists()).toBe(true);
        expect(wrapper.find('.p-dialog-footer').exists()).toBe(true);
    });
});

describe('closable', () => {
    it('should have custom close icon when provided', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                closable: true,
                closeIcon: 'pi pi-discord',
                showHeader: true,
                visible: false
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        await wrapper.setProps({ visible: true });

        const icon = wrapper.find('.p-dialog-header-close-icon');

        expect(icon.classes()).toContain('pi-discord');
    });
});

describe('maximizable', () => {
    it('should have custom maximize and minimize icons when provided', async () => {
        const wrapper = mount(Dialog, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                maximizable: true,
                maximizeIcon: 'pi pi-discord',
                minimizeIcon: 'pi pi-facebook',
                showHeader: true,
                visible: false
            },
            data() {
                return {
                    containerVisible: true
                };
            }
        });

        await wrapper.setProps({ visible: true });
        await wrapper.setData({ maximized: false });

        const icon = wrapper.find('.p-dialog-header-maximize-icon');

        expect(icon.classes()).toContain('pi-discord');

        await wrapper.setData({ maximized: true });

        expect(icon.classes()).toContain('pi-facebook');
    });
});
