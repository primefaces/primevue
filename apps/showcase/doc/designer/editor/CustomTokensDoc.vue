<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Custom tokens allow bringing in your own design tokens to the theme to go beyond the built-in ones. A design token requires a name and a value where the value can be a static value like a color or another token. The name of the token
            should be a dot seperated lowercase value e.g. <i>accent.color</i>. For example, a custom token name can be defined as <i>accent.color</i> and the value can either be a value like <i>#eab308</i> or another token such as
            <i>{yellow.50}</i>. Custom tokens can also refer to each other, e.g. <i>selection.background</i> custom token can define <i>{accent.color}</i> as a value.
        </p>
        <p>If you have created a theme from Figma, use the name <b>custom</b> as the name of your token set group. This keyword is special since the import tool will populate the custom tokens using this set in tokens json file.</p>
    </DocSectionText>
</template>
