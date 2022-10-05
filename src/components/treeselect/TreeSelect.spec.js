import { mount } from '@vue/test-utils';
import TreeSelect from './TreeSelect.vue';

describe('TreeSelect', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TreeSelect, {
            props: {
                options: [
                    {
                        key: '0',
                        label: 'Documents',
                        data: 'Documents Folder',
                        icon: 'pi pi-fw pi-inbox',
                        children: [
                            {
                                key: '0-0',
                                label: 'Work',
                                data: 'Work Folder',
                                icon: 'pi pi-fw pi-cog',
                                children: [
                                    { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                                    { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                                ]
                            },
                            {
                                key: '0-1',
                                label: 'Home',
                                data: 'Home Folder',
                                icon: 'pi pi-fw pi-home',
                                children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
                            }
                        ]
                    }
                ]
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-treeselect-label-container').exists()).toBe(true);
        expect(wrapper.find('.p-treeselect-trigger').exists()).toBe(true);
    });

    it('should have custom trigger icon', async () => {
        await wrapper.setProps({
            triggerIcon: 'pi pi-discord'
        });

        const icon = wrapper.find('.p-treeselect-trigger-icon');

        expect(icon.classes()).toContain('pi-discord');
    });
});
