<template>
    <DocSectionText v-bind="$attrs">
        <ul class="leading-normal px-10 list-disc">
            <li class="py-2">
                <div class="font-bold">Primitive</div>
                <p>This set contains the most foundational tokens, such as base colors and border radius, elements that are considered “primitive” by nature.</p>
            </li>
            <li class="py-2">
                <div class="font-bold">Semantic</div>
                <p>Includes essential system-wide tokens like primary, surface, and other shared design values</p>
                <p>It also defines tokens used across multiple component groups.</p>
                <p>For example, tokens under <i>{form.field.*}</i> are referenced by component-level tokens in InputText, MultiSelect, Checkbox, and other form components, enabling consistent styling across the board.</p>
            </li>
            <li class="py-2">
                <div class="font-bold">Component</div>
                <p>These tokens are defined specifically for each component to allow deep customization</p>
                <p>While we've aimed to create dedicated tokens for every component state, many of them still reference the semantic or primitive tokens, allowing you to make global updates from a single place when needed.</p>
            </li>
            <li class="py-2">
                <div class="font-bold">App</div>
                <p>
                    Tokens in this set are not part of the <a href="https://github.com/primefaces/primeuix" target="_blank" rel="noopener noreferrer">PrimeUIX</a> system. They are intended for values defined in your own application. The same applies
                    to tokens used in our UI library showcases.
                </p>
                <p>For example, there is no dedicated font size token in <b>PrimeUIX</b> because font styles are not part of the design system. UI components inherit their font settings from the application.</p>
            </li>
            <li class="py-2">
                <div class="font-bold">Custom</div>
                <p>If you're using the Figma to Theme feature and want your newly created custom tokens to appear in your Theme Designer themes, place them in this set.</p>
                <p>
                    Even if you're not using the Theme Designer, we still recommend creating a separate set — or using the existing “Custom” set — for your own tokens. Making changes to the default sets, especially deleting tokens or altering
                    reference values, can lead to inconsistencies with the library tokens and cause additional work during development.
                </p>
            </li>
        </ul>
    </DocSectionText>
</template>
