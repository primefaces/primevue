import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useOverlayPosition() {
    const isRTL = ref(document.dir === 'rtl');

    const getViewport = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            scrollTop: window.pageYOffset,
            scrollLeft: window.pageXOffset
        };
    };

    const getDimensions = (element) => {
        if (!element) return { width: 0, height: 0, left: 0, top: 0 };
        const rect = element.getBoundingClientRect();
        return {
            width: element.offsetWidth || rect.width,
            height: element.offsetHeight || rect.height,
            left: rect.left,
            top: rect.top
        };
    };

    const calculatePositions = (element, target, type = 'absolute') => {
        const elementDim = getDimensions(element);
        const targetDim = getDimensions(target);
        const viewport = getViewport();
        let top,
            left = 'auto',
            right = 'auto',
            origin = 'top';

        // Calculate vertical position
        if (type === 'absolute') {
            const spaceBelow = viewport.height - targetDim.top - targetDim.height;
            const spaceAbove = targetDim.top;

            if (spaceBelow < elementDim.height && spaceAbove > spaceBelow) {
                // Place above if there's more space above than below
                top = targetDim.top - elementDim.height + viewport.scrollTop;
                origin = 'bottom';
            } else {
                // Place below
                top = targetDim.top + targetDim.height + viewport.scrollTop;
                origin = 'top';
            }
        } else {
            if (targetDim.top + targetDim.height + elementDim.height > viewport.height) {
                top = -1 * elementDim.height;
                origin = 'bottom';
                if (targetDim.top + top < 0) {
                    top = -1 * targetDim.top;
                }
            } else {
                top = targetDim.height;
                origin = 'top';
            }
        }

        // Calculate horizontal position
        if (type === 'absolute') {
            if (isRTL.value) {
                right = viewport.width - (targetDim.left + targetDim.width) + viewport.scrollLeft;
                left = 'auto';
            } else {
                left = targetDim.left + viewport.scrollLeft;
                right = 'auto';
            }
        } else {
            // Relative positioning remains the same
            if (elementDim.width > viewport.width) {
                left = targetDim.left * -1;
            } else if (targetDim.left + elementDim.width > viewport.width) {
                left = (targetDim.left + elementDim.width - viewport.width) * -1;
            } else {
                left = 0;
            }
        }

        return { top, left, right, origin };
    };

    const updatePosition = (element, target, type = 'absolute') => {
        if (!element || !target) return;

        const { top, left, right, origin } = calculatePositions(element, target, type);

        // Apply positioning
        element.style.top = `${top}px`;

        if (isRTL.value) {
            element.style.left = 'auto';
            element.style.right = `${right}px`;
        } else {
            element.style.right = 'auto';
            element.style.left = `${left}px`;
        }

        element.style.transformOrigin = origin;

        // Set minimum width
        element.style.minWidth = `${target.offsetWidth}px`;
    };

    // Direction change observer
    const observeDirection = () => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'dir') {
                    isRTL.value = document.dir === 'rtl';
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir']
        });

        onBeforeUnmount(() => {
            observer.disconnect();
        });
    };

    onMounted(() => {
        observeDirection();
    });

    return {
        updatePosition,
        isRTL
    };
}
