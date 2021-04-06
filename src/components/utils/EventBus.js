export default function() {
    let eventTarget, eventListener, eventKey;

    return {
        on(type, listener, key) {
            eventTarget = eventTarget || document.body.appendChild(document.createComment(''));
            eventKey = key;
            eventListener = function(e) { listener(e.detail); };
            eventTarget.addEventListener(type, eventListener);
            return this;
        },
        once(type, listener, key) {
            eventTarget = eventTarget || document.body.appendChild(document.createComment(''));
            eventKey = key;
            eventListener = function(e) { listener(e.detail); };
            eventTarget.addEventListener(type, eventListener, { once: true });
            return this;
        },
        off(type, key) {
            if (eventTarget && eventListener && eventKey === key) {
                eventTarget.removeEventListener(type, eventListener);
            }
            return this;
        },
        emit(type, detail) {
            if (eventTarget) {
                eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
            }
            return this;
        },
        reset() {
            if (eventTarget) {
                document.body.removeChild(eventTarget);
                eventTarget = eventListener = eventKey = undefined;
            }
            return this;
        }
    }
}
