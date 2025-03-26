<template>
    <div class="p-6 shadow-lg border border-transparent dark:border-surface-800 bg-surface-0 dark:bg-surface-900 animated-border">
        <div class="flex items-center gap-2 mb-3">
            <i class="pi pi-users text-muted-color"></i>
            <span class="font-medium text-surface-900 dark:text-surface-0">Invite Members</span>
        </div>
        <Message severity="secondary" icon="pi pi-send" size="small">Invitation sent.</Message>
        <div class="mt-4">
            <span class="font-medium block mb-1">Email</span>
            <div class="flex gap-2">
                <InputText placeholder="Email" class="text-color grow-1 w-[1%]" />
                <SecondaryButton label="Invite" outlined pt:root="shrink-0" />
            </div>
        </div>
        <div class="mt-4">
            <span class="font-medium block mb-1 text-color">Members</span>
            <ul class="flex flex-col gap-2">
                <li class="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" class="shrink-0" />
                    <span class="text-color">Amy Elsner</span>
                    <Select v-model="role1" :options="roles" size="small" class="ms-auto min-w-28" />
                </li>
                <li class="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" class="shrink-0" />
                    <span class="text-color">Onyama Limba</span>
                    <Select v-model="role2" :options="roles" size="small" class="ms-auto min-w-28" />
                </li>
            </ul>
        </div>
        <div class="mt-4">
            <span class="font-medium block mb-1 text-color">Copy Link</span>
            <div class="flex items-stretch w-full">
                <InputText placeholder="https://volt.primevue.org/share/t9423g9f349f234" pt:root="flex-1 rounded-s-md rounded-e-none" disabled fluid />
                <span class="flex items-center justify-center border-y border-e border-surface-300 dark:border-surface-700 rounded-e-md">
                    <SecondaryButton icon="pi pi-copy" variant="text" />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from '@/volt/avatar';
import SecondaryButton from '@/volt/button/secondary';
import InputText from '@/volt/inputtext';
import Message from '@/volt/message';
import Select from '@/volt/select';

const role1 = ref('Owner');
const role2 = ref('Editor');
const roles = ref(['Owner', 'Editor']);
</script>
