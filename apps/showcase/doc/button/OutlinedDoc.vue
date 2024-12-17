<template>
    <DocSectionText v-bind="$attrs">
        <p>Outlined buttons display a border without a transparent background.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="outlined" />
        <Button label="Secondary" severity="secondary" variant="outlined" />
        <Button label="Success" severity="success" variant="outlined" />
        <Button label="Info" severity="info" variant="outlined" />
        <Button label="Warn" severity="warn" variant="outlined" />
        <Button label="Help" severity="help" variant="outlined" />
        <Button label="Danger" severity="danger" variant="outlined" />
        <Button label="Contrast" severity="contrast" variant="outlined" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" variant="outlined" />
<Button label="Secondary" severity="secondary" variant="outlined" />
<Button label="Success" severity="success" variant="outlined" />
<Button label="Info" severity="info" variant="outlined" />
<Button label="Warn" severity="warn" variant="outlined" />
<Button label="Help" severity="help" variant="outlined" />
<Button label="Danger" severity="danger" variant="outlined" />
<Button label="Contrast" severity="contrast" variant="outlined" />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="outlined" />
        <Button label="Secondary" severity="secondary" variant="outlined" />
        <Button label="Success" severity="success" variant="outlined" />
        <Button label="Info" severity="info" variant="outlined" />
        <Button label="Warn" severity="warn" variant="outlined" />
        <Button label="Help" severity="help" variant="outlined" />
        <Button label="Danger" severity="danger" variant="outlined" />
        <Button label="Contrast" severity="contrast" variant="outlined" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="outlined" />
        <Button label="Secondary" severity="secondary" variant="outlined" />
        <Button label="Success" severity="success" variant="outlined" />
        <Button label="Info" severity="info" variant="outlined" />
        <Button label="Warn" severity="warn" variant="outlined" />
        <Button label="Help" severity="help" variant="outlined" />
        <Button label="Danger" severity="danger" variant="outlined" />
        <Button label="Contrast" severity="contrast" variant="outlined" />
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
