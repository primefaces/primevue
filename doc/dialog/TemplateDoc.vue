<template>
    <DocSectionText v-bind="$attrs">
        <p><i>container</i> templating allows customizing the Dialog component.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button label="Reservation" icon="pi pi-external-link" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '40vw' }">
            <template #container="slotProps">
                <div class="surface-card border-round shadow-2 p-4">
                    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <div class="flex mb-4 flex-column lg:flex-row">
                        <div class="surface-50 p-3 flex-auto">
                            <div class="text-600 mb-3">Guests</div>
                            <span class="text-blue-600 font-medium text-xl">4</span>
                        </div>
                        <div class="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
                            <div class="text-600 mb-3">Date</div>
                            <span class="text-blue-600 font-medium text-xl">24/05/2024</span>
                        </div>
                        <div class="surface-50 p-3 flex-auto">
                            <div class="text-600 mb-3">Time</div>
                            <span class="text-blue-600 font-medium text-xl">14:30</span>
                        </div>
                    </div>
                    <Button icon="pi pi-check" label="Confirm Reservation" @click="slotProps.onClose"></Button>
                </div>
            </template>
        </Dialog>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            code: {
                basic: `<Button label="Reservation" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Header" :style="{ width: '40vw' }">
    <template #container="slotProps">
        <div class="surface-card border-round shadow-2 p-4">
            <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
            <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
            <div class="flex mb-4 flex-column lg:flex-row">
                <div class="surface-50 p-3 flex-auto">
                    <div class="text-600 mb-3">Guests</div>
                    <span class="text-blue-600 font-medium text-xl">4</span>
                </div>
                <div class="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
                    <div class="text-600 mb-3">Date</div>
                    <span class="text-blue-600 font-medium text-xl">24/05/2024</span>
                </div>
                <div class="surface-50 p-3 flex-auto">
                    <div class="text-600 mb-3">Time</div>
                    <span class="text-blue-600 font-medium text-xl">14:30</span>
                </div>
            </div>
            <Button icon="pi pi-check" label="Confirm Reservation" @click="slotProps.onClose"></Button>
        </div>
    </template>
</Dialog>`,
                options: `<template>
    <div class="card flex justify-content-center">
        <Button label="Reservation" icon="pi pi-external-link" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '40vw' }">
            <template #container="slotProps">
                <div class="surface-card border-round shadow-2 p-4">
                    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <div class="flex mb-4 flex-column lg:flex-row">
                        <div class="surface-50 p-3 flex-auto">
                            <div class="text-600 mb-3">Guests</div>
                            <span class="text-blue-600 font-medium text-xl">4</span>
                        </div>
                        <div class="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
                            <div class="text-600 mb-3">Date</div>
                            <span class="text-blue-600 font-medium text-xl">24/05/2024</span>
                        </div>
                        <div class="surface-50 p-3 flex-auto">
                            <div class="text-600 mb-3">Time</div>
                            <span class="text-blue-600 font-medium text-xl">14:30</span>
                        </div>
                    </div>
                    <Button icon="pi pi-check" label="Confirm Reservation" @click="slotProps.onClose"></Button>
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,
                composition: `<template>
    <div class="card flex justify-content-center">
        <Button label="Reservation" icon="pi pi-external-link" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '40vw' }">
            <template #container="slotProps">
                <div class="surface-card border-round shadow-2 p-4">
                    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <div class="flex mb-4 flex-column lg:flex-row">
                        <div class="surface-50 p-3 flex-auto">
                            <div class="text-600 mb-3">Guests</div>
                            <span class="text-blue-600 font-medium text-xl">4</span>
                        </div>
                        <div class="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
                            <div class="text-600 mb-3">Date</div>
                            <span class="text-blue-600 font-medium text-xl">24/05/2024</span>
                        </div>
                        <div class="surface-50 p-3 flex-auto">
                            <div class="text-600 mb-3">Time</div>
                            <span class="text-blue-600 font-medium text-xl">14:30</span>
                        </div>
                    </div>
                    <Button icon="pi pi-check" label="Confirm Reservation" @click="slotProps.onClose"></Button>
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`
            }
        };
    }
};
</script>
