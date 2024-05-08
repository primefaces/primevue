<template>
    <DocSectionText v-bind="$attrs">
        <p>Messages can disappear automatically by turning the <i>sticky</i> option off. The timeout duration is defined using the <i>life</i> property in milliseconds.</p>
    </DocSectionText>
    <div class="card">
        <Button label="Turn off Sticky" @click="sticky = false" />
        <Message severity="success" :sticky="sticky" :life="1000">Success Message</Message>
        <Message severity="info" :sticky="sticky" :life="2000">Info Message</Message>
        <Message severity="warn" :sticky="sticky" :life="3000">Warn Message</Message>
        <Message severity="error" :sticky="sticky" :life="4000">Error Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            sticky: true,
            code: {
                basic: `
<Button label="Turn off Sticky" @click="sticky = false" />
<Message severity="success" :sticky="sticky" :life="1000">Success Message</Message>
<Message severity="info" :sticky="sticky" :life="2000">Info Message</Message>
<Message severity="warn" :sticky="sticky" :life="3000">Warn Message</Message>
<Message severity="error" :sticky="sticky" :life="4000">Error Message</Message>
`,
                options: `
<template>
    <div class="card">
        <Button label="Turn off Sticky" @click="sticky = false" />
        <Message severity="success" :sticky="sticky" :life="1000">Success Message</Message>
        <Message severity="info" :sticky="sticky" :life="2000">Info Message</Message>
        <Message severity="warn" :sticky="sticky" :life="3000">Warn Message</Message>
        <Message severity="error" :sticky="sticky" :life="4000">Error Message</Message>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sticky: false
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Button label="Turn off Sticky" @click="sticky.value = false" />
        <Message severity="success" :sticky="sticky" :life="1000">Success Message</Message>
        <Message severity="info" :sticky="sticky" :life="2000">Info Message</Message>
        <Message severity="warn" :sticky="sticky" :life="3000">Warn Message</Message>
        <Message severity="error" :sticky="sticky" :life="4000">Error Message</Message>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let sticky = ref(true);
<\/script>
`
            }
        };
    }
};
</script>
