<template>
 <div class="content-section documentation">
	<TabView>
		<TabPanel header="Documentation">
            <h5>Import</h5>
<CodeHighlight lang="javascript">
import Dock from 'primevue/dock';
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>Dock is a navigation component consisting of menuitems. It has a collection of additional options defined by the <i>model</i> property.</p>

<CodeHighlight>
&lt;Dock :model="items" /&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>

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
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>styles</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>tooltipOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Whether to display the tooltip on items. The modifiers of <router-link to="/tooltip">Tooltip</router-link> can be used like an object in it. Valid keys are 'event' and 'position'.</td>
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

        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primevue/tree/2.x/src/views/dock" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <span>View on GitHub</span>
            </a>

<CodeHighlight>
<template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;div class="dock-window"&gt;
    &lt;Dock :model="dockBasicItems" position="bottom"/&gt;
    &lt;Dock :model="dockBasicItems" position="top"/&gt;
    &lt;Dock :model="dockBasicItems" position="left"/&gt;
    &lt;Dock :model="dockBasicItems" position="right"/&gt;
&lt;/div&gt;

&lt;h5&gt;Advanced&lt;/h5&gt;
&lt;Menubar :model="menubarItems"&gt;
    &lt;template #start&gt;
        &lt;i class="pi pi-apple"&gt;&lt;/i&gt;
    &lt;/template&gt;
    &lt;template #end&gt;
        &lt;i class="pi pi-video" /&gt;
        &lt;i class="pi pi-wifi" /&gt;
        &lt;i class="pi pi-volume-up" /&gt;
        &lt;span&gt;Fri 13:07&lt;/span&gt;
        &lt;i class="pi pi-search" /&gt;
        &lt;i class="pi pi-bars" /&gt;
    &lt;/template&gt;
&lt;/Menubar&gt;

&lt;div class="dock-window dock-advanced"&gt;
    &lt;Dock :model="dockItems"&gt;
        &lt;template #item="slotProps"&gt;
            &lt;a href="#" class="p-dock-action" v-tooltip.top="slotProps.item.label" @click="onDockItemClick($event, slotProps.item)"&gt;
                &lt;img :alt="slotProps.item.label" :src="slotProps.item.icon" style="width: 100%" /&gt;
            &lt;/a&gt;
        &lt;/template&gt;
    &lt;/Dock&gt;

    &lt;Dialog :visible.sync="displayTerminal" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true"&gt;
        &lt;Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primevue $" /&gt;
    &lt;/Dialog&gt;

    &lt;Dialog :visible.sync="displayFinder" header="Finder" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true"&gt;
        &lt;Tree :value="nodes" /&gt;
    &lt;/Dialog&gt;

    &lt;Galleria :visible.sync="displayPhotos" :value="images" :responsiveOptions="responsiveOptions" :numVisible="2" containerStyle="width: 400px"
        :circular="true" :fullScreen="true" :showThumbnails="false" :showItemNavigators="true"&gt;
        &lt;template #item="slotProps"&gt;
            &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
        &lt;/template&gt;
    &lt;/Galleria&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
                    icon: () => <img alt="Finder" src="demo/images/dock/finder.svg" style="width: 100%" />
                },
                {
                    label: 'App Store',
                    icon: () => <img alt="App Store" src="demo/images/dock/appstore.svg" style="width: 100%" />
                },
                {
                    label: 'Photos',
                    icon: () => <img alt="Photos" src="demo/images/dock/photos.svg" style="width: 100%" />
                },
                {
                    label: 'Trash',
                    icon: () => <img alt="trash" src="demo/images/dock/trash.png" style="width: 100%" />
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
        TerminalService.$on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.$off('command', this.commandHandler);
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
</CodeHighlight>

<CodeHighlight lang="css">
::v-deep .dock-demo {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('../../assets/images/dock/window.jpg');
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
</CodeHighlight>
        </TabPanel>
    </TabView>
</div>
</template>
