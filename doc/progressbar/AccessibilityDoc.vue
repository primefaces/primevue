<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            ProgressBar components uses <i>progressbar</i> role along with <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can be defined using <i>aria-labelledby</i> and
            <i>aria-label</i> props.
        </p>

        <pre v-code><code>
&lt;span id="label_status /"&gt;
&lt;ProgressBar aria-labelledby="label_status /"&gt;

&lt;ProgressBar aria-label="Status /"&gt;

</code></pre>

        <h3>Keyboard Support</h3>
        <p>Not applicable.</p>
    </DocSectionText>
</template>
