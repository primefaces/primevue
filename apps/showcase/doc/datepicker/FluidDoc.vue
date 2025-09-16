<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>fluid</i> prop makes the component take up the full width of its container when set to true.</p>
    </DocSectionText>
    <div class="card">
        <DatePicker v-model="date" fluid />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            date: null,
            code: {
                basic: `
<DatePicker v-model="date" fluid />
`,
                options: `
<template>
    <div class="card">
        <DatePicker v-model="date" fluid />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DatePicker v-model="date" fluid />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>
`
            }
        };
    }
};
</script>
