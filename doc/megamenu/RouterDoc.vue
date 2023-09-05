<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as
            <i>NuxtLink</i> or <i>router-link</i>. Here is an example with vue-router.
        </p>
    </DocSectionText>
    <div class="card">
        <MegaMenu :model="items">
            <template #item="{ label, item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
                </a>
            </template>
        </MegaMenu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos',
                    icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                            },
                            {
                                label: 'Video 2',
                                items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                            },
                            {
                                label: 'Video 4',
                                items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                            },
                            {
                                label: 'User 2',
                                items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                            },
                            {
                                label: 'User 4',
                                items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                            },
                            {
                                label: 'User 6',
                                items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                            },
                            {
                                label: 'Event 2',
                                items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                            },
                            {
                                label: 'Event 4',
                                items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                            },
                            {
                                label: 'Setting 2',
                                items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                            },
                            {
                                label: 'Setting 3',
                                items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-fw pi-upload',
                    route: '/fileupload'
                }
            ],
            code: {
                basic: `<MegaMenu :model="items">
    <template #item="{ label, item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
        </a>
    </template>
</MegaMenu>`,
                options: `<template>
    <div class="card">
        <MegaMenu :model="items">
            <template #item="{ label, item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
                </a>
            </template>
        </MegaMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos',
                    icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                            },
                            {
                                label: 'Video 2',
                                items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                            },
                            {
                                label: 'Video 4',
                                items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                            },
                            {
                                label: 'User 2',
                                items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                            },
                            {
                                label: 'User 4',
                                items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                            },
                            {
                                label: 'User 6',
                                items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                            },
                            {
                                label: 'Event 2',
                                items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                            },
                            {
                                label: 'Event 4',
                                items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                            },
                            {
                                label: 'Setting 2',
                                items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                            },
                            {
                                label: 'Setting 3',
                                items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-fw pi-upload',
                    route: '/fileupload'
                }
            ]
        };
    }
};
<\/script>`,
                composition: `<template>
    <div class="card">
        <MegaMenu :model="items">
            <template #item="{ label, item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
                </a>
            </template>
        </MegaMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Upload',
        icon: 'pi pi-fw pi-upload',
        route: '/fileupload'
    }
]);
<\/script>`
            }
        };
    }
};
</script>
