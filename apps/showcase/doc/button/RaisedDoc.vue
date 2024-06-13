<template>
    <DocSectionText v-bind="$attrs">
        <p>Raised buttons display a shadow to indicate elevation.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warn" severity="warn" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
        <Button label="Contrast" severity="contrast" raised />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" raised />
<Button label="Secondary" severity="secondary" raised />
<Button label="Success" severity="success" raised />
<Button label="Info" severity="info" raised />
<Button label="Warn" severity="warn" raised />
<Button label="Help" severity="help" raised />
<Button label="Danger" severity="danger" raised />
<Button label="Contrast" severity="contrast" raised />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warn" severity="warn" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
        <Button label="Contrast" severity="contrast" raised />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warn" severity="warn" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
        <Button label="Contrast" severity="contrast" raised />
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
