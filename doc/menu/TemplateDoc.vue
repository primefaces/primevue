<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Menu offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter. When item templating is used, it is suggested to bind the <i>action</i> prop from the slot props to handle
            accessibility and pass through attributes. Additionally, two slots named <i>start</i> and <i>end</i> are provided to embed content before or after the menu.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #start>
                <button @click="profileClick" class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                    <div class="flex flex-column align">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Agent</span>
                    </div>
                </button>
            </template>
            <template #item="{ item, label, props }">
                <a class="flex" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                </a>
            </template>
            <template #end>
                <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
                    <i class="pi pi-sign-out" />
                    <span class="ml-2">Log Out</span>
                </button>
            </template>
        </Menu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { separator: true },
                {
                    label: 'Profile',
                    icon: 'pi pi-fw pi-user'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    badge: 2
                },
                { separator: true }
            ],
            code: {
                basic: `
<Menu :model="items">
    <template #start>
        <button @click="profileClick" class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <div class="flex flex-column align">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Agent</span>
            </div>
        </button>
    </template>
    <template #item="{ item, label, props }">
        <a class="flex" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        </a>
    </template>
    <template #end>
        <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
            <i class="pi pi-sign-out" />
            <span class="ml-2">Log Out</span>
        </button>
    </template>
</Menu>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #start>
                <button @click="profileClick" class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                    <div class="flex flex-column align">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Agent</span>
                    </div>
                </button>
            </template>
            <template #item="{ item, label, props }">
                <a class="flex" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                </a>
            </template>
            <template #end>
                <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
                    <i class="pi pi-sign-out" />
                    <span class="ml-2">Log Out</span>
                </button>
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { separator: true },
                {
                    label: 'Profile',
                    icon: 'pi pi-fw pi-user'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    badge: 2
                },
                { separator: true }
            ]
        };
    },
    methods: {
        profileClick() {
            this.toast.add({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #start>
                <button @click="profileClick" class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                    <div class="flex flex-column align">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Agent</span>
                    </div>
                </button>
            </template>
            <template #item="{ item, label, props }">
                <a class="flex" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                </a>
            </template>
            <template #end>
                <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
                    <i class="pi pi-sign-out" />
                    <span class="ml-2">Log Out</span>
                </button>
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const items = ref([
    { separator: true },
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-user'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        badge: 2
    },
    { separator: true }
]);

const toast = useToast();

const profileClick = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
}
<\/script>`
            }
        };
    },
    methods: {
        profileClick() {
            this.toast.add({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
        }
    }
};
</script>
