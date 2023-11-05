<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card dock-demo">
        <div class="dock-window">
            <Dock :model="items" position="bottom" :pt="{ container: { style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' } } }">
                <template #icon="{ item }">
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
            code: {
                basic: `
<Dock :model="items" position="bottom"
    :pt="{ 
        container: {
            style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
        }
    }"
>
    <template #icon="{ item }">
        <img :alt="item.label" :src="item.icon" style="width: 100%" />
    </template>
</Dock>
`,
                options: `
<template>
    <div class="card dock-demo">
        <div class="dock-window">
            <Dock :model="items" position="bottom"
                :pt="{ 
                    container: {
                        style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                    }
                }"
            >
                <template #icon="{ item }">
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
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg))'">
            <Dock :model="items" position="bottom"
                :pt="{ 
                    container: {
                        style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                    }
                }"
            >
                <template #icon="{ item }">
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
