import { mount } from '@vue/test-utils';
import OrganizationChart from './OrganizationChart.vue';

describe('OrganizationChart.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(OrganizationChart, {
            props: {
                value: {
                    key: '0',
                    type: 'person',
                    styleClass: 'p-person',
                    data: { label: 'CEO', name: 'Walter White', avatar: 'walter.jpg' },
                    children: [
                        {
                            key: '0_0',
                            type: 'person',
                            styleClass: 'p-person',
                            data: { label: 'CFO', name: 'Saul Goodman', avatar: 'saul.jpg' },
                            children: [
                                {
                                    key: '0_0_0',
                                    data: { label: 'Tax' },
                                    selectable: false,
                                    styleClass: 'department-cfo'
                                },
                                {
                                    key: '0_0_1',
                                    data: { label: 'Legal' },
                                    selectable: false,
                                    styleClass: 'department-cfo'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            type: 'person',
                            styleClass: 'p-person',
                            data: { label: 'COO', name: 'Mike E.', avatar: 'mike.jpg' },
                            children: [
                                {
                                    key: '0_1_0',
                                    data: { label: 'Operations' },
                                    selectable: false,
                                    styleClass: 'department-coo'
                                }
                            ]
                        },
                        {
                            key: '0_2',
                            type: 'person',
                            styleClass: 'p-person',
                            data: { label: 'CTO', name: 'Jesse Pinkman', avatar: 'jesse.jpg' },
                            children: [
                                {
                                    key: '0_2_0',
                                    data: { label: 'Development' },
                                    selectable: false,
                                    styleClass: 'department-cto',
                                    children: [
                                        {
                                            key: '0_2_0_0',
                                            data: { label: 'Analysis' },
                                            selectable: false,
                                            styleClass: 'department-cto'
                                        },
                                        {
                                            key: '0_2_0_1',
                                            data: { label: 'Front End' },
                                            selectable: false,
                                            styleClass: 'department-cto'
                                        },
                                        {
                                            key: '0_2_0_2',
                                            data: { label: 'Back End' },
                                            selectable: false,
                                            styleClass: 'department-cto'
                                        }
                                    ]
                                },
                                {
                                    key: '0_2_1',
                                    data: { label: 'QA' },
                                    selectable: false,
                                    styleClass: 'department-cto'
                                },
                                {
                                    key: '0_2_2',
                                    data: { label: 'R&D' },
                                    selectable: false,
                                    styleClass: 'department-cto'
                                }
                            ]
                        }
                    ]
                },
                collapsible: true,
                selectionMode: 'single',
                selectionKeys: {}
            },
            slots: {
                slots: {
                    default: `
                        <template #default="slotProps">
                            <span>{{slotProps.node.data.label}}</span>
                        </template>
                    `,
                    person: `
                        <template #person="slotProps">
                            <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>
                            <div class="node-content">
                                <img :src="'images/organization/' + slotProps.node.data.avatar" width="32">
                                <div>{{slotProps.node.data.name}}</div>
                            </div>
                        </template>
                    `
                }
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-organizationchart.p-component').exists()).toBe(true);
        expect(wrapper.find('table.p-organizationchart-table').exists()).toBe(true);
        expect(wrapper.findAll('.p-node-toggler-icon').length).toBe(5);
    });

    it('should collapsed and expand', async () => {
        await wrapper.vm.onNodeToggle(wrapper.vm.value);

        expect(wrapper.emitted()['node-collapse'][0]).toEqual([wrapper.vm.value]);
        expect(wrapper.emitted()['update:collapsedKeys'][0]).toEqual([{ 0: true }]);
        expect(wrapper.vm.d_collapsedKeys).toEqual({ 0: true });

        await wrapper.vm.onNodeToggle(wrapper.vm.value);

        expect(wrapper.emitted()['node-expand'][0]).toEqual([wrapper.vm.value]);
        expect(wrapper.emitted()['update:collapsedKeys'][0]).toEqual([{}]);
        expect(wrapper.vm.d_collapsedKeys).toEqual({});
    });

    it('should item select and unselect', async () => {
        const contents = wrapper.findAll('.p-organizationchart-node-content');

        await wrapper.vm.onNodeClick(wrapper.vm.value);

        expect(wrapper.emitted()['node-select'][0]).toEqual([wrapper.vm.value]);
        expect(wrapper.emitted()['update:selectionKeys'][0]).toEqual([{ 0: true }]);

        await wrapper.setProps({ selectionKeys: { 0: true } });

        expect(contents[0].classes()).toContain('p-highlight');

        await wrapper.vm.onNodeClick(wrapper.vm.value);

        expect(wrapper.emitted()['node-unselect'][0]).toEqual([wrapper.vm.value]);
        expect(wrapper.emitted()['update:selectionKeys'][1]).toEqual([{}]);

        await wrapper.setProps({ selectionKeys: {} });

        expect(contents[0].classes()).not.toContain('p-highlight');
    });
});
