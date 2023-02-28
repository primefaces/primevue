<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside a button is defined as children.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-light.svg" class="h-2rem" />
        </Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
    <img alt="logo" src="/images/logo.svg" class="h-2rem" />
</Button>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-light.svg" class="h-2rem" />
        </Button>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-light.svg" class="h-2rem" />
        </Button>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
