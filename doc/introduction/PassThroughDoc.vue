<template>
    <DocSectionText v-bind="$attrs">
        <p class="mb-0">
            PassThrough is an innovative API to provide access to the internal DOM elements to add arbitrary attributes. In general, traditional UI component libraries encapsulate UI and logic with limited APIs that makes the developers dependant on
            the library maintainer to extend this API by adding new props or events. With <NuxtLink to="/passthrough">Pass Through</NuxtLink> this limitation has been eliminated since, you'll be able to access the internal of the components to add
            events and attributes. Some common use-cases are adding test attributes, additional aria attributes, custom events and styling.
        </p>
    </DocSectionText>
</template>
