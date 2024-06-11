<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons are displayed as textual elements.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warn" severity="warn" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
        <Button label="Plain" plain text />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" text />
<Button label="Secondary" severity="secondary" text />
<Button label="Success" severity="success" text />
<Button label="Info" severity="info" text />
<Button label="Warn" severity="warn" text />
<Button label="Help" severity="help" text />
<Button label="Danger" severity="danger" text />
<Button label="Plain" plain text />
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warn" severity="warn" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
        <Button label="Plain" plain text />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warn" severity="warn" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
        <Button label="Plain" plain text />
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
