<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Native form elements should be preferred instead of elements that are meant for other purposes like presentation. As an example, button below is rendered as a form control by the browser, can receive focus via tabbing and can be used with
            space key as well to trigger.
        </p>
    </DocSectionText>
    <pre v-code><code>
&lt;button @click="onButtonClick(event)"&gt;Click&lt;/button&gt;
        
</code></pre>

    <div class="doc-section-description mt-4">
        <p>On the other hand, a fancy css based button using a div has no keyboard or screen reader support.</p>
    </div>
    <pre v-code><code>
&lt;div class="fancy-button" @click="onButtonClick(event)"&gt;Click&lt;/div&gt;

</code></pre>

    <div class="doc-section-description mt-4">
        <p>
            <i>tabindex</i> is required to make a div element accessible in addition to use a keydown to bring the keyboard support back. To avoid the overload and implementing functionality that is already provided by the browser, native form
            controls should be preferred.
        </p>
    </div>
    <pre v-code><code>
&lt;div class="fancy-button" @click="onClick(event)" @keydown="onKeyDown(event)" tabindex="0"&gt;Click&lt;/div&gt;

</code></pre>

    <div class="doc-section-description mt-4">
        <p>Form components must be related to another element that describes what the form element is used for. This is usually achieved with the <i>label</i> element.</p>
    </div>
    <pre v-code><code>
&lt;label for="myinput"&gt;Username:&lt;/label&gt;
&lt;input id="myinput" type="text" name="username" /&gt;

</code></pre>
</template>
