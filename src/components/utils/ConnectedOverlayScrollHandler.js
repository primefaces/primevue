import DomHandler from './DomHandler';
import UniqueComponentId from './UniqueComponentId';

export default class ConnectedOverlayScrollHandler {

    constructor(element, elementId = UniqueComponentId(), listener = () => {}) {
        this.element = element;
        this.elementId = elementId;
        this.listener = listener;
    }

    bindScrollListener() {
        this.scrollableParents = DomHandler.getScrollableParents(this.element);
        this.scrollListeners = {};
        for (let i = 0; i < this.scrollableParents.length; i++) {
            let parent = this.scrollableParents[i];
            let namespace = `${this.elementId}_${i}`;

            if (!this.scrollListeners[namespace]) {
                this.scrollListeners[namespace] = this.listener;
                parent.addEventListener('scroll', this.scrollListeners[namespace]);
            }
        }
    }

    unbindScrollListener() {
        if (this.scrollableParents) {
            for (let i = 0; i < this.scrollableParents.length; i++) {
                let parent = this.scrollableParents[i];
                let namespace = `${this.elementId}_${i}`;

                if (this.scrollListeners[namespace]) {
                    parent.removeEventListener('scroll', this.scrollListeners[namespace]);
                    this.scrollListeners[namespace] = null;
                }
            }
        }
    }
}
