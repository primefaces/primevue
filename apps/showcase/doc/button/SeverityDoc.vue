<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> property defines the variant of a button.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warn" severity="warn" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Info" severity="info" />
<Button label="Warn" severity="warn" />
<Button label="Help" severity="help" />
<Button label="Danger" severity="danger" />
<Button label="Contrast" severity="contrast" />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warn" severity="warn" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warn" severity="warn" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
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
