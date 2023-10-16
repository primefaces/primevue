<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card">
        <form @submit="onSubmit">
            <Editor v-model="value" editorStyle="height: 320px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                <small id="editor-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </div>
        </form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'vee-validate': '4.8.2', quill: '1.3.7' }" component="Editor" />
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Content is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Blog Submitted', detail: 'The blog is uploaded', life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            code: {
                basic: `
<template>
    <div class="card">
        <form @submit="onSubmit">
            <Editor v-model="value" editorStyle="height: 320px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                <small class="p-error" id="editor-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </div>
        </form>
        <Toast />
    </div>
</template>
`,
                options: `
<template>
    <div class="card">
        <form @submit="onSubmit">
            <Editor v-model="value" editorStyle="height: 320px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                <small class="p-error" id="editor-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </div>
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Content is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Blog Submitted', detail: 'The blog is uploaded', life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <form @submit="onSubmit">
            <Editor v-model="value" editorStyle="height: 320px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                <small class="p-error" id="editor-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </div>
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Content is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Blog Submitted', detail: 'The blog is uploaded', life: 3000 });
        resetForm();
    }
});
<\/script>
`
            }
        };
    }
};
</script>
