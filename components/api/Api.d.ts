// Filter
export interface FilterMatchModeOptions {
    readonly STARTS_WITH: 'startsWith',
    readonly CONTAINS: 'contains',
    readonly NOT_CONTAINS: 'notContains',
    readonly ENDS_WITH: 'endsWith',
    readonly EQUALS: 'equals',
    readonly NOT_EQUALS: 'notEquals',
    readonly IN: 'in',
    readonly LESS_THAN: 'lt',
    readonly LESS_THAN_OR_EQUAL_TO: 'lte',
    readonly GREATER_THAN: 'gt',
    readonly GREATER_THAN_OR_EQUAL_TO: 'gte',
    readonly BETWEEN: 'between',
    readonly DATE_IS: 'dateIs',
    readonly DATE_IS_NOT: 'dateIsNot',
    readonly DATE_BEFORE: 'dateBefore',
    readonly DATE_AFTER: 'dateAfter'
}

export declare const FilterMatchMode: FilterMatchModeOptions;

export interface FilterOperatorOptions {
    readonly AND: 'and';
    readonly OR: 'or';
}

export declare const FilterOperator: FilterOperatorOptions;

export declare namespace FilterService {
    export function filter(value: any, fields: string[], filterValue: any, filterMatchMode: string, filterLocale?: string): any[];
    export interface filters {
        startsWith(value: any, filter: string, filterLocale?: string): boolean;
        contains(value: any, filter: string, filterLocale?: string): boolean;
        notContains(value: any, filter: string, filterLocale?: string): boolean;
        endsWith(value: any, filter: string, filterLocale?: string): boolean;
        equals(value: any, filter: string, filterLocale?: string): boolean;
        notEquals(value: any, filter: string, filterLocale?: string): boolean;
        in(value: any, filter: string): boolean;
        between(value: any, filter: string): boolean;
        lt(value: any, filter: string): boolean;
        lte(value: any, filter: string): boolean;
        gt(value: any, filter: string): boolean;
        gte(value: any, filter: string): boolean;
        dateIs(value: any, filter: string): boolean;
        dateIsNot(value: any, filter: string): boolean;
        dateBefore(value: any, filter: string): boolean;
        dateAfter(value: any, filter: string): boolean;
    }
    export function register(rule: string, fn: (...arg: any[]) => boolean): void;
}

