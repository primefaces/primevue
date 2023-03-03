<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in support for badges to display a badge inline.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="warning" badge="8" badgeClass="p-badge-danger" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" severity="warning" badge="8" badgeClass="p-badge-danger" />`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="warning" badge="8" badgeClass="p-badge-danger" />
    </div>
</template>

<script>

<\/script>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="warning" badge="8" badgeClass="p-badge-danger" />
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    }
};
</script>
