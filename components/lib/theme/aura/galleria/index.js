export default {
    variables: {
        colorScheme: {
            light: {
                navigator: {
                    backgroundHover: 'rgba(255, 255, 255, 0.1)',
                    color: '{surface.100}'
                },
                thumbnailNavigator: {
                    backgroundHover: '{surface.200}',
                    color: '{surface.600}',
                    colorHover: '{surface.700}'
                },
                thumbnailContainer: {
                    background: '{surface.50}'
                },
                caption: {
                    background: 'rgba(0, 0, 0, 0.5)',
                    textColor: '{surface.100}'
                },
                indicator: {
                    background: '{surface.200}',
                    backgroundHover: '{surface.300}',
                    backgroundActive: '{primary.color}'
                },
                insetIndicators: {
                    background: 'rgba(0, 0, 0, 0.5)'
                },
                insetIndicator: {
                    background: 'rgba(255, 255, 255, 0.4)',
                    backgroundHover: 'rgba(255, 255, 255, 0.4)',
                    backgroundActive: '{primary.color}'
                },
                mask: {
                    background: 'rgba(0,0,0,0.9)'
                },
                close: {
                    backgroundHover: 'rgba(255,255,255,0.1)',
                    color: '{surface.50}',
                    colorHover: '{surface.0}'
                }
            },
            dark: {
                navigator: {
                    backgroundHover: 'rgba(255, 255, 255, 0.1)',
                    color: '{surface.400}'
                },
                thumbnailNavigator: {
                    backgroundHover: '{surface.800}',
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                },
                thumbnailContainer: {
                    background: '{surface.950}'
                },
                caption: {
                    background: 'rgba(0, 0, 0, 0.5)',
                    textColor: '{surface.100}'
                },
                indicator: {
                    background: '{surface.200}',
                    backgroundHover: '{surface.300}',
                    backgroundActive: '{primary.color}'
                },
                insetIndicators: {
                    background: 'rgba(0, 0, 0, 0.5)'
                },
                insetIndicator: {
                    background: 'rgba(255, 255, 255, 0.4)',
                    backgroundHover: 'rgba(255, 255, 255, 0.4)',
                    backgroundActive: '{primary.color}'
                },
                mask: {
                    background: 'rgba(0,0,0,0.9)'
                },
                close: {
                    backgroundHover: 'rgba(255,255,255,0.1)',
                    color: '{surface.50}',
                    colorHover: '{surface.0}'
                }
            }
        }
    },
    css: `
.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-item-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-item-container {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-item-nav {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: transparent;
    color: var(--p-galleria-navigator-color);
    width: 3rem;
    height: 3rem;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    border-radius: 50%;
    margin: 0 0.5rem;
}

.p-galleria-item-nav:not(.p-disabled):hover {
    background: var(--p-galleria-navigator-background-hover);
}

.p-galleria-item-prev-icon,
.p-galleria-item-next-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-item-prev {
    left: 0;
}

.p-galleria-item-next {
    right: 0;
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-item-nav-onhover .p-galleria-item-nav {
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--p-transition-duration) ease-in-out;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--p-galleria-caption-background);
    color: var(--p-galleria-caption-text-color);
    padding: 1rem;
}

.p-galleria-thumbnail-wrapper {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0.5rem;
    background: transparent;
    color: var(--p-galleria-thumbnail-navigator-color);
    width: 2rem;
    height: 2rem;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    border-radius: 50%;
}

.p-galleria-thumbnail-prev:hover,
.p-galleria-thumbnail-next:hover {
    background: var(--p-galleria-thumbnail-navigator-background-hover);
    color: var(--p-galleria-thumbnail-navigator-color-hover);
}

.p-galleria-thumbnail-prev:focus-visible,
.p-galleria-thumbnail-next:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-galleria-thumbnail-prev span,
.p-galleria-thumbnail-next span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-galleria-thumbnail-container {
    display: flex;
    flex-direction: row;
    background: var(--p-galleria-thumbnail-container-background);
    padding: 1rem 0.25rem;
}

.p-galleria-thumbnail-items-container {
    overflow: hidden;
    width: 100%;
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail-item-content {
    outline-color: transparent;
}

.p-galleria-thumbnail-item-content:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-right .p-galleria-item-wrapper {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-item-wrapper,
.p-galleria-thumbnails-top .p-galleria-item-wrapper {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-container,
.p-galleria-thumbnails-right .p-galleria-thumbnail-container {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
}

.p-galleria-indicator > button {
    display: inline-flex;
    align-items: center;
    background-color: var(--p-galleria-indicator-background);
    width: 1rem;
    height: 1rem;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    border-radius: 50%;
}

.p-galleria-indicator > button:hover {
    background: var(--p-galleria-indicator-background-hover);
}

.p-galleria-indicator > button:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-galleria-indicator.p-highlight > button {
    background-color: var(--p-galleria-indicator-background-active);
}

.p-galleria-indicators-left .p-galleria-item-wrapper,
.p-galleria-indicators-right .p-galleria-item-wrapper {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-item-container,
.p-galleria-indicators-top .p-galleria-item-container {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-top .p-galleria-indicators {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicators,
.p-galleria-indicators-right .p-galleria-indicators {
    flex-direction: column;
}

.p-galleria-indicator-onitem .p-galleria-indicators {
    position: absolute;
    display: flex;
    z-index: 1;
    background: var(--p-galleria-inset-indicators-background);
}

.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator > button {
    background: var(--p-galleria-inset-indicator-background);
}

.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight > button {
    background-color: var(--p-galleria-inset-indicator-background-active);
}

.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}


.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    --p-mask-background: var(--p-galleria-mask-background);
}

.p-galleria-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0.5rem;
    background: transparent;
    color: var(--p-galleria-close-color);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline-color: transparent;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-galleria-close-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-galleria-close:hover {
    background: var(--p-galleria-close-background-hover);
    color: var(--p-galleria-close-color-hover);
}

.p-galleria-close:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-galleria-mask .p-galleria-item-nav {
    position: fixed;
    top: 50%;
    margin-top: -0.5rem;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-item-nav {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}    
`
};
