export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.800}',
                    backgroundHover: '{surface.700}',
                    textColor: '{surface.100}',
                    textColorHover: '{surface.0}'
                }
            },
            dark: {
                root: {
                    background: '{surface.800}',
                    backgroundHover: '{surface.700}',
                    textColor: '{surface.300}',
                    textColorHover: '{surface.200}'
                }
            }
        }
    },
    css: `
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-scrolltop-background);
    color: var(--p-scrolltop-text-color);
}

.p-scrolltop:hover {
    background: var(--p-scrolltop-background-hover);
    color: var(--p-scrolltop-text-color-hover);
}

.p-scrolltop-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}

.p-scrolltop-sticky {
    position: sticky;
}

.p-scrolltop-sticky {
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}

.p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    transition: background var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}
`
};
