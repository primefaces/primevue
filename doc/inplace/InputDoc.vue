<template>
    <DocSectionText v-bind="$attrs">
        <p>Inplace can be used within a form to display a value as read only before making it editable. The <i>closable</i> property adds a close button next to the content to switch back to read only mode.</p>
    </DocSectionText>
    <div class="card">
        <Inplace :closable="true">
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content>
                <InputText v-model="text" autofocus />
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
<Inplace :closable="true">
    <template #display>
        {{ text || 'Click to Edit' }}
    </template>
    <template #content>
        <InputText v-model="text" autofocus />
    </template>
</Inplace>
`,
                options: `
<template>
    <div class="card">
        <Inplace :closable="true">
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content>
                <InputText v-model="text" autofocus />
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
        <Inplace :closable="true">
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content>
                <InputText v-model="text" autofocus />
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
