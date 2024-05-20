<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The styled mode theming has been reimplemented from scratch based on an all-new architecture. There is no theme.css involved, so you need to migrate to the API. Currently, Aura is the only available built-in preset; however, by v4 final,
            two more presets named Lara and Nora would be included, as well as the Material Design theme. If you had a custom theme for v3, the theme needs to be recreated using the new APIs. See the customization section at
            <NuxtLink to="/theming/styled">styled mode</NuxtLink> for details.
        </p>
    </DocSectionText>
    <ul class="flex flex-col gap-2">
        <li>Files under <i>primevue/resources</i> such as the themes, migration to new styled mode is necessary.</li>
        <li><i>switchTheme</i> function, use the new APIs like <i>usePreset</i> instead to dynamic theme switching.</li>
        <li>The legacy Tailwind preset at <i>primevue/passthrough/tailwind</i>, migrate to the <a href="https://tailwind.primevue.org" target="_blank" rel="noopener noreferrer" class="doc-link">Tailwind Presets</a> project.</li>
    </ul>
</template>
