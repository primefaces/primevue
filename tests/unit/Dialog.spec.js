import { mount } from '@vue/test-utils';
import Dialog from '@/components/dialog/Dialog.vue';

describe('Dialog.vue', () => {
	it('is Dialog element exist', () => {
		const wrapper = mount(Dialog);

		expect(wrapper.find('.p-dialog.p-component').exists()).toBe(false);
	})
});