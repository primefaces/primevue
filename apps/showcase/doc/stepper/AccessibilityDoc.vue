<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Stepper container is defined with the <i>tablist</i> role, as any attribute is passed to the container element <i>aria-labelledby</i> can be optionally used to specify an element to describe the Stepper. Each stepper header has a
            <i>tab</i> role and <i>aria-controls</i> to refer to the corresponding stepper content element. The content element of each stepper has <i>tabpanel</i> role, an id to match the <i>aria-controls</i> of the header and
            <i>aria-labelledby</i> reference to the header as the accessible name.
        </p>

        <h3>Tab Header Keyboard Support</h3>
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
                        <td>Activates the focused stepper header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates the focused stepper header.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
