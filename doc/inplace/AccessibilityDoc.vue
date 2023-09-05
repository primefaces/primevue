<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>Inplace component defines <i>aria-live</i> as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.</p>
        <p>
            Display element uses <i>button</i> role in view mode by default, <i>displayProps</i> can be used for customizations like adding <i>aria-label</i> or <i>aria-labelledby</i> attributes to describe the content of the view mode or even
            overriding the default role.
        </p>
        <p>
            Closable inplace components displays a button with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API by default, you may use <i>closeButtonProps</i> to
            customize the element and override the default <i>aria-label</i>.
        </p>

        <h3>View Mode Keyboard Support</h3>
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
                        <td>Switches to content.</td>
                    </tr>
                </tbody>
            </table>
        </div>

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
                        <td>Switches to display.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Switches to display.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
