<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can have icons without labels.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" />
            <Button icon="pi pi-user" severity="info" aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" text raised rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" text rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button icon="pi pi-check" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" aria-label="Search" />
<Button icon="pi pi-user" severity="info" aria-label="User" />
<Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />

<Button icon="pi pi-check" rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />

<Button icon="pi pi-check" rounded outlined aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
<Button icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />

<Button icon="pi pi-check" text raised rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />

<Button icon="pi pi-check" text rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" />
            <Button icon="pi pi-user" severity="info" aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" text raised rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" text rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" />
            <Button icon="pi pi-user" severity="info" aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" text raised rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" text rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
        </div>
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
