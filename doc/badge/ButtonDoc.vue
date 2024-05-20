<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in support for badges to display a badge inline.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="secondary" badge="4" badgeSeverity="info" />
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
<Button type="button" label="Messages" icon="pi pi-users" severity="secondary" badge="4" badgeSeverity="info" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="secondary" badge="4" badgeSeverity="info" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="secondary" badge="4" badgeSeverity="info" />
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
