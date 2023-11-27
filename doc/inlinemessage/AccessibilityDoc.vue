<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            InlineMessage component uses <i>alert</i> role that implicitly defines <i>aria-live</i> as "assertive" and <i>aria-atomic</i> as "true". Since any attribute is passed to the root element, attributes like <i>aria-labelledby</i> and
            <i>aria-label</i> can optionally be used as well.
        </p>
        <h3>Keyboard Support</h3>
        <p>Component does not include any interactive elements.</p>
    </DocSectionText>
</template>
