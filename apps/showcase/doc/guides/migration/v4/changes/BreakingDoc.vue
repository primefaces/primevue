<template>
    <DocSectionText v-bind="$attrs">
        <h4>SASS Themes</h4>
        <p>
            The styled mode theming has been reimplemented from scratch based on an all-new architecture. The <i>theme.css</i> and the <i>primevue/resources</i> do not exist anymore, so any imports of these assets needs to be removed. If you had a
            custom theme for v3, the theme needs to be recreated using the new APIs. See the customization section at <NuxtLink to="/theming/styled">styled mode</NuxtLink> for details.
        </p>

        <h4>Removed Components</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li><i class="mark">TriStateCheckbox</i> | Use Checkbox with indeterminate option.</li>
            <li><i class="mark">DataViewLayoutOptions</i> | Use SelectButton instead.</li>
        </ul>

        <h4>Removed APIs</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li><i class="mark">switchTheme</i> function, use the new APIs like <i class="mark">usePreset</i> instead to dynamic theme switching.</li>
        </ul>

        <h4>Relocated APIs</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li>Imports from <i class="mark">primevue/api</i> have been relocated to <i class="mark">@primevue/core/api</i>.</li>
        </ul>

        <h4>Removed Files</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li>Themes under the <i class="mark">primevue/resources</i> path, migration to new styled mode is necessary.</li>
            <li>
                The legacy Tailwind preset at <i class="mark">primevue/passthrough/tailwind</i>, migrate to the <a href="https://volt.primevue.org" target="_blank" rel="noopener noreferrer" class="doc-link">Volt</a> project if you'd like to style
                PrimeVue with Tailwind CSS.
            </li>
        </ul>

        <h4>Message and InlineMessage</h4>
        <p>
            <i class="mark">InlineMessage</i> is deprecated due to overlap with the <i>Message</i>. The spacing, closable and life properties of the <i>Message</i> have breaking changes to provide <i>InlineMessage</i> functionality. Default margin is
            removed, closable is false by default and messages do not disappear automatically.
        </p>

        <h4>PT Section Names</h4>
        <p>
            The experimental PassThrough feature is not production ready, there are changes on the PT section names due to alignment with CSS classes for certain components. If when component element is another PrimeVue component <i>pc</i> prefix is
            added for indication. Review the <i>Pass Through</i> section of a component for the new API. The Tailwind CSS presets for the unstyled mode are not updated to v4 yet.
        </p>

        <h4>Removed Features</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li>Sidebar/Drawer <i class="mark">size</i> property is removed, use a responsive class utilty as replacement, demos have new examples.</li>
            <li>Rating <i class="mark">cancel</i> prop is removed as toggling the selected star value clears it.</li>
            <li>Inplace <i class="mark">closable</i> is removed in favor of templating and <i>closeCallback</i> prop.</li>
        </ul>

        <h4>Removed Style Classes</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li><i class="mark">.p-link</i>, use a button in link mode.</li>
            <li><i class="mark">.p-highlight</i>, each component have its own class such as <i class="mark">.p-select-option-selected</i>.</li>
            <li><i class="mark">.p-fluid</i>, use the new built-in <i class="mark">fluid</i> property of the supported components or the <i class="mark">Fluid</i> component.</li>
        </ul>

        <h4>Nuxt Module</h4>
        <p>
            The <a href="https://www.npmjs.com/package/nuxt-primevue" target="_blank" rel="noopener noreferrer" class="doc-link">nuxt-primevue</a> module has been replaced with the new
            <a href="https://www.npmjs.com/package/@primevue/nuxt-module" target="_blank" rel="noopener noreferrer" class="doc-link">@primevue/nuxt-module</a>. The old module is still maintained for v3 users.
        </p>

        <h4>PrimeFlex CSS</h4>
        <p>In case you are using PrimeFlex CSS library, upgrade to PrimeFlex v4 since PrimeFlex v3 is not compatible with PrimeVue v4+.</p>
    </DocSectionText>
</template>
