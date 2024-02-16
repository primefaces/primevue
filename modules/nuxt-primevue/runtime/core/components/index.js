const form = [
    'AutoComplete',
    'Calendar',
    'CascadeSelect',
    'Checkbox',
    'Chips',
    'ColorPicker',
    'Dropdown',
    'Editor',
    'FloatLabel',
    'IconField',
    'InputGroup',
    'InputGroupAddon',
    'InputIcon',
    'InputMask',
    'InputNumber',
    'InputSwitch',
    'InputText',
    'Knob',
    'Listbox',
    'MultiSelect',
    'Password',
    'RadioButton',
    'Rating',
    'SelectButton',
    'Slider',
    'Textarea',
    'ToggleButton',
    'TreeSelect',
    'TriStateCheckbox'
];

const button = ['Button', 'ButtonGroup', 'SpeedDial', 'SplitButton'];

const data = ['Column', 'Row', 'ColumnGroup', 'DataTable', 'DataView', 'DataViewLayoutOptions', 'OrderList', 'OrganizationChart', 'Paginator', 'PickList', 'Tree', 'TreeTable', 'Timeline', 'VirtualScroller'];

const panel = ['Accordion', 'AccordionTab', 'Card', 'DeferredContent', 'Divider', 'Fieldset', 'Panel', 'ScrollPanel', 'Splitter', 'SplitterPanel', 'Stepper', 'StepperPanel', 'TabView', 'TabPanel', 'Toolbar'];

const overlay = [{ name: 'ConfirmDialog', use: { as: 'ConfirmationService' } }, { name: 'ConfirmPopup', use: { as: 'ConfirmationService' } }, 'Dialog', { name: 'DynamicDialog', use: { as: 'DialogService' } }, 'OverlayPanel', 'Sidebar'];

const file = ['FileUpload'];

const menu = ['Breadcrumb', 'ContextMenu', 'Dock', 'Menu', 'Menubar', 'MegaMenu', 'PanelMenu', 'Steps', 'TabMenu', 'TieredMenu'];

const chart = ['Chart'];

const messages = ['Message', 'InlineMessage', { name: 'Toast', use: { as: 'ToastService' } }];

const media = ['Carousel', 'Galleria', 'Image'];

const misc = ['Avatar', 'AvatarGroup', 'Badge', 'BlockUI', 'Chip', 'Inplace', 'MeterGroup', 'ScrollTop', 'Skeleton', 'ProgressBar', 'ProgressSpinner', 'Tag', 'Terminal'];

export const components = [...form, ...button, ...data, ...panel, ...overlay, ...file, ...menu, ...chart, ...messages, ...media, ...misc].map((c) => (typeof c === 'string' ? { name: c } : c));
