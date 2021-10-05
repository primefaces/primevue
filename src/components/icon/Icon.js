import { h } from "vue";

const FallbackIcon = {
    commonIcon: "QUESTION",
    context: "Icon",
};

const CommonIcons = {
    // "ALIGN-CENTER":{ primeicons: 'pi-align-center' },
    // "ALIGN-JUSTIFY":{ primeicons: 'pi-align-justify' },
    // "ALIGN-LEFT":{ primeicons: 'pi-align-left' },
    // "ALIGN-RIGHT":{ primeicons: 'pi-align-right' },
    // "AMAZON":{ primeicons: 'pi-amazon' },
    // "ANDROID":{ primeicons: 'pi-android' },
    // "ANGLE-DOUBLE-DOWN":{ primeicons: 'pi-angle-double-down' },
    // "ANGLE-DOUBLE-LEFT":{ primeicons: 'pi-angle-double-left' },
    // "ANGLE-DOUBLE-RIGHT":{ primeicons: 'pi-angle-double-right' },
    // "ANGLE-DOUBLE-UP":{ primeicons: 'pi-angle-double-up' },
    // "ANGLE-DOWN":{ primeicons: 'pi-angle-down' },
    // "ANGLE-LEFT":{ primeicons: 'pi-angle-left' },
    "ANGLE-RIGHT":{ primeicons: 'pi-angle-right' },
    // "ANGLE-UP":{ primeicons: 'pi-angle-up' },
    // "APPLE":{ primeicons: 'pi-apple' },
    // "ARROW-CIRCLE-DOWN":{ primeicons: 'pi-arrow-circle-down' },
    // "ARROW-CIRCLE-LEFT":{ primeicons: 'pi-arrow-circle-left' },
    // "ARROW-CIRCLE-RIGHT":{ primeicons: 'pi-arrow-circle-right' },
    // "ARROW-CIRCLE-UP":{ primeicons: 'pi-arrow-circle-up' },
    // "ARROW-DOWN":{ primeicons: 'pi-arrow-down' },
    // "ARROW-LEFT":{ primeicons: 'pi-arrow-left' },
    // "ARROW-RIGHT":{ primeicons: 'pi-arrow-right' },
    // "ARROW-UP":{ primeicons: 'pi-arrow-up' },
    // "BACKWARD":{ primeicons: 'pi-backward' },
    // "BAN":{ primeicons: 'pi-ban' },
    "BARS":{ primeicons: 'pi-bars' },
    // "BELL":{ primeicons: 'pi-bell' },
    // "BOOK":{ primeicons: 'pi-book' },
    // "BOOKMARK":{ primeicons: 'pi-bookmark' },
    // "BRIEFCASE":{ primeicons: 'pi-briefcase' },
    // "CALENDAR-MINUS":{ primeicons: 'pi-calendar-minus' },
    // "CALENDAR-PLUS":{ primeicons: 'pi-calendar-plus' },
    // "CALENDAR-TIMES":{ primeicons: 'pi-calendar-times' },
    // "CALENDAR":{ primeicons: 'pi-calendar' },
    // "CAMERA":{ primeicons: 'pi-camera' },
    // "CARET-DOWN":{ primeicons: 'pi-caret-down' },
    // "CARET-LEFT":{ primeicons: 'pi-caret-left' },
    // "CARET-RIGHT":{ primeicons: 'pi-caret-right' },
    // "CARET-UP":{ primeicons: 'pi-caret-up' },
    // "CHART-BAR":{ primeicons: 'pi-chart-bar' },
    // "CHART-LINE":{ primeicons: 'pi-chart-line' },
    // "CHECK-CIRCLE":{ primeicons: 'pi-check-circle' },
    // "CHECK-SQUARE":{ primeicons: 'pi-check-square' },
    // "CHECK":{ primeicons: 'pi-check' },
    // "CHEVRON-CIRCLE-DOWN":{ primeicons: 'pi-chevron-circle-down' },
    // "CHEVRON-CIRCLE-LEFT":{ primeicons: 'pi-chevron-circle-left' },
    // "CHEVRON-CIRCLE-RIGHT":{ primeicons: 'pi-chevron-circle-right' },
    // "CHEVRON-CIRCLE-UP":{ primeicons: 'pi-chevron-circle-up' },
    "CHEVRON-DOWN":{ primeicons: 'pi-chevron-down' },
    // "CHEVRON-LEFT":{ primeicons: 'pi-chevron-left' },
    "CHEVRON-RIGHT":{ primeicons: 'pi-chevron-right' },
    // "CHEVRON-UP":{ primeicons: 'pi-chevron-up' },
    "CIRCLE-ON":{ primeicons: 'pi-circle-on' },
    // "CLOCK":{ primeicons: 'pi-clock' },
    // "CLONE":{ primeicons: 'pi-clone' },
    // "CLOUD-DOWNLOAD":{ primeicons: 'pi-cloud-download' },
    // "CLOUD-UPLOAD":{ primeicons: 'pi-cloud-upload' },
    // "CLOUD":{ primeicons: 'pi-cloud' },
    "COG":{ primeicons: 'pi-cog' },
    // "COMMENT":{ primeicons: 'pi-comment' },
    // "COMMENTS":{ primeicons: 'pi-comments' },
    // "COMPASS":{ primeicons: 'pi-compass' },
    // "COPY":{ primeicons: 'pi-copy' },
    // "CREDIT-CARD":{ primeicons: 'pi-credit-card' },
    "DESKTOP":{ primeicons: 'pi-desktop' },
    "DISCORD":{ primeicons: 'pi-discord' },
    // "DIRECTIONS-ALT":{ primeicons: 'pi-directions-alt' },
    // "DIRECTIONS":{ primeicons: 'pi-directions' },
    // "DOLLAR":{ primeicons: 'pi-dollar' },
    // "DOWNLOAD":{ primeicons: 'pi-download' },
    // "EJECT":{ primeicons: 'pi-eject' },
    // "ELLIPSIS-H":{ primeicons: 'pi-ellipsis-h' },
    // "ELLIPSIS-V":{ primeicons: 'pi-ellipsis-v' },
    // "ENVELOPE":{ primeicons: 'pi-envelope' },
    // "EXCLAMATION-CIRCLE":{ primeicons: 'pi-exclamation-circle' },
    // "EXCLAMATION-TRIANGLE ":{ primeicons: 'pi-exclamation-triangle ' },
    // "EXTERNAL-LINK":{ primeicons: 'pi-external-link' },
    // "EYE-SLASH":{ primeicons: 'pi-eye-slash' },
    // "EYE":{ primeicons: 'pi-eye' },
    // "FACEBOOK":{ primeicons: 'pi-facebook' },
    // "FAST-BACKWARD":{ primeicons: 'pi-fast-backward' },
    // "FAST-FORWARD":{ primeicons: 'pi-fast-forward' },
    // "FILE-EXCEL":{ primeicons: 'pi-file-excel' },
    // "FILE-O":{ primeicons: 'pi-file-o' },
    // "FILE-PDF":{ primeicons: 'pi-file-pdf' },
    "FILE":{ primeicons: 'pi-file' },
    // "FILTER":{ primeicons: 'pi-filter' },
    // "FILTER-SLASH":{ primeicons: 'pi-filter-slash' },
    // "FLAG":{ primeicons: 'pi-flag' },
    // "FOLDER-OPEN":{ primeicons: 'pi-folder-open' },
    // "FOLDER":{ primeicons: 'pi-folder' },
    // "FORWARD":{ primeicons: 'pi-forward' },
    "GITHUB":{ primeicons: 'pi-github' },
    // "GLOBE":{ primeicons: 'pi-globe' },
    // "GOOGLE":{ primeicons: 'pi-google' },
    // "HEART":{ primeicons: 'pi-heart' },
    // "HOME":{ primeicons: 'pi-home' },
    // "ID-CARD":{ primeicons: 'pi-id-card' },
    // "IMAGE":{ primeicons: 'pi-image' },
    // "IMAGES":{ primeicons: 'pi-images' },
    // "INBOX":{ primeicons: 'pi-inbox' },
    "INFO-CIRCLE":{ primeicons: 'pi-info-circle' },
    // "INFO":{ primeicons: 'pi-info' },
    // "KEY":{ primeicons: 'pi-key' },
    // "LINK":{ primeicons: 'pi-link' },
    // "LIST":{ primeicons: 'pi-list' },
    // "LOCK-OPEN":{ primeicons: 'pi-lock-open' },
    // "LOCK":{ primeicons: 'pi-lock' },
    // "MAP":{ primeicons: 'pi-map' },
    // "MAP-MARKER":{ primeicons: 'pi-map-marker' },
    // "MICROSOFT":{ primeicons: 'pi-microsoft' },
    // "MINUS-CIRCLE":{ primeicons: 'pi-minus-circle' },
    "MINUS":{ primeicons: 'pi-minus' },
    // "MOBILE":{ primeicons: 'pi-mobile' },
    // "MONEY-BILL":{ primeicons: 'pi-money-bill' },
    // "MOON":{ primeicons: 'pi-moon' },
    "PALETTE":{ primeicons: 'pi-palette' },
    // "PAPERCLIP":{ primeicons: 'pi-paperclip' },
    // "PAUSE":{ primeicons: 'pi-pause' },
    // "PAYPAL":{ primeicons: 'pi-paypal' },
    "PENCIL":{ primeicons: 'pi-pencil' },
    // "PERCENTAGE":{ primeicons: 'pi-percentage' },
    // "PHONE":{ primeicons: 'pi-phone' },
    // "PLAY":{ primeicons: 'pi-play' },
    // "PLUS-CIRCLE":{ primeicons: 'pi-plus-circle' },
    "PLUS":{ primeicons: 'pi-plus' },
    // "POWER-OFF":{ primeicons: 'pi-power-off' },
    // "PRINT":{ primeicons: 'pi-print' },
    // "QUESTION-CIRCLE":{ primeicons: 'pi-question-circle' },
    "QUESTION":{ primeicons: 'pi-question' },
    // "RADIO-OFF":{ primeicons: 'pi-radio-off' },
    // "RADIO-ON":{ primeicons: 'pi-radio-on' },
    // "REFRESH":{ primeicons: 'pi-refresh' },
    // "REPLAY":{ primeicons: 'pi-replay' },
    // "REPLY":{ primeicons: 'pi-reply' },
    // "SAVE":{ primeicons: 'pi-save' },
    // "SEARCH-MINUS":{ primeicons: 'pi-search-minus' },
    // "SEARCH-PLUS":{ primeicons: 'pi-search-plus' },
    // "SEARCH":{ primeicons: 'pi-search' },
    // "SEND":{ primeicons: 'pi-send' },
    // "SHARE-ALT":{ primeicons: 'pi-share-alt' },
    // "SHIELD":{ primeicons: 'pi-shield' },
    // "SHOPPING-CART":{ primeicons: 'pi-shopping-cart' },
    // "SIGN-IN":{ primeicons: 'pi-sign-in' },
    // "SIGN-OUT":{ primeicons: 'pi-sign-out' },
    // "SITEMAP":{ primeicons: 'pi-sitemap' },
    // "SLACK":{ primeicons: 'pi-slack' },
    // "SLIDERS-H":{ primeicons: 'pi-sliders-h' },
    // "SLIDERS-V":{ primeicons: 'pi-sliders-v' },
    // "SORT-ALPHA-ALT-DOWN":{ primeicons: 'pi-sort-alpha-alt-down' },
    // "SORT-ALPHA-ALT-UP":{ primeicons: 'pi-sort-alpha-alt-up' },
    // "SORT-ALPHA-DOWN":{ primeicons: 'pi-sort-alpha-down' },
    // "SORT-ALPHA-UP":{ primeicons: 'pi-sort-alpha-up' },
    // "SORT-ALT":{ primeicons: 'pi-sort-alt' },
    // "SORT-AMOUNT-DOWN-ALT":{ primeicons: 'pi-sort-amount-down-alt' },
    // "SORT-AMOUNT-DOWN":{ primeicons: 'pi-sort-amount-down' },
    // "SORT-AMOUNT-UP-ALT":{ primeicons: 'pi-sort-amount-up-alt' },
    // "SORT-AMOUNT-UP":{ primeicons: 'pi-sort-amount-up' },
    // "SORT-DOWN":{ primeicons: 'pi-sort-down' },
    // "SORT-NUMERIC-ALT-DOWN":{ primeicons: 'pi-sort-numeric-alt-down' },
    // "SORT-NUMERIC-ALT-UP":{ primeicons: 'pi-sort-numeric-alt-up' },
    // "SORT-NUMERIC-DOWN":{ primeicons: 'pi-sort-numeric-down' },
    // "SORT-NUMERIC-UP":{ primeicons: 'pi-sort-numeric-up' },
    // "SORT-UP":{ primeicons: 'pi-sort-up' },
    // "SORT":{ primeicons: 'pi-sort' },
    // "SPINNER":{ primeicons: 'pi-spinner' },
    "SPINNER-SPIN":{ primeicons: 'pi-spinner pi-spin' },
    // "STAR-O":{ primeicons: 'pi-star-o' },
    // "STAR":{ primeicons: 'pi-star' },
    // "STEP-BACKWARD-ALT":{ primeicons: 'pi-step-backward-alt' },
    // "STEP-BACKWARD":{ primeicons: 'pi-step-backward' },
    // "STEP-FORWARD-ALT":{ primeicons: 'pi-step-forward-alt' },
    // "STEP-FORWARD":{ primeicons: 'pi-step-forward' },
    // "SUN":{ primeicons: 'pi-sun' },
    // "TABLE":{ primeicons: 'pi-table' },
    // "TABLET":{ primeicons: 'pi-tablet' },
    // "TAG":{ primeicons: 'pi-tag' },
    // "TAGS":{ primeicons: 'pi-tags' },
    // "TH-LARGE":{ primeicons: 'pi-th-large' },
    // "THUMBS-DOWN":{ primeicons: 'pi-thumbs-down' },
    // "THUMBS-UP":{ primeicons: 'pi-thumbs-up' },
    // "TICKET":{ primeicons: 'pi-ticket' },
    // "TIMES-CIRCLE":{ primeicons: 'pi-times-circle' },
    "TIMES":{ primeicons: 'pi-times' },
    // "TRASH":{ primeicons: 'pi-trash' },
    "TWITTER":{ primeicons: 'pi-twitter' },
    // "UNDO":{ primeicons: 'pi-undo' },
    // "UNLOCK":{ primeicons: 'pi-unlock' },
    // "UPLOAD":{ primeicons: 'pi-upload' },
    // "USER-EDIT":{ primeicons: 'pi-user-edit' },
    // "USER-MINUS":{ primeicons: 'pi-user-minus' },
    // "USER-PLUS":{ primeicons: 'pi-user-plus' },
    // "USER":{ primeicons: 'pi-user' },
    // "USERS":{ primeicons: 'pi-users' },
    // "VIDEO":{ primeicons: 'pi-video' },
    // "VIMEO":{ primeicons: 'pi-vimeo' },
    // "VOLUME-DOWN":{ primeicons: 'pi-volume-down' },
    // "VOLUME-OFF":{ primeicons: 'pi-volume-off' },
    // "VOLUME-UP":{ primeicons: 'pi-volume-up' },
    // "YOUTUBE":{ primeicons: 'pi-youtube' },
    // "WALLET":{ primeicons: 'pi-wallet' },
    // "WIFI":{ primeicons: 'pi-wifi' },
    // "WINDOW-MAXIMIZE":{ primeicons: 'pi-window-maximize' },
    // "WINDOW-MINIMIZE":{ primeicons: 'pi-window-minimize'},
}

