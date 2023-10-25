<template>
    <DocSectionText v-bind="$attrs">
        <p>Icon property and the <i>messageicon</i> slots are available to customize the icon of the message</p>
    </DocSectionText>
    <div class="card">
        <Message severity="info" icon="pi pi-send">Info Message</Message>
        <Message severity="success">
            <template #messageicon>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
            <span class="ml-2">How may I help you?</span>
        </Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message severity="info" icon="pi pi-send">Info Message</Message>
<Message severity="success">
    <template #messageicon>
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
    </template>
    <span class="ml-2">How may I help you?</span>
</Message>
`,
                options: `
<template>
    <div class="card">
        <Message severity="info" icon="pi pi-send">Info Message</Message>
        <Message severity="success">
            <template #messageicon>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
            <span class="ml-2">How may I help you?</span>
        </Message>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Message severity="info" icon="pi pi-send">Info Message</Message>
        <Message severity="success">
            <template #messageicon>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
            <span class="ml-2">How may I help you?</span>
        </Message>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
