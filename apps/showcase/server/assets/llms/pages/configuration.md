# Configuration

Application wide configuration for PrimeVue.

## Import

Configuration is managed by the PrimeVue instance imported from primevue/config .

```vue
import PrimeVue from 'primevue/config'; const app = createApp(App); app.use(PrimeVue, { /* options */ });
```

## InputVariant

Input fields come in two styles, default is outlined with borders around the field whereas filled alternative adds a background color to the field. Applying p-variant-filled to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputVariant to filled at PrimeVue configuration as well.

```vue
import {createApp} from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { inputVariant: "filled" });
```

## Pass Through

Defines the shared pass through properties per component type. Visit the Pass Through Props documentation for more information.

```vue
import { createApp } from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { pt: { slider: { handle: { class: 'bg-primary text-primary-contrast' } } } });
```

## Pass Through Options

Used to configure the ptOptions properties of components and the usePassThrough method. The mergeSections defines whether the sections from the main configuration gets added and the mergeProps controls whether to override or merge the defined props. Defaults are true for mergeSections and false for mergeProps .

```vue
import { createApp } from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { ptOptions: { mergeSections: true, mergeProps: false } });
```

## Ripple

Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the PrimeVue setup.

```vue
import { createApp } from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { ripple: true });
```

## Theme

Style mode offers theming based on a design token based architecture. See the styled mode documentation for details such as building your own theme.

```vue
import PrimeVue from 'primevue/config'; import Aura from '@primeuix/themes/aura'; const app = createApp(App); app.use(PrimeVue, { theme: { preset: Aura, options: { prefix: 'p', darkModeSelector: 'system', cssLayer: false } } });
```

## Unstyled

Unstyled mode instructs the components not to add any built-in style classes so that they can be styled using custom css or libraries like Tailwind and Bootstrap. Visit Unstyled mode documentation for more information.

```vue
import { createApp } from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { unstyled: true });
```

## ZIndex

ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeVue configuration offers the zIndex property to customize the default values for components categories. Default values are described below and can be customized when setting up PrimeVue.

```vue
import {createApp} from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { zIndex: { modal: 1100, //dialog, drawer overlay: 1000, //select, popover menu: 1000, //overlay menus tooltip: 1100 //tooltip } });
```

## Nonce

The nonce value to use on dynamically generated style elements in core.

## Import

Locale values are stored in the global configuration that becomes accessible after installing the PrimeVue.

```vue
import PrimeVue from 'primevue/config'; const app = createApp(App); app.use(PrimeVue);
```

## Locale Api

Configuration is managed by the Locale API imported from primevue/config . Locale Options Key Value startsWith Starts with contains Contains notContains Not contains endsWith Ends with equals Equals notEquals Not equals noFilter No Filter lt Less than lte Less than or equal to gt Greater than gte Greater than or equal to dateIs Date is dateIsNot Date is not dateBefore Date is before dateAfter Date is after clear Clear apply Apply matchAll Match All matchAny Match Any addRule Add Rule removeRule Remove Rule accept Yes reject No choose Choose upload Upload cancel Cancel completed Completed pending Pending fileSizeTypes ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] dayNames ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' dayNamesShort ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' dayNamesMin ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' monthNames ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' monthNamesShort ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' chooseYear Choose Year chooseMonth Choose Month chooseDate Choose Date prevDecade Previous Decade nextDecade Next Decade prevYear Previous Year nextYear Next Year prevMonth Previous Month nextMonth Next Month prevHour Previous Hour nextHour Next Hour prevMinute Previous Minute nextMinute Next Minute prevSecond Previous Second nextSecond Next Second am am pm pm today Today weekHeader Wk firstDayOfWeek 0 showMonthAfterYear false dateFormat mm/dd/yy weak Weak medium Medium strong Strong passwordPrompt Enter a password searchMessage {0} results are available selectionMessage {0} items selected emptySelectionMessage No selected item emptySearchMessage No results found fileChosenMessage {0} files noFileChosenMessage No file chosen emptyMessage No available options aria.trueLabel True aria.falseLabel False aria.nullLabel Not Selected aria.star 1 star aria.stars {star} stars aria.selectAll All items selected aria.unselectAll All items unselected aria.close Close aria.previous Previous aria.next Next aria.navigation Navigation aria.scrollTop Scroll Top aria.moveTop Move Top aria.moveUp Move Up aria.moveDown Move Down aria.moveBottom Move Bottom aria.moveToTarget Move to Target aria.moveToSource Move to Source aria.moveAllToTarget Move All to Target aria.moveAllToSource Move All to Source aria.pageLabel Page {page} aria.firstPageLabel First Page aria.lastPageLabel Last Page aria.nextPageLabel Next Page aria.prevPageLabel Previous Page aria.rowsPerPageLabel Rows per page aria.jumpToPageDropdownLabel Jump to Page Dropdown aria.jumpToPageInputLabel Jump to Page Input aria.selectRow Row Selected aria.unselectRow Row Unselected aria.expandRow Row Expanded aria.collapseRow Row Collapsed aria.showFilterMenu Show Filter Menu aria.hideFilterMenu Hide Filter Menu aria.filterOperator Filter Operator aria.filterConstraint Filter Constraint aria.editRow Row Edit aria.saveEdit Save Edit aria.cancelEdit Cancel Edit aria.listView List View aria.gridView Grid View aria.slide Slide aria.slideNumber {slideNumber} aria.zoomImage Zoom Image aria.zoomIn Zoom In aria.zoomOut Zoom Out aria.rotateRight Rotate Right aria.rotateLeft Rotate Left

## Repository

Ready to use settings for locales are available at the community supported PrimeLocale repository. We'd appreciate if you could contribute to this repository with pull requests and share it with the rest of the community.

## Set Locale

Second parameter of the use function can be used to initiate the locale during PrimeVue installation. The locale configuration is reactive so that any changes are instantly reflected in the UI. Suppose you are doing a multi language application and need to change the language dynamically.
