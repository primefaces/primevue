export default {
    variables: {
        common: {},
        light: {},
        dark: {}
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
    background: var(--p-scroll-panel-track-bg);
    border-radius: 3px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    transition: var(--p-form-element-transition);
    border: var(--p-scroll-panel-track-border);
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
.p-scrollpanel:active .p-scrollpanel-bar,
.p-scrollpanel:hover .p-scrollpanel-bar {
    opacity: 1;
}
.p-scrollpanel-grabbed {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.p-scrollpanel-bar:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: var(--p-focus-shadow);
}
    `
};
