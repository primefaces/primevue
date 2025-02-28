<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside a message is defined with the <i>message</i> template.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Toast position="bottom-center" group="bc" @close="onClose">
            <template #message="slotProps">
                <div class="flex flex-col items-start flex-auto">
                    <div class="flex items-center gap-2">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold">Amy Elsner</span>
                    </div>
                    <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
                    <Button size="small" label="Reply" severity="success" @click="onReply()"></Button>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="View" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            code: {
                basic: `
<Toast position="bottom-center" group="bc" @close="onClose">
    <template #message="slotProps">
        <div class="flex flex-col items-start flex-auto">
            <div class="flex items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
            <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
            <Button size="small" label="Reply" severity="success" @click="onReply()"></Button>
        </div>
    </template>
</Toast>
<Button @click="showTemplate" label="View" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast position="bottom-center" group="bc" @close="onClose">
            <template #message="slotProps">
                <div class="flex flex-col items-start flex-auto">
                    <div class="flex items-center gap-2">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold">Amy Elsner</span>
                    </div>
                    <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
                    <Button size="small" label="Reply" severity="success" @click="onReply()"></Button>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="View" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        showTemplate() {
            if (!this.visible) {
                this.$toast.add({ severity: 'success', summary: 'Can you send me the report?', group: 'bc' });
                this.visible = true;
            }
        },
        onReply() {
            this.$toast.removeGroup('bc');
            this.visible = false;
        },
        onClose() {
            this.visible = false;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast position="bottom-center" group="bc" @close="onClose">
            <template #message="slotProps">
                <div class="flex flex-col items-start flex-auto">
                    <div class="flex items-center gap-2">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold">Amy Elsner</span>
                    </div>
                    <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
                    <Button size="small" label="Reply" severity="success" @click="onReply()"></Button>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="View" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { ref } from 'vue';
const toast = useToast();
const visible = ref(false);

const showTemplate = () => {
    if (!visible.value) {
        toast.add({ severity: 'success', summary: 'Can you send me the report?', group: 'bc' });
        visible.value = true;
    } 
};

const onReply = () => {
    toast.removeGroup('bc');
    visible.value = false;
}

const onClose = () => {
    visible.value = false;
}
<\/script>
`
            }
        };
    },
    methods: {
        showTemplate() {
            if (!this.visible) {
                this.$toast.add({ severity: 'success', summary: 'Can you send me the report?', group: 'bc' });
                this.visible = true;
            }
        },
        onReply() {
            this.$toast.removeGroup('bc');
            this.visible = false;
        },
        onClose() {
            this.visible = false;
        }
    }
};
</script>
