export default {
    css: `
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: 1rem 0;
    padding: 0 1rem;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid var(--p-dark-surface-700, var(--p-surface-200));
}

.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: 0 1rem;
    padding: 1rem 0;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid var(--p-dark-surface-700, var(--p-surface-200));
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
}

.p-divider-content {
    z-index: 1;
    background: var(--p-dark-surface-900, var(--p-surface-0))
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
    `
};
