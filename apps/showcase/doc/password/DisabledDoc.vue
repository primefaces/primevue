<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password disabled placeholder="Disabled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<Password disabled placeholder="Disabled" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Password disabled placeholder="Disabled" />
    </div>
</template>

<script>
export default {};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Password disabled placeholder="Disabled" />
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
