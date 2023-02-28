<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            DeferredContent can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so you
            have full control over the roles like <a href="https://www.w3.org/TR/wai-aria/#landmark" alt="Landmark Roles">landmark</a> and attributes like <i>aria-live</i>.
        </p>
        <pre v-code><code>
&lt;DeferredContent role="region" aria-live="polite" aria-label="Content loaded after page scrolled down"&gt;
    Content
&lt;/DeferredContent&gt;

</code></pre>

        <h3>Keyboard Support</h3>
        <p>Component does not include any interactive elements.</p>
    </DocSectionText>
</template>
