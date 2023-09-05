<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            The container element that wraps the layout options buttons has a <i>group</i> role whereas each button element uses <i>button</i> role and <i>aria-pressed</i> is updated depending on selection state. Values to describe the buttons are
            derived from the <i>aria.listView</i> and <i>aria.gridView</i> properties of the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API respectively.
        </p>

        <p>Refer to <PrimeVueNuxtLink to="/paginator">paginator</PrimeVueNuxtLink> accessibility documentation for the paginator of the component.</p>

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
                        <td>
                            <i>tab</i>
                        </td>
                        <td>Moves focus to the buttons.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Toggles the checked state of a button.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
