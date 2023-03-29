<template>
    <DocSectionText v-bind="$attrs">
        <p>
            <a href="https://github.com/css-modules/css-modules">CSS modules</a> are supported by enabling the <i>module</i> property on a style element within your component and using the <i>$style</i> keyword to apply classes to a PrimeVue
            component.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <InputText :class="$style.myinput" placeholder="Search" />
    </div>
    <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode hideCodeSandbox hideStackBlitz />
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
