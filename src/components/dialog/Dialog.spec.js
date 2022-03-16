import { mount } from '@vue/test-utils';
import PrimeVue from '@/components/config/PrimeVue';
import Dialog from './Dialog.vue';

describe('Dialog.vue', () => {
	it('is Dialog element exist', async() => {
		const wrapper = mount(Dialog, {
			global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                visible: false
            }
		});

		expect(wrapper.find('.p-dialog.p-component').exists()).toBe(false);

		await wrapper.setProps({ visible: true });

		expect(wrapper.find('.p-dialog.p-component').exists()).toBe(true);
	});

	it('slot checks', async() => {
		const wrapper = mount(Dialog, {
			global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                visible: true
            },
			slots: {
				default: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
				footer: '<p>Dialog Footer</p>'
			}
		});

		expect(wrapper.find('.p-dialog-content').exists()).toBe(true);
		expect(wrapper.find('.p-dialog-footer').exists()).toBe(true);
	});
});