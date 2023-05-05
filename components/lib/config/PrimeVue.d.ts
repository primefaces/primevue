import { Plugin } from 'vue';
import { AccordionPassThroughOptions } from '../accordion';
import { AccordionTabPassThroughOptions } from '../accordiontab';
import { AutoCompletePassThroughOptions } from '../autocomplete';
import { AvatarPassThroughOptions } from '../avatar';
import { BadgePassThroughOptions } from '../badge';
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
import { ConfirmDialogPassThroughOptions } from '../confirmdialog';
import { ConfirmPopupPassThroughOptions } from '../confirmpopup';
import { ContextMenuPassThroughOptions } from '../contextmenu';
import { DeferredContentPassThroughOptions } from '../deferredcontent';
import { DialogPassThroughOptions } from '../dialog';
import { DividerPassThroughOptions } from '../divider';
import { DockPassThroughOptions } from '../dock';
import { EditorPassThroughOptions } from '../editor';
import { FieldsetPassThroughOptions } from '../fieldset';
import { FileUploadPassThroughOptions } from '../fileupload';
import { GalleriaPassThroughOptions } from '../galleria';
import { ImagePassThroughOptions } from '../image';
import { InlineMessagePassThroughOptions } from '../inlinemessage';
import { InplacePassThroughOptions } from '../inplace';
import { InputMaskPassThroughOptions } from '../inputmask';
import { InputNumberPassThroughOptions } from '../inputnumber';
import { InputSwitchPassThroughOptions } from '../inputswitch';
import { InputTextPassThroughOptions } from '../inputtext';
import { KnobPassThroughOptions } from '../knob';
import { MegaMenuPassThroughOptions } from '../megamenu';
import { MenuPassThroughOptions } from '../menu';
import { MenubarPassThroughOptions } from '../menubar';
import { MessagePassThroughOptions } from '../message';
import { OverlayPanelPassThroughOptions } from '../overlaypanel';
import { PanelPassThroughOptions } from '../panel';
import { PanelMenuPassThroughOptions } from '../panelmenu';
import { PasswordPassThroughOptions } from '../password';
import { ProgressBarPassThroughOptions } from '../progressbar';
import { ProgressSpinnerPassThroughOptions } from '../progressspinner';
import { ScrollPanelPassThroughOptions } from '../scrollpanel';
import { ScrollTopPassThroughOptions } from '../scrolltop';
import { SidebarPassThroughOptions } from '../sidebar';
import { SkeletonPassThroughOptions } from '../skeleton';
import { SpeedDialPassThroughOptions } from '../speeddial';
import { SplitButtonPassThroughOptions } from '../splitbutton';
import { SplitterPassThroughOptions } from '../splitter';
import { TabMenuPassThroughOptions } from '../tabmenu';
import { TabPanelPassThroughOptions } from '../tabpanel';
import { TabViewPassThroughOptions } from '../tabview';
import { TagPassThroughOptions } from '../tag';
import { TerminalPassThroughOptions } from '../terminal';
import { TieredMenuPassThroughOptions } from '../tieredmenu';
import { ToastPassThroughOptions } from '../toast';
import { ToolbarPassThroughOptions } from '../toolbar';
import { VirtualScrollerPassThroughOptions } from '../virtualscroller';

interface PrimeVueConfiguration {
    ripple?: boolean;
    inputStyle?: string;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    pt?: PrimeVuePTOptions;
}

interface PrimeVueZIndexOptions {
    modal?: number;
    overlay?: number;
    menu?: number;
    tooltip?: number;
}

interface PrimeVuePTOptions {
    accordion?: AccordionPassThroughOptions;
    accordiontab?: AccordionTabPassThroughOptions;
    autocomplete?: AutoCompletePassThroughOptions;
    avatar?: AvatarPassThroughOptions;
    badge?: BadgePassThroughOptions;
    blockui?: BlockUIPassThroughOptions;
    breadcrumb?: BreadcrumbPassThroughOptions;
    button?: ButtonPassThroughOptions;
    calendar?: CalendarPassThroughOptions;
    card?: CardPassThroughOptions;
    carousel?: CarouselPassThroughOptions;
    cascadeselect?: CascadeSelectPassThroughOptions;
    chart?: ChartPassThroughOptions;
    checkbox?: CheckboxPassThroughOptions;
    chip?: ChipPassThroughOptions;
    chips?: ChipsPassThroughOptions;
    colorpicker?: ColorPickerPassThroughOptions;
    confirmdialog?: ConfirmDialogPassThroughOptions;
    confirmpopup?: ConfirmPopupPassThroughOptions;
    contextmenu?: ContextMenuPassThroughOptions;
    deferredcontent?: DeferredContentPassThroughOptions;
    divider?: DividerPassThroughOptions;
    dialog?: DialogPassThroughOptions;
    dock?: DockPassThroughOptions;
    dynamicdialog?: DialogPassThroughOptions;
    editor?: EditorPassThroughOptions;
    fieldset?: FieldsetPassThroughOptions;
    fileupload?: FileUploadPassThroughOptions;
    galleria?: GalleriaPassThroughOptions;
    image?: ImagePassThroughOptions;
    inlinemessage?: InlineMessagePassThroughOptions;
    inplace?: InplacePassThroughOptions;
    inputmask?: InputMaskPassThroughOptions;
    inputnumber?: InputNumberPassThroughOptions;
    inputswitch?: InputSwitchPassThroughOptions;
    inputtext?: InputTextPassThroughOptions;
    knob?: KnobPassThroughOptions;
    megamenu?: MegaMenuPassThroughOptions;
    menu?: MenuPassThroughOptions;
    menubar?: MenubarPassThroughOptions;
    message?: MessagePassThroughOptions;
    overlaypanel?: OverlayPanelPassThroughOptions;
    panel?: PanelPassThroughOptions;
    panelmenu?: PanelMenuPassThroughOptions;
    password?: PasswordPassThroughOptions;
    progressbar?: ProgressBarPassThroughOptions;
    progressspinner?: ProgressSpinnerPassThroughOptions;
    scrollpanel?: ScrollPanelPassThroughOptions;
    scrolltop?: ScrollTopPassThroughOptions;
    sidebar?: SidebarPassThroughOptions;
    skeleton?: SkeletonPassThroughOptions;
    speeddial?: SpeedDialPassThroughOptions;
    splitbutton?: SplitButtonPassThroughOptions;
    splitter?: SplitterPassThroughOptions;
    steps?: PanelMenuPassThroughOptions;
    tabmenu?: TabMenuPassThroughOptions;
    tabpanel?: TabPanelPassThroughOptions;
    tabview?: TabViewPassThroughOptions;
    tag?: TagPassThroughOptions;
    terminal?: TerminalPassThroughOptions;
    tieredmenu?: TieredMenuPassThroughOptions;
    toast?: ToastPassThroughOptions;
    toolbar?: ToolbarPassThroughOptions;
    virtualscroller?: VirtualScrollerPassThroughOptions;
}

interface PrimeVueLocaleAriaOptions {
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

interface PrimeVueLocaleOptions {
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

export declare function usePrimeVue(): { config: PrimeVueConfiguration };

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
