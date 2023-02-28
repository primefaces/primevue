<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons are displayed as textual elements.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" class="p-button-text" />
        <Button label="Secondary" class="p-button-text p-button-secondary" />
        <Button label="Success" class="p-button-text p-button-success" />
        <Button label="Info" class="p-button-text p-button-info" />
        <Button label="Warning" class="p-button-text p-button-warning" />
        <Button label="Help" class="p-button-text p-button-help" />
        <Button label="Danger" class="p-button-text p-button-danger" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" class="p-button-text" />
<Button label="Secondary" class="p-button-text p-button-secondary" />
<Button label="Success" class="p-button-text p-button-success" />
<Button label="Info" class="p-button-text p-button-info" />
<Button label="Warning" class="p-button-text p-button-warning" />
<Button label="Help" class="p-button-text p-button-help" />
<Button label="Danger" class="p-button-text p-button-danger" />`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" class="p-button-text" />
        <Button label="Secondary" class="p-button-text p-button-secondary" />
        <Button label="Success" class="p-button-text p-button-success" />
        <Button label="Info" class="p-button-text p-button-info" />
        <Button label="Warning" class="p-button-text p-button-warning" />
        <Button label="Help" class="p-button-text p-button-help" />
        <Button label="Danger" class="p-button-text p-button-danger" />
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" class="p-button-text" />
        <Button label="Secondary" class="p-button-text p-button-secondary" />
        <Button label="Success" class="p-button-text p-button-success" />
        <Button label="Info" class="p-button-text p-button-info" />
        <Button label="Warning" class="p-button-text p-button-warning" />
        <Button label="Help" class="p-button-text p-button-help" />
        <Button label="Danger" class="p-button-text p-button-danger" />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
