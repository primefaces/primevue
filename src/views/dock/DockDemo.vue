<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dock</h1>
                <p>Dock is a navigation component consisting of menuitems.</p>
            </div>
            <AppDemoActions />
        </div>

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
                            <img :alt="item.label" :src="item.icon" style="width: 100%" />
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
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                    </template>    
                </Galleria>
            </div>
        </div>

        <DockDoc />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import PhotoService from '../../service/PhotoService';
import TerminalService from 'primevue/terminalservice';
import DockDoc from './DockDoc.vue';

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
    },
    components: {
        'DockDoc': DockDoc
    }
}
</script>

<style scoped lang="scss">
::v-deep(.dock-demo) {
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
</style>