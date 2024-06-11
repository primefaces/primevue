<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Toolbar uses <i>toolbar</i> role to the root element, <i>aria-orientation</i> is not included as it defaults to "horizontal". Any valid attribute is passed to the root element so you may add additional properties like
            <i>aria-labelledby</i> to define the element if required.
        </p>

        <h3>Keyboard Support</h3>
        <p>Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence.</p>
    </DocSectionText>
</template>