/**
 *
 * @param {string} icon
 * @param {boolean} [fallback]
 */
function getCommonIcon(icon, fallback = true) {
    if (!icon) return null;
    const commonIcon = CommonIcons[(icon||"").toLocaleUpperCase()];
    if (commonIcon) return commonIcon;
    if (fallback) {
        console.warn(`No common icon for ${icon}`);
        return getCommonIcon(FallbackIcon.commonIcon.toLocaleUpperCase(), false);
    }
    return null;
}

const PrimeIconsIconProvider = {
    /**
     *
     * @param {string | { commonIcon: string, context: string }} icon The icon to render
     */
    renderIcon(icon, options) {
        let iconString = "";
        if (typeof icon === "object") {
            const commonIcon = getCommonIcon(icon.commonIcon);
            if (commonIcon) {
                iconString = commonIcon.primeicons;
            }
        } else if (typeof icon ==="string") {
            iconString = "pi-" + icon;
        }

        const iconClass = ["pi",iconString];
        if (options.fullWidth) {
            iconClass.push("pi-fw");
        }

        return h(options.tag, {
            class: iconClass,
        });
    }
}

const defaultIconProvider = PrimeIconsIconProvider;

export default {
    props: {
        tag: {
            type: String,
            default: "span",
            required: false,
        },
        fullWidth: {
            type: Boolean,
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
            fullWidth: this.fullWidth,
        };

        return iconProvider.renderIcon(icon, options)

        // return h(this.tag, renderedIcon);
    }
};
