<template>
    <AppDoc name="DockDemo" :sources="sources" github="dock/DockDemo.vue" :service="['NodeService', 'PhotoService']" :data="['treenodes', 'photos']">
        <h5>Import</h5>
<pre v-code.script><code>
import Dock from 'primevue/dock';

</code></pre>

    <h5>Getting Started</h5>
    <p>Dock is a navigation component consisting of menuitems. It has a collection of additional options defined by the <i>model</i> property.</p>

<pre v-code><code>
&lt;Dock :model="items" /&gt;

</code></pre>

<pre v-code.script><code><template>
    export default {
        data() {
            return {
                items: [
                    {
                        label: 'Finder',
                        icon: () => &lt;img alt="Finder" src="demo/images/dock/finder.svg" style="width: 100%" /&gt;
                    },
                    {
                        label: 'App Store',
                        icon: () => &lt;img alt="App Store" src="demo/images/dock/appstore.svg" style="width: 100%" /&gt;
                    },
                    {
                        label: 'Photos',
                        icon: () => &lt;img alt="Photos" src="demo/images/dock/photos.svg" style="width: 100%" /&gt;
                    },
                    {
                        label: 'Trash',
                        icon: () => &lt;img alt="trash" src="demo/images/dock/trash.png" style="width: 100%" /&gt;
                    }
                ]
            }
        }
    }

</template>
</code></pre>

    <h5>MenuModel API</h5>
    <p>Dock uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

    <h5>Properties</h5>
    <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>model</td>
                    <td>object</td>
                    <td>null</td>
                    <td>MenuModel instance to define the action items.</td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>string</td>
                    <td>bottom</td>
                    <td>Position of element. Valid values are 'bottom', 'top', 'left' and 'right'.</td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>string</td>
                    <td>null</td>
                    <td>Style class of the element.</td>
                </tr>
                <tr>
                    <td>style</td>
                    <td>object</td>
                    <td>null</td>
                    <td>Inline style of the element.</td>
                </tr>
                <tr>
                    <td>exact</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Whether to apply 'router-link-active-exact' class if route exactly matches the item path.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5>Styling</h5>
    <p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Element</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>p-dock</td>
                    <td>Container element.</td>
                </tr>
                <tr>
                    <td>p-dock-list</td>
                    <td>List of items.</td>
                </tr>
                <tr>
                    <td>p-dock-item</td>
                    <td>Each items in list.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5>Slots</h5>
    <div class="doc-tablewrapper">
        <table class=doc-table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Parameters</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>item</td>
                    <td>item: Custom content for item</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5>Dependencies</h5>
    <p>None.</p>

    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="dock-demo">
            <Toast position="top-center" group="tc" />

            <h5>Basic</h5>
            <div class="dock-window">
                <Dock :model="dockBasicItems" position="bottom"/>
                <Dock :model="dockBasicItems" position="top"/>
                <Dock :model="dockBasicItems" position="left"/>
                <Dock :model="dockBasicItems" position="right"/>
            </div>

            <h5>Advanced</h5>
            <Menubar :model="menubarItems">
                <template #start>
                    <i class="pi pi-apple"></i>
                </template>
                <template #end>
                    <i class="pi pi-video" />
                    <i class="pi pi-wifi" />
                    <i class="pi pi-volume-up" />
                    <span>Fri 13:07</span>
                    <i class="pi pi-search" />
                    <i class="pi pi-bars" />
                </template>
            </Menubar>

            <div class="dock-window dock-advanced">
                <Dock :model="dockItems">
                    <template #item="{ item }">
                        <a href="#" class="p-dock-action" v-tooltip.top="item.label" @click="onDockItemClick($event, item)">
                            <img :alt="item.label" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%">
                        </a>
                    </template>
                </Dock>

                <Dialog v-model:visible="displayTerminal" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primevue $" />
                </Dialog>

                <Dialog v-model:visible="displayFinder" header="Finder" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Tree :value="nodes" />
                </Dialog>

                <Galleria v-model:visible="displayPhotos" :value="images" :responsiveOptions="responsiveOptions" :numVisible="2" containerStyle="width: 400px"
                    :circular="true" :fullScreen="true" :showThumbnails="false" :showItemNavigators="true">
                    <template #item="slotProps">
                        <img src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png' :alt="slotProps.item.alt" style="width: 100%" />
                    </template>    
                </Galleria>
            </div>
        </div>
    </div>
