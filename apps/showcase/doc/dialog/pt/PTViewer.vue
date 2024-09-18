<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <Dialog v-model:visible="visible" appendTo="#doc-ptviewer" header="Edit Profile" maximizable pt:mask="!relative" :draggable="false" class="!my-auto" :style="{ width: '25rem' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button type="button" label="Cancel" severity="secondary"></Button>
                    <Button type="button" label="Save"></Button>
                </div>
            </template>
        </Dialog>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            visible: true,
            ptViewerDoc: [
                {
                    data: getPTOptions('Dialog'),
                    key: 'Dialog'
                }
            ]
        };
    }
};
</script>
