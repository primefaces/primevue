export default {
    variables: {
        common: {},
        light: {},
        dark: {}
    },
    css: `
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: var(--p-divider-horizontal-margin);
    padding: var(--p-divider-horizontal-padding);
}
.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: var(--p-divider-size) var(--p-divider-color);
}
.p-divider-content {
    z-index: 1;
    background-color: var(--p-panel-content-bg);
}
.p-divider-vertical {
    min-height: 100%;
    margin: var(--p-divider-vertical-margin);
    display: flex;
    position: relative;
    justify-content: center;
    padding: var(--p-divider-vertical-padding);
}
.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: var(--p-divider-size) var(--p-divider-color);
}
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}
.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}
.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}
.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}
.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
.p-divider-horizontal .p-divider-content {
    padding: 0 var(--p-inline-spacing);
}
.p-divider-vertical .p-divider-content {
    padding: var(--p-inline-spacing) 0;
}
    `
};