</template>

<script>
import NodeService from './service/NodeService';
import PhotoService from './service/PhotoService';
import TerminalService from 'primevue/terminalservice';

export default {
    data() {
        return {
            displayFinder: false,
            displayTerminal: false,
            displayPhotos: false,
            images: null,
            nodes: null,
            imgErrorPath: 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
            dockItems: [
                {
                    label: 'Finder',
                    icon: "demo/images/dock/finder.svg",
                    command: () => {
                        this.displayFinder = true;
                    }
                },
                {
                    label: 'Terminal',
                    icon: "demo/images/dock/terminal.svg",
                    command: () => {
                        this.displayTerminal = true;
                    }
                },
                {
                    label: 'App Store',
                    icon: "demo/images/dock/appstore.svg",
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', group: 'tc', life: 3000 });
                    }
                },
                {
                    label: 'Safari',
                    icon: "demo/images/dock/safari.svg",
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
                    }
                },
                {
                    label: 'Photos',
                    icon: "demo/images/dock/photos.svg",
                    command: () => {
                        this.displayPhotos = true;
                    }
                },
                {
                    label: 'GitHub',
                    icon: "demo/images/dock/github.svg",
                },
                {
                    label: 'Trash',
                    icon: "demo/images/dock/trash.png",
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 });
                    }
                }
            ],
            dockBasicItems: [
                {
                    label: 'Finder',
                    icon: () => <img alt="Finder" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
                },
                {
                    label: 'App Store',
                    icon: () => <img alt="App Store" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
                },
                {
                    label: 'Photos',
                    icon: () => <img alt="Photos" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
                },
                {
                    label: 'Trash',
                    icon: () => <img alt="trash" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
                }
            ],
            menubarItems: [
                {
                    label: 'Finder',
                    class: 'menubar-root'
                },
                {
                    label: 'File',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                },

                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        },

                    ]
                },
                {
                    label: 'Users',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus',

                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus',

                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Quit'
                }
            ],
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ]
        }
    },
    nodeService: null,
    photoService: null,
    created() {
        this.nodeService = new NodeService();
        this.photoService = new PhotoService();
    },
    mounted() {
        this.photoService.getImages().then(data => this.images = data);
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
        TerminalService.on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.off('command', this.commandHandler);
    },
    methods: {
        onDockItemClick(event, item) {
            if (item.command) {
                item.command();
            }

            event.preventDefault();
        },
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }

            TerminalService.emit('response', response);
        }
    }
}
<\\/script>

<style scoped lang="scss">
::v-deep(.dock-demo) {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url("https://www.primefaces.org/wp-content/uploads/2021/02/primevue-blog.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }

    .p-dock {
        z-index: 1000;
    }

    .p-menubar {
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 0;

        .menubar-root {
            font-weight: bold;
            padding: 0 1rem;
        }

        .p-menuitem-link {
            padding: 0.5rem .75rem;
        }

        .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
            padding: 0.5rem .75rem;

            > .p-submenu-icon {
                display: none;
            }
        }

        .p-menubar-end {
            span, i {
                padding: 0 .75rem;
            }
        }

        .p-submenu-list {
            z-index: 2;
        }
    }
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="content-section implementation dock-demo">
            <Toast position="top-center" group="tc" />

            <h5>Basic</h5>
            <div class="dock-window">
                <Dock :model="dockBasicItems" position="bottom"/>
                <Dock :model="dockBasicItems" position="top"/>
                <Dock :model="dockBasicItems" position="left"/>
                <Dock :model="dockBasicItems" position="right"/>
            </div>

            <h5>Advanced</h5>
            <Menubar :model="menubarItems">
                <template #start>
                    <i class="pi pi-apple"></i>
                </template>
                <template #end>
                    <i class="pi pi-video" />
                    <i class="pi pi-wifi" />
                    <i class="pi pi-volume-up" />
                    <span>Fri 13:07</span>
                    <i class="pi pi-search" />
                    <i class="pi pi-bars" />
                </template>
            </Menubar>

            <div class="dock-window dock-advanced">
                <Dock :model="dockItems">
                    <template #item="{ item }">
                        <a href="#" class="p-dock-action" v-tooltip.top="item.label" @click="onDockItemClick($event, item)">
                            <img :alt="item.label" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
                        </a>
                    </template>
                </Dock>

                <Dialog v-model:visible="displayTerminal" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primevue $" />
                </Dialog>

                <Dialog v-model:visible="displayFinder" header="Finder" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Tree :value="nodes" />
                </Dialog>

                <Galleria v-model:visible="displayPhotos" :value="images" :responsiveOptions="responsiveOptions" :numVisible="2" containerStyle="width: 400px"
                    :circular="true" :fullScreen="true" :showThumbnails="false" :showItemNavigators="true">
                    <template #item="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.alt" style="width: 100%" />
                    </template>    
                </Galleria>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useToast } from 'primevue/usetoast';
