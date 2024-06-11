import { Plugin } from 'vue';
import { AccordionPassThroughOptions } from '../../../primevue/src/accordion/Accordion';
import { AccordionContentPassThroughOptions } from '../../../primevue/src/accordioncontent/AccordionContent';
import { AccordionHeaderPassThroughOptions } from '../../../primevue/src/accordionheader/AccordionHeader';
import { AccordionPanelPassThroughOptions } from '../../../primevue/src/accordionpanel/AccordionPanel';
import { AccordionTabPassThroughOptions } from '../../../primevue/src/accordiontab/AccordionTab';
import { AnimateOnScrollDirectivePassThroughOptions } from '../../../primevue/src/animateonscroll/AnimateOnScroll';
import { AutoCompletePassThroughOptions } from '../../../primevue/src/autocomplete/AutoComplete';
import { AvatarPassThroughOptions } from '../../../primevue/src/avatar/Avatar';
import { AvatarGroupPassThroughOptions } from '../../../primevue/src/avatargroup/AvatarGroup';
import { BadgePassThroughOptions } from '../../../primevue/src/badge/Badge';
import { BadgeDirectivePassThroughOptions } from '../../../primevue/src/badgedirective/BadgeDirective';
import { BlockUIPassThroughOptions } from '../../../primevue/src/blockui/BlockUI';
import { BreadcrumbPassThroughOptions } from '../../../primevue/src/breadcrumb/Breadcrumb';
import { ButtonPassThroughOptions } from '../../../primevue/src/button/Button';
import { CalendarPassThroughOptions } from '../../../primevue/src/calendar/Calendar';
import { CardPassThroughOptions } from '../../../primevue/src/card/Card';
import { CarouselPassThroughOptions } from '../../../primevue/src/carousel/Carousel';
import { CascadeSelectPassThroughOptions } from '../../../primevue/src/cascadeselect/CascadeSelect';
import { ChartPassThroughOptions } from '../../../primevue/src/chart/Chart';
import { CheckboxPassThroughOptions } from '../../../primevue/src/checkbox/Checkbox';
import { ChipPassThroughOptions } from '../../../primevue/src/chip/Chip';
import { ChipsPassThroughOptions } from '../../../primevue/src/chips/Chips';
import { ColorPickerPassThroughOptions } from '../../../primevue/src/colorpicker/ColorPicker';
import { ColumnPassThroughOptions } from '../../../primevue/src/column/Column';
import { ColumnGroupPassThroughOptions } from '../../../primevue/src/columngroup/ColumnGroup';
import { ConfirmDialogPassThroughOptions } from '../../../primevue/src/confirmdialog/ConfirmDialog';
import { ConfirmPopupPassThroughOptions } from '../../../primevue/src/confirmpopup/ConfirmPopup';
import { ContextMenuPassThroughOptions } from '../../../primevue/src/contextmenu/ContextMenu';
import { DataTablePassThroughOptions } from '../../../primevue/src/datatable/DataTable';
import { DataViewPassThroughOptions } from '../../../primevue/src/dataview/DataView';
import { DatePickerPassThroughOptions } from '../../../primevue/src/datepicker/DatePicker';
import { DeferredContentPassThroughOptions } from '../../../primevue/src/deferredcontent/DeferredContent';
import { DialogPassThroughOptions } from '../../../primevue/src/dialog/Dialog';
import { DividerPassThroughOptions } from '../../../primevue/src/divider/Divider';
import { DockPassThroughOptions } from '../../../primevue/src/dock/Dock';
import { DrawerPassThroughOptions } from '../../../primevue/src/drawer/Drawer';
import { DropdownPassThroughOptions } from '../../../primevue/src/dropdown/Dropdown';
import { EditorPassThroughOptions } from '../../../primevue/src/editor/Editor';
import { FieldsetPassThroughOptions } from '../../../primevue/src/fieldset/Fieldset';
import { FileUploadPassThroughOptions } from '../../../primevue/src/fileupload/FileUpload';
import { FocusTrapDirectivePassThroughOptions } from '../../../primevue/src/focustrap/FocusTrap';
import { GalleriaPassThroughOptions } from '../../../primevue/src/galleria/Galleria';
import { ImagePassThroughOptions } from '../../../primevue/src/image/Image';
import { InlineMessagePassThroughOptions } from '../../../primevue/src/inlinemessage/InlineMessage';
import { InplacePassThroughOptions } from '../../../primevue/src/inplace/Inplace';
import { InputChipsPassThroughOptions } from '../../../primevue/src/inputchips/InputChips';
import { InputMaskPassThroughOptions } from '../../../primevue/src/inputmask/InputMask';
import { InputNumberPassThroughOptions } from '../../../primevue/src/inputnumber/InputNumber';
import { InputSwitchPassThroughOptions } from '../../../primevue/src/inputswitch/InputSwitch';
import { InputTextPassThroughOptions } from '../../../primevue/src/inputtext/InputText';
import { KnobPassThroughOptions } from '../../../primevue/src/knob/Knob';
import { ListboxPassThroughOptions } from '../../../primevue/src/listbox/Listbox';
import { MegaMenuPassThroughOptions } from '../../../primevue/src/megamenu/MegaMenu';
import { MenuPassThroughOptions } from '../../../primevue/src/menu/Menu';
import { MenubarPassThroughOptions } from '../../../primevue/src/menubar/Menubar';
import { MessagePassThroughOptions } from '../../../primevue/src/message/Message';
import { MultiSelectPassThroughOptions } from '../../../primevue/src/multiselect/MultiSelect';
import { OrderListPassThroughOptions } from '../../../primevue/src/orderlist/OrderList';
import { OrganizationChartPassThroughOptions } from '../../../primevue/src/organizationchart/OrganizationChart';
import { OverlayPanelPassThroughOptions } from '../../../primevue/src/overlaypanel/OverlayPanel';
import { PaginatorPassThroughOptions } from '../../../primevue/src/paginator/Paginator';
import { PanelPassThroughOptions } from '../../../primevue/src/panel/Panel';
import { PanelMenuPassThroughOptions } from '../../../primevue/src/panelmenu/PanelMenu';
import { PassThroughOptions } from '../../../primevue/src/passthrough';
import { PasswordPassThroughOptions } from '../../../primevue/src/password/Password';
import { PickListPassThroughOptions } from '../../../primevue/src/picklist/PickList';
import { PopoverPassThroughOptions } from '../../../primevue/src/popover/Popover';
import { ProgressBarPassThroughOptions } from '../../../primevue/src/progressbar/ProgressBar';
import { ProgressSpinnerPassThroughOptions } from '../../../primevue/src/progressspinner/ProgressSpinner';
import { RadioButtonPassThroughOptions } from '../../../primevue/src/radiobutton/RadioButton';
import { RatingPassThroughOptions } from '../../../primevue/src/rating/Rating';
import { RippleDirectivePassThroughOptions } from '../../../primevue/src/ripple/Ripple';
import { RowPassThroughOptions } from '../../../primevue/src/row/Row';
import { ScrollPanelPassThroughOptions } from '../../../primevue/src/scrollpanel/ScrollPanel';
import { ScrollTopPassThroughOptions } from '../../../primevue/src/scrolltop/ScrollTop';
import { SelectPassThroughOptions } from '../../../primevue/src/select/Select';
import { SelectButtonPassThroughOptions } from '../../../primevue/src/selectbutton/SelectButton';
import { SidebarPassThroughOptions } from '../../../primevue/src/sidebar/Sidebar';
import { SkeletonPassThroughOptions } from '../../../primevue/src/skeleton/Skeleton';
import { SliderPassThroughOptions } from '../../../primevue/src/slider/Slider';
import { SpeedDialPassThroughOptions } from '../../../primevue/src/speeddial/SpeedDial';
import { SplitButtonPassThroughOptions } from '../../../primevue/src/splitbutton/SplitButton';
import { SplitterPassThroughOptions } from '../../../primevue/src/splitter/Splitter';
import { SplitterPanelPassThroughOptions } from '../../../primevue/src/splitterpanel/SplitterPanel';
import { StepsPassThroughOptions } from '../../../primevue/src/steps/Steps';
import { StyleClassDirectivePassThroughOptions } from '../../../primevue/src/styleclass/StyleClass';
import { TabPassThroughOptions } from '../../../primevue/src/tab/Tab';
import { TabListPassThroughOptions } from '../../../primevue/src/tablist/TabList';
import { TabMenuPassThroughOptions } from '../../../primevue/src/tabmenu/TabMenu';
import { TabPanelPassThroughOptions } from '../../../primevue/src/tabpanel/TabPanel';
import { TabPanelsPassThroughOptions } from '../../../primevue/src/tabpanels/TabPanels';
import { TabsPassThroughOptions } from '../../../primevue/src/tabs/Tabs';
import { TabViewPassThroughOptions } from '../../../primevue/src/tabview/TabView';
import { TagPassThroughOptions } from '../../../primevue/src/tag/Tag';
import { TerminalPassThroughOptions } from '../../../primevue/src/terminal/Terminal';
import { TextareaPassThroughOptions } from '../../../primevue/src/textarea/Textarea';
import { TieredMenuPassThroughOptions } from '../../../primevue/src/tieredmenu/TieredMenu';
import { TimelinePassThroughOptions } from '../../../primevue/src/timeline/Timeline';
import { ToastPassThroughOptions } from '../../../primevue/src/toast/Toast';
import { ToggleButtonPassThroughOptions } from '../../../primevue/src/togglebutton/ToggleButton';
import { ToggleSwitchPassThroughOptions } from '../../../primevue/src/toggleswitch/ToggleSwitch';
import { ToolbarPassThroughOptions } from '../../../primevue/src/toolbar/Toolbar';
import { TooltipDirectivePassThroughOptions } from '../../../primevue/src/tooltip/Tooltip';
import { TreePassThroughOptions } from '../../../primevue/src/tree/Tree';
import { TreeSelectPassThroughOptions } from '../../../primevue/src/treeselect/TreeSelect';
import { TreeTablePassThroughOptions } from '../../../primevue/src/treetable/TreeTable';
import { DefaultPassThrough, PassThrough } from '../../../primevue/src/ts-helpers';
import { VirtualScrollerPassThroughOptions } from '../../../primevue/src/virtualscroller/VirtualScroller';

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

