import { reactive } from 'vue';

const dragState = reactive({
    isDragging: false,
    dragNode: null,
    dragScope: null
});

const dragStartHandlers = new Set();
const dragStopHandlers = new Set();

export function useTreeDragDropService() {
    const startDrag = (event) => {
        dragState.isDragging = true;
        dragState.dragNode = event.node;
        dragState.dragScope = event.scope;

        dragStartHandlers.forEach((handler) => handler(event));
    };

    const stopDrag = (event) => {
        dragState.isDragging = false;
        dragState.dragNode = null;
        dragState.dragScope = null;

        dragStopHandlers.forEach((handler) => handler(event));
    };

    const onDragStart = (handler) => {
        dragStartHandlers.add(handler);

        return () => dragStartHandlers.delete(handler);
    };

    const onDragStop = (handler) => {
        dragStopHandlers.add(handler);

        return () => dragStopHandlers.delete(handler);
    };

    return {
        dragState,
        startDrag,
        stopDrag,
        onDragStart,
        onDragStop
    };
}
