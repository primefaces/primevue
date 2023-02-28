<template>
    <DocSectionText v-bind="$attrs">
        <p>A button can be rendered as a link by adding <i>p-button-link</i> class.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button label="Link" class="p-button-link" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Link" class="p-button-link" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Link" class="p-button-link" />
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button label="Link" class="p-button-link" />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
