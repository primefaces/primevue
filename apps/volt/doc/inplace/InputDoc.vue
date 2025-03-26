<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>closeCallback</i> switches the state back to display mode when called from an event.</p>
    </DocSectionText>
    <div class="card">
        <Inplace>
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
                <span class="inline-flex items-center gap-2">
                    <InputText v-model="text" autofocus />
                    <DangerButton icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
            </template>
        </Inplace>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import DangerButton from '@/volt/DangerButton.vue';
import Inplace from '@/volt/Inplace.vue';
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const text = ref(null);

const code = ref(`
<template>
    <div class="card">
        <Inplace>
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
                <span class="inline-flex items-center gap-2">
                    <InputText v-model="text" autofocus />
                    <DangerButton icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import Inplace from '@/volt/Inplace.vue';
import InputText from '@/volt/InputText.vue';
import DangerButton from '@/volt/DangerButton.vue';
import { ref } from 'vue';

const text = ref(null);
<\/script>
`);
</script>
