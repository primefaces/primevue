<template>
    <DocSectionText v-bind="$attrs">
        <p>
            At PrimeTek, we have been developing UI component libraries for 20+ years. Despite the rapid technical enhancements in web, the requirements have not changed significantly. Developers are still expected to build UIs with reusable UI
            components like dropdowns, tabs, tables, modals and so on. Some teams prefer to use 3rd party UI libraries to save time so that they can focus on the application requirements whereas developing an in-house library may also be preferred to
            be in full control. We are aiming to find the best of both worlds, a 3rd party UI library that is easy to tune and customize as if it were an in-house library.
        </p>
        <p>
            The most common variable in this equation is styling, for example a modal dialog is a familiar UI item in applications, the main requirements are to be displayed as an overlay and be accessible. Although the requirements are same, the UI
            and UX would vary depending the design used in the application due to the subjective nature. This is the main idea of an unstyled core, following the same example, PrimeVue
            <a href="https://primevue.org/dialog/" target="_blank" rel="noopener noreferrer">Dialog</a> component provides a functional pattern out of the box while giving you the complete liberty on styling.
        </p>
        <p>
            Traditional UI libraries have opinionated styling APIs, some prefer to even base it on a design system like Material. These APIs only permit customizing the opinions as they only allow what you can customize and at some point will get in
            your way. PrimeVue is styled by default, with the upcoming v4 it will also provide a new theming API that is designed to be customizable without restrictions however the unstyled mode of PrimeVue is the key in case you'd like take the
            freestyle approach without the need to learn new theming APIs.
        </p>
        <p>
            Tailwind is a perfect fit for the unstyled mode of PrimeVue, as it is also unopinionated unlike Bootstrap. There is no <i>btn</i> class in Tailwind, instead it provides the building blocks e.g. utilities to build your own button. PrimeVue
            takes this approach to the next level by styling the components with Tailwind utilities, so instead of using a class like <i>.p-button</i> to style a Button, styling is done with Tailwind utilities that are served as <i>presets</i>.
        </p>
    </DocSectionText>
</template>
