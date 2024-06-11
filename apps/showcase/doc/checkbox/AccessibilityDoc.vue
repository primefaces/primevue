<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using
            <i>aria-labelledby</i>, <i>aria-label</i> props.
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
                        <td>Moves focus to the checkbox.</td>
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
<label for="chkbox1">Remember Me</label>
<Checkbox inputId="chkbox1" />

<span id="chkbox2">Remember Me</span>
<Checkbox aria-labelledby="chkbox2" />

<Checkbox aria-label="Remember Me" />
`
            }
        };
    }
};
</script>
