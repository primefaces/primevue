import { h } from "vue";

const FallbackIcon = {
    commonIcon: "question",
    context: "Icon",
};

const CommonIcons = {
    ALIGN_CENTER:{ primeicons: 'pi-align-center' },
    ALIGN_JUSTIFY:{ primeicons: 'pi-align-justify' },
    ALIGN_LEFT:{ primeicons: 'pi-align-left' },
    ALIGN_RIGHT:{ primeicons: 'pi-align-right' },
    AMAZON:{ primeicons: 'pi-amazon' },
    ANDROID:{ primeicons: 'pi-android' },
    ANGLE_DOUBLE_DOWN:{ primeicons: 'pi-angle-double-down' },
    ANGLE_DOUBLE_LEFT:{ primeicons: 'pi-angle-double-left' },
    ANGLE_DOUBLE_RIGHT:{ primeicons: 'pi-angle-double-right' },
    ANGLE_DOUBLE_UP:{ primeicons: 'pi-angle-double-up' },
    ANGLE_DOWN:{ primeicons: 'pi-angle-down' },
    ANGLE_LEFT:{ primeicons: 'pi-angle-left' },
    ANGLE_RIGHT:{ primeicons: 'pi-angle-right' },
    ANGLE_UP:{ primeicons: 'pi-angle-up' },
    APPLE:{ primeicons: 'pi-apple' },
    ARROW_CIRCLE_DOWN:{ primeicons: 'pi-arrow-circle-down' },
    ARROW_CIRCLE_LEFT:{ primeicons: 'pi-arrow-circle-left' },
    ARROW_CIRCLE_RIGHT:{ primeicons: 'pi-arrow-circle-right' },
    ARROW_CIRCLE_UP:{ primeicons: 'pi-arrow-circle-up' },
    ARROW_DOWN:{ primeicons: 'pi-arrow-down' },
    ARROW_LEFT:{ primeicons: 'pi-arrow-left' },
    ARROW_RIGHT:{ primeicons: 'pi-arrow-right' },
    ARROW_UP:{ primeicons: 'pi-arrow-up' },
    BACKWARD:{ primeicons: 'pi-backward' },
    BAN:{ primeicons: 'pi-ban' },
    BARS:{ primeicons: 'pi-bars' },
    BELL:{ primeicons: 'pi-bell' },
    BOOK:{ primeicons: 'pi-book' },
    BOOKMARK:{ primeicons: 'pi-bookmark' },
    BRIEFCASE:{ primeicons: 'pi-briefcase' },
    CALENDAR_MINUS:{ primeicons: 'pi-calendar-minus' },
    CALENDAR_PLUS:{ primeicons: 'pi-calendar-plus' },
    CALENDAR_TIMES:{ primeicons: 'pi-calendar-times' },
    CALENDAR:{ primeicons: 'pi-calendar' },
    CAMERA:{ primeicons: 'pi-camera' },
    CARET_DOWN:{ primeicons: 'pi-caret-down' },
    CARET_LEFT:{ primeicons: 'pi-caret-left' },
    CARET_RIGHT:{ primeicons: 'pi-caret-right' },
    CARET_UP:{ primeicons: 'pi-caret-up' },
    CHART_BAR:{ primeicons: 'pi-chart-bar' },
    CHART_LINE:{ primeicons: 'pi-chart-line' },
    CHECK_CIRCLE:{ primeicons: 'pi-check-circle' },
    CHECK_SQUARE:{ primeicons: 'pi-check-square' },
    CHECK:{ primeicons: 'pi-check' },
    CHEVRON_CIRCLE_DOWN:{ primeicons: 'pi-chevron-circle-down' },
    CHEVRON_CIRCLE_LEFT:{ primeicons: 'pi-chevron-circle-left' },
    CHEVRON_CIRCLE_RIGHT:{ primeicons: 'pi-chevron-circle-right' },
    CHEVRON_CIRCLE_UP:{ primeicons: 'pi-chevron-circle-up' },
    CHEVRON_DOWN:{ primeicons: 'pi-chevron-down' },
    CHEVRON_LEFT:{ primeicons: 'pi-chevron-left' },
    CHEVRON_RIGHT:{ primeicons: 'pi-chevron-right' },
    CHEVRON_UP:{ primeicons: 'pi-chevron-up' },
    CLOCK:{ primeicons: 'pi-clock' },
    CLONE:{ primeicons: 'pi-clone' },
    CLOUD_DOWNLOAD:{ primeicons: 'pi-cloud-download' },
    CLOUD_UPLOAD:{ primeicons: 'pi-cloud-upload' },
    CLOUD:{ primeicons: 'pi-cloud' },
    COG:{ primeicons: 'pi-cog' },
    COMMENT:{ primeicons: 'pi-comment' },
    COMMENTS:{ primeicons: 'pi-comments' },
    COMPASS:{ primeicons: 'pi-compass' },
    COPY:{ primeicons: 'pi-copy' },
    CREDIT_CARD:{ primeicons: 'pi-credit-card' },
    DESKTOP:{ primeicons: 'pi-desktop' },
    DISCORD:{ primeicons: 'pi-discord' },
    DIRECTIONS_ALT:{ primeicons: 'pi-directions-alt' },
    DIRECTIONS:{ primeicons: 'pi-directions' },
    DOLLAR:{ primeicons: 'pi-dollar' },
    DOWNLOAD:{ primeicons: 'pi-download' },
    EJECT:{ primeicons: 'pi-eject' },
    ELLIPSIS_H:{ primeicons: 'pi-ellipsis-h' },
    ELLIPSIS_V:{ primeicons: 'pi-ellipsis-v' },
    ENVELOPE:{ primeicons: 'pi-envelope' },
    EXCLAMATION_CIRCLE:{ primeicons: 'pi-exclamation-circle' },
    EXCLAMATION_TRIANGLE :{ primeicons: 'pi-exclamation-triangle ' },
    EXTERNAL_LINK:{ primeicons: 'pi-external-link' },
    EYE_SLASH:{ primeicons: 'pi-eye-slash' },
    EYE:{ primeicons: 'pi-eye' },
    FACEBOOK:{ primeicons: 'pi-facebook' },
    FAST_BACKWARD:{ primeicons: 'pi-fast-backward' },
    FAST_FORWARD:{ primeicons: 'pi-fast-forward' },
    FILE_EXCEL:{ primeicons: 'pi-file-excel' },
    FILE_O:{ primeicons: 'pi-file-o' },
    FILE_PDF:{ primeicons: 'pi-file-pdf' },
    FILE:{ primeicons: 'pi-file' },
    FILTER:{ primeicons: 'pi-filter' },
    FILTER_SLASH:{ primeicons: 'pi-filter-slash' },
    FLAG:{ primeicons: 'pi-flag' },
    FOLDER_OPEN:{ primeicons: 'pi-folder-open' },
    FOLDER:{ primeicons: 'pi-folder' },
    FORWARD:{ primeicons: 'pi-forward' },
    GITHUB:{ primeicons: 'pi-github' },
    GLOBE:{ primeicons: 'pi-globe' },
    GOOGLE:{ primeicons: 'pi-google' },
    HEART:{ primeicons: 'pi-heart' },
    HOME:{ primeicons: 'pi-home' },
    ID_CARD:{ primeicons: 'pi-id-card' },
    IMAGE:{ primeicons: 'pi-image' },
    IMAGES:{ primeicons: 'pi-images' },
    INBOX:{ primeicons: 'pi-inbox' },
    INFO_CIRCLE:{ primeicons: 'pi-info-circle' },
    INFO:{ primeicons: 'pi-info' },
    KEY:{ primeicons: 'pi-key' },
    LINK:{ primeicons: 'pi-link' },
    LIST:{ primeicons: 'pi-list' },
    LOCK_OPEN:{ primeicons: 'pi-lock-open' },
    LOCK:{ primeicons: 'pi-lock' },
    MAP:{ primeicons: 'pi-map' },
    MAP_MARKER:{ primeicons: 'pi-map-marker' },
    MICROSOFT:{ primeicons: 'pi-microsoft' },
    MINUS_CIRCLE:{ primeicons: 'pi-minus-circle' },
    MINUS:{ primeicons: 'pi-minus' },
    MOBILE:{ primeicons: 'pi-mobile' },
    MONEY_BILL:{ primeicons: 'pi-money-bill' },
    MOON:{ primeicons: 'pi-moon' },
    PALETTE:{ primeicons: 'pi-palette' },
    PAPERCLIP:{ primeicons: 'pi-paperclip' },
    PAUSE:{ primeicons: 'pi-pause' },
    PAYPAL:{ primeicons: 'pi-paypal' },
    PENCIL:{ primeicons: 'pi-pencil' },
    PERCENTAGE:{ primeicons: 'pi-percentage' },
    PHONE:{ primeicons: 'pi-phone' },
    PLAY:{ primeicons: 'pi-play' },
    PLUS_CIRCLE:{ primeicons: 'pi-plus-circle' },
    PLUS:{ primeicons: 'pi-plus' },
    POWER_OFF:{ primeicons: 'pi-power-off' },
    PRINT:{ primeicons: 'pi-print' },
    QUESTION_CIRCLE:{ primeicons: 'pi-question-circle' },
    QUESTION:{ primeicons: 'pi-question' },
    RADIO_OFF:{ primeicons: 'pi-radio-off' },
    RADIO_ON:{ primeicons: 'pi-radio-on' },
    REFRESH:{ primeicons: 'pi-refresh' },
    REPLAY:{ primeicons: 'pi-replay' },
    REPLY:{ primeicons: 'pi-reply' },
    SAVE:{ primeicons: 'pi-save' },
    SEARCH_MINUS:{ primeicons: 'pi-search-minus' },
    SEARCH_PLUS:{ primeicons: 'pi-search-plus' },
    SEARCH:{ primeicons: 'pi-search' },
    SEND:{ primeicons: 'pi-send' },
    SHARE_ALT:{ primeicons: 'pi-share-alt' },
    SHIELD:{ primeicons: 'pi-shield' },
    SHOPPING_CART:{ primeicons: 'pi-shopping-cart' },
    SIGN_IN:{ primeicons: 'pi-sign-in' },
    SIGN_OUT:{ primeicons: 'pi-sign-out' },
    SITEMAP:{ primeicons: 'pi-sitemap' },
    SLACK:{ primeicons: 'pi-slack' },
    SLIDERS_H:{ primeicons: 'pi-sliders-h' },
    SLIDERS_V:{ primeicons: 'pi-sliders-v' },
    SORT_ALPHA_ALT_DOWN:{ primeicons: 'pi-sort-alpha-alt-down' },
    SORT_ALPHA_ALT_UP:{ primeicons: 'pi-sort-alpha-alt-up' },
    SORT_ALPHA_DOWN:{ primeicons: 'pi-sort-alpha-down' },
    SORT_ALPHA_UP:{ primeicons: 'pi-sort-alpha-up' },
    SORT_ALT:{ primeicons: 'pi-sort-alt' },
    SORT_AMOUNT_DOWN_ALT:{ primeicons: 'pi-sort-amount-down-alt' },
    SORT_AMOUNT_DOWN:{ primeicons: 'pi-sort-amount-down' },
    SORT_AMOUNT_UP_ALT:{ primeicons: 'pi-sort-amount-up-alt' },
    SORT_AMOUNT_UP:{ primeicons: 'pi-sort-amount-up' },
    SORT_DOWN:{ primeicons: 'pi-sort-down' },
    SORT_NUMERIC_ALT_DOWN:{ primeicons: 'pi-sort-numeric-alt-down' },
    SORT_NUMERIC_ALT_UP:{ primeicons: 'pi-sort-numeric-alt-up' },
    SORT_NUMERIC_DOWN:{ primeicons: 'pi-sort-numeric-down' },
    SORT_NUMERIC_UP:{ primeicons: 'pi-sort-numeric-up' },
    SORT_UP:{ primeicons: 'pi-sort-up' },
    SORT:{ primeicons: 'pi-sort' },
    SPINNER:{ primeicons: 'pi-spinner' },
    SPINNER_SPIN:{ primeicons: 'pi-spinner pi-spin' },
    STAR_O:{ primeicons: 'pi-star-o' },
    STAR:{ primeicons: 'pi-star' },
    STEP_BACKWARD_ALT:{ primeicons: 'pi-step-backward-alt' },
    STEP_BACKWARD:{ primeicons: 'pi-step-backward' },
    STEP_FORWARD_ALT:{ primeicons: 'pi-step-forward-alt' },
    STEP_FORWARD:{ primeicons: 'pi-step-forward' },
    SUN:{ primeicons: 'pi-sun' },
    TABLE:{ primeicons: 'pi-table' },
    TABLET:{ primeicons: 'pi-tablet' },
    TAG:{ primeicons: 'pi-tag' },
    TAGS:{ primeicons: 'pi-tags' },
    TH_LARGE:{ primeicons: 'pi-th-large' },
    THUMBS_DOWN:{ primeicons: 'pi-thumbs-down' },
    THUMBS_UP:{ primeicons: 'pi-thumbs-up' },
    TICKET:{ primeicons: 'pi-ticket' },
    TIMES_CIRCLE:{ primeicons: 'pi-times-circle' },
    TIMES:{ primeicons: 'pi-times' },
    TRASH:{ primeicons: 'pi-trash' },
    TWITTER:{ primeicons: 'pi-twitter' },
    UNDO:{ primeicons: 'pi-undo' },
    UNLOCK:{ primeicons: 'pi-unlock' },
    UPLOAD:{ primeicons: 'pi-upload' },
    USER_EDIT:{ primeicons: 'pi-user-edit' },
    USER_MINUS:{ primeicons: 'pi-user-minus' },
    USER_PLUS:{ primeicons: 'pi-user-plus' },
    USER:{ primeicons: 'pi-user' },
    USERS:{ primeicons: 'pi-users' },
    VIDEO:{ primeicons: 'pi-video' },
    VIMEO:{ primeicons: 'pi-vimeo' },
    VOLUME_DOWN:{ primeicons: 'pi-volume-down' },
    VOLUME_OFF:{ primeicons: 'pi-volume-off' },
    VOLUME_UP:{ primeicons: 'pi-volume-up' },
    YOUTUBE:{ primeicons: 'pi-youtube' },
    WALLET:{ primeicons: 'pi-wallet' },
    WIFI:{ primeicons: 'pi-wifi' },
    WINDOW_MAXIMIZE:{ primeicons: 'pi-window-maximize' },
    WINDOW_MINIMIZE:{ primeicons: 'pi-window-minimize'},
    "chevron-down": {
        "primeicons": "pi-chevron-down",
    },
    "clear": {
        "primeicons": "pi-times",
    },
    "search": {
        "primeicons": "pi-search",
    },
}

const PrimeIconsIconProvider = {
    /**
     *
     * @param {string | { commonIcon: string, context: string }} icon The icon to render
     */
    renderIcon(icon, options) {
        let iconString = "";
        if (typeof icon === "object") {
            const commonIcon = CommonIcons[(icon.commonIcon||"").toLocaleUpperCase()];
            if (commonIcon) {
                iconString = commonIcon.primeicons;
            }
        } else if (typeof icon ==="string") {
            iconString = icon;
        }

        return h(options.tag, {
            class: ["pi",iconString],
        });
    }
}

const defaultIconProvider = PrimeIconsIconProvider;

export default {
    props: {
        tag: {
            type: String,
            default: "div",
            required: false,
        },
        icon: {
            type: [String, Object],
            required: true
        }
    },
    render() {
        const iconProvider =
            (this.$primevue &&
            this.$primevue.config &&
            this.$primevue.config.iconProvider) || defaultIconProvider;

        let icon = this.icon || FallbackIcon;
        let options = {
            tag: this.tag,
        };

        return iconProvider.renderIcon(icon, options)

        // return h(this.tag, renderedIcon);
    }
};
