<template>
    <DocSectionText v-bind="$attrs">
        <p>
            ARIA refers to "Accessible Rich Internet Applications" is a suite to fill the gap where semantic HTML is inadequate. These cases are mainly related to rich UI components/widgets. Although browser support for rich UI components such as a
            datepicker or colorpicker has been improved over the past years many web developers still utilize UI components derived from standard HTML elements created by them or by other projects like PrimeVue. These types of components must provide
            keyboard and screen reader support, the latter case is where the WAI-ARIA is utilized.
        </p>
        <p>
            ARIA consists of roles, properties and attributes. <b>Roles</b> define what the element is mainly used for e.g. <i>checkbox</i>, <i>dialog</i>, <i>tablist</i> whereas <b>States</b> and <b>Properties</b> define the metadata of the element
            like <i>aria-checked</i>, <i>aria-disabled</i>.
        </p>

        <p>Consider the following case of a native checkbox. It has built-in keyboard and screen reader support.</p>
    </DocSectionText>

    <pre v-code><code>
&lt;input type="checkbox" value="Prime" name="ui" checked&gt;

</code></pre>

    <div class="doc-section-description mt-4">
        <p>
            A fancy checkbox with css animations might look more appealing but accessibility might be lacking. Checkbox below may display a checked font icon with animations however it is not tabbable, cannot be checked with space key and cannot be
            read by a reader.
        </p>
    </div>
    <pre v-code><code>
&lt;div class="fancy-checkbox"&gt;
    &lt;i class="checked-icon" v-if="checked"&gt;&lt;/i&gt;
&lt;/div&gt;

</code></pre>

    <div class="doc-section-description mt-4">
        <p>One alternative is using ARIA roles for readers and use javascript for keyboard support. Notice the usage of <i>aria-labelledby</i> as a replacement of the <i>label</i> tag with for.</p>
    </div>
    <pre v-code><code>
&lt;span id="chk-label"&gt;Remember Me&lt;/span&gt;
&lt;div class="fancy-checkbox" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk-label"
    @click="toggle" @keydown="onKeyDown(event)"&gt;
    &lt;i class="checked-icon" v-if="checked"&gt;&lt;/i&gt;
&lt;/div&gt;

</code></pre>

    <div class="doc-section-description mt-4">
        <p>
            However the best practice is combining semantic HTML for accessibility while keeping the design for UX. This approach involves hiding a native checkbox for accessibility and using javascript events to update its state. Notice the usage of
            <i>p-hidden-accessible</i>
            that hides the elements from the user but not from the screen reader.
        </p>
    </div>
    <pre v-code><code>
&lt;label for="chkbox"&gt;Remember Me&lt;/label&gt;
&lt;div class="fancy-checkbox" @click="toggle"&gt;
    &lt;input class="p-hidden-accessible" type="checkbox" id="chkbox" @focus="updateParentVisuals" @blur="updateParentVisuals"
        @keydown="onKeyDown(event)"&gt;
    &lt;i class="checked-icon" v-if="checked"&gt;&lt;/i&gt;
&lt;/div&gt;

</code></pre>

    <div class="doc-section-description mt-4">
        <p>A working sample is the PrimeVue checkbox that is tabbable, keyboard accessible and is compliant with a screen reader. Instead of ARIA roles it relies on a hidden native checkbox.</p>
    </div>

    <div class="card flex items-center justify-center">
        <label for="binary" class="mr-2">Remember Me</label>
        <Checkbox id="binary" v-model="checked" binary />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    }
};
</script>
