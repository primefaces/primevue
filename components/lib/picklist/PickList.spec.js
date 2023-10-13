import { mount } from '@vue/test-utils';
import PickList from './PickList.vue';

describe('PickList.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(PickList, {
            props: {
                responsive: false,
                modelValue: [
                    [
                        {
                            id: '1000',
                            code: 'vbb124btr',
                            name: 'Game Controller',
                            description: 'Product Description',
                            image: 'game-controller.jpg',
                            price: 99,
                            category: 'Electronics',
                            quantity: 2,
                            inventoryStatus: 'LOWSTOCK',
                            rating: 4
                        },
                        {
                            id: '1001',
                            code: 'nvklal433',
                            name: 'Black Watch',
                            description: 'Product Description',
                            image: 'black-watch.jpg',
                            price: 72,
                            category: 'Accessories',
                            quantity: 61,
                            inventoryStatus: 'INSTOCK',
                            rating: 4
                        }
                    ],
                    []
                ]
            },
            slots: {
                sourceheader: 'Available',
                targetheader: 'Selected'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-picklist.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-picklist-list-wrapper.p-picklist-source-wrapper').exists()).toBe(true);
        expect(wrapper.find('.p-picklist-list-wrapper.p-picklist-target-wrapper').exists()).toBe(true);
    });

    it('should slots work', () => {
        expect(wrapper.find('.p-picklist-source-wrapper > .p-picklist-header').text()).toBe('Available');
        expect(wrapper.find('.p-picklist-target-wrapper > .p-picklist-header').text()).toBe('Selected');
    });

    it('should update sourceList and targetList', async () => {
        await wrapper.setProps({
            modelValue: [
                [
                    {
                        id: '1000',
                        code: 'vbb124btr',
                        name: 'Game Controller',
                        description: 'Product Description',
                        image: 'game-controller.jpg',
                        price: 99,
                        category: 'Electronics',
                        quantity: 2,
                        inventoryStatus: 'LOWSTOCK',
                        rating: 4
                    }
                ],
                [
                    {
                        id: '1001',
                        code: 'nvklal433',
                        name: 'Black Watch',
                        description: 'Product Description',
                        image: 'black-watch.jpg',
                        price: 72,
                        category: 'Accessories',
                        quantity: 61,
                        inventoryStatus: 'INSTOCK',
                        rating: 4
                    }
                ]
            ]
        });

        expect(wrapper.vm.sourceList.length).toBe(1);
        expect(wrapper.vm.targetList.length).toBe(1);
    });

    it('should select an item from source list', async () => {
        await wrapper.vm.onItemClick({}, wrapper.vm.modelValue[0][0], 0, 0);

        expect(wrapper.emitted()['update:selection'][0][0]).toEqual([[wrapper.vm.modelValue[0][0]], []]);
    });

    it('should dblclick an item from source list', async () => {
        await wrapper.setProps({ selection: [[wrapper.vm.modelValue[0][0]], []] });

        await wrapper.vm.onItemDblClick({}, wrapper.vm.modelValue[0][0], 0);

        expect(wrapper.emitted()['update:modelValue'][0][0][1]).toEqual([wrapper.vm.modelValue[0][0]]);
        expect(wrapper.emitted()['move-to-target'][0]).toEqual([{ originalEvent: {}, items: [wrapper.vm.modelValue[0][0]] }]);
        expect(wrapper.emitted()['update:selection'][0][0]).toEqual([[], []]);
    });

    it('should move item up', async () => {
        await wrapper.setProps({ selection: [[wrapper.vm.modelValue[0][1]], []] });

        await wrapper.vm.moveUp({}, 0);

        expect(wrapper.emitted()['update:modelValue'][0][0]).toEqual([
            [
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: 'Black Watch',
                    description: 'Product Description',
                    image: 'black-watch.jpg',
                    price: 72,
                    category: 'Accessories',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },
                {
                    id: '1000',
                    code: 'vbb124btr',
                    name: 'Game Controller',
                    description: 'Product Description',
                    image: 'game-controller.jpg',
                    price: 99,
                    category: 'Electronics',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 4
                }
            ],
            []
        ]);
    });

    it('should should move all to target', async () => {
        await wrapper.vm.moveAllToTarget({});

        expect(wrapper.emitted()['update:modelValue'][0][0]).toEqual([
            [],
            [
                {
                    id: '1000',
                    code: 'vbb124btr',
                    name: 'Game Controller',
                    description: 'Product Description',
                    image: 'game-controller.jpg',
                    price: 99,
                    category: 'Electronics',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 4
                },
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: 'Black Watch',
                    description: 'Product Description',
                    image: 'black-watch.jpg',
                    price: 72,
                    category: 'Accessories',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                }
            ]
        ]);
    });
});
