<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://vee-validate.logaretm.com/v4/">VeeValidate</a> is a popular library for handling forms in Vue.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>Please choose your ingredient.</div>
            <div class="flex flex-wrap gap-3">
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient1" name="pizza2" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient2" name="pizza2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient3" name="pizza2" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient4" name="pizza2" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </div>

            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ 'vee-validate': '4.8.2' }" />
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
                return 'Value is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            code: {
                basic: `
<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column gap-2">
        <div>Please choose your ingredient.</div>
        <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient1" name="pizza2" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient2" name="pizza2" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient3" name="pizza2" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient4" name="pizza2" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>

        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
</div>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>Please choose your ingredient.</div>
            <div class="flex flex-wrap gap-3">
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient1" name="pizza2" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient2" name="pizza2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient3" name="pizza2" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient4" name="pizza2" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </div>

            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
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
                return 'Value is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>Please choose your ingredient.</div>
            <div class="flex flex-wrap gap-3">
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient1" name="pizza2" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient2" name="pizza2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient3" name="pizza2" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient4" name="pizza2" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </div>

            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
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
        return 'Value is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
<\/script>`
            }
        };
    }
};
</script>
