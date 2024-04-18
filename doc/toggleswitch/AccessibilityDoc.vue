<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            ToggleSwitch component uses a hidden native checkbox element with <i>switch</i> role internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with
            <i>id</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.
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
                        <td>Moves focus to the switch.</td>
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
<label for="switch1">Remember Me</label>
<ToggleSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<ToggleSwitch aria-labelledby="switch2" />

<ToggleSwitch aria-label="Remember Me" />
`
            }
        };
    }
};
</script>
