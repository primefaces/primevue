<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            SplitButton component renders two native button elements, main button uses the label property to define <i>aria-label</i> by default which can be customized with <i>buttonProps</i>. Dropdown button requires an explicit definition to
            describe it using <i>menuButtonProps</i> option and also includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button.
        </p>

        <p>The popup overlay uses <i>menu</i> role on the list and each action item has a <i>menuitem</i> role with an <i>aria-label</i> as the menuitem label. The id of the menu refers to the <i>aria-controls</i> of the dropdown button.</p>

        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />
        <h3>Main Button Keyboard Support</h3>
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
                        <td>Activates the button.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates the button.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Menu Button Keyboard Support</h3>
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
                            <span class="inline-flex flex-col">
                                <i class="mb-1">enter</i>
                                <i class="mb-1">space</i>
                                <i class="mb-1">down arrow</i>
                                <i>up arrow</i>
                            </span>
                        </td>
                        <td>Opens the menu and moves focus to the first item.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Menu Keyboard Support</h3>
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
                        <td>If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>escape</i>
                        </td>
                        <td>If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>Moves focus to the next menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>Moves focus to the previous menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td><i>alt</i> + <i>up arrow</i></td>
                        <td>Closes the popup, then moves focus to the target element.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>In nested mode if option is closed, opens the option otherwise moves focus to the first child option.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>In nested mode if option is open, closes the option otherwise moves focus to the parent option.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the first menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the last menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Moves focus to the menuitem whose label starts with the characters being typed.</td>
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
<SplitButton :buttonProps="{'aria-label': 'Default Action'}" :menuButtonProps="{'aria-label': 'More Options'}" />
`
            }
        };
    }
};
</script>
