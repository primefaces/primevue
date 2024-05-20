<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in badge support with <i>badge</i> and <i>badgeSeverity</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" outlined />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button type="button" label="Emails" badge="2" />
<Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" outlined />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" outlined />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" outlined />
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