import NodeService from './service/NodeService';
import PhotoService from './service/PhotoService';
import TerminalService from 'primevue/terminalservice';

export default {
    setup() {
        onMounted(() => {
            photoService.value.getImages().then(data => images.value = data);
            nodeService.value.getTreeNodes().then(data => nodes.value = data);
            TerminalService.on('command', commandHandler);
        })

        onBeforeUnmount(() => {
            TerminalService.off('command', commandHandler);
        })


        const displayFinder = ref(false);
        const displayTerminal = ref(false);
        const displayPhotos = ref(false);
        const nodeService = ref(new NodeService());
        const photoService = ref(new PhotoService());
        const images = ref();
        const nodes = ref();
        const toast = useToast();
        const imgErrorPath = ref('https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png');
        const dockItems = ref([
            {
                label: 'Finder',
                icon: "demo/images/dock/finder.svg",
                command: () => {
                    displayFinder.value = true;
                }
            },
            {
                label: 'Terminal',
                icon: "demo/images/dock/terminal.svg",
                command: () => {
                    displayTerminal.value = true;
                }
            },
            {
                label: 'App Store',
                icon: "demo/images/dock/appstore.svg",
                command: () => {
                    toast.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', group: 'tc', life: 3000 });
                }
            },
            {
                label: 'Safari',
                icon: "demo/images/dock/safari.svg",
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
                }
            },
            {
                label: 'Photos',
                icon: "demo/images/dock/photos.svg",
                command: () => {
                    displayPhotos.value = true;
                }
            },
            {
                label: 'GitHub',
                icon: "demo/images/dock/github.svg",
            },
            {
                label: 'Trash',
                icon: "demo/images/dock/trash.png",
                command: () => {
                    toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 });
                }
            }
        ]);
        const dockBasicItems = ref([
            {
                label: 'Finder',
                icon: () => <img alt="Finder" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
            },
            {
                label: 'App Store',
                icon: () => <img alt="App Store" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
            },
            {
                label: 'Photos',
                icon: () => <img alt="Photos" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
            },
            {
                label: 'Trash',
                icon: () => <img alt="trash" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 100%" />
            }
        ]);
        const menubarItems = ref([
            {
                label: 'Finder',
                class: 'menubar-root'
            },
            {
                label: 'File',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            },

                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label: 'Users',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit'
            }
        ]);
        const responsiveOptions = ref([
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ]);

        const onDockItemClick = (event, item) => {
            if (item.command) {
                item.command();
            }

            event.preventDefault();
        };

        const commandHandler = (text) => {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }

            TerminalService.emit('response', response);
        };

        return { images, nodes, dockItems, dockBasicItems, menubarItems, onDockItemClick, commandHandler }
    },
    methods: {
        onDockItemClick(event, item) {
            if (item.command) {
                item.command();
            }

            event.preventDefault();
        },
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }

            TerminalService.emit('response', response);
        }
    }
}
<\\/script>

<style scoped lang="scss">
::v-deep(.dock-demo) {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url("https://www.primefaces.org/wp-content/uploads/2021/02/primevue-blog.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }

    .p-dock {
        z-index: 1000;
    }

    .p-menubar {
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 0;

        .menubar-root {
            font-weight: bold;
            padding: 0 1rem;
        }

        .p-menuitem-link {
            padding: 0.5rem .75rem;
        }

        .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
            padding: 0.5rem .75rem;

            > .p-submenu-icon {
                display: none;
            }
        }

        .p-menubar-end {
            span, i {
                padding: 0 .75rem;
            }
        }

        .p-submenu-list {
            z-index: 2;
        }
    }
}
</style>                    
`
                }
            }
        }
    }
}
</script>