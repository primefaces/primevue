import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/setup',
        name: 'setup',
        component: () => import('../views/setup/Setup.vue')
    },
    {
        path: '/accessibility',
        name: 'accessibility',
        component: () => import('../views/accessibility/AccessibilityDemo.vue')
    },
    {
        path: '/locale',
        name: 'locale',
        component: () => import('../views/locale/LocaleDemo.vue')
    },
    {
        path: '/avatar',
        name: 'avatar',
        component: () => import('../views/avatar/AvatarDemo.vue')
    },
    {
        path: '/support',
        name: 'support',
        component: () => import('../views/support/Support.vue')
    },
    {
        path: '/theming',
        name: 'theming',
        component: () => import('../views/theming/Theming.vue')
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('../views/icons/Icons.vue')
    },
    {
        path: '/accordion',
        name: 'accordion',
        component: () => import('../views/accordion/AccordionDemo.vue')
    },
    {
        path: '/autocomplete',
        name: 'autocomplete',
        component: () => import('../views/autocomplete/AutoCompleteDemo.vue')
    },
    {
        path: '/badge',
        name: 'badge',
        component: () => import('../views/badge/BadgeDemo.vue')
    },
    {
        path: '/chip',
        name: 'chip',
        component: () => import('../views/chip/ChipDemo.vue')
    },
    {
        path: '/colors',
        name: 'colors',
        component: () => import('../views/colors/ColorsDemo.vue')
    },
    {
        path: '/blockui',
        name: 'blockui',
        component: () => import('../views/blockui/BlockUIDemo.vue')
    },
    {
        path: '/breadcrumb',
        name: 'breadcrumb',
        component: () => import('../views/breadcrumb/BreadcrumbDemo.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('../views/button/ButtonDemo.vue')
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('../views/calendar/CalendarDemo.vue')
    },
    {
        path: '/card',
        name: 'card',
        component: () => import('../views/card/CardDemo.vue')
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: () => import('../views/carousel/CarouselDemo.vue')
    },
    {
        path: '/cascadeselect',
        name: 'cascadeselect',
        component: () => import('../views/cascadeselect/CascadeSelectDemo.vue')
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart/ChartDemo.vue')
    },
    {
        path: '/chart/bar',
        name: 'barchart',
        component: () => import('../views/chart/BarChartDemo.vue')
    },
    {
        path: '/chart/combo',
        name: 'combochart',
        component: () => import('../views/chart/ComboChartDemo.vue')
    },
    {
        path: '/chart/doughnut',
        name: 'doughnutchart',
        component: () => import('../views/chart/DoughnutChartDemo.vue')
    },
    {
        path: '/chart/line',
        name: 'linechart',
        component: () => import('../views/chart/LineChartDemo.vue')
    },
    {
        path: '/chart/pie',
        name: 'piechart',
        component: () => import('../views/chart/PieChartDemo.vue')
    },
    {
        path: '/chart/polararea',
        name: 'polarareachart',
        component: () => import('../views/chart/PolarAreaChartDemo.vue')
    },
    {
        path: '/chart/radar',
        name: 'radarchart',
        component: () => import('../views/chart/RadarChartDemo.vue')
    },
    {
        path: '/checkbox',
        name: 'checkbox',
        component: () => import('../views/checkbox/CheckboxDemo.vue')
    },
    {
        path: '/chips',
        name: 'chips',
        component: () => import('../views/chips/ChipsDemo.vue')
    },
    {
        path: '/colorpicker',
        name: 'colorpicker',
        component: () => import('../views/colorpicker/ColorPickerDemo.vue')
    },
    {
        path: '/confirmdialog',
        name: 'confirmdialog',
        component: () => import('../views/confirmdialog/ConfirmDialogDemo.vue')
    },
    {
        path: '/confirmpopup',
        name: 'confirmpopup',
        component: () => import('../views/confirmpopup/ConfirmPopupDemo.vue')
    },
    {
        path: '/contextmenu',
        name: 'contextmenu',
        component: () => import('../views/contextmenu/ContextMenuDemo.vue')
    },
    {
        path: '/datatable',
        name: 'datatable',
        component: () => import('../views/datatable/DataTableDemo.vue')
    },
    {
        path: '/datatable/basic',
        name: 'datatablebasic',
        component: () => import('../views/datatable/DataTableBasicDemo.vue')
    },
    {
        path: '/datatable/dynamiccolumns',
        name: 'datatabledynamiccolumns',
        component: () => import('../views/datatable/DataTableDynamicColumnsDemo.vue')
    },
    {
        path: '/datatable/templating',
        name: 'datatabletemplating',
        component: () => import('../views/datatable/DataTableTemplatingDemo.vue')
    },
    {
        path: '/datatable/paginator',
        name: 'datatablepaginator',
        component: () => import('../views/datatable/DataTablePaginatorDemo.vue')
    },
    {
        path: '/datatable/sort',
        name: 'datatablesort',
        component: () => import('../views/datatable/DataTableSortDemo.vue')
    },
    {
        path: '/datatable/filter',
        name: 'datatablefilter',
        component: () => import('../views/datatable/DataTableFilterDemo.vue')
    },
    {
        path: '/datatable/lazy',
        name: 'datatablelazy',
        component: () => import('../views/datatable/DataTableLazyDemo.vue')
    },
    {
        path: '/datatable/selection',
        name: 'datatableselection',
        component: () => import('../views/datatable/DataTableSelectionDemo.vue')
    },
    {
        path: '/datatable/coltoggle',
        name: 'datatablecoltoggle',
        component: () => import('../views/datatable/DataTableColToggleDemo.vue')
    },
    {
        path: '/datatable/reorder',
        name: 'datatablereorder',
        component: () => import('../views/datatable/DataTableReorderDemo.vue')
    },
    {
        path: '/datatable/rowgroup',
        name: 'datatablerowgroup',
        component: () => import('../views/datatable/DataTableRowGroupDemo.vue')
    },
    {
        path: '/datatable/responsive',
        name: 'datatableresponsive',
        component: () => import('../views/datatable/DataTableResponsiveDemo.vue')
    },
    {
        path: '/datatable/export',
        name: 'datatableexport',
        component: () => import('../views/datatable/DataTableExportDemo.vue')
    },
    {
        path: '/datatable/colgroup',
        name: 'datatablecolgroup',
        component: () => import('../views/datatable/DataTableColGroupDemo.vue')
    },
    {
        path: '/datatable/size',
        name: 'datatablesize',
        component: () => import('../views/datatable/DataTableSizeDemo.vue')
    },
    {
        path: '/datatable/colresize',
        name: 'datatablecolresize',
        component: () => import('../views/datatable/DataTableColResizeDemo.vue')
    },
    {
        path: '/datatable/rowexpand',
        name: 'datatablerowexpand',
        component: () => import('../views/datatable/DataTableRowExpandDemo.vue')
    },
    {
        path: '/datatable/state',
        name: 'datatablestate',
        component: () => import('../views/datatable/DataTableStateDemo.vue')
    },
    {
        path: '/datatable/edit',
        name: 'datatableedit',
        component: () => import('../views/datatable/DataTableEditDemo.vue')
    },
    {
        path: '/datatable/crud',
        name: 'datatablecrud',
        component: () => import('../views/datatable/DataTableCrudDemo.vue')
    },
    {
        path: '/datatable/scroll',
        name: 'datatablescroll',
        component: () => import('../views/datatable/DataTableScrollDemo.vue')
    },
    {
        path: '/datatable/flexscroll',
        name: 'datatableflexscroll',
        component: () => import('../views/datatable/DataTableFlexScrollDemo.vue')
    },
    {
        path: '/datatable/style',
        name: 'datatablestyle',
        component: () => import('../views/datatable/DataTableStyleDemo.vue')
    },
    {
        path: '/datatable/contextmenu',
        name: 'datatablecontextmenu',
        component: () => import('../views/datatable/DataTableContextMenuDemo.vue')
    },
    {
        path: '/datatable/gridlines',
        name: 'datatablegridlines',
        component: () => import('../views/datatable/DataTableGridLinesDemo.vue')
    },
    {
        path: '/datatable/striped',
        name: 'datatablestriped',
        component: () => import('../views/datatable/DataTableStripedDemo.vue')
    },
    {
        path: '/dataview',
        name: 'dataview',
        component: () => import('../views/dataview/DataViewDemo.vue')
    },
    {
        path: '/deferredcontent',
        name: 'deferredcontent',
        component: () => import('../views/deferredcontent/DeferredContentDemo.vue')
    },
    {
        path: '/dialog',
        name: 'dialog',
        component: () => import('../views/dialog/DialogDemo.vue')
    },
    {
        path: '/display',
        name: 'display',
        component: () => import('../views/display/DisplayDemo.vue')
    },
    {
        path: '/divider',
        name: 'divider',
        component: () => import('../views/divider/DividerDemo.vue')
    },
    {
        path: '/dock',
        name: 'dock',
        component: () => import('../views/dock/DockDemo.vue')
    },
    {
        path: '/dropdown',
        name: 'dropdown',
        component: () => import('../views/dropdown/DropdownDemo.vue')
    },
    {
        path: '/editor',
        name: 'editor',
        component: () => import('../views/editor/EditorDemo.vue')
    },
    {
        path: '/elevation',
        name: 'elevation',
        component: () => import('../views/elevation/ElevationDemo.vue')
    },
    {
        path: '/fieldset',
        name: 'fieldset',
        component: () => import('../views/fieldset/FieldsetDemo.vue')
    },
    {
        path: '/filterservice',
        name: 'filterservice',
        component: () => import('../views/filterservice/FilterServiceDemo.vue')
    },
    {
        path: '/fileupload',
        name: 'fileupload',
        component: () => import('../views/fileupload/FileUploadDemo.vue')
    },
    {
        path: '/grid',
        name: 'grid',
        component: () => import('../views/grid/GridDemo.vue')
    },
    {
        path: '/formlayout',
        name: 'formlayout',
        component: () => import('../views/formlayout/FormLayoutDemo.vue')
    },
    {
        path: '/fullcalendar',
        name: 'fullcalendar',
        component: () => import('../views/fullcalendar/FullCalendarDemo.vue')
    },
    {
        path: '/image',
        name: 'image',
        component: () => import('../views/image/ImageDemo.vue')
    },
    {
        path: '/inplace',
        name: 'inplace',
        component: () => import('../views/inplace/InplaceDemo.vue')
    },
    {
        path: '/inputgroup',
        name: 'inputgroup',
        component: () => import('../views/inputgroup/InputGroupDemo.vue')
    },
    {
        path: '/inputswitch',
        name: 'inputswitch',
        component: () => import('../views/inputswitch/InputSwitchDemo.vue')
    },
    {
        path: '/inputtext',
        name: 'inputtext',
        component: () => import('../views/inputtext/InputTextDemo.vue')
    },
    {
        path: '/inputmask',
        name: 'inputmask',
        component: () => import('../views/inputmask/InputMaskDemo.vue')
    },
    {
        path: '/inputnumber',
        name: 'inputnumber',
        component: () => import('../views/inputnumber/InputNumberDemo.vue')
    },
    {
        path: '/invalid',
        name: 'invalid',
        component: () => import('../views/invalid/InvalidDemo.vue')
    },
    {
        path: '/scrolltop',
        name: 'scrolltop',
        component: () => import('../views/scrolltop/ScrollTopDemo.vue')
    },
    {
        path: '/skeleton',
        name: 'skeleton',
        component: () => import('../views/skeleton/SkeletonDemo.vue')
    },
    {
        path: '/splitter',
        name: 'splitter',
        component: () => import('../views/splitter/SplitterDemo.vue')
    },
    {
        path: '/knob',
        name: 'knob',
        component: () => import('../views/knob/KnobDemo.vue')
    },
    {
        path: '/listbox',
        name: 'listbox',
        component: () => import('../views/listbox/ListboxDemo.vue')
    },
    {
        path: '/flexbox',
        name: 'flexbox',
        component: () => import('../views/flexbox/FlexBoxDemo.vue')
    },
    {
        path: '/floatlabel',
        name: 'floatlabel',
        component: () => import('../views/floatlabel/FloatLabelDemo.vue')
    },
    {
        path: '/megamenu',
        name: 'megamenu',
        component: () => import('../views/megamenu/MegaMenuDemo.vue')
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/menu/MenuDemo.vue')
    },
    {
        path: '/menubar',
        name: 'menubar',
        component: () => import('../views/menubar/MenubarDemo.vue')
    },
    {
        path: '/menumodel',
        name: 'menumodel',
        component: () => import('../views/menumodel/MenuModel.vue')
    },
    {
        path: '/message',
        name: 'message',
        component: () => import('../views/message/MessageDemo.vue')
    },
    {
        path: '/multiselect',
        name: 'multiselect',
        component: () => import('../views/multiselect/MultiSelectDemo.vue')
    },
    {
        path: '/orderlist',
        name: 'orderlist',
        component: () => import('../views/orderlist/OrderListDemo.vue')
    },
    {
        path: '/organizationchart',
        name: 'organizationchart',
        component: () => import('../views/organizationchart/OrganizationChartDemo.vue')
    },
    {
        path: '/overlaypanel',
        name: 'overlaypanel',
        component: () => import('../views/overlaypanel/OverlayPanelDemo.vue')
    },
    {
        path: '/paginator',
        name: 'paginator',
        component: () => import('../views/paginator/PaginatorDemo.vue')
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import('../views/panel/PanelDemo.vue')
    },
    {
        path: '/panelmenu',
        name: 'panelmenu',
        component: () => import('../views/panelmenu/PanelMenuDemo.vue')
    },
    {
        path: '/picklist',
        name: 'picklist',
        component: () => import('../views/picklist/PickListDemo.vue')
    },
    {
        path: '/password',
        name: 'password',
        component: () => import('../views/password/PasswordDemo.vue')
    },
    {
        path: '/progressbar',
        name: 'progressbar',
        component: () => import('../views/progressbar/ProgressBarDemo.vue')
    },
    {
        path: '/progressspinner',
        name: 'progressspinner',
        component: () => import('../views/progressspinner/ProgressSpinnerDemo.vue')
    },
    {
        path: '/primeflex',
        name: 'primeflex',
        component: () => import('../views/primeflex/PrimeFlexSetup.vue')
    },
    {
        path: '/radiobutton',
        name: 'radiobutton',
        component: () => import('../views/radiobutton/RadioButtonDemo.vue')
    },
    {
        path: '/rating',
        name: 'rating',
        component: () => import('../views/rating/RatingDemo.vue')
    },
    {
        path: '/responsive',
        name: 'responsive',
        component: () => import('../views/responsive/ResponsiveDemo.vue')
    },
    {
        path: '/ripple',
        name: 'ripple',
        component: () => import('../views/ripple/RippleDemo.vue')
    },
    {
        path: '/scrollpanel',
        name: 'scrollpanel',
        component: () => import('../views/scrollpanel/ScrollPanelDemo.vue')
    },
    {
        path: '/selectbutton',
        name: 'selectbutton',
        component: () => import('../views/selectbutton/SelectButtonDemo.vue')
    },
    {
        path: '/sidebar',
        name: 'sidebar',
        component: () => import('../views/sidebar/SidebarDemo.vue')
    },
    {
        path: '/slider',
        name: 'slider',
        component: () => import('../views/slider/SliderDemo.vue')
    },
    {
        path: '/spacing',
        name: 'spacing',
        component: () => import('../views/spacing/SpacingDemo.vue')
    },
    {
        path: '/speeddial',
        name: 'speeddial',
        component: () => import('../views/speeddial/SpeedDialDemo.vue')
    },
    {
        path: '/splitbutton',
        name: 'splitbutton',
        component: () => import('../views/splitbutton/SplitButtonDemo.vue')
    },
    {
        path: '/steps',
        component: () => import('../views/steps/StepsDemo.vue'),
        children: [{
            path: '',
            component: () => import('../views/steps/PersonalDemo.vue')
        },
        {
            path: '/steps/seat',
            component: () => import('../views/steps/SeatDemo.vue')
        },
        {
            path: '/steps/payment',
            component: () => import('../views/steps/PaymentDemo.vue')
        },
        {
            path: '/steps/confirmation',
            component: () => import('../views/steps/ConfirmationDemo.vue')
        }]
    },
    {
        path: '/tabmenu',
        component: () => import('../views/tabmenu/TabMenuDemo.vue'),
        children: [{
            path: '',
            component: () => import('../views/tabmenu/HomeDemo.vue')
        },
        {
            path: '/tabmenu/calendar',
            component: () => import('../views/tabmenu/CalendarDemo.vue')
        },
        {
            path: '/tabmenu/edit',
            component: () => import('../views/tabmenu/EditDemo.vue')
        },
        {
            path: '/tabmenu/documentation',
            component: () => import('../views/tabmenu/DocumentationDemo.vue')
        },
        {
            path: '/tabmenu/settings',
            component: () => import('../views/tabmenu/SettingsDemo.vue')
        }]
    },
    {
        path: '/styleclass',
        name: 'styleclass',
        component: () => import('../views/styleclass/StyleClassDemo.vue')
    },
    {
        path: '/tabview',
        name: 'tabview',
        component: () => import('../views/tabview/TabViewDemo.vue')
    },
    {
        path: '/tag',
        name: 'tag',
        component: () => import('../views/tag/TagDemo.vue')
    },
    {
        path: '/text',
        name: 'text',
        component: () => import('../views/text/TextDemo.vue')
    },
    {
        path: '/textarea',
        name: 'textarea',
        component: () => import('../views/textarea/TextareaDemo.vue')
    },
    {
        path: '/terminal',
        name: 'terminal',
        component: () => import('../views/terminal/TerminalDemo.vue')
    },
    {
        path: '/tieredmenu',
        name: 'tieredmenu',
        component: () => import('../views/tieredmenu/TieredMenuDemo.vue')
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import('../views/timeline/TimelineDemo.vue')
    },
    {
        path: '/toast',
        name: 'toast',
        component: () => import('../views/toast/ToastDemo.vue')
    },
    {
        path: '/togglebutton',
        name: 'togglebutton',
        component: () => import('../views/togglebutton/ToggleButtonDemo.vue')
    },
    {
        path: '/toolbar',
        name: 'toolbar',
        component: () => import('../views/toolbar/ToolbarDemo.vue')
    },
    {
        path: '/tooltip',
        name: 'tooltip',
        component: () => import('../views/tooltip/TooltipDemo.vue')
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('../views/tree/TreeDemo.vue')
    },
    {
        path: '/tree/selection',
        name: 'treeselection',
        component: () => import('../views/tree/TreeSelectionDemo.vue')
    },
    {
        path: '/tree/lazy',
        name: 'treelazy',
        component: () => import('../views/tree/TreeLazyDemo.vue')
    },
    {
        path: '/tree/templating',
        name: 'treetemplating',
        component: () => import('../views/tree/TreeTemplatingDemo.vue')
    },
    {
        path: '/tree/filter',
        name: 'treefilter',
        component: () => import('../views/tree/TreeFilterDemo.vue')
    },
    {
        path: '/tree/scroll',
        name: 'treescroll',
        component: () => import('../views/tree/TreeScrollDemo.vue')
    },
    {
        path: '/treeselect',
        name: 'treeselect',
        component: () => import('../views/treeselect/TreeSelectDemo.vue')
    },
    {
        path: '/treetable',
        name: 'treetable',
        component: () => import('../views/treetable/TreeTableDemo.vue')
    },
    {
        path: '/treetable/templating',
        name: 'treetabletemplating',
        component: () => import('../views/treetable/TreeTableTemplatingDemo.vue')
    },
    {
        path: '/treetable/size',
        name: 'treetablesize',
        component: () => import('../views/treetable/TreeTableSizeDemo.vue')
    },
    {
        path: '/treetable/paginator',
        name: 'treetablepaginator',
        component: () => import('../views/treetable/TreeTablePaginatorDemo.vue')
    },
    {
        path: '/treetable/sort',
        name: 'treetablesort',
        component: () => import('../views/treetable/TreeTableSortDemo.vue')
    },
    {
        path: '/treetable/filter',
        name: 'treetablefilter',
        component: () => import('../views/treetable/TreeTableFilterDemo.vue')
    },
    {
        path: '/treetable/selection',
        name: 'treetableselection',
        component: () => import('../views/treetable/TreeTableSelectionDemo.vue')
    },
    {
        path: '/treetable/lazy',
        name: 'treetablelazy',
        component: () => import('../views/treetable/TreeTableLazyDemo.vue')
    },
    {
        path: '/treetable/coltoggle',
        name: 'treetablecoltoggle',
        component: () => import('../views/treetable/TreeTableColToggleDemo.vue')
    },
    {
        path: '/treetable/responsive',
        name: 'treetableresponsive',
        component: () => import('../views/treetable/TreeTableResponsiveDemo.vue')
    },
    {
        path: '/treetable/colresize',
        name: 'treetablecolresize',
        component: () => import('../views/treetable/TreeTableColResizeDemo.vue')
    },
    {
        path: '/treetable/scroll',
        name: 'treetablescroll',
        component: () => import('../views/treetable/TreeTableScrollDemo.vue')
    },
    {
        path: '/tristatecheckbox',
        name: 'tristatecheckbox',
        component: () => import('../views/tristatecheckbox/TriStateCheckboxDemo.vue')
    },
    {
        path: '/galleria',
        name: 'galleria',
        component: () => import('../views/galleria/GalleriaDemo.vue')
    },
    {
        path: '/galleria/programmatic',
        name: 'galleriaprogrammatic',
        component: () => import('../views/galleria/GalleriaProgrammaticDemo.vue')
    },
    {
        path: '/galleria/indicator',
        name: 'galleriaindicator',
        component: () => import('../views/galleria/GalleriaIndicatorDemo.vue')
    },
    {
        path: '/galleria/thumbnail',
        name: 'galleriathumbnail',
        component: () => import('../views/galleria/GalleriaThumbnailDemo.vue')
    },
    {
        path: '/galleria/navigator',
        name: 'gallerianavigator',
        component: () => import('../views/galleria/GalleriaNavigatorDemo.vue')
    },
    {
        path: '/galleria/responsive',
        name: 'galleriaresponsive',
        component: () => import('../views/galleria/GalleriaResponsiveDemo.vue')
    },
    {
        path: '/galleria/fullscreen',
        name: 'galleriafullscreen',
        component: () => import('../views/galleria/GalleriaFullScreenDemo.vue')
    },
    {
        path: '/galleria/autoplay',
        name: 'galleriaautoplay',
        component: () => import('../views/galleria/GalleriaAutoPlayDemo.vue')
    },
    {
        path: '/galleria/caption',
        name: 'galleriacaption',
        component: () => import('../views/galleria/GalleriaCaptionDemo.vue')
    },
    {
        path: '/galleria/advanced',
        name: 'galleriaadvvanced',
        component: () => import('../views/galleria/GalleriaAdvancedDemo.vue')
    },
    {
        path: '/virtualscroller',
        name: 'virtualscroller',
        component: () => import('../views/virtualscroller/VirtualScrollerDemo.vue')
    },
    {
        path: '/vuelidate',
        name: 'vuelidateform',
        component: () => import('../views/validation/VuelidateFormDemo.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;