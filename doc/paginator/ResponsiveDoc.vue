<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Paginator elements can be customized per screen size by defining a template per breakpoint. Note that breakpoints are based on max-width setting, if default key is omitted then the default template would be used. Example below has 4
            settings; up to 640px, between 641px-960px, between 961px-1300px and larger than 1301px which is the default.
        </p>
    </DocSectionText>
    <div class="card">
        <Paginator
            :template="{
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
            }"
            :rows="10"
            :totalRecords="120"
        ></Paginator>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Paginator
    :template="{
        '640px': 'PrevPageLink CurrentPageReport NextPageLink',
        '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
        '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
    }"
    :rows="10"
    :totalRecords="120">
</Paginator>
`,
                options: `
<template>
    <div class="card">
        <Paginator
            :template="{
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
            }"
            :rows="10"
            :totalRecords="120">
        </Paginator>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Paginator
            :template="{
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
            }"
            :rows="10"
            :totalRecords="120">
        </Paginator>
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
