<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Breadcrumb uses the <i>nav</i> element and since any attribute is passed to the root implicitly <i>aria-labelledby</i> or <i>aria-label</i> can be used to describe the component. Inside an ordered list is used where the list item
            separators have <i>aria-hidden</i> to be able to ignored by the screen readers. If the last link represents the current route, <i>aria-current</i> is added with "page" as the value.
        </p>

        <h3>Keyboard Support</h3>
        <p>No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence.</p>
    </DocSectionText>
</template>
