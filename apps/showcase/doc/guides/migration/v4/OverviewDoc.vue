<template>
    <DocSectionText v-bind="$attrs">
        <p>
            At PrimeTek, we have been developing UI component libraries since 2008. The web continues to undergo technological advancements, and as a result, we have to modernize and update our libraries to stay relevant. PrimeVue v4 is the
            next-generation version that fully embraces modern Web APIs and removes technical debt like the legacy-styled mode. Every component has been reviewed and enhanced. As part of our commitment to our products and the community, PrimeVue v3
            will continue to be maintained until the end of 2024.
        </p>
        <p>
            The most notable feature is the new <NuxtLink to="/theming/styled">styled mode</NuxtLink> implementation. Previous iterations use SASS at an external repo called <i>primevue-sass-theme</i> which requires compilation of a <i>theme.css</i>a
            file. This file had to be included in the application and need to be swapped at runtime for basic tasks like dark mode or primary color changes. In v4, styled mode is now part of the core, SASS is not used at all, and a new design token
            based architecture that fully utilizes CSS variables has been created. The new API is modern and superior to the legacy styled mode.
        </p>
        <p>
            Names of some of the components have been changed to more common alternatives for example, <i>Popover</i> replaced <i>OverlayPanel</i> and <i>InputSwitch</i> is now called <i>ToggleSwitch</i>. Each component has been reviewed for a
            consistent naming between CSS class names and PT sections. An example would be the <i>option</i> element of a Select component that uses <i>p-select-option</i> for the class name.
        </p>
        <p>
            Components have been utilized more within other components, for instance Dialog close button is not actually a PrimeVue button so that <i>closeButtonProps</i> can be used to enable the features of button like outlined, raised and more.
            Whenever a component is using another component, in v3 the pt sections were causing confusion, to prevent this <i>pc</i> prefix is added to indicate that the PT section is actually a PrimeVue component, not a simple DOM element. This is
            especially useful because PT allows passing arbitrary attributes to DOM elements whereas if the element is actually a PrimeVue component, <i>props</i> can also be passed.
        </p>
    </DocSectionText>
</template>
