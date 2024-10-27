<template>
    <DocSectionText v-bind="$attrs">
        <p>
            In traditional 3rd party UI libraries, users are limited to the API provided by component author. This API commonly consists of props, events and slots. Whenever a requirement emerges for a new customization option in the API, the
            component author needs to develop and publish it with a new release.
        </p>
        <p>
            Vision of PrimeTek is <i>Your components, not ours</i>. The pass through feature is a key element to implement this vision by exposing the component internals in order to apply arbitrary attributes and listeners to the DOM elements. The
            primary advantage of this approach is that it frees you from being restricted by the main component API. We recommend considering the pass-through feature whenever you need to tailor a component that lacks a built-in feature for your
            specific requirement.
        </p>
        <p>Two videos are available at PrimeTV youtube channel, first one is an introduction and second one covers a unique case that is solved by the pass-through.</p>
    </DocSectionText>
    <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=gBh1ow-f0JfGWPrv&amp;list=PLC9bp-OHi-Wk9fMhxOM1u6Si82i6AxqUM" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
