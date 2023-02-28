<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like <i>img</i> along with <i>aria-labelledby</i> or <i>aria-label</i> to describe the component. In case
            avatars need to be tabbable, <i>tabindex</i> can be added as well to implement custom key handlers.
        </p>

        <h3>Keyboard Support</h3>
        <p>Component does not include any interactive elements.</p>
    </DocSectionText>
</template>
