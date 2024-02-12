export default {
    variables: {
        colorScheme: {
            light: {
                bar: {
                    background: '{surface.100}'
                }
            },
            dark: {
                bar: {
                    background: '{surface.800}'
                }
            }
        }
    },
    css: `
.p-scrollpanel-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + 18px);
    width: calc(100% + 18px);
    padding: 0 18px 18px 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: 3px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color var(--p-transition-duration);
    background: var(--p-scrollpanel-bar-background);
    border: 0 none;
    transition: outline-color var(--p-transition-duration), opacity var(--p-transition-duration);
}

.p-scrollpanel-bar:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-scrollpanel-bar-y {
    width: 9px;
    top: 0;
}

.p-scrollpanel-bar-x {
    height: 9px;
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`
};
