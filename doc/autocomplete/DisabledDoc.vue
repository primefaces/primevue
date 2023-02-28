<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<AutoComplete disabled placeholder="Disabled" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
</template>

<script>

<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
</script>
