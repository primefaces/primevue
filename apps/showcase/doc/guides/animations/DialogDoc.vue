<template>
    <DocSectionText v-bind="$attrs">
        <p>Overlays such as Dialog and Drawer are positioned relative to the viewport and have their own animations.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }" class="demo-dialog">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" variant="text" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" variant="text" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz format="css" />
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            code: {
                basic: `
.p-dialog-enter-active {
    animation: demo-dialog-in 500ms ease-out;
}

.p-dialog-leave-active {
    animation: demo-dialog-out 500ms ease-in;
}

@keyframes demo-dialog-in {
    from {
        opacity: 0;
        transform: translateY(-10%) scale(1.1);
        filter: blur(10px);
    }
}

@keyframes demo-dialog-out {
    to {
        opacity: 0;
        transform: translateY(200%) rotate(-90deg);
    }
}
`
            }
        };
    }
};
</script>

<style>
.demo-dialog.p-dialog-enter-active {
    animation: demo-dialog-in 500ms ease-out;
}

.demo-dialog.p-dialog-leave-active {
    animation: demo-dialog-out 500ms ease-in;
}

@keyframes demo-dialog-in {
    from {
        opacity: 0;
        transform: translateY(-10%) scale(1.1);
        filter: blur(10px);
    }
}

@keyframes demo-dialog-out {
    to {
        opacity: 0;
        transform: translateY(200%) rotate(-90deg);
    }
}
</style>
