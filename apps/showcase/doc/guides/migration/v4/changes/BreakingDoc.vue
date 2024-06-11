<template>
    <DocSectionText v-bind="$attrs">
        <h4>SASS Themes</h4>
        <p>
            The styled mode theming has been reimplemented from scratch based on an all-new architecture. The <i>theme.css</i> and the <i>primevue/resources</i> do not exist anymore, so any imports of these assets needs to be removed. Currently, Aura
            is the only available built-in preset; however, by v4 final, two more presets named Lara and Nora would be included, as well as the Material Design theme. If you had a custom theme for v3, the theme needs to be recreated using the new
            APIs. See the customization section at <NuxtLink to="/theming/styled">styled mode</NuxtLink> for details.
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

        <h4>Removed Files</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li>Themes under the <i class="mark">primevue/resources</i> path, migration to new styled mode is necessary.</li>
            <li>The legacy Tailwind preset at <i class="mark">primevue/passthrough/tailwind</i>, migrate to the <a href="https://tailwind.primevue.org" target="_blank" rel="noopener noreferrer" class="doc-link">Tailwind Presets</a> project.</li>
        </ul>

        <h4>PT Section Names</h4>
        <p>
            The experimental PassThrough feature is not production ready, there are changes on the PT section names due to alignment with CSS classes for certain components. If when component element is another PrimeVue component <i>pc</i> prefix is
            added for indication. Review the <i>Pass Through</i> section of a component for the new API. The Tailwind CSS presets for the unstyled mode are not updated to v4 yet.
        </p>

        <h4>Removed Features</h4>
        <ul class="flex flex-col gap-2 leading-normal">
            <li>Sidebar/Drawer <i>size</i> property is removed, use a responsive class utilty as replacement, demos have new examples.</li>
            <li>Rating <i>cancel</i> prop is removed as toggling the selected star value clears it.</li>
            <li>Inplace <i>closable</i> is removed in favor of templating and <i>closeCallback</i> prop.</li>
        </ul>
    </DocSectionText>
</template>
