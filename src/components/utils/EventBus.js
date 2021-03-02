export default function handler() {
    let eventTarget = document.body.appendChild(document.createComment(''));
    let eventListener, eventKey;

    return {
        on(type, listener, key) {
            eventKey = key;
            eventListener = function(e) { listener(e.detail); };
            eventTarget.addEventListener(type, eventListener);
        },
        once(type, listener, key) {
            eventKey = key;
            eventListener = function(e) { listener(e.detail); };
            eventTarget.addEventListener(type, eventListener, { once: true });
        },
        off(type, key) {
            if (eventListener && eventKey === key) {
                eventTarget.removeEventListener(type, eventListener);
            }
        },
        emit(type, detail) {
            eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
        }
    }
}