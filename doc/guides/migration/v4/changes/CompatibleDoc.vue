<template>
    <DocSectionText v-bind="$attrs">
        <h4>Renamed Components</h4>
        <p>Old names are deprecated but still functional, migrate to new import paths instead e.g. <i>primevue/calendar</i> becomes <i>primevue/datepicker</i>.</p>
        <ul class="flex flex-col gap-2 leading-normal">
            <li><i class="mark">Calendar</i> -> <i class="mark">DatePicker</i>.</li>
            <li><i class="mark">Dropdown</i> -> <i class="mark">Select</i>.</li>
            <li><i class="mark">InputSwitch</i> -> <i class="mark">ToggleSwitch</i>.</li>
            <li><i class="mark">OverlayPanel</i> -> <i class="mark">Popover</i>.</li>
            <li><i class="mark">Sidebar</i> -> <i class="mark">Drawer</i>.</li>
        </ul>

        <h4>Obsolete Components</h4>
        <p>Components that are deprecated because of their functionality being provided by other components.</p>
        <ul class="flex flex-col gap-2 leading-normal">
            <li><i class="mark">Chips</i> | Use AutoComplete with <i class="mark">multiple</i> enabled and <i class="mark">typeahead</i> disabled.</li>
            <li><i class="mark">TabMenu</i> | Use Tabs without panels.</li>
            <li><i class="mark">BadgeDirective</i> | Use OverlayBadge instead.</li>
            <li><i class="mark">TabView</i> | Use the new Tabs components.</li>
            <li><i class="mark">Accordion</i> | Use with the new <i>AccordionHeader</i> and <i>AccordionContent</i> components.</li>
        </ul>

        <h4>Important Tickets</h4>
        <p>Issue tickets with detailed information about component internal changes.</p>
        <ul class="flex flex-col gap-2 leading-normal">
            <li><a href="https://github.com/primefaces/primevue/issues/5426" target="_blank" rel="noopener noreferrer" class="doc-link">#5426</a></li>
            <li><a href="https://github.com/primefaces/primevue/issues/5437" target="_blank" rel="noopener noreferrer" class="doc-link">#5437</a></li>
        </ul>
    </DocSectionText>
</template>
