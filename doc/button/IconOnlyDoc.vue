<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can have icons without labels.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" class="p-button-rounded p-button-text" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
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
<div class="flex flex-wrap justify-content-center gap-3 mb-4">
    <Button icon="pi pi-check" aria-label="Filter" />
    <Button icon="pi pi-bookmark" class="p-button-secondary" aria-label="Bookmark" />
    <Button icon="pi pi-search" class="p-button-success" aria-label="Search" />
    <Button icon="pi pi-user" class="p-button-info" aria-label="User" />
    <Button icon="pi pi-bell" class="p-button-warning" aria-label="Notification" />
    <Button icon="pi pi-heart" class="p-button-help" aria-label="Favorite" />
    <Button icon="pi pi-times" class="p-button-danger" aria-label="Cancel" />
</div>

<div class="flex flex-wrap justify-content-center gap-3 mb-4">
    <Button icon="pi pi-check" class="p-button-rounded" aria-label="Filter" />
    <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded" aria-label="Bookmark" />
    <Button icon="pi pi-search" class="p-button-success p-button-rounded" aria-label="Search" />
    <Button icon="pi pi-user" class="p-button-info p-button-rounded" aria-label="User" />
    <Button icon="pi pi-bell" class="p-button-warning p-button-rounded" aria-label="Notification" />
    <Button icon="pi pi-heart" class="p-button-help p-button-rounded" aria-label="Favorite" />
    <Button icon="pi pi-times" class="p-button-danger p-button-rounded" aria-label="Cancel" />
</div>

<div class="flex flex-wrap justify-content-center gap-3 mb-4">
    <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" aria-label="Filter" />
    <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
    <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
    <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
    <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
    <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
    <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />
</div>

<div class="flex flex-wrap justify-content-center gap-3 mb-4">
    <Button icon="pi pi-check" class="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
    <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
    <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
    <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
    <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
    <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
    <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />
</div>

<div class="flex flex-wrap justify-content-center gap-3">
    <Button icon="pi pi-check" class="p-button-rounded p-button-text" aria-label="Filter" />
    <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
    <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text" aria-label="Search" />
    <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text" aria-label="User" />
    <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
    <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
    <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
</div>`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" class="p-button-rounded p-button-text" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
        </div>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" class="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" class="p-button-rounded p-button-text" aria-label="Filter" />
            <Button icon="pi pi-bookmark" class="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
            <Button icon="pi pi-search" class="p-button-success p-button-rounded p-button-text" aria-label="Search" />
            <Button icon="pi pi-user" class="p-button-info p-button-rounded p-button-text" aria-label="User" />
            <Button icon="pi pi-bell" class="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
            <Button icon="pi pi-heart" class="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
            <Button icon="pi pi-times" class="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
        </div>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