export declare const defaultOptions: PrimeVueConfiguration;

export interface PrimeVueZIndexOptions {
    modal?: number;
    overlay?: number;
    menu?: number;
    tooltip?: number;
}

export interface PrimeVueCSPOptions {
    nonce?: string;
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
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
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

export interface PrimeVueLocaleAriaOptions {
    trueLabel?: string;
    falseLabel?: string;
    nullLabel?: string;
    star?: string;
    stars?: string;
    selectAll?: string;
    unselectAll?: string;
    close?: string;
    previous?: string;
    next?: string;
    navigation?: string;
    scrollTop?: string;
    moveUp?: string;
    moveTop?: string;
    moveDown?: string;
    moveBottom?: string;
    moveToTarget?: string;
    moveToSource?: string;
    moveAllToTarget?: string;
    moveAllToSource?: string;
    pageLabel?: string;
    firstPageLabel?: string;
    lastPageLabel?: string;
    nextPageLabel?: string;
    prevPageLabel?: string;
    rowsPerPageLabel?: string;
    jumpToPageDropdownLabel?: string;
    jumpToPageInputLabel?: string;
    selectRow?: string;
    unselectRow?: string;
    expandRow?: string;
    collapseRow?: string;
    showFilterMenu?: string;
    hideFilterMenu?: string;
    filterOperator?: string;
    filterConstraint?: string;
    editRow?: string;
    saveEdit?: string;
    cancelEdit?: string;
    listView?: string;
    gridView?: string;
    slide?: string;
    slideNumber?: string;
    zoomImage?: string;
    zoomIn?: string;
    zoomOut?: string;
    rotateRight?: string;
    rotateLeft?: string;
    listLabel?: string;
}

export interface PrimeVueLocaleOptions {
    startsWith?: string;
    contains?: string;
    notContains?: string;
    endsWith?: string;
    equals?: string;
    notEquals?: string;
    noFilter?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    dateIs?: string;
    dateIsNot?: string;
    dateBefore?: string;
    dateAfter?: string;
    clear?: string;
    apply?: string;
    matchAll?: string;
    matchAny?: string;
    addRule?: string;
    removeRule?: string;
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    completed?: string;
    pending?: string;
    fileSizeTypes: string[];
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    chooseYear?: string;
    chooseMonth?: string;
    chooseDate?: string;
    prevDecade?: string;
    nextDecade?: string;
    prevYear?: string;
    nextYear?: string;
    prevMonth?: string;
    nextMonth?: string;
    prevHour?: string;
    nextHour?: string;
    prevMinute?: string;
    nextMinute?: string;
    prevSecond?: string;
    nextSecond?: string;
    am?: string;
    pm?: string;
    today?: string;
    weekHeader?: string;
    firstDayOfWeek?: number;
    showMonthAfterYear?: boolean;
    dateFormat?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
    emptyFilterMessage?: string;
    searchMessage?: string;
    selectionMessage?: string;
    emptySelectionMessage?: string;
    emptySearchMessage?: string;
    emptyMessage?: string;
    fileChosenMessage?: string;
    noFileChosenMessage?: string;
    aria?: PrimeVueLocaleAriaOptions;
}

export declare function usePrimeVue(): {
    config: PrimeVueConfiguration;
};

declare const plugin: Plugin;
export default plugin;

declare module 'vue/types/vue' {
    interface Vue {
        $primevue: {
            config: PrimeVueConfiguration;
        };
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $primevue: {
            config: PrimeVueConfiguration;
        };
    }
}
