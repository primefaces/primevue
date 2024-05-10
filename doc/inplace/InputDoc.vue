<template>
    <DocSectionText v-bind="$attrs">
        <p>Inplace can be used within a form to display a value as read only before making it editable.</p>
    </DocSectionText>
    <div class="card">
        <Inplace>
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
                <InputText v-model="text" autofocus />
                <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
            </template>
        </Inplace>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            text: null,
            code: {
                basic: `
<Inplace>
    <template #display>
        {{ text || 'Click to Edit' }}
    </template>
    <template #content="{ closeCallback }">
        <InputText v-model="text" autofocus />
        <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
    </template>
</Inplace>
`,
                options: `
<template>
    <div class="card">
        <Inplace>
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
                <InputText v-model="text" autofocus />
                <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
            </template>
        </Inplace>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Inplace>
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
                <InputText v-model="text" autofocus />
                <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref();
<\/script>
`
            }
        };
    }
};
</script>
