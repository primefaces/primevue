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
                    <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
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
        <span class="inline-flex items-center gap-2">
            <InputText v-model="text" autofocus />
            <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
        </span>
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
                <span class="inline-flex items-center gap-2">
                    <InputText v-model="text" autofocus />
                    <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
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
                <span class="inline-flex items-center gap-2">
                    <InputText v-model="text" autofocus />
                    <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
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
