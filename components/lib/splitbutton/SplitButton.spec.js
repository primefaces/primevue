import { mount } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import SplitButton from './SplitButton.vue';

describe('SplitButton.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(SplitButton, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                    'router-link': true
                }
            },
            props: {
                label: 'Save',
                model: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    },
                    {
                        label: 'Vue Website',
                        icon: 'pi pi-external-link',
                        command: () => {
                            window.location.href = 'https://vuejs.org/';
                        }
                    },
                    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
                ]
            }
        });

        await wrapper.vm.onDropdownButtonClick();
    });

    it('should exist', () => {
        expect(wrapper.find('.p-splitbutton.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-tieredmenu.p-component').exists()).toBe(true);
        expect(wrapper.findAll('li.p-menuitem').length).toBe(4);
        expect(wrapper.find('.p-splitbutton-defaultbutton').exists()).toBe(true);
        expect(wrapper.find('.p-button-label').text()).toBe('Save');
    });

    it('should hide when default button is clicked', async () => {
        await wrapper.vm.onDefaultButtonClick();

        expect(wrapper.emitted()['click'][0]).toEqual([undefined]);
    });
});
