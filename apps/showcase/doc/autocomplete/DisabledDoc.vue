<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
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
<AutoComplete disabled placeholder="Disabled" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
</template>

<script setup>

<\/script>
`
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
