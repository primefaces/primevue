<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Volt ConfirmDialog utilizes the PrimeVue ConfirmDialog in headless mode, as a result you have full control over the presentation. In order to customize the default UI modify the <i>container</i> template in <i>confirmdialog/index.vue</i>.
            The default UI is displayed below.
        </p>
        <DocSectionCode :code="code" />
    </DocSectionText>
</template>

<script setup lang="ts">
const code = ref(`
<template #container="{ message, acceptCallback, rejectCallback }">
    <div class="flex items-center justify-between shrink-0 p-5">
        <span class="font-semibold text-xl">{{ message.header }}</span>
        <SecondaryButton variant="text" rounded @click="rejectCallback" autofocus>
            <template #icon>
                <TimesIcon />
            </template>
        </SecondaryButton>
    </div>
    <div class="overflow-y-auto pt-0 px-5 pb-5 flex items-center gap-4">
        <ExclamationTriange class="size-6" />
        {{ message.message }}
    </div>
    <div class="pt-0 px-5 pb-5 flex justify-end gap-2">
        <SecondaryButton @click="rejectCallback" :label="message.rejectProps.label" size="small" />
        <Button @click="acceptCallback" :label="message.acceptProps.label" size="small" />
    </div>
</template>
`);
</script>
