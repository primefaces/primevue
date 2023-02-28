<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons can be displayed as raised as well for elevation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" class="p-button-text p-button-raised" />
        <Button label="Secondary" class="p-button-text p-button-raised p-button-secondary" />
        <Button label="Success" class="p-button-text p-button-raised p-button-success" />
        <Button label="Info" class="p-button-text p-button-raised p-button-info" />
        <Button label="Warning" class="p-button-text p-button-raised p-button-warning" />
        <Button label="Help" class="p-button-text p-button-raised p-button-help" />
        <Button label="Danger" class="p-button-text p-button-raised p-button-danger" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Primary" class="p-button-text p-button-raised" />
<Button label="Secondary" class="p-button-text p-button-raised p-button-secondary" />
<Button label="Success" class="p-button-text p-button-raised p-button-success" />
<Button label="Info" class="p-button-text p-button-raised p-button-info" />
<Button label="Warning" class="p-button-text p-button-raised p-button-warning" />
<Button label="Help" class="p-button-text p-button-raised p-button-help" />
<Button label="Danger" class="p-button-text p-button-raised p-button-danger" />`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" class="p-button-text p-button-raised" />
        <Button label="Secondary" class="p-button-text p-button-raised p-button-secondary" />
        <Button label="Success" class="p-button-text p-button-raised p-button-success" />
        <Button label="Info" class="p-button-text p-button-raised p-button-info" />
        <Button label="Warning" class="p-button-text p-button-raised p-button-warning" />
        <Button label="Help" class="p-button-text p-button-raised p-button-help" />
        <Button label="Danger" class="p-button-text p-button-raised p-button-danger" />
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" class="p-button-text p-button-raised" />
        <Button label="Secondary" class="p-button-text p-button-raised p-button-secondary" />
        <Button label="Success" class="p-button-text p-button-raised p-button-success" />
        <Button label="Info" class="p-button-text p-button-raised p-button-info" />
        <Button label="Warning" class="p-button-text p-button-raised p-button-warning" />
        <Button label="Help" class="p-button-text p-button-raised p-button-help" />
        <Button label="Danger" class="p-button-text p-button-raised p-button-danger" />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
