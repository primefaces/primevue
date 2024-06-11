import { $dt } from '@primevue/themes';

export default {
    innerWidth(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            return width;
        }

        return 0;
    },

    width(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            return width;
        }

        return 0;
    },

    getWindowScrollTop() {
        let doc = document.documentElement;

        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    },

    getWindowScrollLeft() {
        let doc = document.documentElement;

        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    },

    getOuterWidth(el, margin) {
        if (el) {
            let width = el.offsetWidth;

            if (margin) {
                let style = getComputedStyle(el);

                width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            }

            return width;
        }

        return 0;
    },

    getOuterHeight(el, margin) {
        if (el) {
            let height = el.offsetHeight;

            if (margin) {
                let style = getComputedStyle(el);

                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }

        return 0;
    },

    getClientHeight(el, margin) {
        if (el) {
            let height = el.clientHeight;

            if (margin) {
                let style = getComputedStyle(el);

                height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }

            return height;
        }

        return 0;
    },

    getViewport() {
        let win = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            w = win.innerWidth || e.clientWidth || g.clientWidth,
            h = win.innerHeight || e.clientHeight || g.clientHeight;

        return { width: w, height: h };
    },

    getOffset(el) {
        if (el) {
            let rect = el.getBoundingClientRect();

            return {
                top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
            };
        }

        return {
            top: 'auto',
            left: 'auto'
        };
    },

    index(element) {
        if (element) {
            let children = this.getParentNode(element)?.childNodes;
            let num = 0;

            for (let i = 0; i < children.length; i++) {
                if (children[i] === element) return num;
                if (children[i].nodeType === 1) num++;
            }
        }

        return -1;
    },

    addMultipleClasses(element, classNames) {
        if (element && classNames) {
            [classNames]
                .flat()
                .filter(Boolean)
                .forEach((cNames) => cNames.split(' ').forEach((className) => this.addClass(element, className)));
        }
    },

    removeMultipleClasses(element, classNames) {
        if (element && classNames) {
            [classNames]
                .flat()
                .filter(Boolean)
                .forEach((cNames) => cNames.split(' ').forEach((className) => this.removeClass(element, className)));
        }
    },

    addClass(element, className) {
        if (element && className && !this.hasClass(element, className)) {
            if (element.classList) element.classList.add(className);
            else element.className += ' ' + className;
        }
    },

    removeClass(element, className) {
        if (element && className) {
            if (element.classList) element.classList.remove(className);
            else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },

    hasClass(element, className) {
        if (element) {
            if (element.classList) return element.classList.contains(className);
            else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }

        return false;
    },

    addStyles(element, styles = {}) {
        if (element) {
            Object.entries(styles).forEach(([key, value]) => (element.style[key] = value));
        }
    },

    find(element, selector) {
        return this.isElement(element) ? element.querySelectorAll(selector) : [];
    },

    findSingle(element, selector) {
        return this.isElement(element) ? (element.matches(selector) ? element : element.querySelector(selector)) : null;
    },

    createElement(type, attributes = {}, ...children) {
        if (type) {
            const element = document.createElement(type);

            this.setAttributes(element, attributes);
            element.append(...children);

            return element;
        }

        return undefined;
    },

    setAttribute(element, attribute = '', value) {
        if (this.isElement(element) && value !== null && value !== undefined) {
            element.setAttribute(attribute, value);
        }
    },

    setAttributes(element, attributes = {}) {
        if (this.isElement(element)) {
            const computedStyles = (rule, value) => {
                const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];

                return [value].flat().reduce((cv, v) => {
                    if (v !== null && v !== undefined) {
                        const type = typeof v;

                        if (type === 'string' || type === 'number') {
                            cv.push(v);
                        } else if (type === 'object') {
                            const _cv = Array.isArray(v)
                                ? computedStyles(rule, v)
                                : Object.entries(v).map(([_k, _v]) => (rule === 'style' && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${_v}` : !!_v ? _k : undefined));

                            cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
                        }
                    }

                    return cv;
                }, styles);
            };

            Object.entries(attributes).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    const matchedEvent = key.match(/^on(.+)/);

                    if (matchedEvent) {
                        element.addEventListener(matchedEvent[1].toLowerCase(), value);
                    } else if (key === 'p-bind') {
                        this.setAttributes(element, value);
                    } else {
                        value = key === 'class' ? [...new Set(computedStyles('class', value))].join(' ').trim() : key === 'style' ? computedStyles('style', value).join(';').trim() : value;
                        (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
                        element.setAttribute(key, value);
                    }
                }
            });
        }
    },

    getAttribute(element, name) {
        if (this.isElement(element)) {
            const value = element.getAttribute(name);

            if (!isNaN(value)) {
                return +value;
            }

            if (value === 'true' || value === 'false') {
                return value === 'true';
            }

            return value;
        }

        return undefined;
    },

    isAttributeEquals(element, name, value) {
        return this.isElement(element) ? this.getAttribute(element, name) === value : false;
    },

    isAttributeNotEquals(element, name, value) {
        return !this.isAttributeEquals(element, name, value);
    },

    getHeight(el) {
        if (el) {
            let height = el.offsetHeight;
            let style = getComputedStyle(el);

            height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

            return height;
        }

        return 0;
    },

    getWidth(el) {
        if (el) {
            let width = el.offsetWidth;
            let style = getComputedStyle(el);

            width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

            return width;
        }

        return 0;
    },

    absolutePosition(element, target, gutter = true) {
        if (element) {
            const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
            const elementOuterHeight = elementDimensions.height;
            const elementOuterWidth = elementDimensions.width;
            const targetOuterHeight = target.offsetHeight;
            const targetOuterWidth = target.offsetWidth;
            const targetOffset = target.getBoundingClientRect();
            const windowScrollTop = this.getWindowScrollTop();
            const windowScrollLeft = this.getWindowScrollLeft();
            const viewport = this.getViewport();
            let top,
                left,
                origin = 'top';

            if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
                top = targetOffset.top + windowScrollTop - elementOuterHeight;
                origin = 'bottom';

                if (top < 0) {
                    top = windowScrollTop;
                }
            } else {
                top = targetOuterHeight + targetOffset.top + windowScrollTop;
            }

            if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
            else left = targetOffset.left + windowScrollLeft;

            element.style.top = top + 'px';
            element.style.left = left + 'px';
            element.style.transformOrigin = origin;
            gutter && (element.style.marginTop = origin === 'bottom' ? `calc(${$dt('anchor.gutter', '2px').variable} * -1)` : $dt('anchor.gutter').variable);
        }
    },

    relativePosition(element, target, gutter = true) {
        if (element) {
            const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
            const targetHeight = target.offsetHeight;
            const targetOffset = target.getBoundingClientRect();
            const viewport = this.getViewport();
            let top,
                left,
                origin = 'top';

            if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
                top = -1 * elementDimensions.height;
                origin = 'bottom';

                if (targetOffset.top + top < 0) {
                    top = -1 * targetOffset.top;
                }
            } else {
                top = targetHeight;
            }

            if (elementDimensions.width > viewport.width) {
                // element wider then viewport and cannot fit on screen (align at left side of viewport)
                left = targetOffset.left * -1;
            } else if (targetOffset.left + elementDimensions.width > viewport.width) {
                // element wider then viewport but can be fit on screen (align at right side of viewport)
                left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
            } else {
                // element fits on screen (align with target)
                left = 0;
            }

            element.style.top = top + 'px';
            element.style.left = left + 'px';
            element.style.transformOrigin = origin;
            gutter && (element.style.marginTop = origin === 'bottom' ? `calc(${$dt('anchor.gutter', '2px').variable} * -1)` : $dt('anchor.gutter').variable);
        }
    },

    nestedPosition(element, level) {
        if (element) {
            const parentItem = element.parentElement;
            const elementOffset = this.getOffset(parentItem);
            const viewport = this.getViewport();
            const sublistWidth = element.offsetParent ? element.offsetWidth : this.getHiddenElementOuterWidth(element);
            const itemOuterWidth = this.getOuterWidth(parentItem.children[0]);
            let left;

            if (parseInt(elementOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - this.calculateScrollbarWidth()) {
                if (parseInt(elementOffset.left, 10) < sublistWidth) {
                    // for too small screens
                    if (level % 2 === 1) {
                        left = parseInt(elementOffset.left, 10) ? '-' + parseInt(elementOffset.left, 10) + 'px' : '100%';
                    } else if (level % 2 === 0) {
                        left = viewport.width - sublistWidth - this.calculateScrollbarWidth() + 'px';
                    }
                } else {
                    left = '-100%';
                }
            } else {
                left = '100%';
            }

            element.style.top = '0px';
            element.style.left = left;
        }
    },

    getParentNode(element) {
        let parent = element?.parentNode;

        if (parent && parent instanceof ShadowRoot && parent.host) {
            parent = parent.host;
        }

        return parent;
    },

    getParents(element, parents = []) {
        const parent = this.getParentNode(element);

        return parent === null ? parents : this.getParents(parent, parents.concat([parent]));
    },

    getScrollableParents(element) {
        let scrollableParents = [];

        if (element) {
            let parents = this.getParents(element);
            const overflowRegex = /(auto|scroll)/;

            const overflowCheck = (node) => {
                try {
                    let styleDeclaration = window['getComputedStyle'](node, null);

                    return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
                } catch (err) {
                    return false;
                }
            };

            for (let parent of parents) {
                let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

                if (scrollSelectors) {
                    let selectors = scrollSelectors.split(',');

                    for (let selector of selectors) {
                        let el = this.findSingle(parent, selector);

                        if (el && overflowCheck(el)) {
                            scrollableParents.push(el);
                        }
                    }
                }

                if (parent.nodeType !== 9 && overflowCheck(parent)) {
                    scrollableParents.push(parent);
                }
            }
        }

        return scrollableParents;
    },

    getHiddenElementOuterHeight(element) {
        if (element) {
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            let elementHeight = element.offsetHeight;

            element.style.display = 'none';
            element.style.visibility = 'visible';

            return elementHeight;
        }

        return 0;
    },

    getHiddenElementOuterWidth(element) {
        if (element) {
            element.style.visibility = 'hidden';
            element.style.display = 'block';
            let elementWidth = element.offsetWidth;

            element.style.display = 'none';
            element.style.visibility = 'visible';

            return elementWidth;
        }

        return 0;
    },

    getHiddenElementDimensions(element) {
        if (element) {
            let dimensions = {};

            element.style.visibility = 'hidden';
            element.style.display = 'block';
            dimensions.width = element.offsetWidth;
            dimensions.height = element.offsetHeight;
            element.style.display = 'none';
            element.style.visibility = 'visible';

            return dimensions;
        }

        return 0;
    },

    fadeIn(element, duration) {
        if (element) {
            element.style.opacity = 0;

            let last = +new Date();
            let opacity = 0;

            let tick = function () {
                opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
                element.style.opacity = opacity;
                last = +new Date();

                if (+opacity < 1) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                }
            };

            tick();
        }
    },

    fadeOut(element, ms) {
        if (element) {
            let opacity = 1,
                interval = 50,
                duration = ms,
                gap = interval / duration;

            let fading = setInterval(() => {
                opacity -= gap;

                if (opacity <= 0) {
                    opacity = 0;
                    clearInterval(fading);
                }

                element.style.opacity = opacity;
            }, interval);
        }
    },

    getUserAgent() {
        return navigator.userAgent;
    },

    appendChild(element, target) {
        if (this.isElement(target)) target.appendChild(element);
        else if (target.el && target.elElement) target.elElement.appendChild(element);
        else throw new Error('Cannot append ' + target + ' to ' + element);
    },

    isElement(obj) {
        return typeof HTMLElement === 'object' ? obj instanceof HTMLElement : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    },

    scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);

        if (offset < 0) {
            container.scrollTop = scroll + offset;
        } else if (offset + itemHeight > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    },

    clearSelection() {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        } else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            } catch (error) {
                //ignore IE bug
            }
        }
    },

    getSelection() {
        if (window.getSelection) return window.getSelection().toString();
        else if (document.getSelection) return document.getSelection().toString();
        else if (document['selection']) return document['selection'].createRange().text;

        return null;
    },

    calculateScrollbarWidth() {
        if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;

        let scrollDiv = document.createElement('div');

        this.addStyles(scrollDiv, {
            width: '100px',
            height: '100px',
            overflow: 'scroll',
            position: 'absolute',
            top: '-9999px'
        });
        document.body.appendChild(scrollDiv);

        let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

        document.body.removeChild(scrollDiv);

        this.calculatedScrollbarWidth = scrollbarWidth;

        return scrollbarWidth;
    },

    calculateBodyScrollbarWidth() {
        return window.innerWidth - document.documentElement.offsetWidth;
    },

    getBrowser() {
        if (!this.browser) {
            let matched = this.resolveUserAgent();

            this.browser = {};

            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }

            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            } else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }

        return this.browser;
    },

    resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) || [];

        return {
            browser: match[1] || '',
            version: match[2] || '0'
        };
    },

    isVisible(element) {
        return element && element.offsetParent != null;
    },

    invokeElementMethod(element, methodName, args) {
        element[methodName].apply(element, args);
    },

    isExist(element) {
        return !!(element !== null && typeof element !== 'undefined' && element.nodeName && this.getParentNode(element));
    },

    isClient() {
        return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    },

    focus(el, options) {
        el && document.activeElement !== el && el.focus(options);
    },

    isFocusableElement(element, selector = '') {
        return this.isElement(element)
            ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`)
            : false;
    },

    getFocusableElements(element, selector = '') {
        let focusableElements = this.find(
            element,
            `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`
        );

        let visibleFocusableElements = [];

        for (let focusableElement of focusableElements) {
            if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden') visibleFocusableElements.push(focusableElement);
        }

        return visibleFocusableElements;
    },

    getFirstFocusableElement(element, selector) {
        const focusableElements = this.getFocusableElements(element, selector);

        return focusableElements.length > 0 ? focusableElements[0] : null;
    },

    getLastFocusableElement(element, selector) {
        const focusableElements = this.getFocusableElements(element, selector);

        return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    },

    getNextFocusableElement(container, element, selector) {
        const focusableElements = this.getFocusableElements(container, selector);
        const index = focusableElements.length > 0 ? focusableElements.findIndex((el) => el === element) : -1;
        const nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;

        return nextIndex > -1 ? focusableElements[nextIndex] : null;
    },

    getPreviousElementSibling(element, selector) {
        let previousElement = element.previousElementSibling;

        while (previousElement) {
            if (previousElement.matches(selector)) {
                return previousElement;
            } else {
                previousElement = previousElement.previousElementSibling;
            }
        }

        return null;
    },

    getNextElementSibling(element, selector) {
        let nextElement = element.nextElementSibling;

        while (nextElement) {
            if (nextElement.matches(selector)) {
                return nextElement;
            } else {
                nextElement = nextElement.nextElementSibling;
            }
        }

        return null;
    },

    isClickable(element) {
        if (element) {
            const targetNode = element.nodeName;
            const parentNode = element.parentElement && element.parentElement.nodeName;

            return (
                targetNode === 'INPUT' ||
                targetNode === 'TEXTAREA' ||
                targetNode === 'BUTTON' ||
                targetNode === 'A' ||
                parentNode === 'INPUT' ||
                parentNode === 'TEXTAREA' ||
                parentNode === 'BUTTON' ||
                parentNode === 'A' ||
                !!element.closest('.p-button, .p-checkbox, .p-radiobutton') // @todo Add [data-pc-section="button"]
            );
        }

        return false;
    },

    applyStyle(element, style) {
        if (typeof style === 'string') {
            element.style.cssText = style;
        } else {
            for (let prop in style) {
                element.style[prop] = style[prop];
            }
        }
    },

    isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    },

    isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    },

    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    },

    hasCSSAnimation(element) {
        if (element) {
            const style = getComputedStyle(element);
            const animationDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');

            return animationDuration > 0;
        }

        return false;
    },

    hasCSSTransition(element) {
        if (element) {
            const style = getComputedStyle(element);
            const transitionDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');

            return transitionDuration > 0;
        }

        return false;
    },

    exportCSV(csv, filename) {
        let blob = new Blob([csv], {
            type: 'application/csv;charset=utf-8;'
        });

        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename + '.csv');
        } else {
            let link = document.createElement('a');

            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', filename + '.csv');
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
        }
    },

    blockBodyScroll(className = 'p-overflow-hidden') {
        document.body.style.setProperty($dt('scrollbar.width').name, this.calculateBodyScrollbarWidth() + 'px');
        this.addClass(document.body, className);
    },

    unblockBodyScroll(className = 'p-overflow-hidden') {
        document.body.style.removeProperty($dt('scrollbar.width').name);
        this.removeClass(document.body, className);
    }
};
