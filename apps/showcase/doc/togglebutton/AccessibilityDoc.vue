<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            ToggleButton component uses a hidden native checkbox element as the switch element internally that is only visible to screen readers. Value to describe the component can be defined with <i>aria-labelledby</i> or <i>aria-label</i> props,
            it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label
            that does not change related to state.
        </p>

        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />

        <h3>Keyboard Support</h3>
        <p>Keyboard interaction is derived from the native browser handling of checkboxs in a group.</p>
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
                        <td>Moves focus to the button.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Toggles the checked state.</td>
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
<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />
`
            }
        };
    }
};
</script>
