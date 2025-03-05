<template>
    <DocSectionText v-bind="$attrs">
        <p>A collapsible Panel with customized header, icons and footer sections via templating.</p>
    </DocSectionText>
    <div class="card">
        <Panel toggleable>
            <template #header>
                <div class="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                        <SecondaryButton icon="pi pi-user" rounded text />
                        <SecondaryButton icon="pi pi-bookmark" severity="secondary" rounded text />
                    </div>
                    <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
                </div>
            </template>
            <template #icons>
                <SecondaryButton icon="pi pi-cog" severity="secondary" variant="text" rounded />
            </template>
            <p class="!m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Avatar from '@/volt/avatar';
import SecondaryButton from '@/volt/button/secondary';
import Panel from '@/volt/panel';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Panel toggleable>
            <template #header>
                <div class="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                        <SecondaryButton icon="pi pi-user" rounded text />
                        <SecondaryButton icon="pi pi-bookmark" severity="secondary" rounded text />
                    </div>
                    <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
                </div>
            </template>
            <template #icons>
                <SecondaryButton icon="pi pi-cog" severity="secondary" variant="text" rounded />
            </template>
            <p class="!m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
import Avatar from '@/volt/avatar';
import SecondaryButton from '@/volt/button/secondary';
import Panel from '@/volt/panel';
<\/script>
`);
</script>
