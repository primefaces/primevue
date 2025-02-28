<template>
    <DocSectionText v-bind="$attrs">
        <p>Layout of the MegaMenu is configured with the <i>orientation</i> property that accepts <i>horizontal</i> and <i>vertical</i> as options.</p>
    </DocSectionText>
    <div class="card">
        <MegaMenu :model="items" orientation="vertical" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
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
                        ],
                        [
                            {
                                label: 'Bedroom',
                                items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                            }
                        ],
                        [
                            {
                                label: 'Office',
                                items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
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
                        ],
                        [
                            {
                                label: 'Gaming',
                                items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                            }
                        ],
                        [
                            {
                                label: 'Appliances',
                                items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
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
                        ],
                        [
                            {
                                label: 'Swimming',
                                items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                            }
                        ],
                        [
                            {
                                label: 'Tennis',
                                items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                            }
                        ]
                    ]
                }
            ],
            code: {
                basic: `
<MegaMenu :model="items" orientation="vertical" />
`,
                options: `
<template>
    <div class="card">
        <MegaMenu :model="items" orientation="vertical" />
    </div>
</template>

<script>
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
                        ],
                        [
                            {
                                label: 'Bedroom',
                                items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                            }
                        ],
                        [
                            {
                                label: 'Office',
                                items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
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
                        ],
                        [
                            {
                                label: 'Gaming',
                                items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                            }
                        ],
                        [
                            {
                                label: 'Appliances',
                                items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
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
                        ],
                        [
                            {
                                label: 'Swimming',
                                items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                            }
                        ],
                        [
                            {
                                label: 'Tennis',
                                items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                            }
                        ]
                    ]
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <MegaMenu :model="items" orientation="vertical" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
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
            ],
            [
                {
                    label: 'Bedroom',
                    items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                }
            ],
            [
                {
                    label: 'Office',
                    items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
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
            ],
            [
                {
                    label: 'Gaming',
                    items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                }
            ],
            [
                {
                    label: 'Appliances',
                    items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
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
            ],
            [
                {
                    label: 'Swimming',
                    items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                }
            ],
            [
                {
                    label: 'Tennis',
                    items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                }
            ]
        ]
    }
]);
<\/script>
`
            }
        };
    }
};
</script>
