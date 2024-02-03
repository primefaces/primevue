<template>
    <DocSectionText v-bind="$attrs">
        <p>Headless mode is enabled by defining a <i>container</i> slot that lets you implement entire toast UI instead of the default elements.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Toast position="top-center" group="headless" @close="visible = false">
            <template #container="{ message, closeCallback }">
                <section class="flex p-3 gap-3 w-full bg-black-alpha-90" style="border-radius: 10px">
                    <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
                    <div class="flex flex-column gap-3 w-full">
                        <p class="m-0 font-semibold text-base text-white">{{ message.summary }}</p>
                        <p class="m-0 text-base text-700">{{ message.detail }}</p>
                        <div class="flex flex-column gap-2">
                            <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }"></ProgressBar>
                            <label class="text-right text-xs text-white">{{ progress }}% uploaded...</label>
                        </div>
                        <div class="flex gap-3 mb-3">
                            <Button label="Another Upload?" text class="py-1 px-2" @click="closeCallback"></Button>
                            <Button label="Cancel" text class="text-white py-1 px-2" @click="closeCallback"></Button>
                        </div>
                    </div>
                </section>
            </template>
        </Toast>
        <Button @click="show" label="View" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            progress: 0,
            interval: null,
            code: {
                basic: `
<Toast position="top-center" group="headless" @close="visible = false">
    <template #container="{ message, closeCallback }">
        <section class="flex p-3 gap-3 w-full bg-black-alpha-90" style="border-radius: 10px">
            <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
            <div class="flex flex-column gap-3 w-full">
                <p class="m-0 font-semibold text-base text-white">{{ message.summary }}</p>
                <p class="m-0 text-base text-700">{{ message.detail }}</p>
                <div class="flex flex-column gap-2">
                    <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }"></ProgressBar>
                    <label class="text-right text-xs text-white">{{ progress }}% uploaded...</label>
                </div>
                <div class="flex gap-3 mb-3">
                    <Button label="Another Upload?" text class="py-1 px-2" @click="closeCallback"></Button>
                    <Button label="Cancel" text class="text-white py-1 px-2" @click="closeCallback"></Button>
                </div>
            </div>
        </section>
    </template>
</Toast>
<Button @click="show" label="View" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Toast position="top-center" group="headless" @close="visible = false">
            <template #container="{ message, closeCallback }">
                <section class="flex p-3 gap-3 w-full bg-black-alpha-90" style="border-radius: 10px">
                    <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
                    <div class="flex flex-column gap-3 w-full">
                        <p class="m-0 font-semibold text-base text-white">{{ message.summary }}</p>
                        <p class="m-0 text-base text-700">{{ message.detail }}</p>
                        <div class="flex flex-column gap-2">
                            <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }"></ProgressBar>
                            <label class="text-right text-xs text-white">{{ progress }}% uploaded...</label>
                        </div>
                        <div class="flex gap-3 mb-3">
                            <Button label="Another Upload?" text class="py-1 px-2" @click="closeCallback"></Button>
                            <Button label="Cancel" text class="text-white py-1 px-2" @click="closeCallback"></Button>
                        </div>
                    </div>
                </section>
            </template>
        </Toast>
        <Button @click="show" label="View" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            progress: 0,
            interval: null
        }
    },
    beforeUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    },
    methods: {
        show() {
            if (!this.visible) {
                this.$toast.add({ severity: 'custom', summary: 'Uploading your files.', group: 'headless' });
                this.visible = true;
                this.progress = 0;

                if (this.interval) {
                    clearInterval(this.interval);
                }

                this.interval = setInterval(() => {
                    if (this.progress <= 100) {
                        this.progress = this.progress + 20;
                    }

                    if (this.progress >= 100) {
                        this.progress = 100;
                        clearInterval(this.interval);
                    }
                }, 1000);
            }
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Toast position="top-center" group="headless" @close="visible = false">
            <template #container="{ message, closeCallback }">
                <section class="flex p-3 gap-3 w-full bg-black-alpha-90" style="border-radius: 10px">
                    <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
                    <div class="flex flex-column gap-3 w-full">
                        <p class="m-0 font-semibold text-base text-white">{{ message.summary }}</p>
                        <p class="m-0 text-base text-700">{{ message.detail }}</p>
                        <div class="flex flex-column gap-2">
                            <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }"></ProgressBar>
                            <label class="text-right text-xs text-white">{{ progress }}% uploaded...</label>
                        </div>
                        <div class="flex gap-3 mb-3">
                            <Button label="Another Upload?" text class="py-1 px-2" @click="closeCallback"></Button>
                            <Button label="Cancel" text class="text-white py-1 px-2" @click="closeCallback"></Button>
                        </div>
                    </div>
                </section>
            </template>
        </Toast>
        <Button @click="show" label="View" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { ref, onUnmounted } from 'vue';
const toast = useToast();
const visible = ref(false);
const progress = ref(0);
const interval = ref();

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value);
    }
})

const show = () => {
    if (!visible.value) {
        toast.add({ severity: 'custom', summary: 'Uploading your files.', group: 'headless' });
        visible.value = true;
        progress.value = 0;

        if (interval.value) {
            clearInterval(interval.value);
        }

        interval.value = setInterval(() => {
            if (progress.value <= 100) {
                progress.value = progress.value + 20;
            }

            if (progress.value >= 100) {
                progress.value = 100;
                clearInterval(interval.value);
            }
        }, 1000);
    }
};
<\/script>
`
            }
        };
    },
    beforeUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    },
    methods: {
        show() {
            if (!this.visible) {
                this.$toast.add({ severity: 'custom', summary: 'Uploading your files.', group: 'headless' });
                this.visible = true;
                this.progress = 0;

                if (this.interval) {
                    clearInterval(this.interval);
                }

                this.interval = setInterval(() => {
                    if (this.progress <= 100) {
                        this.progress = this.progress + 20;
                    }

                    if (this.progress >= 100) {
                        this.progress = 100;
                        clearInterval(this.interval);
                    }
                }, 1000);
            }
        }
    }
};
</script>
