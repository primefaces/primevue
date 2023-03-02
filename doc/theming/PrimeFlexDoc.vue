<template>
    <DocSectionText v-bind="$attrs">
        <p>
            <a href="https://www.primefaces.org/primeflex/">PrimeFlex</a> is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well. PrimeVue can be used with any CSS utility library like bootstrap
            and tailwind however PrimeFlex has benefits like integration with PrimeVue themes usign CSS variables so that colors classes e.g. <i>bg-blue-500</i> receive the color code from the PrimeVue theme being used. PrimeVue follows the CSS
            utility approach of PrimeFlex and currently does not provide an extended style property like <i>sx</i>. Same approach is also utilized in <a href="https://blocks.primevue.org">PrimeBlocks for PrimeVue</a> project as well.
        </p>

        <p>Here is an example to demonstrate how to align 3 buttons horizontally on bigger screens and display them as stacked on smaller ones.</p>
    </DocSectionText>
    <div class="card flex flex-column md:flex-row justify-content-between my-5">
        <Button type="button" label="Button 1" class="mb-3 md:mb-0"></Button>
        <Button type="button" label="Button 2" class="p-button-secondary mb-3 md:mb-0"></Button>
        <Button type="button" label="Button 3" class="p-button-help"></Button>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="flex flex-column md:flex-row justify-content-between my-5">
    <Button type="button" label="Button 1" class="mb-3 md:mb-0"></Button>
    <Button type="button" label="Button 2" class="p-button-secondary mb-3 md:mb-0"></Button>
    <Button type="button" label="Button 3" class="p-button-help"></Button>
</div>`
            }
        };
    }
};
</script>
