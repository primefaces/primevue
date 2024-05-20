<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The declarative syntax provides an alternative to the programmatic syntax. The attributes that start with <i>pt</i> are interpreted differently by the component based on the format below. An IDE extension is also being planned to
            autocomplete the values for better developer experience in the future.
        </p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
        <p>Here is another example using both syntax alternatives for the same options.</p>
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code3" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<ComponentTag pt:[passthrough_key]:[attribute]="value" />
`
            },
            code2: {
                basic: `
<Panel
    :pt="{
        root: {
            class='"border-1 border-solid'
        },
        header: {
            'data-test-id': 'testid',
            class: 'bg-blue-500',
            onClick: onHeaderClick
        }
    }"
>
`
            },
            code3: {
                basic: `
<Panel
    pt:root:class="border border-solid"
    pt:header:id="headerId"
    pt:header:data-test-id="testId"
    pt:header:class="bg-blue-500"
    :pt:header:onClick="onHeaderClick"
>
`
            }
        };
    }
};
</script>
