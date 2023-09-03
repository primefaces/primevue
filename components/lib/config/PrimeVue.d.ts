import { Plugin } from 'vue';
import { AccordionPassThroughOptions } from '../accordion';
import { AccordionTabPassThroughOptions } from '../accordiontab';
import { AutoCompletePassThroughOptions } from '../autocomplete';
import { AvatarPassThroughOptions } from '../avatar';
import { AvatarGroupPassThroughOptions } from '../avatargroup';
import { BadgePassThroughOptions } from '../badge';
import { BadgeDirectivePassThroughOptions } from '../badgedirective';
import { BlockUIPassThroughOptions } from '../blockui';
import { BreadcrumbPassThroughOptions } from '../breadcrumb';
import { ButtonPassThroughOptions } from '../button';
import { CalendarPassThroughOptions } from '../calendar';
import { CardPassThroughOptions } from '../card';
import { CarouselPassThroughOptions } from '../carousel';
import { CascadeSelectPassThroughOptions } from '../cascadeselect';
import { ChartPassThroughOptions } from '../chart';
import { CheckboxPassThroughOptions } from '../checkbox';
import { ChipPassThroughOptions } from '../chip';
import { ChipsPassThroughOptions } from '../chips';
import { ColorPickerPassThroughOptions } from '../colorpicker';
import { ColumnPassThroughOptions } from '../column';
import { ColumnGroupPassThroughOptions } from '../columngroup';
import { ConfirmDialogPassThroughOptions } from '../confirmdialog';
import { ConfirmPopupPassThroughOptions } from '../confirmpopup';
import { ContextMenuPassThroughOptions } from '../contextmenu';
import { DataTablePassThroughOptions } from '../datatable';
import { DataViewPassThroughOptions } from '../dataview';
import { DataViewLayoutOptionsPassThroughOptions } from '../dataviewlayoutoptions';
import { DeferredContentPassThroughOptions } from '../deferredcontent';
import { DialogPassThroughOptions } from '../dialog';
import { DividerPassThroughOptions } from '../divider';
import { DockPassThroughOptions } from '../dock';
import { DropdownPassThroughOptions } from '../dropdown';
import { EditorPassThroughOptions } from '../editor';
import { FieldsetPassThroughOptions } from '../fieldset';
import { FileUploadPassThroughOptions } from '../fileupload';
import { FocusTrapDirectivePassThroughOptions } from '../focustrap';
import { GalleriaPassThroughOptions } from '../galleria';
import { ImagePassThroughOptions } from '../image';
import { InlineMessagePassThroughOptions } from '../inlinemessage';
import { InplacePassThroughOptions } from '../inplace';
import { InputMaskPassThroughOptions } from '../inputmask';
import { InputNumberPassThroughOptions } from '../inputnumber';
import { InputSwitchPassThroughOptions } from '../inputswitch';
import { InputTextPassThroughOptions } from '../inputtext';
import { KnobPassThroughOptions } from '../knob';
import { ListboxPassThroughOptions } from '../listbox';
import { MegaMenuPassThroughOptions } from '../megamenu';
import { MenuPassThroughOptions } from '../menu';
import { MenubarPassThroughOptions } from '../menubar';
import { MessagePassThroughOptions } from '../message';
import { MultiSelectPassThroughOptions } from '../multiselect';
import { OrderListPassThroughOptions } from '../orderlist';
import { OrganizationChartPassThroughOptions } from '../organizationchart';
import { OverlayPanelPassThroughOptions } from '../overlaypanel';
import { PaginatorPassThroughOptions } from '../paginator';
import { PanelPassThroughOptions } from '../panel';
import { PanelMenuPassThroughOptions } from '../panelmenu';
import { PasswordPassThroughOptions } from '../password';
import { PickListPassThroughOptions } from '../picklist';
import { ProgressBarPassThroughOptions } from '../progressbar';
import { ProgressSpinnerPassThroughOptions } from '../progressspinner';
import { RadioButtonPassThroughOptions } from '../radiobutton';
import { RatingPassThroughOptions } from '../rating';
import { RippleDirectivePassThroughOptions } from '../ripple';
import { RowPassThroughOptions } from '../row';
import { ScrollPanelPassThroughOptions } from '../scrollpanel';
import { ScrollTopPassThroughOptions } from '../scrolltop';
import { SelectButtonPassThroughOptions } from '../selectbutton';
import { SidebarPassThroughOptions } from '../sidebar';
import { SkeletonPassThroughOptions } from '../skeleton';
import { SliderPassThroughOptions } from '../slider';
import { SpeedDialPassThroughOptions } from '../speeddial';
import { SplitButtonPassThroughOptions } from '../splitbutton';
import { SplitterPassThroughOptions } from '../splitter';
import { SplitterPanelPassThroughOptions } from '../splitterpanel';
import { StepsPassThroughOptions } from '../steps';
import { StyleClassDirectivePassThroughOptions } from '../styleclass';
import { TabMenuPassThroughOptions } from '../tabmenu';
import { TabPanelPassThroughOptions } from '../tabpanel';
import { TabViewPassThroughOptions } from '../tabview';
import { TagPassThroughOptions } from '../tag';
import { TerminalPassThroughOptions } from '../terminal';
import { TextareaPassThroughOptions } from '../textarea';
import { TieredMenuPassThroughOptions } from '../tieredmenu';
import { TimelinePassThroughOptions } from '../timeline';
import { ToastPassThroughOptions } from '../toast';
import { ToggleButtonPassThroughOptions } from '../togglebutton';
import { ToolbarPassThroughOptions } from '../toolbar';
import { TooltipDirectivePassThroughOptions } from '../tooltip';
import { TreePassThroughOptions } from '../tree';
import { TreeSelectPassThroughOptions } from '../treeselect';
import { TreeTablePassThroughOptions } from '../treetable';
import { TriStateCheckboxPassThroughOptions } from '../tristatecheckbox';
import { DefaultPTOptions, PTOptions } from '../ts-helpers';
import { VirtualScrollerPassThroughOptions } from '../virtualscroller';

