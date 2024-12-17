<template>
    <DocSectionText v-bind="$attrs">
        <p>It may be confusing which styling approach to choose from due to the amount of options such as Styled, Pure and Hybrid. We've created a short video that discusses the pros and cons of each approach.</p>
        <p>
            In summary, the styled mode is a powerful API to learn with first class support for Figma, as a result when working with a UI Designer that utilizes the PrimeVue Figma UI Kit, the development flow would be productive. The unstyled mode is
            beneficial when you do not prefer to learn the default theming API, want full control over the styles or require Tailwind CSS as the only library for styling in your application. The downside of unstyled mode is that it requires the
            styles need to be maintained in the application.
        </p>
    </DocSectionText>
    <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5M6xM4tTMQU?si=FzeuOeJOaGBoM-yK" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
