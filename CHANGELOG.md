# Changelog

## [4.3.1](https://github.com/primefaces/primevue/tree/4.3.1) (2025-02-25)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.3.0...4.3.1)

**Fixed bugs:**

- DatePicker: selection start and end bug [\#7318](https://github.com/primefaces/primevue/issues/7318)
- InputNumber: locale warnings [\#7317](https://github.com/primefaces/primevue/issues/7317)
- ConfirmPopup: alignment bug on first click [\#7316](https://github.com/primefaces/primevue/issues/7316)

## [4.3.0](https://github.com/primefaces/primevue/tree/4.3.0) (2025-02-24)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.3.0-rc.1...4.3.0)

**Fixed bugs:**

- Editor losing focus when inside Tabs component [\#7211](https://github.com/primefaces/primevue/issues/7211)

## [4.3.0-rc.1](https://github.com/primefaces/primevue/tree/4.3.0-rc.1) (2025-02-20)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.2.5...4.3.0-rc.1)

**Breaking Changes:**

- DataTable: Change `showClearButton` as false and use `FilterFillIcon` for row filtering [\#7092](https://github.com/primefaces/primevue/issues/7092)

**Deprecated:**

- Deprecate `UniqueComponentId` method in core utils [\#7089](https://github.com/primefaces/primevue/issues/7089)
- Remove `directives` key from theme presets [\#7076](https://github.com/primefaces/primevue/issues/7076)

**Implemented New Features and Enhancements:**

- Eslint 9 version update changes [\#7173](https://github.com/primefaces/primevue/issues/7173)
- Port all styles to `@primeuix/styles` [\#7153](https://github.com/primefaces/primevue/issues/7153)
- Port all themes to `@primeuix/themes` [\#7152](https://github.com/primefaces/primevue/issues/7152)
- TreeTable: node added to column context options [\#7150](https://github.com/primefaces/primevue/issues/7150)
- Select and DatePicker is missing resize event [\#7104](https://github.com/primefaces/primevue/issues/7104)
- Improve BaseDirective structure [\#7096](https://github.com/primefaces/primevue/issues/7096)
- Editor: Improve quill 2 support [\#7093](https://github.com/primefaces/primevue/issues/7093)
- New FilterFillIcon added [\#7091](https://github.com/primefaces/primevue/issues/7091)
- Improve generated id structure on components/directives [\#7090](https://github.com/primefaces/primevue/issues/7090)
- Upgrade `vue` dependency to >=3.5.0 [\#7088](https://github.com/primefaces/primevue/issues/7088)
- Add `useId` and `useAttrSelector` composables to core [\#7087](https://github.com/primefaces/primevue/issues/7087)
- Refactor ToggleButton Implementation and Design Tokens [\#7086](https://github.com/primefaces/primevue/issues/7086)
- ProgressSpinner Token Names Invalid [\#7085](https://github.com/primefaces/primevue/issues/7085)
- Add `getFieldState` method to Form instance [\#7075](https://github.com/primefaces/primevue/issues/7075)
- AutoComplete: context option updates [\#7073](https://github.com/primefaces/primevue/issues/7073)
- Toast: onClick, onMouseEnter and onMouseLeave callback props added [\#7053](https://github.com/primefaces/primevue/issues/7053)
- Add `reset` event and `submit` callback to Form [\#7049](https://github.com/primefaces/primevue/issues/7049)
- Form: Request to expose functionality to code such as `.reset()` , `.validate()`, `.submit()`, etc [\#7046](https://github.com/primefaces/primevue/issues/7046)
- Doc: no values param in onFormSubmit callback if not return in resolver [\#7031](https://github.com/primefaces/primevue/issues/7031)
- Size support for Icon Only Buttons [\#7017](https://github.com/primefaces/primevue/issues/7017)
- Form: TypeScript doesn't know about the `Form` function `validate` [\#6980](https://github.com/primefaces/primevue/issues/6980)
- Forms/FormField: The form does not seem to support nested data. [\#6939](https://github.com/primefaces/primevue/issues/6939)
- Form: v-slot="$form" doesn't handle nested array of objects [\#6924](https://github.com/primefaces/primevue/issues/6924)
- Form: yupResolver could not resolve nested object correctly [\#6883](https://github.com/primefaces/primevue/issues/6883)
- Improve colum filter UI and UX [\#6834](https://github.com/primefaces/primevue/issues/6834)
- Select: `aria-invalid` attribute missing in non-editable mode [\#6813](https://github.com/primefaces/primevue/issues/6813)
- Form: API Loaded data not passing to $form.[field].value [\#6801](https://github.com/primefaces/primevue/issues/6801)
- Drawer: no before-hide emit [\#6770](https://github.com/primefaces/primevue/issues/6770)
- DataTable: Can't copy text with control + c when Table has selectable rows [\#6740](https://github.com/primefaces/primevue/issues/6740)
- DataTable: size variant still using hardcode size [\#6738](https://github.com/primefaces/primevue/issues/6738)
- Primevue 4 Design Tokens: Bug when transpile Build [\#6217](https://github.com/primefaces/primevue/issues/6217)
- Checkbox, Radio Button, Multiselect: CSS Style of ".p-hidden-accessible select/input" Non-compliant with NVDA/Firefox AccessibilityComponent Name: Issue Title [\#4214](https://github.com/primefaces/primevue/issues/4214)
- AutoComplete: Shift key not working for selecting [\#2930](https://github.com/primefaces/primevue/issues/2930)

**Fixed bugs:**

- Select - autoFilterFocus and autoOptionFocus not working together [\#7283](https://github.com/primefaces/primevue/issues/7283)
- Clear icon shows in MultiSelect when value is empty array [\#7265](https://github.com/primefaces/primevue/issues/7265)
- Fix InputNumber clearTimer: clearInterval -> clearTimeout [\#7261](https://github.com/primefaces/primevue/issues/7261)
- Slider yields float values when not dragging handles beforehand [\#7257](https://github.com/primefaces/primevue/issues/7257)
- DataTable's `filterButtonProps` prop should accept a partial [\#7248](https://github.com/primefaces/primevue/issues/7248)
- CascadeSelect breaks when modelValue doesn't exist in the options [\#7246](https://github.com/primefaces/primevue/issues/7246)
- Slider tracker missing left border radius [\#7242](https://github.com/primefaces/primevue/issues/7242)
- Autocomplete : Chip slot is missing index and removeCallback in .d.ts [\#7235](https://github.com/primefaces/primevue/issues/7235)
- Overlay Components : hide on click outside does not work if clicked element have a stopPropagation [\#7234](https://github.com/primefaces/primevue/issues/7234)
- Disabled InputNumber buttons are still hoverable [\#7229](https://github.com/primefaces/primevue/issues/7229)
- Range selection is broken on non-first-pages for lazily-paginated multi-selection datatables [\#7227](https://github.com/primefaces/primevue/issues/7227)
- Tabs do not fit the title size [\#7224](https://github.com/primefaces/primevue/issues/7224)
- DataTable: Colspan not working correctly when selectionMode='single' in Column [\#7222](https://github.com/primefaces/primevue/issues/7222)
- Dock: Blocked aria-hidden on an element error [\#7221](https://github.com/primefaces/primevue/issues/7221)
- Multiselect unnecessarily scrolling to bottom of options on open [\#7219](https://github.com/primefaces/primevue/issues/7219)
- Form components: wrong default value of variant prop in .d.ts files [\#7209](https://github.com/primefaces/primevue/issues/7209)
- VirtualScroller: long waiting time when replacing an array with a smaller size [\#7208](https://github.com/primefaces/primevue/issues/7208)
- miss the pass-though prop named `mask` in the `ConfirmDialog` component [\#7204](https://github.com/primefaces/primevue/issues/7204)
- miss the pass-though prop named `dropdownIcon` in the `Select` component [\#7202](https://github.com/primefaces/primevue/issues/7202)
- Add generics to type data and newData in DataTableRowEditSaveEvent, DataTableRowEditCancelEvent and DataTableRowEditInitEvent interfaces. DataTable component [\#7194](https://github.com/primefaces/primevue/issues/7194)
- Wrong types of the `content` slot in the `fileupload` component [\#7189](https://github.com/primefaces/primevue/issues/7189)
- Select autoFilterFocus error [\#7185](https://github.com/primefaces/primevue/issues/7185)
- FileUpload shouldn't post to `url` if none is provided [\#7180](https://github.com/primefaces/primevue/issues/7180)
- DataTable: missing types on paginatorcontainer slot props [\#7174](https://github.com/primefaces/primevue/issues/7174)
- feat(InputNumber): French keyboard decimal support [\#7157](https://github.com/primefaces/primevue/issues/7157)
- FormField: Missing attribute "name" in FormFieldProps [\#7145](https://github.com/primefaces/primevue/issues/7145)
- keepInViewPort for Dialog does nothing? [\#7141](https://github.com/primefaces/primevue/issues/7141)
- FloatLabel: correct font.weight style key weight for active label [\#7139](https://github.com/primefaces/primevue/issues/7139)
- Missing exposed methods in types [\#7130](https://github.com/primefaces/primevue/issues/7130)
- Accordion - Swapped direction of chevron [\#7128](https://github.com/primefaces/primevue/issues/7128)
- [TS] Select missing exposed methods in types [\#7126](https://github.com/primefaces/primevue/issues/7126)
- [TS] MultiSelect missing exposed methods in types [\#7124](https://github.com/primefaces/primevue/issues/7124)
- Dialog close button when label is empty [\#7123](https://github.com/primefaces/primevue/issues/7123)
- MultiSelect's chip slot is missing the removeCallback prop in type definition [\#7121](https://github.com/primefaces/primevue/issues/7121)
- Uncaught ResizeObserver loop completed with undelivered notifications. [\#7117](https://github.com/primefaces/primevue/issues/7117)
- InputMask: Problem with input prompt cursor on Windows [\#7110](https://github.com/primefaces/primevue/issues/7110)
- InputMask clears the initial value when the unmask attribute is active and disabled is set to active [\#7107](https://github.com/primefaces/primevue/issues/7107)
- Virtual Scroller: Event first and last behave differently [\#7095](https://github.com/primefaces/primevue/issues/7095)
- docs(menu): add show/hide events to types and docs [\#7080](https://github.com/primefaces/primevue/issues/7080)
- feat(button): add a11yAttrs to slot types [\#7078](https://github.com/primefaces/primevue/issues/7078)
- Tooltip: overflows window boundaries [\#7071](https://github.com/primefaces/primevue/issues/7071)
- DatePicker: inline used together with range and time options [\#7067](https://github.com/primefaces/primevue/issues/7067)
- Calendar | Date Picker | Cannot read properties of undefined ( reading 'focus') [\#7062](https://github.com/primefaces/primevue/issues/7062)
- TreeTable: Custom node toggle icon does not apply [\#7058](https://github.com/primefaces/primevue/issues/7058)
- Select filter in forms (FormField): The filter input is also invalid when select is invalid. [\#7052](https://github.com/primefaces/primevue/issues/7052)
- Using FloatLabel within InputGroup and Using Password within IconField occur CSS Style error. [\#7047](https://github.com/primefaces/primevue/issues/7047)
- InputNumber weird behavior when using min value & allow-empty=false together [\#7045](https://github.com/primefaces/primevue/issues/7045)
- correct field type for column body slot [\#7038](https://github.com/primefaces/primevue/issues/7038)
- Listbox and Select: checkmark different size [\#7029](https://github.com/primefaces/primevue/issues/7029)
- Select: Editable Dropdown search not working as expected [\#7026](https://github.com/primefaces/primevue/issues/7026)
- Galleria thumbnails don't work on mobile [\#7021](https://github.com/primefaces/primevue/issues/7021)
- InputMask: pt styles [\#7020](https://github.com/primefaces/primevue/issues/7020)
- Timeline: missing count in interface TimelineContext [\#7013](https://github.com/primefaces/primevue/issues/7013)
- DatePicker: dd/mm/yy date format through ref is displaying NaN on datepicker [\#7010](https://github.com/primefaces/primevue/issues/7010)
- SpeedDial: invalid visible property on SpeedDialState [\#7008](https://github.com/primefaces/primevue/issues/7008)
- @primevue/forms: `Form` components submit event parameter missing `values` [\#7006](https://github.com/primefaces/primevue/issues/7006)
- Datepicker: In unstyled mode the minute decrement button keeps its css classes [\#7004](https://github.com/primefaces/primevue/issues/7004)
- SplitterPanel: Exceeds minSize on Subsequent Drags [\#7001](https://github.com/primefaces/primevue/issues/7001)
- CascadeSelect: When the first item has no sub items, hovering over it will automatically select it. [\#7000](https://github.com/primefaces/primevue/issues/7000)
- InputOtp: Emit Options parameter type [\#6995](https://github.com/primefaces/primevue/issues/6995)
- DataTable: Frozen Column with Basic Filtering [\#6994](https://github.com/primefaces/primevue/issues/6994)
- Galleria not showing thumbnails after updating images list [\#6992](https://github.com/primefaces/primevue/issues/6992)
- MultiSelect: itemcheckboxicon slot does't provide "selected" value [\#6990](https://github.com/primefaces/primevue/issues/6990)
- SplitButton: invalid SplitButtonState missing isExpanded [\#6988](https://github.com/primefaces/primevue/issues/6988)
- VirtualScroller: scrollInView method does not scroll to right item, when item is dynamically added [\#6986](https://github.com/primefaces/primevue/issues/6986)
- InputNumber: There may be issues when combining InputNumber with Forms. [\#6985](https://github.com/primefaces/primevue/issues/6985)
- DataTable: Frozen Columns, headers are overlapping wrongly [\#6982](https://github.com/primefaces/primevue/issues/6982)
- DatePicker: Not possible to enter 1979/02/28 when dateFormat is set to 'yy/mm/dd' [\#6981](https://github.com/primefaces/primevue/issues/6981)
- ToggleButton: aria-label removed from ToggleButton [\#6976](https://github.com/primefaces/primevue/issues/6976)
- Textarea: type definition error [\#6972](https://github.com/primefaces/primevue/issues/6972)
- FloatLabel: Float Label Doesn't Reset When Password Component is Cleared Programmatically [\#6969](https://github.com/primefaces/primevue/issues/6969)
- Splitter: Does not accept `0` as a valid value [\#6967](https://github.com/primefaces/primevue/issues/6967)
- add missing icons [\#6965](https://github.com/primefaces/primevue/issues/6965)
- Tree: missing last typed letter on filter event [\#6962](https://github.com/primefaces/primevue/issues/6962)
- DynamicDialog: Instance gets destroyed before hide animation completes [\#6956](https://github.com/primefaces/primevue/issues/6956)
- Editor: toolbar buttons break when updating `v-model` value [\#6954](https://github.com/primefaces/primevue/issues/6954)
- TreeSelect: Performance issue in selectionMode="checkbox" [\#6950](https://github.com/primefaces/primevue/issues/6950)
- Dialog: `closeOnEscape` is not working when `closable` is false [\#6922](https://github.com/primefaces/primevue/issues/6922)
- Form: errorMessage could not reactive display correctly [\#6905](https://github.com/primefaces/primevue/issues/6905)
- Scoped styles are added but not applied [\#6895](https://github.com/primefaces/primevue/issues/6895)
- DynamicForm: MultiSelect label not shown [\#6783](https://github.com/primefaces/primevue/issues/6783)
- DynamicForm: DatePicker (range) not working [\#6780](https://github.com/primefaces/primevue/issues/6780)
- Form: reset not working, changed value not update input [\#6755](https://github.com/primefaces/primevue/issues/6755)
- InputText: Name attribute not applied when used outside of Form component [\#6737](https://github.com/primefaces/primevue/issues/6737)
- Cannot read `$form` form field states with TypeScript [\#6723](https://github.com/primefaces/primevue/issues/6723)
- Forms: InputNumber Field Not Showing Red Border on Error State [\#6721](https://github.com/primefaces/primevue/issues/6721)
- All components: Memory leak [\#6715](https://github.com/primefaces/primevue/issues/6715)
- DataTable: Edited cell values are not updated after value sorting [\#6572](https://github.com/primefaces/primevue/issues/6572)
- Base Presets: CSS var `--p-scrollbar-width` is not defined [\#6094](https://github.com/primefaces/primevue/issues/6094)
- ConfirmDialog: shifting content under a modal window [\#6089](https://github.com/primefaces/primevue/issues/6089)
- Iconfield : The iconfield component does not work when used in conjunction with the Password component [\#5804](https://github.com/primefaces/primevue/issues/5804)
- DataTable: Maximum recursive updates exceeded in component <DataTable> [\#5261](https://github.com/primefaces/primevue/issues/5261)

## [4.2.5](https://github.com/primefaces/primevue/tree/4.2.5) (2024-12-12)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.2.4...4.2.5)

**Fixed bugs:**

- TreeTable: Row selected on click at node toggle icon [\#6932](https://github.com/primefaces/primevue/issues/6932)
- DatePicker: Date unformatted with initial date [\#6930](https://github.com/primefaces/primevue/issues/6930)
- MultiSelect: Fluid doesn't applying 100% width [\#6916](https://github.com/primefaces/primevue/issues/6916)
- Tabs: Scrollable tabs being skipped [\#6915](https://github.com/primefaces/primevue/issues/6915)
- ImageCompare: ARIA Attributes [\#6912](https://github.com/primefaces/primevue/issues/6912)
- DataTable: RowExpansion & RowSelection [\#6904](https://github.com/primefaces/primevue/issues/6904)
- FileUpload: fileLimit dosent prevent new items beeing pushed into Files[], when exceeded [\#6900](https://github.com/primefaces/primevue/issues/6900)
- Galleria: 'Indicator' Slot, Keyboard Accessibility Broken [\#6899](https://github.com/primefaces/primevue/issues/6899)
- Select: fluid doesnt apply properly [\#6896](https://github.com/primefaces/primevue/issues/6896)
- ScrollTop: icon pt implementation defect [\#6892](https://github.com/primefaces/primevue/issues/6892)
- Slider: While dragging the handle sometimes it breaks [\#6884](https://github.com/primefaces/primevue/issues/6884)
- SplitButton: Toast usages in examples for composition API are not correct [\#6879](https://github.com/primefaces/primevue/issues/6879)
- InputMask components fires @update:modelValue although value not changed [\#6868](https://github.com/primefaces/primevue/issues/6868)
- Carousel: Item disappear when there is only one item with autoplay and circular activated [\#6812](https://github.com/primefaces/primevue/issues/6812)
- DatePicker: manual input not working [\#6739](https://github.com/primefaces/primevue/issues/6739)
- SelectButton: allowEmpty does not stop unselecting [\#6718](https://github.com/primefaces/primevue/issues/6718)
- Form: type of v-slot="$form" is incorrect [\#6717](https://github.com/primefaces/primevue/issues/6717)

## [4.2.4](https://github.com/primefaces/primevue/tree/4.2.4) (2024-11-27)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.2.3...4.2.4)

**Fixed bugs:**

- Textarea filled variant fails in Material Theme [\#6878](https://github.com/primefaces/primevue/issues/6878)
- InputText: Missing attributes such as placeholder. [\#6867](https://github.com/primefaces/primevue/issues/6867)
- Chip component's removable Icon uses aria-hidden [\#6864](https://github.com/primefaces/primevue/issues/6864)
- ToggleSwitch: Material theme switch uncentered handle [\#6859](https://github.com/primefaces/primevue/issues/6859)
- TreeTable: Checkbox selectable does not work [\#6849](https://github.com/primefaces/primevue/issues/6849)
- Knob: Incorrect TypeScript Definition for valueTemplate (not supporting plain strings) [\#6843](https://github.com/primefaces/primevue/issues/6843)
- InputNumber: selection state is not changed when pressing arrow right and arrow left [\#6837](https://github.com/primefaces/primevue/issues/6837)
- Virtual scroller: step prop in delay mode breaks the component [\#6776](https://github.com/primefaces/primevue/issues/6776)

## [4.2.3](https://github.com/primefaces/primevue/tree/4.2.3) (2024-11-22)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.2.2...4.2.3)

**Fixed bugs:**

- Drawer: RTL position bug [\#6827](https://github.com/primefaces/primevue/issues/6827)
- Tabs: Mismatch between prop "value" and emit update:value [\#6825](https://github.com/primefaces/primevue/issues/6825)
- DatePicker: Wrong hour displayed for midnight when set to timeOnly and 24h [\#6824](https://github.com/primefaces/primevue/issues/6824)
- Material: filled mode InputNumber defects [\#6823](https://github.com/primefaces/primevue/issues/6823)
- Material: filled mode InputGroup defects [\#6820](https://github.com/primefaces/primevue/issues/6820)
- Tree: Wrong passThrough option in documentation [\#6818](https://github.com/primefaces/primevue/issues/6818)
- PanelMenu: wrong value of the hasSubmenu slot prop [\#6815](https://github.com/primefaces/primevue/issues/6815)
- ToggleButton: &nbsp; when label is empty [\#6809](https://github.com/primefaces/primevue/issues/6809)
- DataTable: Hover CSS rule not applied [\#6796](https://github.com/primefaces/primevue/issues/6796)
- ColorPicker: Showing Text Cursor on Focus [\#6795](https://github.com/primefaces/primevue/issues/6795)
- Select: Cannot read properties of null (reading '$el') - filter and auto-filter-focus error [\#6793](https://github.com/primefaces/primevue/issues/6793)
- Step: Cannot disable custom step element [\#6763](https://github.com/primefaces/primevue/issues/6763)
- InputText: Interface 'InputTextProps' incorrectly extends interface 'InputHTMLAttributes'. Password: Interface 'PasswordProps' incorrectly extends interface 'InputHTMLAttributes'. [\#5480](https://github.com/primefaces/primevue/issues/5480)

**Implemented New Features and Enhancements:**

- Improve RTL implementation [\#6826](https://github.com/primefaces/primevue/issues/6826)
- Better compatability with CSS libraries like Tailwind, Bootstrap [\#6822](https://github.com/primefaces/primevue/issues/6822)

## [4.2.2](https://github.com/primefaces/primevue/tree/4.2.2) (2024-11-14)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.2.1...4.2.2)

**Fixed bugs:**

- Menubar: submenu icon rtl defects [\#6784](https://github.com/primefaces/primevue/issues/6784)
- Drawer: dismissable mode behaviour defects [\#6779](https://github.com/primefaces/primevue/issues/6779)
- Component Name: InputNumber does not work on Android devices [\#6766](https://github.com/primefaces/primevue/issues/6766)
- Improve filter rule visuals [\#6761](https://github.com/primefaces/primevue/issues/6761)
- paginator rtl [\#6759](https://github.com/primefaces/primevue/issues/6759)
- Button: Variant "link" is not assignable [\#6756](https://github.com/primefaces/primevue/issues/6756)
- Timeline: rtl defect [\#6754](https://github.com/primefaces/primevue/issues/6754)
- Frozen Columns Header: value on Columns Header won't hidden [\#6745](https://github.com/primefaces/primevue/issues/6745)
- InputGroup: IconField is not supported in InputGroup [\#6743](https://github.com/primefaces/primevue/issues/6743)
- PanelMenu: rtl submenu icon rotate defect [\#6753](https://github.com/primefaces/primevue/issues/6753)
- Button: "loadingicon" slot has no class and data attribute [\#6747](https://github.com/primefaces/primevue/issues/6747)
- ToggleSwitch: does not switch visually when selecting Material theme [\#6735](https://github.com/primefaces/primevue/issues/6735)
- Checkbox: "update:indeterminate" is not added as available emit type. [\#6713](https://github.com/primefaces/primevue/issues/6713)
- Provide showEmptyMessage for AutoComplete [\#6773](https://github.com/primefaces/primevue/issues/6709)
- MegaMenu: type error in props model [\#6706](https://github.com/primefaces/primevue/issues/6706)
- MultiSelect: Unit test exception [\#6704](https://github.com/primefaces/primevue/issues/6704)
- DatePicker does not play well with ConfirmPopup. [\#6696](https://github.com/primefaces/primevue/issues/6696)
- Menu components: Blocked aria-hidden on an element error [\#6692](https://github.com/primefaces/primevue/issues/6692)
- DatePicker 12am to 12pm issue [\#6686](https://github.com/primefaces/primevue/issues/6686)
- Slider range operation bug [\#6649](https://github.com/primefaces/primevue/issues/6649)
- ListBox: @filter event must return filter options [\#6641](https://github.com/primefaces/primevue/issues/6641)
- Metergroup: Required icon [\#6639](https://github.com/primefaces/primevue/issues/6639)
- Drawer: missing 'after-hide' emit [\#6621](https://github.com/primefaces/primevue/issues/6621)
- InputText: Many props have a default of undefined but the docs say the default is null [\#6593](https://github.com/primefaces/primevue/issues/6593)
- ButtonGroup: Invalid alignement of icon and non-icon buttons [\#6556](https://github.com/primefaces/primevue/issues/6556)
- Select: throws an error with auto-filter-focus [\#6539](https://github.com/primefaces/primevue/issues/6539)
- DynamicDialog: Underlying dialog not destroyed [\#6535](https://github.com/primefaces/primevue/issues/6535)
- ConfirmPopup: Not positioned correctly when not used inside <button> [\#6525](https://github.com/primefaces/primevue/issues/6525)
- InputOtp: iOS Autocomplete Jumbled [\#6317](https://github.com/primefaces/primevue/issues/6317)
- Listbox: OptionGroup disappear with filter [\#6233](https://github.com/primefaces/primevue/issues/6233)
- Slider: "Unable to preventDefault inside passive event listener invocation" in primevue_slider.js (touchmove) [\#5745](https://github.com/primefaces/primevue/issues/5745)
- Editor: v-model not updating with Quill v2.0 [\#5606](https://github.com/primefaces/primevue/issues/5606)
- TreeSelect: appendTo="self" and selectionMode="checkbox" causes panel to close on click on node arrows [\#4927](https://github.com/primefaces/primevue/issues/4927)
- Textarea: AutoResize not working if the value is changed while textarea is not visible [\#4510](https://github.com/primefaces/primevue/issues/4510)

## [4.2.1](https://github.com/primefaces/primevue/tree/4.2.1) (2024-11-01)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.2.0...4.2.1)

**Fixed bugs:**

- Forms: Incorrect main/module/exports error when importing [\#6709](https://github.com/primefaces/primevue/issues/6709)
- Forms: Could not resolve "valibot" [\#6708](https://github.com/primefaces/primevue/issues/6708)

## [4.2.0](https://github.com/primefaces/primevue/tree/4.2.0) (2024-11-01)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.1.1...4.2.0)

**Deprecated:**

- Deprecate plain button in favor of Contrast [\#6657](https://github.com/primefaces/primevue/issues/6657)

**Fixed bugs:**

- Remove unused Galleria mask design tokens [\#6670](https://github.com/primefaces/primevue/issues/6670)
- MegaMenu typo in Style [\#6669](https://github.com/primefaces/primevue/issues/6669)
- Remove TieredMenu Unused Design Tokens [\#6668](https://github.com/primefaces/primevue/issues/6668)
- AutoComplete Chip Focus Design token name is wrong [\#6667](https://github.com/primefaces/primevue/issues/6667)
- MegaMenu and Menubar token names wrong [\#6666](https://github.com/primefaces/primevue/issues/6666)
- Paginator: Responsive paginator shows all variations at same time instead of at each breakpoint [\#6595](https://github.com/primefaces/primevue/issues/6595)
- DatePicker: toggleCallback missing on dropdownbutton slot [\#6543](https://github.com/primefaces/primevue/issues/6543)
- @primevue/core: Inconsistency of vue version in peerdependencies [\#6492](https://github.com/primefaces/primevue/issues/6492)

**Implemented New Features and Enhancements:**

- Stepper: design-token updates [\#6707](https://github.com/primefaces/primevue/issues/6707)
- Update the bundle of primevue package [\#6702](https://github.com/primefaces/primevue/issues/6702)
- Update the bundle of @primevue/icons package [\#6701](https://github.com/primefaces/primevue/issues/6701)
- Improve support for Buttons in InputGroupAddon [\#6695](https://github.com/primefaces/primevue/issues/6695)
- New Component: FormField [\#6693](https://github.com/primefaces/primevue/issues/6693)
- RTL support for Misc components [\#6691](https://github.com/primefaces/primevue/issues/6691)
- RTL support for Media components [\#6690](https://github.com/primefaces/primevue/issues/6690)
- RTL support for Message components [\#6689](https://github.com/primefaces/primevue/issues/6689)
- Breadcrumb: separatorIcon pt added [\#6688](https://github.com/primefaces/primevue/issues/6688)
- New paginatorcontainer slots for Data components [\#6683](https://github.com/primefaces/primevue/issues/6683)
- RTL support for Menu components [\#6682](https://github.com/primefaces/primevue/issues/6682)
- RTL support for Dialog components [\#6681](https://github.com/primefaces/primevue/issues/6681)
- RTL support for Button components [\#6680](https://github.com/primefaces/primevue/issues/6680)
- Paginator: Headless mode [\#6679](https://github.com/primefaces/primevue/issues/6679)
- RTL support for Data components [\#6677](https://github.com/primefaces/primevue/issues/6677)
- Update surface tones of input borders in dark mode for Aura and Lara [\#6673](https://github.com/primefaces/primevue/issues/6673)
- New Design Token for invalid placeholder color [\#6672](https://github.com/primefaces/primevue/issues/6672)
- maxSelectedLabels for TreeSelect [\#6671](https://github.com/primefaces/primevue/issues/6671)
- Listbox - Remove Unused Tokens [\#6665](https://github.com/primefaces/primevue/issues/6665)
- FileUpload New Design Tokens [\#6664](https://github.com/primefaces/primevue/issues/6664)
- FileUpload message overlaps with ProgressBar [\#6663](https://github.com/primefaces/primevue/issues/6663)
- Remove unused tokens from DatePicker [\#6662](https://github.com/primefaces/primevue/issues/6662)
- Drawer - Design Tokens [\#6661](https://github.com/primefaces/primevue/issues/6661)
- Avatar - New Design Tokens [\#6659](https://github.com/primefaces/primevue/issues/6659)
- Add variant prop to Button [\#6658](https://github.com/primefaces/primevue/issues/6658)
- Design tokens for InputOtp [\#6656](https://github.com/primefaces/primevue/issues/6656)
- Design tokens of clear icon for Selects [\#6655](https://github.com/primefaces/primevue/issues/6655)
- New Clear Icon prop and slot [\#6654](https://github.com/primefaces/primevue/issues/6654)
- Size and Variants for Message component [\#6653](https://github.com/primefaces/primevue/issues/6653)
- Size prop support for more components [\#6651](https://github.com/primefaces/primevue/issues/6651)
- RTL support for Panel components [\#6647](https://github.com/primefaces/primevue/issues/6647)
- RTL support for Form components [\#6636](https://github.com/primefaces/primevue/issues/6636)
- RTL support for showcase [\#6635](https://github.com/primefaces/primevue/issues/6635)
- Check form components affected by p-invalid class[\#6631](https://github.com/primefaces/primevue/issues/6631)
- New Component: CheckboxGroup [\#6613](https://github.com/primefaces/primevue/issues/6613)
- New Component: RadioButtonGroup [\#6612](https://github.com/primefaces/primevue/issues/6612)
- Add form support to components [\#6603](https://github.com/primefaces/primevue/issues/6603)
- Add an uncontrolled structure to components [\#6602](https://github.com/primefaces/primevue/issues/6602)
- New Component: Form [\#6601](https://github.com/primefaces/primevue/issues/6601)
- ContextMenu: Y axis collision detection not working for submenus [\#6348](https://github.com/primefaces/primevue/issues/6348)

## [4.1.1](https://github.com/primefaces/primevue/tree/4.1.1) (2024-10-16)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.1.0...4.1.1)

**Fixed bugs:**

- Wrong token binding on inputtext [\#6590](https://github.com/primefaces/primevue/issues/6590)
- Table sort icon not aligned properly [\#6588](https://github.com/primefaces/primevue/issues/6588)
- Improve nested overlays in mobile [\#6587](https://github.com/primefaces/primevue/issues/6587)
- MegaMenu ignores token [\#6585](https://github.com/primefaces/primevue/issues/6585)
- AutoComplete is using token from the deprecated InputChips [\#6584](https://github.com/primefaces/primevue/issues/6584)
- Disabled ToggleSwitch in dark mode is same as non-disabled [\#6583](https://github.com/primefaces/primevue/issues/6583)
- Slider track border radius token not applied [\#6582](https://github.com/primefaces/primevue/issues/6582)
- Tree filter too close, visual bug[\#6581](https://github.com/primefaces/primevue/issues/6581)
- Invalid CSS in DataTable and TreeTable [\#6580](https://github.com/primefaces/primevue/issues/6580)
- MegaMenu: mobile visual defects [\#6578](https://github.com/primefaces/primevue/issues/6578)
- Typo in splitter.js (autocomplete err) [\#6570](https://github.com/primefaces/primevue/issues/6570)
- CascadeSelect: focus defect on mouse enter [\#6538](https://github.com/primefaces/primevue/issues/6538)
- Typescript support is non-existent in All components [\#6152](https://github.com/primefaces/primevue/issues/6152)
- DataTable - button click in a cell propagates to row-click [\#6472](https://github.com/primefaces/primevue/issues/6472)
- No intellisense for props, slots etc. with v4 [\#5903](https://github.com/primefaces/primevue/issues/5903)

## [4.1.0](https://github.com/primefaces/primevue/tree/4.1.0) (2024-10-07)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.7...4.1.0)

**Fixed bugs:**

- InputMask: type bug [\#6505](https://github.com/primefaces/primevue/issues/6505)
- DataTable: row focus defects [\#6488](https://github.com/primefaces/primevue/issues/6488)
- MultiSelect: maxSelectedLabels is not working with display chip [\#6485](https://github.com/primefaces/primevue/issues/6485)
- DatePicker: focus on wrong element when adding "Select" component to footer slot of DatePicker [\#6482](https://github.com/primefaces/primevue/issues/6482)
- PanelMenu: Incorrect name in PanelMenuPassThroughOptions documentation [\#6475](https://github.com/primefaces/primevue/issues/6475)
- Dialog: @media styles do not append right component [\#6474](https://github.com/primefaces/primevue/issues/6474)
- ContextMenu uses unreliable way to determine scrollTop [\#6469](https://github.com/primefaces/primevue/issues/6469)
- Drawer: emit event(update:modelValue) should be update:visible in docs [\#6464](https://github.com/primefaces/primevue/issues/6464)
- CascadeSelect: aria-hidden w3c defect [\#6458](https://github.com/primefaces/primevue/issues/6458)
- DataTable: missing unstyled prop in component: HeaderCheckbox.vue [\#6444](https://github.com/primefaces/primevue/issues/6444)
- Select: v-tooltip does not work [\#6443](https://github.com/primefaces/primevue/issues/6443)
- Galleria: Global ripple effect breaks Galleria [\#6438](https://github.com/primefaces/primevue/issues/6438)
- Select: Selecting 0 option shows empty in select [\#6437](https://github.com/primefaces/primevue/issues/6437)
- DataTable: column resize does not work anymore [\#6436](https://github.com/primefaces/primevue/issues/6436)
- PT implementation defects [\#6435](https://github.com/primefaces/primevue/issues/6435)
- Select component does not handle focus via label with labelId [\#6432](https://github.com/primefaces/primevue/issues/6432)
- Select: autoFilterFocus stuck when switching between Selects [\#6420](https://github.com/primefaces/primevue/issues/6420)
- Password: autofocus does not work [\#6413](https://github.com/primefaces/primevue/issues/6413)
- ScrollTop: pt implementation defect [\#6412](https://github.com/primefaces/primevue/issues/6412)
- Scoped style (dt props) does not attach to page with correct selector [\#6408](https://github.com/primefaces/primevue/issues/6408)
- InputOtp: clicking on a selected filled box prevents you removing [\#6373](https://github.com/primefaces/primevue/issues/6373)
- Datepicker: No manual input in view = 'year' [\#6347](https://github.com/primefaces/primevue/issues/6347)
- Icons Missing [\#6335](https://github.com/primefaces/primevue/issues/6335)
- MultiSelect: Translation does not take effect [\#6303](https://github.com/primefaces/primevue/issues/6303)
- VirtualScroller: Unstyled mode broke core functionality [\#6294](https://github.com/primefaces/primevue/issues/6294)
- InputMask: input is getting mixed up [\#6276](https://github.com/primefaces/primevue/issues/6276)
- Menu componets: Design Token does not work[\#6129](https://github.com/primefaces/primevue/issues/6129)
- DataTable: reorder with drag and drop not working as expected [\#6014](https://github.com/primefaces/primevue/issues/6014)
- Nuxt autoimport component prefix: add typescript dynamic name support [\#6007](https://github.com/primefaces/primevue/issues/6007)
- DataTable: Pass Through keys for emptyMessage not working [\#6006](https://github.com/primefaces/primevue/issues/6006)
- TreeSelect: expandedKeys not working [\#5967](https://github.com/primefaces/primevue/issues/5967)
- Splitter/SplitterPanel: size not updated [\#5463](https://github.com/primefaces/primevue/issues/5463)
- Dropdown & MultiSelect: Disabled selected value [\#4431](https://github.com/primefaces/primevue/issues/4431)

**Implemented New Features and Enhancements:**

- TreeSelect: new option slot [\#6534](https://github.com/primefaces/primevue/issues/6534)
- CascadeSelect: move move/enter behavior changes [\#6533](https://github.com/primefaces/primevue/issues/6533)
- Add extend keyword to extend css variables to presets [\#6524](https://github.com/primefaces/primevue/issues/6524)
- ContextMenu / TieredMenu / CascadeSelect: responsiveness updates [\#6522](https://github.com/primefaces/primevue/issues/6522)
- New Component: ImageCompare [\#6518](https://github.com/primefaces/primevue/issues/6518)
- Tree: new header and footer slots [\#6513](https://github.com/primefaces/primevue/issues/6513)
- ToggleButton: handle element added [\#6511](https://github.com/primefaces/primevue/issues/6511)
- New Material Design Based Theme [\#6508](https://github.com/primefaces/primevue/issues/6508)
- New Design Tokens [\#6507](https://github.com/primefaces/primevue/issues/6507)
- CascadeSelect: new header and footer slots [\#6504](https://github.com/primefaces/primevue/issues/6504)
- New KeyFilter directive [\#6503](https://github.com/primefaces/primevue/issues/6503)
- TreeTable: ContextMenu implementation [\#6489](https://github.com/primefaces/primevue/issues/6489)
- TreeSelect: Filter and lazy modes [\#6481](https://github.com/primefaces/primevue/issues/6481)
- SpeedDial: itemicon slot [\#6463](https://github.com/primefaces/primevue/issues/6463)
- ConfirmDialog: improve options [\#6456](https://github.com/primefaces/primevue/issues/6456)
- Add css keyword to themes section to inject custom styles [\#6452](https://github.com/primefaces/primevue/issues/6452)
- Move primitive and semantic options of themes to separate modules [\#6425](https://github.com/primefaces/primevue/issues/6425)
- New IftaLabel component [\#6419](https://github.com/primefaces/primevue/issues/6419)
- New Float Label Variants [\#6418](https://github.com/primefaces/primevue/issues/6418)
- Tree: Allow filterBy to be a getter [\#6374](https://github.com/primefaces/primevue/issues/6374)
- Tree: no slot's data for nodetoggleicon template when node is loading [\#6371](https://github.com/primefaces/primevue/issues/6371)
- Nuxt plugin types break if I add @primevue/nuxt-module to modules [\#6289](https://github.com/primefaces/primevue/issues/6289)
- DataTable: Column Group Filters [\#6151](https://github.com/primefaces/primevue/issues/6151)
- DataTable: add prop showHeaders [\#5949](https://github.com/primefaces/primevue/issues/5949)

## [4.0.7](https://github.com/primefaces/primevue/tree/4.0.7) (2024-09-11)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.6...4.0.7)

**Fixed bugs:**

- SelectButton pt name correction [\#6382](https://github.com/primefaces/primevue/issues/6382)
- ToggleButton: aria-label and aria-labelledby not observed [\#6377](https://github.com/primefaces/primevue/issues/6377)
- FileUpload: Fix type of FileUploadState.messages [\#6370](https://github.com/primefaces/primevue/issues/6370)
- TreeTable: click and arrow key defect [\#6368](https://github.com/primefaces/primevue/issues/6368)
- Dialog: no dragstart event to accompany dragend [\#6357](https://github.com/primefaces/primevue/issues/6357)
- Dialog: dragging state is not reset when closed while dragging [\#6356](https://github.com/primefaces/primevue/issues/6356)
- InputOtp: IntegerOnly mode accepts "space" [\#6353](https://github.com/primefaces/primevue/issues/6353)
- InputOtp: Pasting adds an extra character [\#6351](https://github.com/primefaces/primevue/issues/6351)
- DatePicker: Pick month does not work [\#6342](https://github.com/primefaces/primevue/issues/6342)
- DataTable: Cannot set properties of null (setting 'tabIndex') [\#6323](https://github.com/primefaces/primevue/issues/6323)
- DatePicker showOtherMonths wrong behaviour [\#6307](https://github.com/primefaces/primevue/issues/6307)
- Click outside only when not modal [\#6284](https://github.com/primefaces/primevue/pull/6284)
- Select: Chinese IME input will be stopped in filter input element [\#6279](https://github.com/primefaces/primevue/issues/6279)

## [4.0.6](https://github.com/primefaces/primevue/tree/4.0.6) (2024-09-10)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.5...4.0.6)

**Fixed bugs:**

- animate-slidedown fails when a Tailwind prefix is used [\#6365](https://github.com/primefaces/primevue/issues/6365)
- Tree: wrong pt and classname for InputText [\#6301](https://github.com/primefaces/primevue/issues/6301)
- pt pcFilterIconContainer defects on form components [\#6286](https://github.com/primefaces/primevue/issues/6286)
- File Upload: Basic Mode does not apply buttonProps [\#6255](https://github.com/primefaces/primevue/issues/6255)
- Multiple Components: Augment vue using declare module 'vue' instead of declare module '@vue/runtime-core' (and declare module 'vue/types/vue') to avoid compilebreaks [\#6199](https://github.com/primefaces/primevue/issues/6199)

## [4.0.5](https://github.com/primefaces/primevue/tree/4.0.5) (2024-08-23)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.4...4.0.5)

**Fixed bugs:**

- aria-hidden errors on browsers [\#6269](https://github.com/primefaces/primevue/issues/6269)
- Accordion, Button, Step, Tab: Invalid prop warnings when component object passed to as prop [\#6266](https://github.com/primefaces/primevue/issues/6266)
- Carousel: Index is undefined in PassThroughOptions [\#6264](https://github.com/primefaces/primevue/issues/6264)
- Drawer: Nested drawer dissmis [\#6262](https://github.com/primefaces/primevue/issues/6262)
- Accordion and Tabs value prop type definion extensions [\#6252](https://github.com/primefaces/primevue/issues/6252)
- DatePicker: responsiveOptions doesn't work [\#6250](https://github.com/primefaces/primevue/issues/6250)
- ScrollTop: ScrollTop button not displayed correctly when ripple effect is enabled [\#6249](https://github.com/primefaces/primevue/issues/6249)
- Stepper: activateCallback has incorrect signature [\#6225](https://github.com/primefaces/primevue/issues/6225)
- SpeedDial: Invalid aria-controls value being set in list items [\#6221](https://github.com/primefaces/primevue/issues/6221)
- InputNumber: Buttons disappear when clicked if inside of an InputGroup [\#6212](https://github.com/primefaces/primevue/issues/6212)
- IconField: 'iconfield' does not exist in type 'PrimeVuePTOptions' [\#6206](https://github.com/primefaces/primevue/issues/6206)
- DatePicker: switching to year view when modelValue is populated [\#6203](https://github.com/primefaces/primevue/issues/6203)
- Select: In case of Filter and AutoFocusFilter enabled focus is lost [\#6194](https://github.com/primefaces/primevue/issues/6194)
- InputOtp - allow NumpadEnter event [\#6182](https://github.com/primefaces/primevue/issues/6182)
- [MenuBar]: Slow performance [\#6164](https://github.com/primefaces/primevue/issues/6164)
- Dialog: [V4] When it non-fixed, it will cause the appendTo target shrink or joggled. [\#6160](https://github.com/primefaces/primevue/issues/6160)
- Menu section: PassThrough context.item has not right MenuItem entry [\#6055](https://github.com/primefaces/primevue/issues/6055)
- FileUpload v4.0.0-beta.3: Subsequent file selections no longer possible in basic mode (regression from v4.0.0-beta.2) [\#5748](https://github.com/primefaces/primevue/issues/5748)
- InputMask number repeat [\#3623](https://github.com/primefaces/primevue/issues/3623)

## [4.0.4](https://github.com/primefaces/primevue/tree/4.0.4) (2024-08-02)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.3...4.0.4)

**Fixed bugs:**

- Button: undeclared color styles of outlined buttons [\#6169](https://github.com/primefaces/primevue/issues/6169)
- Tree: none selectable child defect in selection mode [\#6159](https://github.com/primefaces/primevue/issues/6159)
- DataTable: paginator passthrough is now pcPaginator [\#6154](https://github.com/primefaces/primevue/issues/6154)
- DatePicker: Icon is visible when calendar is on inline mode [\#6153](https://github.com/primefaces/primevue/issues/6153)
- Fieldset: toggle icon does not work if there is a legend slot [\#6144](https://github.com/primefaces/primevue/issues/6144)
- Button component disabled No transition effect[\#6140](https://github.com/primefaces/primevue/issues/6140)
- Dialog: Missing 're-focus original element on close' fix in v4 that was present in v3 [\#6139](https://github.com/primefaces/primevue/issues/6139)
- ButtonGroup: Missing buttongroup in PrimeVuePTOptions [\#6137](https://github.com/primefaces/primevue/issues/6137)
- lara and nora presets import virtualscroller from aura preset [\#6128](https://github.com/primefaces/primevue/issues/6128)
- DatePicker: Day name didn't show when i set locale manualy [\#6125](https://github.com/primefaces/primevue/issues/6125)
- Datepicker: Month selection highlighting problem in range mode [\#6120](https://github.com/primefaces/primevue/issues/6120)
- Dialog: Release mouse outside the dialog would close the dialog when dismissableMask is true. [\#6116](https://github.com/primefaces/primevue/issues/6116)
- DatePicker: cannot type an end date that is the same as the start date. [\#6106](https://github.com/primefaces/primevue/issues/6106)
- InputMask: Missing id property [\#6100](https://github.com/primefaces/primevue/issues/6100)
- DatePicker: can not typing same date using input [\#6081](https://github.com/primefaces/primevue/issues/6081)
- StepList and StepPanels: Different type than of Stepper, Step and StepPanel [\#6059](https://github.com/primefaces/primevue/issues/6059)
- Drawer: Footer Div/Slot added by default [\#6048](https://github.com/primefaces/primevue/issues/6048)
- ContextMenu: The item action is not executed on Enter key when the "item" template has been redefined [\#5983](https://github.com/primefaces/primevue/issues/5983)
- Popover - Misplaced arrow [\#5915](https://github.com/primefaces/primevue/issues/5915)
- Calendar: Keydown Event not firing [\#5870](https://github.com/primefaces/primevue/issues/5870)
- InputOtp: (integerOnly) No response when pressing Enter and Tab [\#5386](https://github.com/primefaces/primevue/issues/5386)

## [4.0.3](https://github.com/primefaces/primevue/tree/4.0.3) (2024-07-30)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.2...4.0.3)

**Fixed bugs:**

- InputMask: Fluid injection defect [\#6150](https://github.com/primefaces/primevue/issues/6150)
- Misalignment of icons due to Tailwind Preflight [\#6148](https://github.com/primefaces/primevue/issues/6148)
- ColorPicker: [Vue warn]: Property "inputId" was accessed during render but is not defined on instance. [\#6135](https://github.com/primefaces/primevue/issues/6135)

## [4.0.2](https://github.com/primefaces/primevue/tree/4.0.2) (2024-07-26)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.1...4.0.2)

**Fixed bugs:**

- Toast: Unstyled prop does not affect ToastMessage [\#6098](https://github.com/primefaces/primevue/issues/6098)
- ConfirmDialog and ConfirmPopup: Missing accept/reject labels [\#6075](https://github.com/primefaces/primevue/issues/6075)

**Implemented New Features and Enhancements:**

- Provide Fluid component [\#6122](https://github.com/primefaces/primevue/issues/6122)
- ColorPicker: click on label does not open the color picker[\#6044](https://github.com/primefaces/primevue/issues/6044)

## [4.0.1](https://github.com/primefaces/primevue/tree/4.0.1) (2024-07-22)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0...4.0.1)

**Fixed bugs:**

- SELECT: hide clear button when options is empty in Dropdown [\#6084](https://github.com/primefaces/primevue/issues/6084)
- Lara theme type [\#6065](https://github.com/primefaces/primevue/issues/6065)
- Paginator: v4 page buttons still have PrimeVue classes in unstyled mode [\#6064](https://github.com/primefaces/primevue/issues/6064)
- TabList: ripple warn when Ripple is not been registered. [\#6057](https://github.com/primefaces/primevue/issues/6057)
- Stepper: Nested Components are re-mounted [\#6052](https://github.com/primefaces/primevue/issues/6052)
- Tree: filter pt implementation defect [\#6043](https://github.com/primefaces/primevue/issues/6043)
- DataTable: Frozen Columns, the headers of fixed columns will overlap. [\#6036](https://github.com/primefaces/primevue/issues/6036)
- IconField: Does not support multiple icons[\#6034](https://github.com/primefaces/primevue/issues/6034)
- InputMask: Passed props are not set [\#6025](https://github.com/primefaces/primevue/issues/6025)
- BaseComponent: Missing import 'isFunction' [\#6024](https://github.com/primefaces/primevue/issues/6024)
- Failed to use Primevue 4 with yarn [\#6020](https://github.com/primefaces/primevue/issues/6020)
- TABS: Globally enabling Ripple breaks Scrollable Tabs [\#6017](https://github.com/primefaces/primevue/issues/6017)
- Accordion: Theming content background not working [\#5997](https://github.com/primefaces/primevue/issues/5997)
- AutoComplete: Combining multiple + dropdown does not work [\#5881](https://github.com/primefaces/primevue/issues/5881)

## [4.0.0](https://github.com/primefaces/primevue/tree/4.0.0) (2024-07-03)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0-rc.3...4.0.0)

**Breaking Changes:**

- Remove .p-fluid and add new fluid property [\#6000](https://github.com/primefaces/primevue/issues/6000)

**Fixed bugs:**

- options.resolve is not a function in auto-import-resolver package [\#6003](https://github.com/primefaces/primevue/issues/6003)
- DataTable: highlightOnSelect single selection defect [\#6002](https://github.com/primefaces/primevue/issues/6002)
- Stepper: linear mode disabled header defect [\#6001](https://github.com/primefaces/primevue/issues/6001)
- OverlayBadge: Failed to resolve component: Badge [\#5991](https://github.com/primefaces/primevue/issues/5991)
- Nuxt module component autoImport in v4 rc3 doesn't work with component prefixes [\#5980](https://github.com/primefaces/primevue/issues/5980)
- MultiSelect: 'v-if="filter"' erroneously removed in v4 [\#5978](https://github.com/primefaces/primevue/issues/5978)

**Implemented New Features and Enhancements:**

- Add as and asChild property to Button [\#5996](https://github.com/primefaces/primevue/issues/5996)

## [4.0.0-rc.3](https://github.com/primefaces/primevue/tree/4.0.0-rc.3) (2024-06-27)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0-rc.2...4.0.0-rc.3)

**Fixed bugs:**

- MultiSelect: missing loadingIcon passthrough option in documentation [\#5964](https://github.com/primefaces/primevue/issues/5964)
- [Core]: PrimeVue 4 is causing a memory leak [\#5957](https://github.com/primefaces/primevue/issues/5957)
- InputMask: FloatLabel defects [\#5956](https://github.com/primefaces/primevue/issues/5956)
- Checkbox: Icon slot does not provide information about the indeterminate state [\#5942](https://github.com/primefaces/primevue/issues/5942)
- Tooltip: the arrow can not show in bottom position. [\#5916](https://github.com/primefaces/primevue/issues/5916)
- BlockUI bug SSR: when I reload the page I get the following error [\#5912](https://github.com/primefaces/primevue/issues/5912)
- InputMask: v4 no classes are passed to target inpud component [\#5908](https://github.com/primefaces/primevue/issues/5908)
- DatePicker: not highlight range of month in monthMode [\#5886](https://github.com/primefaces/primevue/issues/5886)
- DatePicker: not highlight range of year in yearMode [\#5833](https://github.com/primefaces/primevue/issues/5833)
- CSS not Server Side Rendered with PrimeVue 4 / Nuxt 3 [\#5945](https://github.com/primefaces/primevue/issues/5945)

**Implemented New Features and Enhancements:**

- Improve utils methods in all packages [\#5968](https://github.com/primefaces/primevue/issues/5968)
- Add autoImport option to @primevue/nuxt-module [\#5935](https://github.com/primefaces/primevue/issues/5935)

## [4.0.0-rc.2](https://github.com/primefaces/primevue/tree/4.0.0-rc.2) (2024-06-16)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0-rc.1...4.0.0-rc.2)

**Fixed bugs:**

- Themes are installed by the wrong package [\#5898](https://github.com/primefaces/primevue/issues/5898)
- [nuxt] Could not access pt. The only available runtime config keys on the client side are public and app [\#5895](https://github.com/primefaces/primevue/issues/5895)
- primevue@4.0.0-rc.1 incorrect background colors [\#5894](https://github.com/primefaces/primevue/issues/5894)
- Menu: Using the popup mode, the menu has a transparent background in dark mode. [\#5890](https://github.com/primefaces/primevue/issues/5890)
- Select: Invalid padding calc when clear icon present [\#5847](https://github.com/primefaces/primevue/issues/5847)

## [4.0.0-beta.5](https://github.com/primefaces/primevue/tree/4.0.0-beta.5) (2024-06-12)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0-beta.4...4.0.0-beta.5)

**Deprecated:**

- Deprecated InlineMessage component [\#5843](https://github.com/primefaces/primevue/issues/5843)
- Deprecated StepperPanel component [\#5824](https://github.com/primefaces/primevue/issues/5824)

**Breaking Changes:**

- Message props default value changes [\#5844](https://github.com/primefaces/primevue/issues/5844)
- Removed deprecated slots and props [\#5841](https://github.com/primefaces/primevue/issues/5841)

**Implemented New Features and Enhancements:**

- New helper components for Stepper [\#5823](https://github.com/primefaces/primevue/issues/5823)
- Convert PrimeVue to monorepo packages [\#5871](https://github.com/primefaces/primevue/issues/5871)

**Fixed bugs:**

- primevue@4.0.0-beta.4: primevue/themes/aura/overlaybadge cannot be resolved [\#5811](https://github.com/primefaces/primevue/issues/5811)

## [4.0.0-beta.4](https://github.com/primefaces/primevue/tree/4.0.0-beta.4) (2024-05-30)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0-beta.3...4.0.0-beta.4)

**Deprecated:**

- Deprecate inputStyle and add inputVariant [\#5786](https://github.com/primefaces/primevue/issues/5786)

**Breaking Changes:**

- Deprecated slots [\#5785](https://github.com/primefaces/primevue/issues/5785)
- Renamed properties [\#5784](https://github.com/primefaces/primevue/issues/5784)
- Add OverlayBadge component, deprecate Badge directive [\#5769](https://github.com/primefaces/primevue/issues/5769)
- Dialog: rtl removed [\#5763](https://github.com/primefaces/primevue/issues/5763)

**Fixed bugs:**

- Popover: Arrow offset uses wrong design token [\#5755](https://github.com/primefaces/primevue/issues/5755)
- InputNumber: Missing type declaration for buttons leads to form submit on button click [\#5700](https://github.com/primefaces/primevue/issues/5700)
- DatePicker: Focus blink on select [\#5676](https://github.com/primefaces/primevue/issues/5676)

**Implemented New Features and Enhancements:**

- Load primitive, semantic and global styles in styled mode [\#5789](https://github.com/primefaces/primevue/issues/5789)
- [All components]: TypeScript emits are in an incompatible format with defineEmits [\#5405](https://github.com/primefaces/primevue/issues/5405)

## [4.0.0-beta.3](https://github.com/primefaces/primevue/tree/4.0.0-beta.3) (2024-05-15)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0-beta.2...4.0.0-beta.3)

**Deprecated:**

- Deprecated: InputChips [\#5744](https://github.com/primefaces/primevue/issues/5744)

**Breaking Changes:**

- Removed Utility Classes [\#5727](https://github.com/primefaces/primevue/issues/5727)
- Fieldset: #legend updates [\#5719](https://github.com/primefaces/primevue/issues/5719)
- Table: remove responsiveLayout [\#5717](https://github.com/primefaces/primevue/issues/5717)
- FileUpload: basic mode button label & file label changes [\#5715](https://github.com/primefaces/primevue/issues/5715)
- Remove Drawer size [\#5714](https://github.com/primefaces/primevue/issues/5714)
- Deprecated emits [\#5721](https://github.com/primefaces/primevue/issues/5721)
- Deprecated properties [\#5683](https://github.com/primefaces/primevue/issues/5683)
- Deprecated slots [\#5682](https://github.com/primefaces/primevue/issues/5682)
- Key name changes for pt property [\#5681](https://github.com/primefaces/primevue/issues/5681)

**Fixed bugs:**

- Tabs: Ripple Position [\#5690](https://github.com/primefaces/primevue/issues/5690)
- [v4 beta1: InputMask] Placeholder attribute does not work [\#5664](https://github.com/primefaces/primevue/issues/5664)
- Accordion: "Invalid watch source: undefined" and "Failed to resolve directive: ripple" [\#5733](https://github.com/primefaces/primevue/issues/5733)
- v4: TypeError: Theme\_\_default.default.setPreset is not a function when configuring theme configuration using definePreset in vitest tests [\#5689](https://github.com/primefaces/primevue/issues/5689)

**Implemented New Features and Enhancements:**

- Remove PrimeVueStyled and PrimeVueUnstyled plugins [\#5728](https://github.com/primefaces/primevue/issues/5728)
- Small sized Badge [\#5729](https://github.com/primefaces/primevue/issues/5729)

## [4.0.0-beta.2](https://github.com/primefaces/primevue/tree/4.0.0-beta.2) (2024-05-03)

[Full Changelog](https://github.com/primefaces/primevue/compare/4.0.0-beta.1...4.0.0-beta.2)

**Deprecated:**

- Deprecated: TabView [\#5622](https://github.com/primefaces/primevue/issues/5622)

**Breaking Changes:**

- TreeTable CSS and responsive structure improvements [\#5678](https://github.com/primefaces/primevue/issues/5678)
- Deprecated properties [\#5662](https://github.com/primefaces/primevue/issues/5662)
- Deprecated slots [\#5661](https://github.com/primefaces/primevue/issues/5618)
- Legacy & New alternative components [\#5612](https://github.com/primefaces/primevue/issues/5612)
- Key name changes for pt property [\#5592](https://github.com/primefaces/primevue/issues/5592)
- Remove legacy CSS rules [\#5493](https://github.com/primefaces/primevue/issues/5493)
- warning property name changed as warn [\#5591](https://github.com/primefaces/primevue/issues/5591)
- Removed properties [\#5553](https://github.com/primefaces/primevue/issues/5553)
- Component Replacements [\#5548](https://github.com/primefaces/primevue/issues/5548)
- Remove iconPosition from IconField [\#5547](https://github.com/primefaces/primevue/issues/5547)

**Fixed bugs:**

- FileUpload v4: disabled property does not disable choose button (it only disables the choose functionality) [\#5529](https://github.com/primefaces/primevue/issues/5529)

**Implemented New Features and Enhancements:**

- Add sideEffects: false to nested package.json files on components [\#5668](https://github.com/primefaces/primevue/issues/5668)
- Remove base option from theme config [\#5667](https://github.com/primefaces/primevue/issues/5667)
- Reimplement: Accordion [\#5643](https://github.com/primefaces/primevue/issues/5643)
- New Component: Tabs [\#5621](https://github.com/primefaces/primevue/issues/5621)

## [4.0.0-beta.1](https://github.com/primefaces/primevue/tree/4.0.0-beta.1)

[Full Changelog](https://github.com/primefaces/primevue/compare/3.51.0...4.0.0-beta.1)

**Breaking Changes:**

- New Styled Mode Implementation [\#5501](https://github.com/primefaces/primevue/issues/5662)
- Remove changeTheme method from $primevue [\#5000](https://github.com/primefaces/primevue/issues/5000)
- Remove deprecated Tailwind Pass Through Object [\#5478](https://github.com/primefaces/primevue/issues/5478)
- Removed components [\#5476](https://github.com/primefaces/primevue/issues/5662)
- Remove primevue[.min].css from build [\#5481](https://github.com/primefaces/primevue/issues/5481)
- Remove themes folder from resources [\#5477](https://github.com/primefaces/primevue/issues/5477)
- Core behavior changes [\#5437](https://github.com/primefaces/primevue/issues/5437)
- Component Replacements [\#5426](https://github.com/primefaces/primevue/issues/5426)

**Implemented New Features and Enhancements:**

- Add dt props to all components and directives [\#5506](https://github.com/primefaces/primevue/issues/5506)
- Add PrimeVueStyled and PrimeVueUnstyled plugins [\#5502](https://github.com/primefaces/primevue/issues/5502)
- Checkbox: new indeterminate state [\#5479](https://github.com/primefaces/primevue/issues/5479)
