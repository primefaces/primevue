<template>
    <DocSectionText v-bind="$attrs">
        <p>ProgressSpinner can be customized with styling property like <i>style</i>, <i>strokeWidth</i> <i>fill</i> and <i>animationDuration</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
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
