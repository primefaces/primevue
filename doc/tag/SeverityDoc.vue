<template>
    <DocSectionText v-bind="$attrs">
        <p>Severity defines the variant of a tag.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="secondary" value="Secondary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warn" value="Warn"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
        <Tag severity="contrast" value="Contrast"></Tag>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Tag value="Primary"></Tag>
<Tag severity="secondary" value="Secondary"></Tag>
<Tag severity="success" value="Success"></Tag>
<Tag severity="info" value="Info"></Tag>
<Tag severity="warn" value="Warn"></Tag>
<Tag severity="danger" value="Danger"></Tag>
<Tag severity="contrast" value="Contrast"></Tag>
`,
                options: `
<template>
    <div class="flex flex-wrap justify-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="secondary" value="Secondary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warn" value="Warn"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
        <Tag severity="contrast" value="Contrast"></Tag>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="flex flex-wrap justify-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="secondary" value="Secondary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warn" value="Warn"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
        <Tag severity="contrast" value="Contrast"></Tag>
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
