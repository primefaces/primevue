<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The most notable feature is the new <NuxtLink to="/theming/styled">styled mode</NuxtLink> implementation. Previous iterations use SASS at an external repo called <i>primevue-sass-theme</i> which requires compilation of a
            <i>theme.css</i> file. This file had to be included in the application and need to be swapped at runtime for basic tasks like dark mode or primary color changes. In v4, styled mode is now part of the core, SASS is not used at all, and a
            new design token based architecture that fully utilizes CSS variables has been created. The new API is modern and superior to the legacy styled mode.
        </p>
    </DocSectionText>
</template>
