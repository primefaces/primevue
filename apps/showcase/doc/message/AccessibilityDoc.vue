<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Message component uses <i>alert</i> role that implicitly defines <i>aria-live</i> as "assertive" and <i>aria-atomic</i> as "true". Since any attribute is passed to the root element, attributes like <i>aria-labelledby</i> and
            <i>aria-label</i> can optionally be used as well.
        </p>

        <p>
            Close element is a <i>button</i> with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API by default, you may use <i>closeButtonProps</i> to customize the
            element and override the default <i>aria-label</i>.
        </p>

        <h3>Close Button Keyboard Support</h3>
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
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Closes the message.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Closes the message.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
