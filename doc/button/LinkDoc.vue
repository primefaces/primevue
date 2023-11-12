<template>
    <DocSectionText v-bind="$attrs">
        <p>A button can be rendered as a link when the <i>link</i> property is present. On the other hand, adding <i>.p-button</i> class to an anchor element displays the link as a button.</p>
    </DocSectionText>
    <div class="card flex justify-content-center gap-3">
        <Button label="Link" link />
        <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="p-button font-bold">Navigate</a>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Link" link />
<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="p-button font-bold">Navigate</a>
`,
                options: `
<template>
    <div class="card flex justify-content-center gap-3">
        <Button label="Link" link />
        <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="p-button font-bold">Navigate</a>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center gap-3">
        <Button label="Link" link />
        <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="p-button font-bold">Navigate</a>
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
