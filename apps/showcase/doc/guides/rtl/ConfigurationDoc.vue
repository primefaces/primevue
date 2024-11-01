<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The PrimeVue components natively support Right-to-Left (RTL) text direction through a modern CSS implementation utilizing FlexBox and classes like <i>*-inline-start</i> and <i>*-block-end</i>. Consequently, no JavaScript configuration is
            necessary; setting the document's text direction to RTL is sufficient to enable this feature.
        </p>
        <p>The RTL setting can either be set using the <i>dir</i> attribute or with the <i>direction</i> style property.</p>
    </DocSectionText>

    <div class="doc-section-description font-bold mb-4">With Markup</div>
    <pre v-code><code>
&lt;html dir="rtl"&gt;

</code></pre>

    <div class="doc-section-description my-4 font-bold">With CSS</div>

    <pre v-code.css><code>
html {
    direction: rtl
}

</code></pre>
</template>
