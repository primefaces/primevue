<template>
    <DocSectionText v-bind="$attrs">
        <p>Outlined buttons display a border without a background initially.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warn" severity="warn" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
        <Button label="Contrast" severity="contrast" outlined />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" outlined />
<Button label="Secondary" severity="secondary" outlined />
<Button label="Success" severity="success" outlined />
<Button label="Info" severity="info" outlined />
<Button label="Warn" severity="warn" outlined />
<Button label="Help" severity="help" outlined />
<Button label="Danger" severity="danger" outlined />
<Button label="Contrast" severity="contrast" outlined />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warn" severity="warn" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
        <Button label="Contrast" severity="contrast" outlined />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warn" severity="warn" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
        <Button label="Contrast" severity="contrast" outlined />
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
