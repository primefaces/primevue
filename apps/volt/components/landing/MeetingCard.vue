<template>
    <div class="p-6 shadow-lg border border-transparent dark:border-surface-800 bg-surface-0 dark:bg-surface-900 animated-border">
        <div class="flex justify-between items-center">
            <AvatarGroup class="mb-4 ms-2">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="!border-surface-0 dark:!border-surface-900" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="!border-surface-0 dark:!border-surface-900" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" class="!border-surface-0 dark:!border-surface-900" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" class="!border-surface-0 dark:!border-surface-900" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" class="!border-surface-0 dark:!border-surface-900" shape="circle" />
                <Avatar label="+2" shape="circle" class="text-xs" />
            </AvatarGroup>
            <SecondaryButton icon="pi pi-arrow-right" size="small" rounded class="-translate-y-2" />
        </div>
        <div class="text-xl font-medium text-surface-900 dark:text-surface-0 mb-3">Join the Meeting</div>
        <span class="text-muted-color">Enter your code to enter the meeting.</span>
        <InputOtp class="mt-4" />
    </div>
</template>

<script setup>
import Avatar from '@/volt/avatar';
import AvatarGroup from '@/volt/avatar/group';
import SecondaryButton from '@/volt/button/secondary';
import InputOtp from '@/volt/inputotp';
</script>
