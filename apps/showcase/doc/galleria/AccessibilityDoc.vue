<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Galleria uses <i>region</i> role and since any attribute is passed to the main container element, attributes such as <i>aria-label</i> and <i>aria-roledescription</i> can be used as well. The slides container has
            <i>aria-live</i> attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay.
        </p>

        <p>
            A slide has a <i>group</i> role with an aria-label that refers to the <i>aria.slideNumber</i> property of the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API. Similarly <i>aria.slide</i> is used as the
            <i>aria-roledescription</i> of the item. Inactive slides are hidden from the readers with <i>aria-hidden</i>.
        </p>

        <p>
            Next and Previous navigators are button elements with <i>aria-label</i> attributes referring to the <i>aria.prevPageLabel</i> and <i>aria.nextPageLabel</i> properties of the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API by
            default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using <i>nextButtonProps</i> and <i>prevButtonProps</i>.
        </p>

        <p>
            Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a <i>tablist</i> role whereas each item has a <i>tab</i> role with <i>aria-selected</i> and <i>aria-controls</i> attributes. The
            <i>aria-label</i> attribute of a quick navigation item refers to the <i>aria.pageLabel</i> of the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API. Current page is marked with <i>aria-current</i>.
        </p>

        <p>
            In full screen mode, modal element uses <i>dialog</i> role with <i>aria-modal</i> enabled. The close button retrieves <i>aria-label</i> from the <i>aria.close</i> property of the
            <NuxtLink to="/configuration/#locale">locale</NuxtLink> API.
        </p>

        <h3>Next/Prev Keyboard Support</h3>
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
                        <td>Moves focus through interactive elements in the carousel.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Activates navigation.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates navigation.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Quick Navigation Keyboard Support</h3>
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
                        <td>Moves focus through the active slide link.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Activates the focused slide link.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates the focused slide link.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>right arrow</i>
                        </td>
                        <td>Moves focus to the next slide link.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>left arrow</i>
                        </td>
                        <td>Moves focus to the previous slide link.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the first slide link.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the last slide link.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
