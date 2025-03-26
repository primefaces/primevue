<template>
    <DocSectionText v-bind="$attrs">
        <p>Header and Footer sections allow customization via templating.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Edit Profile" class="sm:w-100 w-9/10">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                </div>
            </template>
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-2">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <template #footer>
                <SecondaryButton label="Cancel" text @click="visible = false" autofocus />
                <SecondaryButton label="Save" outlined @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Avatar from '@/volt/Avatar.vue';
import Button from '@/volt/Button.vue';
import Dialog from '@/volt/Dialog.vue';
import InputText from '@/volt/InputText.vue';
import SecondaryButton from '@/volt/SecondaryButton';
import { ref } from 'vue';

const visible = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Edit Profile" class="sm:w-100 w-9/10">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                </div>
            </template>
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-2">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <template #footer>
                <SecondaryButton label="Cancel" text @click="visible = false" autofocus />
                <SecondaryButton label="Save" outlined @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import Avatar from '@/volt/Avatar.vue';
import Button from '@/volt/Button.vue';
import SecondaryButton from '@/volt/SecondaryButton';
import Dialog from '@/volt/Dialog.vue';
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const visible = ref(false);
<\/script>
`);
</script>
