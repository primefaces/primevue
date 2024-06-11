<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>command</i> property defines the callback to run when an item is activated by click or a key event.</p>
    </DocSectionText>
    <div class="card flex sm:justify-center">
        <ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
            <li
                v-for="user in users"
                :key="user.id"
                :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
                @contextmenu="onRightClick($event, user)"
            >
                <div class="flex flex-1 items-center gap-2">
                    <img :alt="user.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${user.image}`" class="w-8 h-8" />
                    <span class="font-bold">{{ user.name }}</span>
                </div>
                <Tag :value="user.role" :severity="getBadge(user)" />
            </li>
        </ul>
        <ContextMenu ref="menu" :model="items" @hide="selectedUser = null" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedUser: null,
            users: [
                { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
                { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
                { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
                { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
                { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
            ],
            items: [
                {
                    label: 'Roles',
                    icon: 'pi pi-users',
                    items: [
                        {
                            label: 'Admin',
                            command: () => {
                                this.selectedUser.role = 'Admin';
                            }
                        },
                        {
                            label: 'Member',
                            command: () => {
                                this.selectedUser.role = 'Member';
                            }
                        },
                        {
                            label: 'Guest',
                            command: () => {
                                this.selectedUser.role = 'Guest';
                            }
                        }
                    ]
                },
                {
                    label: 'Invite',
                    icon: 'pi pi-user-plus',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
                    }
                }
            ],
            code: {
                basic: `
<ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
    <li
        v-for="user in users"
        :key="user.id"
        :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
        @contextmenu="onRightClick($event, user)"
    >
        <div class="flex flex-1 items-center gap-2">
            <img :alt="user.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`" class="w-8 h-8" />
            <span class="font-bold">{{ user.name }}</span>
        </div>
        <Tag :value="user.role" :severity="getBadge(user)" />
    </li>
</ul>
<ContextMenu ref="menu" :model="items" @hide="selectedUser = null" />
<Toast />
`,
                options: `
<template>
    <div class="card flex sm:justify-center">
        <ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
            <li
                v-for="user in users"
                :key="user.id"
                :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
                @contextmenu="onRightClick($event, user)"
            >
                <div class="flex flex-1 items-center gap-2">
                    <img :alt="user.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`" class="w-8 h-8" />
                    <span class="font-bold">{{ user.name }}</span>
                </div>
                <Tag :value="user.role" :severity="getBadge(user)" />
            </li>
        </ul>
        <ContextMenu ref="menu" :model="items" @hide="selectedUser = null" />
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedUser: null,
            users: [
                { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
                { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
                { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
                { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
                { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
            ],
            items: [
                {
                    label: 'Roles',
                    icon: 'pi pi-users',
                    items: [
                        {
                            label: 'Admin',
                            command: () => {
                                this.selectedUser.role = 'Admin';
                            }
                        },
                        {
                            label: 'Member',
                            command: () => {
                                this.selectedUser.role = 'Member';
                            }
                        },
                        {
                            label: 'Guest',
                            command: () => {
                                this.selectedUser.role = 'Guest';
                            }
                        }
                    ]
                },
                {
                    label: 'Invite',
                    icon: 'pi pi-user-plus',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
                    }
                }
            ]
        };
    },
    methods: {
        onRightClick(event, user) {
            this.selectedUser = user;
            this.$refs.menu.show(event);
        },
        getBadge(user) {
            if (user.role === 'Member') return 'info';
            else if (user.role === 'Guest') return 'warn';
            else return null;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex sm:justify-center">
        <ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
            <li
                v-for="user in users"
                :key="user.id"
                :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
                @contextmenu="onRightClick($event, user)"
            >
                <div class="flex flex-1 items-center gap-2">
                    <img :alt="user.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`" class="w-8 h-8" />
                    <span class="font-bold">{{ user.name }}</span>
                </div>
                <Tag :value="user.role" :severity="getBadge(user)" />
            </li>
        </ul>
        <ContextMenu ref="menu" :model="items" @hide="selectedUser = null" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

const toast = useToast();
const selectedUser = ref();
const menu = ref();
const users = ref([
    { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
    { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
    { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
    { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
    { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
]);
const items = ref([
    {
        label: 'Roles',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Admin',
                command: () => {
                    selectedUser.value.role = 'Admin';
                }
            },
            {
                label: 'Member',
                command: () => {
                    selectedUser.value.role = 'Member';
                }
            },
            {
                label: 'Guest',
                command: () => {
                    selectedUser.value.role = 'Guest';
                }
            }
        ]
    },
    {
        label: 'Invite',
        icon: 'pi pi-user-plus',
        command: () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
        }
    }
]);

const onRightClick = (event, user) => {
    selectedUser.value = user;
    menu.value.show(event);
};

const getBadge = (user) => {
    if (user.role === 'Member') return 'info';
    else if (user.role === 'Guest') return 'warn';
    else return null;
}
<\/script>
`
            }
        };
    },
    methods: {
        onRightClick(event, user) {
            this.selectedUser = user;
            this.$refs.menu.show(event);
        },
        getBadge(user) {
            if (user.role === 'Member') return 'info';
            else if (user.role === 'Guest') return 'warn';
            else return null;
        }
    }
};
</script>
