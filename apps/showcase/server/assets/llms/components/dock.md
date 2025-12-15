# Vue Dock Component

Dock is a navigation component consisting of menuitems.

## Import

```javascript
import Dock from 'primevue/dock';
```

## Accessibility

Screen Reader Dock component uses the menu role with the aria-orientation and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. Keyboard Support Key Function tab Moves focus to the first menuitem. enter Activates the focused menuitem. space Activates the focused menuitem. down arrow Moves focus to the next menuitem in vertical layout. up arrow Moves focus to the previous menuitem in vertical layout. right arrow Moves focus to the next menuitem in horizontal layout. left arrow Moves focus to the previous menuitem in horizontal layout. home Moves focus to the first menuitem. end Moves focus to the last menuitem.

## AdvancedDoc

A mock desktop UI implemented with various components in addition to Dock.

```vue
<Dock :model="items">
    <template #item="{ item }">
        <a v-tooltip.top="item.label" href="#" class="p-dock-item-link" @click="onDockItemClick($event, item)">
            <img :alt="item.label" :src="item.icon" style="width: 100%" />
        </a>
    </template>
</Dock>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div>
        <div class="card dock-demo">
            <Toast position="top-center" group="tc" />

            <Menubar :model="menubarItems">
                <template #start>
                    <i class="pi pi-apple px-2"></i>
                </template>
                <template #end>
                    <i class="pi pi-video px-2" />
                    <i class="pi pi-wifi px-2" />
                    <i class="pi pi-volume-up px-2" />
                    <span class="px-2">Fri 13:07</span>
                    <i class="pi pi-search px-2" />
                    <i class="pi pi-bars px-2" />
                </template>
            </Menubar>

            <div class="dock-window dock-advanced">
                <Dock :model="items">
                    <template #item="{ item }">
                        <a v-tooltip.top="item.label" href="#" class="p-dock-item-link" @click="onDockItemClick($event, item)">
                            <img :alt="item.label" :src="item.icon" style="width: 100%" />
                        </a>
                    </template>
                </Dock>

                <Dialog v-model:visible="displayTerminal" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}' and 'random')" prompt="primevue $" />
                </Dialog>

                <Dialog v-model:visible="displayFinder" header="Finder" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Tree :value="nodes" />
                </Dialog>

                <Galleria v-model:visible="displayPhotos" :value="images" :responsiveOptions="responsiveOptions" :numVisible="2" containerStyle="width: 400px" :circular="true" :fullScreen="true" :showThumbnails="false" :showItemNavigators="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                    </template>
                </Galleria>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useToast } from 'primevue/usetoast';
import TerminalService from 'primevue/terminalservice';
import { NodeService } from '@/service/NodeService';
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then(data => images.value = data);
    NodeService.getTreeNodes().then(data => nodes.value = data);
    TerminalService.on('command', commandHandler);
})

onBeforeUnmount(() => {
    TerminalService.off('command', commandHandler);
})

const displayFinder = ref(false);
const displayTerminal = ref(false);
const displayPhotos = ref(false);
const images = ref();
const nodes = ref();
const toast = useToast();
const items = ref([
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg',
        command: () => {
            this.displayFinder = true;
        }
    },
    {
        label: 'Terminal',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/terminal.svg',
        command: () => {
            this.displayTerminal = true;
        }
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg',
        url: 'https://www.apple.com/app-store/'
    },
    {
        label: 'Safari',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/safari.svg',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
        }
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg',
        command: () => {
            this.displayPhotos = true;
        }
    },
    {
        label: 'GitHub',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/github.svg',
        url: 'https://github.com/primefaces/primevue'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png',
        command: () => {
            toast.add({ severity: 'info', summary: 'Trash is empty', life: 3000 });
        }
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
                label: 'Archive',
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
<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

.dock-demo .p-menubar {
    padding: 0;
    border-radius: 0;
}
</style>
```

</details>

## Basic

Dock requires a collection of menuitems as its model and an icon template. Default location is bottom and other edges are also available when defined with the position property.

```vue
<Dock :model="items" :position="position">
    <template #itemicon="{ item }">
        <img v-tooltip.top="item.label" :alt="item.label" :src="item.icon" style="width: 100%" />
    </template>
</Dock>
```
