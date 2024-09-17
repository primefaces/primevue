<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <MegaMenu :model="items" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Furniture',
                    icon: 'pi pi-box',
                    items: [
                        [
                            {
                                label: 'Living Room',
                                items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                            }
                        ],
                        [
                            {
                                label: 'Kitchen',
                                items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                            },
                            {
                                label: 'Bathroom',
                                items: [{ label: 'Accessories' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Electronics',
                    icon: 'pi pi-mobile',
                    items: [
                        [
                            {
                                label: 'Computer',
                                items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                            }
                        ],
                        [
                            {
                                label: 'Home Theater',
                                items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Sports',
                    icon: 'pi pi-clock',
                    items: [
                        [
                            {
                                label: 'Football',
                                items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                            }
                        ],
                        [
                            {
                                label: 'Running',
                                items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                            }
                        ]
                    ]
                }
            ],
            ptViewerDoc: [
                {
                    data: getPTOptions('MegaMenu'),
                    key: 'MegaMenu'
                }
            ]
        };
    }
};
</script>
