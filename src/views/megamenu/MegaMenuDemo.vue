<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>MegaMenu</h1>
                <p>MegaMenu is navigation component that displays submenus together.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Horizontal</h5>
                <MegaMenu :model="items" />

                <h5>Vertical</h5>
                <MegaMenu :model="items" orientation="vertical"/>
            </div>
        </div>

        <MegaMenuDoc />
    </div>
</template>

<script>
import MegaMenuDoc from './MegaMenuDoc';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos', icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                            },
                            {
                                label: 'Video 2',
                                items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                            },
                            {
                                label: 'Video 4',
                                items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users', icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                            },
                            {
                                label: 'User 2',
                                items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                            },
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                            },
                            {
                                label: 'User 4',
                                items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                            },
                            {
                                label: 'User 6',
                                items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events', icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                            },
                            {
                                label: 'Event 2',
                                items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                            },
                            {
                                label: 'Event 4',
                                items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings', icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                            },
                            {
                                label: 'Setting 2',
                                items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                            },
                            {
                                label: 'Setting 3',
                                items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Setting 4',
                                items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                            }
                        ]
                    ]
                }
            ]
        }
    },
    components: {
        'MegaMenuDoc': MegaMenuDoc
	}
}
</script>