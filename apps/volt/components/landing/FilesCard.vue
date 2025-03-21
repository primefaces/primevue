<template>
    <div class="rounded-lg p-6 shadow-md border border-transparent dark:border-surface-800 bg-surface-0 dark:bg-surface-900 animated-border">
        <div class="flex items-center gap-2 mb-4">
            <i class="pi pi-cloud-upload text-muted-color"></i>
            <span class="font-medium text-surface-900 dark:text-surface-0">Publish Files</span>
            <div class="ms-auto">
                <SecondaryButton text icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" size="small" />
                <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
            </div>
        </div>
        <div class="flex flex-col gap-1 mb-4">
            <label for="input_name" class="font-medium block text-color">Document Name</label>
            <InputText id="input_name" fluid />
        </div>
        <div class="flex flex-col gap-1 mb-4">
            <label for="input_date" class="font-medium block text-color">Date</label>
            <DatePicker id="input_date" showIcon fluid iconDisplay="input" inputId="icondisplay" />
        </div>
        <div class="flex flex-col gap-1 mb-4">
            <label for="input_tags" class="font-medium block text-color">Tags</label>
            <AutoComplete inputId="input_tags" v-model="tags" multiple fluid :typeahead="false" size="small" :showEmptyMessage="false" />
        </div>
        <div class="flex flex-col gap-1 mb-4">
            <label for="input_tags" class="font-medium block text-color">Privacy</label>
            <div class="flex gap-2">
                <div class="flex items-center gap-2 grow border border-surface py-2 px-3 rounded-lg">
                    <i class="pi pi-globe text-muted-color"></i>
                    <label for="privacy_public" class="text-color">Public</label>
                    <RadioButton v-model="privacy" inputId="privacy_public" name="privacy" value="public" class="ms-auto" />
                </div>
                <div class="flex items-center gap-2 grow border border-surface py-2 px-3 rounded-lg">
                    <i class="pi pi-lock text-muted-color"></i>
                    <label for="privacy_private" class="text-color">Private</label>
                    <RadioButton v-model="privacy" inputId="privacy_private" name="privacy" value="private" class="ms-auto" />
                </div>
            </div>
        </div>
        <div class="flex gap-2 border-t border-surface pt-4">
            <SecondaryButton label="Cancel" outlined class="grow" />
            <Button label="Save" class="grow" />
        </div>
    </div>
</template>

<script setup>
import AutoComplete from '@/volt/autocomplete';
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import DatePicker from '@/volt/datepicker';
import InputText from '@/volt/inputtext';
import Menu from '@/volt/menu';
import RadioButton from '@/volt/radiobutton';

const privacy = ref();
const tags = ref(['new']);
const menu = ref();
const items = ref([
    {
        label: 'Upload',
        icon: 'pi pi-upload'
    },
    {
        label: 'Clear',
        icon: 'pi pi-times'
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>
