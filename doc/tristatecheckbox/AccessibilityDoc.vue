<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            TriStateCheckbox component uses an element with <i>checkbox</i> role. Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Component adds an element with <i>aria-live</i> attribute
            that is only visible to screen readers to read the value displayed. Values to read are defined with the <i>trueLabel</i>, <i>falseLabel</i> and <i>nullLabel</i> keys of the <i>aria</i> property from the
            <NuxtLink to="/configuration/#locale">locale</NuxtLink> API. This is an example of a custom accessibility implementation as there is no one to one mapping between the component design and the WCAG specification.
        </p>
        <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz v-bind="$attrs" />

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
                        <td>Moves focus to the checkbox.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Toggles between the values.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Toggles between the values.</td>
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
<span id="chkbox1">Remember Me</span>
<TriStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Remember Me" />
`
            }
        };
    }
};
</script>
