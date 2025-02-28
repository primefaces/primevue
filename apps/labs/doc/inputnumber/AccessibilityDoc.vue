<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element uses <i>spinbutton</i> role in addition to the
            <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes.
        </p>

        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />

        <h3>Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>tab</i></td>
                        <td>Moves focus to the input.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Increments the value.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Decrements the value.</td>
                    </tr>
                    <tr>
                        <td><i>home</i></td>
                        <td>Set the minimum value if provided.</td>
                    </tr>
                    <tr>
                        <td><i>end</i></td>
                        <td>Set the maximum value if provided.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<label for="price">Price</label>
<InputNumber inputId="price" />

<span id="label_number">Number</span>
<InputNumber aria-labelledby="label_number" />

<InputNumber aria-label="Number" />
`
            }
        };
    }
};
</script>
