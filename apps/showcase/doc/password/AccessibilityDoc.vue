<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. Screen reader is notified about the changes to the strength of the password
            using a section that has <i>aria-live</i> while typing.
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
                        <td><i>escape</i></td>
                        <td>Hides the strength meter if open.</td>
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
<label for="pwd1">Password</label>
<Password inputId="pwd1" />

<span id="pwd2">Password</span>
<Password aria-labelledby="pwd2" />

<Password aria-label="Password"/>
`
            }
        };
    }
};
</script>
