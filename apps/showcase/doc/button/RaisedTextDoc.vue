<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons can be displayed elevated with the <i>raised</i> option.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" raised />
        <Button label="Secondary" severity="secondary" variant="text" raised />
        <Button label="Success" severity="success" variant="text" raised />
        <Button label="Info" severity="info" variant="text" raised />
        <Button label="Warn" severity="warn" variant="text" raised />
        <Button label="Help" severity="help" variant="text" raised />
        <Button label="Danger" severity="danger" variant="text" raised />
        <Button label="Contrast" severity="contrast" variant="text" raised />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" variant="text" raised />
<Button label="Secondary" severity="secondary" variant="text" raised />
<Button label="Success" severity="success" variant="text" raised />
<Button label="Info" severity="info" variant="text" raised />
<Button label="Warn" severity="warn" variant="text" raised />
<Button label="Help" severity="help" variant="text" raised />
<Button label="Danger" severity="danger" variant="text" raised />
<Button label="Contrast" severity="contrast" variant="text" raised />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" raised />
        <Button label="Secondary" severity="secondary" variant="text" raised />
        <Button label="Success" severity="success" variant="text" raised />
        <Button label="Info" severity="info" variant="text" raised />
        <Button label="Warn" severity="warn" variant="text" raised />
        <Button label="Help" severity="help" variant="text" raised />
        <Button label="Danger" severity="danger" variant="text" raised />
        <Button label="Contrast" severity="contrast" variant="text" raised />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" raised />
        <Button label="Secondary" severity="secondary" variant="text" raised />
        <Button label="Success" severity="success" variant="text" raised />
        <Button label="Info" severity="info" variant="text" raised />
        <Button label="Warn" severity="warn" variant="text" raised />
        <Button label="Help" severity="help" variant="text" raised />
        <Button label="Danger" severity="danger" variant="text" raised />
        <Button label="Contrast" severity="contrast" variant="text" raised />
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
