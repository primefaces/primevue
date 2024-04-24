<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            The tabs container in TabList is defined with the <i>tablist</i> role, as any attribute is passed to the container element <i>aria-labelledby</i> can be optionally used to specify an element to describe the Tabs. Each Tab has a
            <i>tab</i> role along with <i>aria-selected</i> state attribute and <i>aria-controls</i> to refer to the corresponding TabPanel. TabPanel has <i>tabpanel</i> role, an id to match the <i>aria-controls</i> of Tab and
            <i>aria-labelledby</i> reference to Tab as the accessible name.
        </p>

        <h3>Tab Keyboard Support</h3>
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
                            <i>tab</i>
                        </td>
                        <td>Moves focus through the header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Activates the focused tab header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates the focused tab header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>right arrow</i>
                        </td>
                        <td>Moves focus to the next header. If focus is on the last header, moves focus to the first header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>left arrow</i>
                        </td>
                        <td>Moves focus to the previous header. If focus is on the first header, moves focus to the last header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the last header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the first header.</td>
                    </tr>
                    <tr>
                        <td><i>pageUp</i></td>
                        <td>Moves scroll position to first header.</td>
                    </tr>
                    <tr>
                        <td><i>pageDown</i></td>
                        <td>Moves scroll position to last header.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