export interface PrimeVueConfiguration {
    ripple?: boolean;
    inputStyle?: string;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    pt?: PTOptions<PrimeVuePTOptions>;
    unstyled?: boolean;
    csp?: PrimeVueCSPOptions;
}

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
    accordion?: DefaultPTOptions<AccordionPassThroughOptions>;
    accordiontab?: DefaultPTOptions<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPTOptions<AutoCompletePassThroughOptions>;
    avatar?: DefaultPTOptions<AvatarPassThroughOptions>;
    avatargroup?: DefaultPTOptions<AvatarGroupPassThroughOptions>;
    badge?: DefaultPTOptions<BadgePassThroughOptions>;
    blockui?: DefaultPTOptions<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPTOptions<BreadcrumbPassThroughOptions>;
    button?: DefaultPTOptions<ButtonPassThroughOptions>;
    calendar?: DefaultPTOptions<CalendarPassThroughOptions>;
    card?: DefaultPTOptions<CardPassThroughOptions>;
    carousel?: DefaultPTOptions<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPTOptions<CascadeSelectPassThroughOptions>;
    chart?: DefaultPTOptions<ChartPassThroughOptions>;
    checkbox?: DefaultPTOptions<CheckboxPassThroughOptions>;
    chip?: DefaultPTOptions<ChipPassThroughOptions>;
    chips?: DefaultPTOptions<ChipsPassThroughOptions>;
    colorpicker?: DefaultPTOptions<ColorPickerPassThroughOptions>;
    column?: DefaultPTOptions<ColumnPassThroughOptions>;
    columngroup?: DefaultPTOptions<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPTOptions<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPTOptions<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPTOptions<ContextMenuPassThroughOptions>;
    datatable?: DefaultPTOptions<DataTablePassThroughOptions>;
    dataview?: DefaultPTOptions<DataViewPassThroughOptions>;
    dataviewlayoutoptions?: DefaultPTOptions<DataViewLayoutOptionsPassThroughOptions>;
    deferredcontent?: DefaultPTOptions<DeferredContentPassThroughOptions>;
    divider?: DefaultPTOptions<DividerPassThroughOptions>;
    dialog?: DefaultPTOptions<DialogPassThroughOptions>;
    dock?: DefaultPTOptions<DockPassThroughOptions>;
    dropdown?: DefaultPTOptions<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPTOptions<DialogPassThroughOptions>;
    editor?: DefaultPTOptions<EditorPassThroughOptions>;
    fieldset?: DefaultPTOptions<FieldsetPassThroughOptions>;
    fileupload?: DefaultPTOptions<FileUploadPassThroughOptions>;
    galleria?: DefaultPTOptions<GalleriaPassThroughOptions>;
    image?: DefaultPTOptions<ImagePassThroughOptions>;
    inlinemessage?: DefaultPTOptions<InlineMessagePassThroughOptions>;
    inplace?: DefaultPTOptions<InplacePassThroughOptions>;
    inputmask?: DefaultPTOptions<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPTOptions<InputNumberPassThroughOptions>;
    inputswitch?: DefaultPTOptions<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPTOptions<InputTextPassThroughOptions>;
    knob?: DefaultPTOptions<KnobPassThroughOptions>;
    listbox?: DefaultPTOptions<ListboxPassThroughOptions>;
    megamenu?: DefaultPTOptions<MegaMenuPassThroughOptions>;
    menu?: DefaultPTOptions<MenuPassThroughOptions>;
    menubar?: DefaultPTOptions<MenubarPassThroughOptions>;
    message?: DefaultPTOptions<MessagePassThroughOptions>;
    multiselect?: DefaultPTOptions<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPTOptions<OrderListPassThroughOptions>;
    organizationchart?: DefaultPTOptions<OrganizationChartPassThroughOptions>;
    overlaypanel?: DefaultPTOptions<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPTOptions<PaginatorPassThroughOptions>;
    panel?: DefaultPTOptions<PanelPassThroughOptions>;
    panelmenu?: DefaultPTOptions<PanelMenuPassThroughOptions>;
    password?: DefaultPTOptions<PasswordPassThroughOptions>;
    picklist?: DefaultPTOptions<PickListPassThroughOptions>;
    progressbar?: DefaultPTOptions<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPTOptions<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPTOptions<RadioButtonPassThroughOptions>;
    rating?: DefaultPTOptions<RatingPassThroughOptions>;
    row?: DefaultPTOptions<RowPassThroughOptions>;
    scrollpanel?: DefaultPTOptions<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPTOptions<ScrollTopPassThroughOptions>;
    sidebar?: DefaultPTOptions<SidebarPassThroughOptions>;
    skeleton?: DefaultPTOptions<SkeletonPassThroughOptions>;
    slider?: DefaultPTOptions<SliderPassThroughOptions>;
    speeddial?: DefaultPTOptions<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPTOptions<SelectButtonPassThroughOptions>;
    splitbutton?: DefaultPTOptions<SplitButtonPassThroughOptions>;
    splitter?: DefaultPTOptions<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPTOptions<SplitterPanelPassThroughOptions>;
    steps?: DefaultPTOptions<StepsPassThroughOptions>;
    tabmenu?: DefaultPTOptions<TabMenuPassThroughOptions>;
    tabpanel?: DefaultPTOptions<TabPanelPassThroughOptions>;
    tabview?: DefaultPTOptions<TabViewPassThroughOptions>;
    tag?: DefaultPTOptions<TagPassThroughOptions>;
    terminal?: DefaultPTOptions<TerminalPassThroughOptions>;
    textarea?: DefaultPTOptions<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPTOptions<TieredMenuPassThroughOptions>;
    timeline?: DefaultPTOptions<TimelinePassThroughOptions>;
    toast?: DefaultPTOptions<ToastPassThroughOptions>;
    togglebutton?: DefaultPTOptions<ToggleButtonPassThroughOptions>;
    toolbar?: DefaultPTOptions<ToolbarPassThroughOptions>;
    tree?: DefaultPTOptions<TreePassThroughOptions>;
    treeselect?: DefaultPTOptions<TreeSelectPassThroughOptions>;
    tristatecheckbox?: DefaultPTOptions<TriStateCheckboxPassThroughOptions>;
    treetable?: DefaultPTOptions<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPTOptions<VirtualScrollerPassThroughOptions>;
    directives?: {
        badge?: BadgeDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
    };
    global?: {
        css?: (options: any) => string | string | undefined;
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
    aria?: PrimeVueLocaleAriaOptions;
}

export type PrimeVueChangeTheme = (currentTheme: string, newTheme: string, linkElementId: string, callback?: Function) => void;

export declare function usePrimeVue(): {
    config: PrimeVueConfiguration;
    changeTheme: PrimeVueChangeTheme;
};

declare const plugin: Plugin;
export default plugin;

declare module 'vue/types/vue' {
    interface Vue {
        $primevue: {
            config: PrimeVueConfiguration;
            changeTheme: PrimeVueChangeTheme;
        };
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $primevue: {
            config: PrimeVueConfiguration;
            changeTheme: PrimeVueChangeTheme;
        };
    }
}
