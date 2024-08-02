import type { DefaultPassThrough, PassThrough } from '@primevue/core';
import type { PrimeVueCSPOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from '@primevue/core/config';
import type { AccordionPassThroughOptions } from 'primevue/accordion';
import type { AccordionContentPassThroughOptions } from 'primevue/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from 'primevue/accordionheader';
import type { AccordionPanelPassThroughOptions } from 'primevue/accordionpanel';
import type { AccordionTabPassThroughOptions } from 'primevue/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from 'primevue/animateonscroll';
import type { AutoCompletePassThroughOptions } from 'primevue/autocomplete';
import type { AvatarPassThroughOptions } from 'primevue/avatar';
import type { AvatarGroupPassThroughOptions } from 'primevue/avatargroup';
import type { BadgePassThroughOptions } from 'primevue/badge';
import type { BadgeDirectivePassThroughOptions } from 'primevue/badgedirective';
import type { BlockUIPassThroughOptions } from 'primevue/blockui';
import type { BreadcrumbPassThroughOptions } from 'primevue/breadcrumb';
import type { ButtonPassThroughOptions } from 'primevue/button';
import type { ButtonGroupPassThroughOptions } from 'primevue/buttongroup';
import type { CalendarPassThroughOptions } from 'primevue/calendar';
import type { CardPassThroughOptions } from 'primevue/card';
import type { CarouselPassThroughOptions } from 'primevue/carousel';
import type { CascadeSelectPassThroughOptions } from 'primevue/cascadeselect';
import type { ChartPassThroughOptions } from 'primevue/chart';
import type { CheckboxPassThroughOptions } from 'primevue/checkbox';
import type { ChipPassThroughOptions } from 'primevue/chip';
import type { ChipsPassThroughOptions } from 'primevue/chips';
import type { ColorPickerPassThroughOptions } from 'primevue/colorpicker';
import type { ColumnPassThroughOptions } from 'primevue/column';
import type { ColumnGroupPassThroughOptions } from 'primevue/columngroup';
import type { ConfirmDialogPassThroughOptions } from 'primevue/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from 'primevue/confirmpopup';
import type { ContextMenuPassThroughOptions } from 'primevue/contextmenu';
import type { DataTablePassThroughOptions } from 'primevue/datatable';
import type { DataViewPassThroughOptions } from 'primevue/dataview';
import type { DatePickerPassThroughOptions } from 'primevue/datepicker';
import type { DeferredContentPassThroughOptions } from 'primevue/deferredcontent';
import type { DialogPassThroughOptions } from 'primevue/dialog';
import type { DividerPassThroughOptions } from 'primevue/divider';
import type { DockPassThroughOptions } from 'primevue/dock';
import type { DrawerPassThroughOptions } from 'primevue/drawer';
import type { DropdownPassThroughOptions } from 'primevue/dropdown';
import type { EditorPassThroughOptions } from 'primevue/editor';
import type { FieldsetPassThroughOptions } from 'primevue/fieldset';
import type { FileUploadPassThroughOptions } from 'primevue/fileupload';
import type { FloatLabelPassThroughOptions } from 'primevue/floatlabel';
import type { FluidPassThroughOptions } from 'primevue/fluid';
import type { FocusTrapDirectivePassThroughOptions } from 'primevue/focustrap';
import type { GalleriaPassThroughOptions } from 'primevue/galleria';
import type { ImagePassThroughOptions } from 'primevue/image';
import type { InlineMessagePassThroughOptions } from 'primevue/inlinemessage';
import type { InplacePassThroughOptions } from 'primevue/inplace';
import type { InputChipsPassThroughOptions } from 'primevue/inputchips';
import type { InputGroupPassThroughOptions } from 'primevue/inputgroup';
import type { InputGroupAddonPassThroughOptions } from 'primevue/inputgroupaddon';
import type { InputIconPassThroughOptions } from 'primevue/inputicon';
import type { InputMaskPassThroughOptions } from 'primevue/inputmask';
import type { InputNumberPassThroughOptions } from 'primevue/inputnumber';
import type { InputOtpPassThroughOptions } from 'primevue/inputotp';
import type { InputSwitchPassThroughOptions } from 'primevue/inputswitch';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { KnobPassThroughOptions } from 'primevue/knob';
import type { ListboxPassThroughOptions } from 'primevue/listbox';
import type { MegaMenuPassThroughOptions } from 'primevue/megamenu';
import type { MenuPassThroughOptions } from 'primevue/menu';
import type { MenubarPassThroughOptions } from 'primevue/menubar';
import type { MessagePassThroughOptions } from 'primevue/message';
import type { MeterGroupPassThroughOptions } from 'primevue/metergroup';
import type { MultiSelectPassThroughOptions } from 'primevue/multiselect';
import type { OrderListPassThroughOptions } from 'primevue/orderlist';
import type { OrganizationChartPassThroughOptions } from 'primevue/organizationchart';
import type { OverlayBadgePassThroughOptions } from 'primevue/overlaybadge';
import type { OverlayPanelPassThroughOptions } from 'primevue/overlaypanel';
import type { PaginatorPassThroughOptions } from 'primevue/paginator';
import type { PanelPassThroughOptions } from 'primevue/panel';
import type { PanelMenuPassThroughOptions } from 'primevue/panelmenu';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { PasswordPassThroughOptions } from 'primevue/password';
import type { PickListPassThroughOptions } from 'primevue/picklist';
import type { PopoverPassThroughOptions } from 'primevue/popover';
import type { ProgressBarPassThroughOptions } from 'primevue/progressbar';
import type { ProgressSpinnerPassThroughOptions } from 'primevue/progressspinner';
import type { RadioButtonPassThroughOptions } from 'primevue/radiobutton';
import type { RatingPassThroughOptions } from 'primevue/rating';
import type { RippleDirectivePassThroughOptions } from 'primevue/ripple';
import type { RowPassThroughOptions } from 'primevue/row';
import type { ScrollPanelPassThroughOptions } from 'primevue/scrollpanel';
import type { ScrollTopPassThroughOptions } from 'primevue/scrolltop';
import type { SelectPassThroughOptions } from 'primevue/select';
import type { SelectButtonPassThroughOptions } from 'primevue/selectbutton';
import type { SidebarPassThroughOptions } from 'primevue/sidebar';
import type { SkeletonPassThroughOptions } from 'primevue/skeleton';
import type { SliderPassThroughOptions } from 'primevue/slider';
import type { SpeedDialPassThroughOptions } from 'primevue/speeddial';
import type { SplitButtonPassThroughOptions } from 'primevue/splitbutton';
import type { SplitterPassThroughOptions } from 'primevue/splitter';
import type { SplitterPanelPassThroughOptions } from 'primevue/splitterpanel';
import type { StepPassThroughOptions } from 'primevue/step';
import type { StepItemPassThroughOptions } from 'primevue/stepitem';
import type { StepListPassThroughOptions } from 'primevue/steplist';
import type { StepPanelPassThroughOptions } from 'primevue/steppanel';
import type { StepPanelsPassThroughOptions } from 'primevue/steppanels';
import type { StepperPassThroughOptions } from 'primevue/stepper';
import type { StepsPassThroughOptions } from 'primevue/steps';
import type { StyleClassDirectivePassThroughOptions } from 'primevue/styleclass';
import type { TabPassThroughOptions } from 'primevue/tab';
import type { TabListPassThroughOptions } from 'primevue/tablist';
import type { TabMenuPassThroughOptions } from 'primevue/tabmenu';
import type { TabPanelPassThroughOptions } from 'primevue/tabpanel';
import type { TabPanelsPassThroughOptions } from 'primevue/tabpanels';
import type { TabsPassThroughOptions } from 'primevue/tabs';
import type { TabViewPassThroughOptions } from 'primevue/tabview';
import type { TagPassThroughOptions } from 'primevue/tag';
import type { TerminalPassThroughOptions } from 'primevue/terminal';
import type { TextareaPassThroughOptions } from 'primevue/textarea';
import type { TieredMenuPassThroughOptions } from 'primevue/tieredmenu';
import type { TimelinePassThroughOptions } from 'primevue/timeline';
import type { ToastPassThroughOptions } from 'primevue/toast';
import type { ToggleButtonPassThroughOptions } from 'primevue/togglebutton';
import type { ToggleSwitchPassThroughOptions } from 'primevue/toggleswitch';
import type { ToolbarPassThroughOptions } from 'primevue/toolbar';
import type { TooltipDirectivePassThroughOptions } from 'primevue/tooltip';
import type { TreePassThroughOptions } from 'primevue/tree';
import type { TreeSelectPassThroughOptions } from 'primevue/treeselect';
import type { TreeTablePassThroughOptions } from 'primevue/treetable';
import type { VirtualScrollerPassThroughOptions } from 'primevue/virtualscroller';

export * from '@primevue/core/config';
export { default } from '@primevue/core/config';

export interface PrimeVueConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<PrimeVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: PrimeVueCSPOptions;
}

export interface PrimeVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        badge?: BadgeDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        animate?: AnimateOnScrollDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
