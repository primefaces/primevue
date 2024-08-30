import { getScrollableParents } from '@primeuix/utils/dom';

export default class ConnectedOverlayScrollHandler {
    element: Element | null;
    listener: ((...args: any[]) => any) | null;
    scrollableParents: Element[] | null = null;

    constructor(element: Element, listener = () => {}) {
        this.element = element;
        this.listener = listener;
    }

    bindScrollListener() {
        this.scrollableParents = getScrollableParents(this.element!);

        for (let i = 0; i < this.scrollableParents.length; i++) {
            if (this.scrollableParents[i] instanceof Element) return;
            this.scrollableParents[i].addEventListener('scroll', this.listener);
        }
    }

    unbindScrollListener() {
        if (this.scrollableParents) {
            for (let i = 0; i < this.scrollableParents.length; i++) {
                this.scrollableParents[i].removeEventListener('scroll', this.listener);
            }
        }
    }

    destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
    }
}
