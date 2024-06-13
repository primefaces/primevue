<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in support for badges to display a badge inline.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Notifications" icon="pi pi-bell" badge="2" />
        <Button type="button" label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" outlined />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button type="button" label="Notifications" icon="pi pi-bell" badge="2" />
<Button type="button" label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" outlined />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Notifications" icon="pi pi-bell" badge="2" />
        <Button type="button" label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" outlined />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Notifications" icon="pi pi-bell" badge="2" />
        <Button type="button" label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" outlined />
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
