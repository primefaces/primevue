import type { DefaultPassThrough, PassThrough } from '@primevue/core';
import type { PrimeVueCSPOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from '@primevue/core/config';
import type { AccordionPassThroughOptions } from 'primevue-vaultic/accordion';
import type { AccordionContentPassThroughOptions } from 'primevue-vaultic/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from 'primevue-vaultic/accordionheader';
import type { AccordionPanelPassThroughOptions } from 'primevue-vaultic/accordionpanel';
import type { AccordionTabPassThroughOptions } from 'primevue-vaultic/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from 'primevue-vaultic/animateonscroll';
import type { AutoCompletePassThroughOptions } from 'primevue-vaultic/autocomplete';
import type { AvatarPassThroughOptions } from 'primevue-vaultic/avatar';
import type { AvatarGroupPassThroughOptions } from 'primevue-vaultic/avatargroup';
import type { BadgePassThroughOptions } from 'primevue-vaultic/badge';
import type { BadgeDirectivePassThroughOptions } from 'primevue-vaultic/badgedirective';
import type { BlockUIPassThroughOptions } from 'primevue-vaultic/blockui';
import type { BreadcrumbPassThroughOptions } from 'primevue-vaultic/breadcrumb';
import type { ButtonPassThroughOptions } from 'primevue-vaultic/button';
import type { ButtonGroupPassThroughOptions } from 'primevue-vaultic/buttongroup';
import type { CalendarPassThroughOptions } from 'primevue-vaultic/calendar';
import type { CardPassThroughOptions } from 'primevue-vaultic/card';
import type { CarouselPassThroughOptions } from 'primevue-vaultic/carousel';
import type { CascadeSelectPassThroughOptions } from 'primevue-vaultic/cascadeselect';
import type { ChartPassThroughOptions } from 'primevue-vaultic/chart';
import type { CheckboxPassThroughOptions } from 'primevue-vaultic/checkbox';
import type { CheckboxGroupPassThroughOptions } from 'primevue-vaultic/checkboxgroup';
import type { ChipPassThroughOptions } from 'primevue-vaultic/chip';
import type { ChipsPassThroughOptions } from 'primevue-vaultic/chips';
import type { ColorPickerPassThroughOptions } from 'primevue-vaultic/colorpicker';
import type { ColumnPassThroughOptions } from 'primevue-vaultic/column';
import type { ColumnGroupPassThroughOptions } from 'primevue-vaultic/columngroup';
import type { ConfirmDialogPassThroughOptions } from 'primevue-vaultic/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from 'primevue-vaultic/confirmpopup';
import type { ContextMenuPassThroughOptions } from 'primevue-vaultic/contextmenu';
import type { DataTablePassThroughOptions } from 'primevue-vaultic/datatable';
import type { DataViewPassThroughOptions } from 'primevue-vaultic/dataview';
import type { DatePickerPassThroughOptions } from 'primevue-vaultic/datepicker';
import type { DeferredContentPassThroughOptions } from 'primevue-vaultic/deferredcontent';
import type { DialogPassThroughOptions } from 'primevue-vaultic/dialog';
import type { DividerPassThroughOptions } from 'primevue-vaultic/divider';
import type { DockPassThroughOptions } from 'primevue-vaultic/dock';
import type { DrawerPassThroughOptions } from 'primevue-vaultic/drawer';
import type { DropdownPassThroughOptions } from 'primevue-vaultic/dropdown';
import type { EditorPassThroughOptions } from 'primevue-vaultic/editor';
import type { FieldsetPassThroughOptions } from 'primevue-vaultic/fieldset';
import type { FileUploadPassThroughOptions } from 'primevue-vaultic/fileupload';
import type { FloatLabelPassThroughOptions } from 'primevue-vaultic/floatlabel';
import type { FluidPassThroughOptions } from 'primevue-vaultic/fluid';
import type { FocusTrapDirectivePassThroughOptions } from 'primevue-vaultic/focustrap';
import type { GalleriaPassThroughOptions } from 'primevue-vaultic/galleria';
import type { IconFieldPassThroughOptions } from 'primevue-vaultic/iconfield';
import type { IftaLabelPassThroughOptions } from 'primevue-vaultic/iftalabel';
import type { ImagePassThroughOptions } from 'primevue-vaultic/image';
import type { ImageComparePassThroughOptions } from 'primevue-vaultic/imagecompare';
import type { InlineMessagePassThroughOptions } from 'primevue-vaultic/inlinemessage';
import type { InplacePassThroughOptions } from 'primevue-vaultic/inplace';
import type { InputChipsPassThroughOptions } from 'primevue-vaultic/inputchips';
import type { InputGroupPassThroughOptions } from 'primevue-vaultic/inputgroup';
import type { InputGroupAddonPassThroughOptions } from 'primevue-vaultic/inputgroupaddon';
import type { InputIconPassThroughOptions } from 'primevue-vaultic/inputicon';
import type { InputMaskPassThroughOptions } from 'primevue-vaultic/inputmask';
import type { InputNumberPassThroughOptions } from 'primevue-vaultic/inputnumber';
import type { InputOtpPassThroughOptions } from 'primevue-vaultic/inputotp';
import type { InputSwitchPassThroughOptions } from 'primevue-vaultic/inputswitch';
import type { InputTextPassThroughOptions } from 'primevue-vaultic/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from 'primevue-vaultic/keyfilter';
import type { KnobPassThroughOptions } from 'primevue-vaultic/knob';
import type { ListboxPassThroughOptions } from 'primevue-vaultic/listbox';
import type { MegaMenuPassThroughOptions } from 'primevue-vaultic/megamenu';
import type { MenuPassThroughOptions } from 'primevue-vaultic/menu';
import type { MenubarPassThroughOptions } from 'primevue-vaultic/menubar';
import type { MessagePassThroughOptions } from 'primevue-vaultic/message';
import type { MeterGroupPassThroughOptions } from 'primevue-vaultic/metergroup';
import type { MultiSelectPassThroughOptions } from 'primevue-vaultic/multiselect';
import type { OrderListPassThroughOptions } from 'primevue-vaultic/orderlist';
import type { OrganizationChartPassThroughOptions } from 'primevue-vaultic/organizationchart';
import type { OverlayBadgePassThroughOptions } from 'primevue-vaultic/overlaybadge';
import type { OverlayPanelPassThroughOptions } from 'primevue-vaultic/overlaypanel';
import type { PaginatorPassThroughOptions } from 'primevue-vaultic/paginator';
import type { PanelPassThroughOptions } from 'primevue-vaultic/panel';
import type { PanelMenuPassThroughOptions } from 'primevue-vaultic/panelmenu';
import type { PassThroughOptions } from 'primevue-vaultic/passthrough';
import type { PasswordPassThroughOptions } from 'primevue-vaultic/password';
import type { PickListPassThroughOptions } from 'primevue-vaultic/picklist';
import type { PopoverPassThroughOptions } from 'primevue-vaultic/popover';
import type { ProgressBarPassThroughOptions } from 'primevue-vaultic/progressbar';
import type { ProgressSpinnerPassThroughOptions } from 'primevue-vaultic/progressspinner';
import type { RadioButtonPassThroughOptions } from 'primevue-vaultic/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from 'primevue-vaultic/radiobuttongroup';
import type { RatingPassThroughOptions } from 'primevue-vaultic/rating';
import type { RippleDirectivePassThroughOptions } from 'primevue-vaultic/ripple';
import type { RowPassThroughOptions } from 'primevue-vaultic/row';
import type { ScrollPanelPassThroughOptions } from 'primevue-vaultic/scrollpanel';
import type { ScrollTopPassThroughOptions } from 'primevue-vaultic/scrolltop';
import type { SelectPassThroughOptions } from 'primevue-vaultic/select';
import type { SelectButtonPassThroughOptions } from 'primevue-vaultic/selectbutton';
import type { SidebarPassThroughOptions } from 'primevue-vaultic/sidebar';
import type { SkeletonPassThroughOptions } from 'primevue-vaultic/skeleton';
import type { SliderPassThroughOptions } from 'primevue-vaultic/slider';
import type { SpeedDialPassThroughOptions } from 'primevue-vaultic/speeddial';
import type { SplitButtonPassThroughOptions } from 'primevue-vaultic/splitbutton';
import type { SplitterPassThroughOptions } from 'primevue-vaultic/splitter';
import type { SplitterPanelPassThroughOptions } from 'primevue-vaultic/splitterpanel';
import type { StepPassThroughOptions } from 'primevue-vaultic/step';
import type { StepItemPassThroughOptions } from 'primevue-vaultic/stepitem';
import type { StepListPassThroughOptions } from 'primevue-vaultic/steplist';
import type { StepPanelPassThroughOptions } from 'primevue-vaultic/steppanel';
import type { StepPanelsPassThroughOptions } from 'primevue-vaultic/steppanels';
import type { StepperPassThroughOptions } from 'primevue-vaultic/stepper';
import type { StepsPassThroughOptions } from 'primevue-vaultic/steps';
import type { StyleClassDirectivePassThroughOptions } from 'primevue-vaultic/styleclass';
import type { TabPassThroughOptions } from 'primevue-vaultic/tab';
import type { TabListPassThroughOptions } from 'primevue-vaultic/tablist';
import type { TabMenuPassThroughOptions } from 'primevue-vaultic/tabmenu';
import type { TabPanelPassThroughOptions } from 'primevue-vaultic/tabpanel';
import type { TabPanelsPassThroughOptions } from 'primevue-vaultic/tabpanels';
import type { TabsPassThroughOptions } from 'primevue-vaultic/tabs';
import type { TabViewPassThroughOptions } from 'primevue-vaultic/tabview';
import type { TagPassThroughOptions } from 'primevue-vaultic/tag';
import type { TerminalPassThroughOptions } from 'primevue-vaultic/terminal';
import type { TextareaPassThroughOptions } from 'primevue-vaultic/textarea';
import type { TieredMenuPassThroughOptions } from 'primevue-vaultic/tieredmenu';
import type { TimelinePassThroughOptions } from 'primevue-vaultic/timeline';
import type { ToastPassThroughOptions } from 'primevue-vaultic/toast';
import type { ToggleButtonPassThroughOptions } from 'primevue-vaultic/togglebutton';
import type { ToggleSwitchPassThroughOptions } from 'primevue-vaultic/toggleswitch';
import type { ToolbarPassThroughOptions } from 'primevue-vaultic/toolbar';
import type { TooltipDirectivePassThroughOptions } from 'primevue-vaultic/tooltip';
import type { TreePassThroughOptions } from 'primevue-vaultic/tree';
import type { TreeSelectPassThroughOptions } from 'primevue-vaultic/treeselect';
import type { TreeTablePassThroughOptions } from 'primevue-vaultic/treetable';
import type { VirtualScrollerPassThroughOptions } from 'primevue-vaultic/virtualscroller';

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
    checkboxgroup?: DefaultPassThrough<CheckboxGroupPassThroughOptions>;
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
    iconfield?: DefaultPassThrough<IconFieldPassThroughOptions>;
    iftalabel?: DefaultPassThrough<IftaLabelPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    imagecompare?: DefaultPassThrough<ImageComparePassThroughOptions>;
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
    radiobuttongroup?: DefaultPassThrough<RadioButtonGroupPassThroughOptions>;
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
        animate?: AnimateOnScrollDirectivePassThroughOptions;
        badge?: BadgeDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        keyfilter?: KeyFilterDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
