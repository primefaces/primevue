<template>
    <DocSectionText v-bind="$attrs">
        <p>
            <a href="https://github.com/css-modules/css-modules">CSS modules</a> are supported by enabling the <i>module</i> property on a style element within your SFC. Use the <i>$style</i> keyword to apply classes to a PrimeVue component. It is
            recommend to enable <i>cssLayer</i> when using CSS modules so that the PrimeVue styles have low CSS specificity.
        </p>
        <div class="card flex justify-center">
            <InputText :class="$style.myinput" placeholder="Search" />
        </div>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<style module>
.myinput {
    border-radius: 2rem;
    padding: 1rem 2rem;
    border-width: 2px;
}
</style>
`
            },
            code2: {
                basic: `
<template>
    <InputText :class="$style.myinput" placeholder="Search" />
</template>
`
            }
        };
    }
};
</script>

<style module>
.myinput {
    border-radius: 2rem;
    padding: 1rem 2rem;
    border-width: 2px;
}
</style>
