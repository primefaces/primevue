export default {
    css: `
.p-metergroup {
    display: flex;
    gap: 1rem;
}

.p-metergroup-meters {
    display: flex;
    background: var(--p-metergroup-meters-background);
    border-radius: var(--p-rounded-base);
}

.p-metergroup-meter {
    border: 0 none;
    background: var(--p-primary-color);
}

.p-metergroup-labels {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.p-metergroup-label-marker {
    display: inline-flex;
    background: var(--p-primary-color);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
}

.p-metergroup-label-icon {
    width: 1rem;
    height: 1rem;
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-labels-horizontal {
    gap: 1rem;
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: 0.5rem;
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-top-left-radius: var(--p-rounded-base);
    border-bottom-left-radius: var(--p-rounded-base);
}
.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: var(--p-rounded-base);
    border-bottom-right-radius: var(--p-rounded-base);
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-labels-vertical {
    flex-direction: column;
    gap: 0.5rem;
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: 0.5rem;
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-labels {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-top-left-radius: var(--p-rounded-base);
    border-top-right-radius: var(--p-rounded-base);
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: var(--p-rounded-base);
    border-bottom-right-radius: var(--p-rounded-base);
}
`
};
