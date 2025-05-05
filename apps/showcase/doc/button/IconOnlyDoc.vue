<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can have icons without labels.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex justify-center mb-8">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded variant="outlined" aria-label="Filter" :size="size" /> <Button icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded variant="outlined" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded variant="outlined" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded variant="outlined" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded variant="outlined" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded variant="outlined" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded variant="outlined" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" variant="text" raised rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" raised rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" raised rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" raised rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" raised rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" raised rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" raised rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4">
            <Button icon="pi pi-check" variant="text" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" rounded aria-label="Star" :size="size" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            size: 'normal',
            sizeOptions: [
                { label: 'Small', value: 'small' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large' }
            ],
            code: {
                basic: `
<Button icon="pi pi-check" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" aria-label="Search" />
<Button icon="pi pi-user" severity="info" aria-label="User" />
<Button icon="pi pi-bell" severity="warn" aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" aria-label="Star" />

<Button icon="pi pi-check" rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" />

<Button icon="pi pi-check" rounded variant="outlined" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded variant="outlined" aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded variant="outlined" aria-label="User" />
<Button icon="pi pi-bell" severity="warn" rounded variant="outlined" aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded variant="outlined" aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded variant="outlined" aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" rounded variant="outlined" aria-label="Star" />

<Button icon="pi pi-check" variant="text" raised rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" variant="text" raised rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" variant="text" raised rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warn" variant="text" raised rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" variant="text" raised rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" variant="text" raised rounded aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" variant="text" raised rounded aria-label="Star" />

<Button icon="pi pi-check" variant="text" rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" variant="text" rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" variant="text" rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" variant="text" rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warn" variant="text" rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" variant="text" rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" variant="text" rounded aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" variant="text" rounded aria-label="Star" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-center mb-8">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded variant="outlined" aria-label="Filter" :size="size" /> <Button icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded variant="outlined" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded variant="outlined" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded variant="outlined" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded variant="outlined" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded variant="outlined" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded variant="outlined" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" variant="text" raised rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" raised rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" raised rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" raised rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" raised rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" raised rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" raised rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4">
            <Button icon="pi pi-check" variant="text" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" rounded aria-label="Star" :size="size" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            size: 'normal',
            sizeOptions: [
                { label: 'Small', value: 'small' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex justify-center mb-8">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded variant="outlined" aria-label="Filter" :size="size" /> <Button icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded variant="outlined" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded variant="outlined" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded variant="outlined" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded variant="outlined" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded variant="outlined" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded variant="outlined" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" variant="text" raised rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" raised rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" raised rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" raised rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" raised rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" raised rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" raised rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4">
            <Button icon="pi pi-check" variant="text" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" rounded aria-label="Star" :size="size" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const size = ref('normal');
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
]);
<\/script>
`
            }
        };
    }
};
</script>
