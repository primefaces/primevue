<template>
    <DocSectionText v-bind="$attrs">
        <p>Menu requires a collection of menuitems as its <i>model</i> and an <i>icon</i> template. Default location is <i>bottom</i> and other edges are also available when defined with the <i>position</i> property.</p>
    </DocSectionText>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-4 mb-8">
            <div v-for="pos of positions" :key="pos.label" class="flex items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg)'">
            <Dock :model="items" :position="position">
                <template #itemicon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Finder',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
                },
                {
                    label: 'App Store',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
                },
                {
                    label: 'Photos',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
                },
                {
                    label: 'Trash',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
                }
            ],
            position: 'bottom',
            positions: [
                {
                    label: 'Bottom',
                    value: 'bottom'
                },
                {
                    label: 'Top',
                    value: 'top'
                },
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ],
            code: {
                basic: `
<Dock :model="items" :position="position">
    <template #itemicon="{ item }">
        <img :alt="item.label" :src="item.icon" style="width: 100%" />
    </template>
</Dock>
`,
                options: `
<template>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-4 mb-8">
            <div v-for="pos of positions" :key="pos.label" class="flex items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window">
            <Dock :model="items" :position="position">
                <template #itemicon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Finder',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
                },
                {
                    label: 'App Store',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
                },
                {
                    label: 'Photos',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
                },
                {
                    label: 'Trash',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
                }
            ],
            position: 'bottom',
            positions: [
                {
                    label: 'Bottom',
                    value: 'bottom'
                },
                {
                    label: 'Top',
                    value: 'top'
                },
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ]
        }
    }
}
<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}
</style>
`,
                composition: `
<template>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-4 mb-8">
            <div v-for="pos of positions" :key="pos.label" class="flex items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg))'">
            <Dock :model="items" :position="position">
                <template #itemicon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
    }
]);
const position = ref('bottom');
const positions = ref([
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
]);

<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}
</style>
`
            }
        };
    }
};
</script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('https://primefaces.org/cdn/primevue/images/dock/window.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}

.dock-demo .p-menubar {
    padding: 0;
    border-radius: 0;
}
</style>
