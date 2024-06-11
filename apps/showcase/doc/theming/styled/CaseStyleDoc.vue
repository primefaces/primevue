<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tokens are described with the dot separator e.g. <i>primary.color</i>, <i>form.field.background</i> or <i>checkbox.icon.checked.color</i>. At preset configuration, camel case and object property are used when mapping the dot separator.
            The following is an example from the checkbox component tokens to represent the <i>checkbox.icon.checked.color</i>, all alternatives have the same result.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
export default {
    iconCheckedColor: //...,
}

export default {
    icon: {
        checkedColor: //...
    }
}

export default {
    icon: {
        checked: {
            color: //...
        }
    }
}
`
            }
        };
    }
};
</script>
