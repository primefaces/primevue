'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('primevue/utils');

const FilterMatchMode = {
    STARTS_WITH : 'startsWith',
    CONTAINS : 'contains',
    NOT_CONTAINS : 'notContains',
    ENDS_WITH : 'endsWith',
    EQUALS : 'equals',
    NOT_EQUALS : 'notEquals',
    IN : 'in',
    LESS_THAN : 'lt',
    LESS_THAN_OR_EQUAL_TO : 'lte',
    GREATER_THAN : 'gt',
    GREATER_THAN_OR_EQUAL_TO : 'gte',
    BETWEEN : 'between',
    DATE_IS : 'dateIs',
    DATE_IS_NOT : 'dateIsNot',
    DATE_BEFORE : 'dateBefore',
    DATE_AFTER : 'dateAfter'
};

const FilterOperator = {
    AND: 'and',
    OR: 'or'
};

const FilterService = {
    filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        let filteredItems = [];

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    let fieldValue = utils.ObjectUtils.resolveFieldData(item, field);

                    if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    },
    filters: {
        startsWith(value, filter, filterLocale)  {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.slice(0, filterValue.length) === filterValue;
        },
        contains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue) !== -1;
        },
        notContains(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue) === -1;
        },
        endsWith(value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            let filterValue = utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            let stringValue = utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
    
            return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        },
        equals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() === filter.getTime();
            else
                return utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        notEquals(value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return false;
            }
    
            if (value === undefined || value === null) {
                return true;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() !== filter.getTime();
            else
                return utils.ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != utils.ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        in(value, filter) {
            if (filter === undefined || filter === null || filter.length === 0) {
                return true;
            }
    
            for (let i = 0; i < filter.length; i++) {
                if (utils.ObjectUtils.equals(value, filter[i])) {
                    return true;
                }
            }
    
            return false;
        },
        between(value, filter) {
            if (filter == null || filter[0] == null || filter[1] == null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime)
            return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
            else
                return filter[0] <= value && value <= filter[1];
        },
        lt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() < filter.getTime();
            else
                return value < filter;
        },
        lte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() <= filter.getTime();
            else
                return value <= filter;
        },
        gt(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() > filter.getTime();
            else
                return value > filter;
        },
        gte(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
    
            if (value.getTime && filter.getTime)
                return value.getTime() >= filter.getTime();
            else
                return value >= filter;
        },
        dateIs(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() === filter.toDateString();
        },
        dateIsNot(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.toDateString() !== filter.toDateString();
        },
        dateBefore(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() < filter.getTime();
        },
        dateAfter(value, filter) {
            if (filter === undefined || filter === null) {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }

            return value.getTime() > filter.getTime();
        }
    },
    register(rule, fn) {
        this.filters[rule] = fn;
    }
};

