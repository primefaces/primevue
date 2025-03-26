<template>
    <DocSectionText v-bind="$attrs">
        <p>Icon property and the <i>icon</i> slots are available to customize the icon of the message.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <Message severity="info" icon="pi pi-send">Info Message</Message>
        <Message severity="success">
            <template #icon>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
            <span class="ml-2">How may I help you?</span>
        </Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Avatar from '@/volt/Avatar.vue';
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const code = ref(`
<template>
     <div class="card flex justify-center gap-4">
        <Message severity="info" icon="pi pi-send">Info Message</Message>
        <Message severity="success">
            <template #icon>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
            <span class="ml-2">How may I help you?</span>
        </Message>
    </div>
</template>

<script setup lang="ts">
import Avatar from '@/volt/Avatar.vue';
import Message from '@/volt/Message.vue';
<\/script>
`);
</script>
