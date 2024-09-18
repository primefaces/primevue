import { MetaType, toMeta } from '../index';

export const form: MetaType[] = toMeta([
    'AutoComplete',
    'Calendar',
    'CascadeSelect',
    'Checkbox',
    'Chips',
    'ColorPicker',
    'DatePicker',
    'Dropdown',
    'Editor',
    'FloatLabel',
    'Fluid',
    'IconField',
    'IftaLabel',
    'InputChips',
    'InputGroup',
    'InputGroupAddon',
    'InputIcon',
    'InputMask',
    'InputNumber',
    'InputOtp',
    'InputSwitch',
    'InputText',
    'Knob',
    'Listbox',
    'MultiSelect',
    'Password',
    'RadioButton',
    'Rating',
    'Select',
    'SelectButton',
    'Slider',
    'Textarea',
    'ToggleButton',
    'ToggleSwitch',
    'TreeSelect'
]);

export const button: MetaType[] = toMeta(['Button', 'ButtonGroup', 'SpeedDial', 'SplitButton']);

export const data: MetaType[] = toMeta(['Column', 'Row', 'ColumnGroup', 'DataTable', 'DataView', 'OrderList', 'OrganizationChart', 'Paginator', 'PickList', 'Tree', 'TreeTable', 'Timeline', 'VirtualScroller']);

export const panel: MetaType[] = toMeta([
    'Accordion',
    'AccordionPanel',
    'AccordionHeader',
    'AccordionContent',
    'AccordionTab',
    'Card',
    'DeferredContent',
    'Divider',
    'Fieldset',
    'Panel',
    'ScrollPanel',
    'Splitter',
    'SplitterPanel',
    'Stepper',
    'StepList',
    'Step',
    'StepItem',
    'StepPanels',
    'StepPanel',
    'TabView',
    'Tabs',
    'TabList',
    'Tab',
    'TabPanels',
    'TabPanel',
    'Toolbar'
]);

export const overlay: MetaType[] = toMeta([
    { name: 'ConfirmDialog', use: { as: 'ConfirmationService' } },
    { name: 'ConfirmPopup', use: { as: 'ConfirmationService' } },
    'Dialog',
    'Drawer',
    { name: 'DynamicDialog', use: { as: 'DialogService' } },
    'OverlayPanel',
    'Popover',
    'Sidebar'
]);

export const file: MetaType[] = toMeta(['FileUpload']);

export const menu: MetaType[] = toMeta(['Breadcrumb', 'ContextMenu', 'Dock', 'Menu', 'Menubar', 'MegaMenu', 'PanelMenu', 'Steps', 'TabMenu', 'TieredMenu']);

export const chart: MetaType[] = toMeta(['Chart']);

export const messages: MetaType[] = toMeta(['Message', 'InlineMessage', { name: 'Toast', use: { as: 'ToastService' } }]);

export const media: MetaType[] = toMeta(['Carousel', 'Galleria', 'Image']);

export const misc: MetaType[] = toMeta(['Avatar', 'AvatarGroup', 'Badge', 'BlockUI', 'Chip', 'Inplace', 'MeterGroup', 'OverlayBadge', 'ScrollTop', 'Skeleton', 'ProgressBar', 'ProgressSpinner', 'Tag', 'Terminal']);

// All PrimeVue Components
export const components: MetaType[] = [...form, ...button, ...data, ...panel, ...overlay, ...file, ...menu, ...chart, ...messages, ...media, ...misc];