const PrimeIcons = {
    ALIGN_CENTER:'pi pi-align-center',
    ALIGN_JUSTIFY:'pi pi-align-justify',
    ALIGN_LEFT:'pi pi-align-left',
    ALIGN_RIGHT:'pi pi-align-right',
    AMAZON:'pi pi-amazon',
    ANDROID:'pi pi-android',
    ANGLE_DOUBLE_DOWN:'pi pi-angle-double-down',
    ANGLE_DOUBLE_LEFT:'pi pi-angle-double-left',
    ANGLE_DOUBLE_RIGHT:'pi pi-angle-double-right',
    ANGLE_DOUBLE_UP:'pi pi-angle-double-up',
    ANGLE_DOWN:'pi pi-angle-down',
    ANGLE_LEFT:'pi pi-angle-left',
    ANGLE_RIGHT:'pi pi-angle-right',
    ANGLE_UP:'pi pi-angle-up',
    APPLE:'pi pi-apple',
    ARROW_CIRCLE_DOWN:'pi pi-arrow-circle-down',
    ARROW_CIRCLE_LEFT:'pi pi-arrow-circle-left',
    ARROW_CIRCLE_RIGHT:'pi pi-arrow-circle-right',
    ARROW_CIRCLE_UP:'pi pi-arrow-circle-up',
    ARROW_DOWN:'pi pi-arrow-down',
    ARROW_DOWN_LEFT:'pi pi-arrow-down-left',
    ARROW_DOWN_RIGHT:'pi pi-arrow-down-right',
    ARROW_LEFT:'pi pi-arrow-left',
    ARROW_RIGHT:'pi pi-arrow-right',
    ARROW_UP:'pi pi-arrow-up',
    ARROW_UP_LEFT:'pi pi-arrow-up-left',
    ARROW_UP_RIGHT:'pi pi-arrow-up-right',
    ARROW_H:'pi pi-arrow-h',
    ARROW_V:'pi pi-arrow-v',
    AT:'pi pi-at',
    BACKWARD:'pi pi-backward',
    BAN:'pi pi-ban',
    BARS:'pi pi-bars',
    BELL:'pi pi-bell',
    BOLT:'pi pi-bolt',
    BOOK:'pi pi-book',
    BOOKMARK:'pi pi-bookmark',
    BOOKMARK_FILL:'pi pi-bookmark-fill',
    BOX:'pi pi-box',
    BRIEFCASE:'pi pi-briefcase',
    BUILDING:'pi pi-building',
    CALENDAR:'pi pi-calendar',
    CALENDAR_MINUS:'pi pi-calendar-minus',
    CALENDAR_PLUS:'pi pi-calendar-plus',
    CALENDAR_TIMES:'pi pi-calendar-times',
    CAMERA:'pi pi-camera',
    CAR:'pi pi-car',
    CARET_DOWN:'pi pi-caret-down',
    CARET_LEFT:'pi pi-caret-left',
    CARET_RIGHT:'pi pi-caret-right',
    CARET_UP:'pi pi-caret-up',
    CHART_BAR:'pi pi-chart-bar',
    CHART_LINE:'pi pi-chart-line',
    CHART_PIE:'pi pi-chart-pie',
    CHECK:'pi pi-check',
    CHECK_CIRCLE:'pi pi-check-circle',
    CHECK_SQUARE:'pi pi-check-square',
    CHEVRON_CIRCLE_DOWN:'pi pi-chevron-circle-down',
    CHEVRON_CIRCLE_LEFT:'pi pi-chevron-circle-left',
    CHEVRON_CIRCLE_RIGHT:'pi pi-chevron-circle-right',
    CHEVRON_CIRCLE_UP:'pi pi-chevron-circle-up',
    CHEVRON_DOWN:'pi pi-chevron-down',
    CHEVRON_LEFT:'pi pi-chevron-left',
    CHEVRON_RIGHT:'pi pi-chevron-right',
    CHEVRON_UP:'pi pi-chevron-up',
    CIRCLE:'pi pi-circle',
    CIRCLE_FILL:'pi pi-circle-fill',
    CLOCK:'pi pi-clock',
    CLONE:'pi pi-clone',
    CLOUD:'pi pi-cloud',
    CLOUD_DOWNLOAD:'pi pi-cloud-download',
    CLOUD_UPLOAD:'pi pi-cloud-upload',
    CODE:'pi pi-code',
    COG:'pi pi-cog',
    COMMENT:'pi pi-comment',
    COMMENTS:'pi pi-comments',
    COMPASS:'pi pi-compass',
    COPY:'pi pi-copy',
    CREDIT_CARD:'pi pi-credit-card',
    DATABASE:'pi pi-database',
    DESKTOP:'pi pi-desktop',
    DIRECTIONS:'pi pi-directions',
    DIRECTIONS_ALT:'pi pi-directions-alt',
    DISCORD:'pi pi-discord',
    DOLLAR:'pi pi-dollar',
    DOWNLOAD:'pi pi-download',
    EJECT:'pi pi-eject',
    ELLIPSIS_H:'pi pi-ellipsis-h',
    ELLIPSIS_V:'pi pi-ellipsis-v',
    ENVELOPE:'pi pi-envelope',
    EURO:'pi pi-euro',
    EXCLAMATION_CIRCLE:'pi pi-exclamation-circle',
    EXCLAMATION_TRIANGLE :'pi pi-exclamation-triangle',
    EXTERNAL_LINK:'pi pi-external-link',
    EYE:'pi pi-eye',
    EYE_SLASH:'pi pi-eye-slash',
    FACEBOOK:'pi pi-facebook',
    FAST_BACKWARD:'pi pi-fast-backward',
    FAST_FORWARD:'pi pi-fast-forward',
    FILE:'pi pi-file',
    FILE_EXCEL:'pi pi-file-excel',
    FILE_PDF:'pi pi-file-pdf',
    FILTER:'pi pi-filter',
    FILTER_FILL:'pi pi-filter-fill',
    FILTER_SLASH:'pi pi-filter-slash',
    FLAG:'pi pi-flag',
    FLAG_FILL:'pi pi-flag-fill',
    FOLDER:'pi pi-folder',
    FOLDER_OPEN:'pi pi-folder-open',
    FORWARD:'pi pi-forward',
    GITHUB:'pi pi-github',
    GLOBE:'pi pi-globe',
    GOOGLE:'pi pi-google',
    HASHTAG:'pi pi-hashtag',
    HEART:'pi pi-heart',
    HEART_FILL:'pi pi-heart-fill',
    HISTORY:'pi pi-history',
    HOME:'pi pi-home',
    ID_CARD:'pi pi-id-card',
    IMAGE:'pi pi-image',
    IMAGES:'pi pi-images',
    INBOX:'pi pi-inbox',
    INFO:'pi pi-info',
    INFO_CIRCLE:'pi pi-info-circle',
    INSTAGRAM:'pi pi-instagram',
    KEY:'pi pi-key',
    LINK:'pi pi-link',
    LINKEDIN:'pi pi-linkedin',
    LIST:'pi pi-list',
    LOCK:'pi pi-lock',
    LOCK_OPEN:'pi pi-lock-open',
    MAP:'pi pi-map',
    MAP_MARKER:'pi pi-map-marker',
    MICROSOFT:'pi pi-microsoft',
    MINUS:'pi pi-minus',
    MINUS_CIRCLE:'pi pi-minus-circle',
    MOBILE:'pi pi-mobile',
    MONEY_BILL:'pi pi-money-bill',
    MOON:'pi pi-moon',
    PALETTE:'pi pi-palette',
    PAPERCLIP:'pi pi-paperclip',
    PAUSE:'pi pi-pause',
    PAYPAL:'pi pi-paypal',
    PENCIL:'pi pi-pencil',
    PERCENTAGE:'pi pi-percentage',
    PHONE:'pi pi-phone',
    PLAY:'pi pi-play',
    PLUS:'pi pi-plus',
    PLUS_CIRCLE:'pi pi-plus-circle',
    POUND:'pi pi-pound',
    POWER_OFF:'pi pi-power-off',
    PRIME:'pi pi-prime',
    PRINT:'pi pi-print',
    QRCODE:'pi pi-qrcode',
    QUESTION:'pi pi-question',
    QUESTION_CIRCLE:'pi pi-question-circle',
    REDDIT:'pi pi-reddit',
    REFRESH:'pi pi-refresh',
    REPLAY:'pi pi-replay',
    REPLY:'pi pi-reply',
    SAVE:'pi pi-save',
    SEARCH:'pi pi-search',
    SEARCH_MINUS:'pi pi-search-minus',
    SEARCH_PLUS:'pi pi-search-plus',
    SEND:'pi pi-send',
    SERVER:'pi pi-server',
    SHARE_ALT:'pi pi-share-alt',
    SHIELD:'pi pi-shield',
    SHOPPING_BAG:'pi pi-shopping-bag',
    SHOPPING_CART:'pi pi-shopping-cart',
    SIGN_IN:'pi pi-sign-in',
    SIGN_OUT:'pi pi-sign-out',
    SITEMAP:'pi pi-sitemap',
    SLACK:'pi pi-slack',
    SLIDERS_H:'pi pi-sliders-h',
    SLIDERS_V:'pi pi-sliders-v',
    SORT:'pi pi-sort',
    SORT_ALPHA_DOWN:'pi pi-sort-alpha-down',
    SORT_ALPHA_ALT_DOWN:'pi pi-sort-alpha-alt-down',
    SORT_ALPHA_UP:'pi pi-sort-alpha-up',
    SORT_ALPHA_ALT_UP:'pi pi-sort-alpha-alt-up',
    SORT_ALT:'pi pi-sort-alt',
    SORT_ALT_SLASH:'pi pi-sort-slash',
    SORT_AMOUNT_DOWN:'pi pi-sort-amount-down',
    SORT_AMOUNT_DOWN_ALT:'pi pi-sort-amount-down-alt',
    SORT_AMOUNT_UP:'pi pi-sort-amount-up',
    SORT_AMOUNT_UP_ALT:'pi pi-sort-amount-up-alt',
    SORT_DOWN:'pi pi-sort-down',
    SORT_NUMERIC_DOWN:'pi pi-sort-numeric-down',
    SORT_NUMERIC_ALT_DOWN:'pi pi-sort-numeric-alt-down',
    SORT_NUMERIC_UP:'pi pi-sort-numeric-up',
    SORT_NUMERIC_ALT_UP:'pi pi-sort-numeric-alt-up',
    SORT_UP:'pi pi-sort-up',
    SPINNER:'pi pi-spinner',
    STAR:'pi pi-star',
    STAR_FILL:'pi pi-star-fill',
    STEP_BACKWARD:'pi pi-step-backward',
    STEP_BACKWARD_ALT:'pi pi-step-backward-alt',
    STEP_FORWARD:'pi pi-step-forward',
    STEP_FORWARD_ALT:'pi pi-step-forward-alt',
    STOP:'pi pi-stop',
    STOP_CIRCLE:'pi pi-stop-circle',
    SUN:'pi pi-sun',
    SYNC:'pi pi-sync',
    TABLE:'pi pi-table',
    TABLET:'pi pi-tablet',
    TAG:'pi pi-tag',
    TAGS:'pi pi-tags',
    TELEGRAM:'pi pi-telegram',
    TH_LARGE:'pi pi-th-large',
    THUMBS_DOWN:'pi pi-thumbs-down',
    THUMBS_UP:'pi pi-thumbs-up',
    TICKET:'pi pi-ticket',
    TIMES:'pi pi-times',
    TIMES_CIRCLE:'pi pi-times-circle',
    TRASH:'pi pi-trash',
    TWITTER:'pi pi-twitter',
    UNDO:'pi pi-undo',
    UNLOCK:'pi pi-unlock',
    UPLOAD:'pi pi-upload',
    USER:'pi pi-user',
    USER_EDIT:'pi pi-user-edit',
    USER_MINUS:'pi pi-user-minus',
    USER_PLUS:'pi pi-user-plus',
    USERS:'pi pi-users',
    VIDEO:'pi pi-video',
    VIMEO:'pi pi-vimeo',
    VOLUME_DOWN:'pi pi-volume-down',
    VOLUME_OFF:'pi pi-volume-off',
    VOLUME_UP:'pi pi-volume-up',
    WALLET:'pi pi-wallet',
    WHATSAPP:'pi pi-whatsapp',
    WIFI:'pi pi-wifi',
    WINDOW_MAXIMIZE:'pi pi-window-maximize',
    WINDOW_MINIMIZE:'pi pi-window-minimize',
    YOUTUBE:'pi pi-youtube'
};

const ToastSeverities = {
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    SUCCESS: 'success'
};

exports.FilterMatchMode = FilterMatchMode;
exports.FilterOperator = FilterOperator;
exports.FilterService = FilterService;
exports.PrimeIcons = PrimeIcons;
exports.ToastSeverity = ToastSeverities;