// Icons
export interface PrimeIconsOptions {
    readonly ALIGN_CENTER: 'pi pi-align-center';
    readonly ALIGN_JUSTIFY: 'pi pi-align-justify';
    readonly ALIGN_LEFT: 'pi pi-align-left';
    readonly ALIGN_RIGHT: 'pi pi-align-right';
    readonly AMAZON: 'pi pi-amazon';
    readonly ANDROID: 'pi pi-android';
    readonly ANGLE_DOUBLE_DOWN: 'pi pi-angle-double-down';
    readonly ANGLE_DOUBLE_LEFT: 'pi pi-angle-double-left';
    readonly ANGLE_DOUBLE_RIGHT: 'pi pi-angle-double-right';
    readonly ANGLE_DOUBLE_UP: 'pi pi-angle-double-up';
    readonly ANGLE_DOWN: 'pi pi-angle-down';
    readonly ANGLE_LEFT: 'pi pi-angle-left';
    readonly ANGLE_RIGHT: 'pi pi-angle-right';
    readonly ANGLE_UP: 'pi pi-angle-up';
    readonly APPLE: 'pi pi-apple';
    readonly ARROW_CIRCLE_DOWN: 'pi pi-arrow-circle-down';
    readonly ARROW_CIRCLE_LEFT: 'pi pi-arrow-circle-left';
    readonly ARROW_CIRCLE_RIGHT: 'pi pi-arrow-circle-right';
    readonly ARROW_CIRCLE_UP: 'pi pi-arrow-circle-up';
    readonly ARROW_DOWN: 'pi pi-arrow-down';
    readonly ARROW_DOWN_LEFT: 'pi pi-arrow-down-left';
    readonly ARROW_DOWN_RIGHT: 'pi pi-arrow-down-right';
    readonly ARROW_LEFT: 'pi pi-arrow-left';
    readonly ARROW_RIGHT: 'pi pi-arrow-right';
    readonly ARROW_RIGHT_ARROW_LEFT: 'pi pi-arrow-right-arrow-left';
    readonly ARROW_UP: 'pi pi-arrow-up';
    readonly ARROW_UP_LEFT: 'pi pi-arrow-up-left';
    readonly ARROW_UP_RIGHT: 'pi pi-arrow-up-right';
    readonly ARROW_H: 'pi pi-arrows-h';
    readonly ARROW_V: 'pi pi-arrows-v';
    readonly ARROW_A: 'pi pi-arrows-alt';
    readonly AT: 'pi pi-at';
    readonly BACKWARD: 'pi pi-backward';
    readonly BAN: 'pi pi-ban';
    readonly BARS: 'pi pi-bars';
    readonly BELL: 'pi pi-bell';
    readonly BITCOIN: 'pi pi-bitcoin';
    readonly BOLT: 'pi pi-bolt';
    readonly BOOK: 'pi pi-book';
    readonly BOOKMARK: 'pi pi-bookmark';
    readonly BOOKMARK_FILL: 'pi pi-bookmark-fill';
    readonly BOX: 'pi pi-box';
    readonly BRIEFCASE: 'pi pi-briefcase';
    readonly BUILDING: 'pi pi-building';
    readonly CALENDAR: 'pi pi-calendar';
    readonly CALENDAR_MINUS: 'pi pi-calendar-minus';
    readonly CALENDAR_PLUS: 'pi pi-calendar-plus';
    readonly CALENDAR_TIMES: 'pi pi-calendar-times';
    readonly CALCULATOR: 'pi pi-calculator';
    readonly CAMERA: 'pi pi-camera';
    readonly CAR: 'pi pi-car';
    readonly CARET_DOWN: 'pi pi-caret-down';
    readonly CARET_LEFT: 'pi pi-caret-left';
    readonly CARET_RIGHT: 'pi pi-caret-right';
    readonly CARET_UP: 'pi pi-caret-up';
    readonly CART_PLUS: 'pi pi-cart-plus';
    readonly CHART_BAR: 'pi pi-chart-bar';
    readonly CHART_LINE: 'pi pi-chart-line';
    readonly CHART_PIE: 'pi pi-chart-pie';
    readonly CHECK: 'pi pi-check';
    readonly CHECK_CIRCLE: 'pi pi-check-circle';
    readonly CHECK_SQUARE: 'pi pi-check-square';
    readonly CHEVRON_CIRCLE_DOWN: 'pi pi-chevron-circle-down';
    readonly CHEVRON_CIRCLE_LEFT: 'pi pi-chevron-circle-left';
    readonly CHEVRON_CIRCLE_RIGHT: 'pi pi-chevron-circle-right';
    readonly CHEVRON_CIRCLE_UP: 'pi pi-chevron-circle-up';
    readonly CHEVRON_DOWN: 'pi pi-chevron-down';
    readonly CHEVRON_LEFT: 'pi pi-chevron-left';
    readonly CHEVRON_RIGHT: 'pi pi-chevron-right';
    readonly CHEVRON_UP: 'pi pi-chevron-up';
    readonly CIRCLE: 'pi pi-circle';
    readonly CIRCLE_FILL: 'pi pi-circle-fill';
    readonly CLOCK: 'pi pi-clock';
    readonly CLONE: 'pi pi-clone';
    readonly CLOUD: 'pi pi-cloud';
    readonly CLOUD_DOWNLOAD: 'pi pi-cloud-download';
    readonly CLOUD_UPLOAD: 'pi pi-cloud-upload';
    readonly CODE: 'pi pi-code';
    readonly COG: 'pi pi-cog';
    readonly COMMENT: 'pi pi-comment';
    readonly COMMENTS: 'pi pi-comments';
    readonly COMPASS: 'pi pi-compass';
    readonly COPY: 'pi pi-copy';
    readonly CREDIT_CARD: 'pi pi-credit-card';
    readonly DATABASE: 'pi pi-database';
    readonly DELETELEFT: 'pi pi-delete-left';
    readonly DESKTOP: 'pi pi-desktop';
    readonly DIRECTIONS: 'pi pi-directions';
    readonly DIRECTIONS_ALT: 'pi pi-directions-alt';
    readonly DISCORD: 'pi pi-discord';
    readonly DOLLAR: 'pi pi-dollar';
    readonly DOWNLOAD: 'pi pi-download';
    readonly EJECT: 'pi pi-eject';
    readonly ELLIPSIS_H: 'pi pi-ellipsis-h';
    readonly ELLIPSIS_V: 'pi pi-ellipsis-v';
    readonly ENVELOPE: 'pi pi-envelope';
    readonly ERASER: 'pi pi-eraser';
    readonly EURO: 'pi pi-euro';
    readonly EXCLAMATION_CIRCLE: 'pi pi-exclamation-circle';
    readonly EXCLAMATION_TRIANGLE: 'pi pi-exclamation-triangle';
    readonly EXTERNAL_LINK: 'pi pi-external-link';
    readonly EYE: 'pi pi-eye';
    readonly EYE_SLASH: 'pi pi-eye-slash';
    readonly FACEBOOK: 'pi pi-facebook';
    readonly FAST_BACKWARD: 'pi pi-fast-backward';
    readonly FAST_FORWARD: 'pi pi-fast-forward';
    readonly FILE: 'pi pi-file';
    readonly FILE_EDIT: 'pi pi-file-edit';
    readonly FILE_EXCEL: 'pi pi-file-excel';
    readonly FILE_EXPORT: 'pi pi-file-export';
    readonly FILE_IMPORT: 'pi pi-file-import';
    readonly FILE_PDF: 'pi pi-file-pdf';
    readonly FILE_WORD: 'pi pi-file-word';
    readonly FILTER: 'pi pi-filter';
    readonly FILTER_FILL: 'pi pi-filter-fill';
    readonly FILTER_SLASH: 'pi pi-filter-slash';
    readonly FLAG: 'pi pi-flag';
    readonly FLAG_FILL: 'pi pi-flag-fill';
    readonly FOLDER: 'pi pi-folder';
    readonly FOLDER_OPEN: 'pi pi-folder-open';
    readonly FORWARD: 'pi pi-forward';
    readonly GIFT: 'pi pi-gift';
    readonly GITHUB: 'pi pi-github';
    readonly GLOBE: 'pi pi-globe';
    readonly GOOGLE: 'pi pi-google';
    readonly HASHTAG: 'pi pi-hashtag';
    readonly HEART: 'pi pi-heart';
    readonly HEART_FILL: 'pi pi-heart-fill';
    readonly HISTORY: 'pi pi-history';
    readonly HOURGLASS: 'pi pi-hourglass';
    readonly HOME: 'pi pi-home';
    readonly ID_CARD: 'pi pi-id-card';
    readonly IMAGE: 'pi pi-image';
    readonly IMAGES: 'pi pi-images';
    readonly INBOX: 'pi pi-inbox';
    readonly INFO: 'pi pi-info';
    readonly INFO_CIRCLE: 'pi pi-info-circle';
    readonly INSTAGRAM: 'pi pi-instagram';
    readonly KEY: 'pi pi-key';
    readonly LANGUAGE: 'pi pi-language';
    readonly LINK: 'pi pi-link';
    readonly LINKEDIN: 'pi pi-linkedin';
    readonly LIST: 'pi pi-list';
    readonly LOCK: 'pi pi-lock';
    readonly LOCK_OPEN: 'pi pi-lock-open';
    readonly MAP: 'pi pi-map';
    readonly MAP_MARKER: 'pi pi-map-marker';
    readonly MEGAPHONE: 'pi pi-megaphone';
    readonly MICREPHONE: 'pi pi-microphone';
    readonly MICROSOFT: 'pi pi-microsoft';
    readonly MINUS: 'pi pi-minus';
    readonly MINUS_CIRCLE: 'pi pi-minus-circle';
    readonly MOBILE: 'pi pi-mobile';
    readonly MONEY_BILL: 'pi pi-money-bill';
    readonly MOON: 'pi pi-moon';
    readonly PALETTE: 'pi pi-palette';
    readonly PAPERCLIP: 'pi pi-paperclip';
    readonly PAUSE: 'pi pi-pause';
    readonly PAYPAL: 'pi pi-paypal';
    readonly PENCIL: 'pi pi-pencil';
    readonly PERCENTAGE: 'pi pi-percentage';
    readonly PHONE: 'pi pi-phone';
    readonly PLAY: 'pi pi-play';
    readonly PLUS: 'pi pi-plus';
    readonly PLUS_CIRCLE: 'pi pi-plus-circle';
    readonly POUND: 'pi pi-pound';
    readonly POWER_OFF: 'pi pi-power-off';
    readonly PRIME: 'pi pi-prime';
    readonly PRINT: 'pi pi-print';
    readonly QRCODE: 'pi pi-qrcode';
    readonly QUESTION: 'pi pi-question';
    readonly QUESTION_CIRCLE: 'pi pi-question-circle';
    readonly REDDIT: 'pi pi-reddit';
    readonly REFRESH: 'pi pi-refresh';
    readonly REPLAY: 'pi pi-replay';
    readonly REPLY: 'pi pi-reply';
    readonly SAVE: 'pi pi-save';
    readonly SEARCH: 'pi pi-search';
    readonly SEARCH_MINUS: 'pi pi-search-minus';
    readonly SEARCH_PLUS: 'pi pi-search-plus';
    readonly SEND: 'pi pi-send';
    readonly SERVER: 'pi pi-server';
    readonly SHARE_ALT: 'pi pi-share-alt';
    readonly SHIELD: 'pi pi-shield';
    readonly SHOPPING_BAG: 'pi pi-shopping-bag';
    readonly SHOPPING_CART: 'pi pi-shopping-cart';
    readonly SIGN_IN: 'pi pi-sign-in';
    readonly SIGN_OUT: 'pi pi-sign-out';
    readonly SITEMAP: 'pi pi-sitemap';
    readonly SLACK: 'pi pi-slack';
    readonly SLIDERS_H: 'pi pi-sliders-h';
    readonly SLIDERS_V: 'pi pi-sliders-v';
    readonly SORT: 'pi pi-sort';
    readonly SORT_ALPHA_DOWN: 'pi pi-sort-alpha-down';
    readonly SORT_ALPHA_ALT_DOWN: 'pi pi-sort-alpha-alt-down';
    readonly SORT_ALPHA_UP: 'pi pi-sort-alpha-up';
    readonly SORT_ALPHA_ALT_UP: 'pi pi-sort-alpha-alt-up';
    readonly SORT_ALT: 'pi pi-sort-alt';
    readonly SORT_ALT_SLASH: 'pi pi-sort-slash';
    readonly SORT_AMOUNT_DOWN: 'pi pi-sort-amount-down';
    readonly SORT_AMOUNT_DOWN_ALT: 'pi pi-sort-amount-down-alt';
    readonly SORT_AMOUNT_UP: 'pi pi-sort-amount-up';
    readonly SORT_AMOUNT_UP_ALT: 'pi pi-sort-amount-up-alt';
    readonly SORT_DOWN: 'pi pi-sort-down';
    readonly SORT_NUMERIC_DOWN: 'pi pi-sort-numeric-down';
    readonly SORT_NUMERIC_ALT_DOWN: 'pi pi-sort-numeric-alt-down';
    readonly SORT_NUMERIC_UP: 'pi pi-sort-numeric-up';
    readonly SORT_NUMERIC_ALT_UP: 'pi pi-sort-numeric-alt-up';
    readonly SORT_UP: 'pi pi-sort-up';
    readonly SPINNER: 'pi pi-spinner';
    readonly STAR: 'pi pi-star';
    readonly STAR_FILL: 'pi pi-star-fill';
    readonly STEP_BACKWARD: 'pi pi-step-backward';
    readonly STEP_BACKWARD_ALT: 'pi pi-step-backward-alt';
    readonly STEP_FORWARD: 'pi pi-step-forward';
    readonly STEP_FORWARD_ALT: 'pi pi-step-forward-alt';
    readonly STOP: 'pi pi-stop';
    readonly STOPWATCH: 'pi pi-stop-watch';
    readonly STOP_CIRCLE: 'pi pi-stop-circle';
    readonly SUN: 'pi pi-sun';
    readonly SYNC: 'pi pi-sync';
    readonly TABLE: 'pi pi-table';
    readonly TABLET: 'pi pi-tablet';
    readonly TAG: 'pi pi-tag';
    readonly TAGS: 'pi pi-tags';
    readonly TELEGRAM: 'pi pi-telegram';
    readonly TH_LARGE: 'pi pi-th-large';
    readonly THUMBS_DOWN: 'pi pi-thumbs-down';
    readonly THUMBS_DOWN_FILL: 'pi pi-thumbs-down-fill';
    readonly THUMBS_UP: 'pi pi-thumbs-up';
    readonly THUMBS_UP_FILL: 'pi pi-thumbs-up-fill';
    readonly TICKET: 'pi pi-ticket';
    readonly TIMES: 'pi pi-times';
    readonly TIMES_CIRCLE: 'pi pi-times-circle';
    readonly TRASH: 'pi pi-trash';
    readonly TRUCK: 'pi pi-truck';
    readonly TWITTER: 'pi pi-twitter';
    readonly UNDO: 'pi pi-undo';
    readonly UNLOCK: 'pi pi-unlock';
    readonly UPLOAD: 'pi pi-upload';
    readonly USER: 'pi pi-user';
    readonly USER_EDIT: 'pi pi-user-edit';
    readonly USER_MINUS: 'pi pi-user-minus';
    readonly USER_PLUS: 'pi pi-user-plus';
    readonly USERS: 'pi pi-users';
    readonly VERIFIED: 'pi pi-verified';
    readonly VIDEO: 'pi pi-video';
    readonly VIMEO: 'pi pi-vimeo';
    readonly VOLUME_DOWN: 'pi pi-volume-down';
    readonly VOLUME_OFF: 'pi pi-volume-off';
    readonly VOLUME_UP: 'pi pi-volume-up';
    readonly WALLET: 'pi pi-wallet';
    readonly WHATSAPP: 'pi pi-whatsapp';
    readonly WIFI: 'pi pi-wifi';
    readonly WINDOW_MAXIMIZE: 'pi pi-window-maximize';
    readonly WINDOW_MINIMIZE: 'pi pi-window-minimize';
    readonly WRENCH: 'pi pi-wrench';
    readonly YOUTUBE: 'pi pi-youtube';
}

export declare const PrimeIcons: PrimeIconsOptions;

// Severity
export interface ToastSeverityOptions {
    readonly SUCCESS: 'success';
    readonly INFO: 'info';
    readonly WARN: 'warn';
    readonly ERROR: 'error';
}

export declare const ToastSeverity: ToastSeverityOptions;
