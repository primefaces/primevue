export default {
    css: ({ dt }) => `
.p-metergroup {
    display: flex;
    gap: 1rem;
}

.p-metergroup-meters {
    display: flex;
    background: ${dt('metergroup.meters.background')};
    border-radius: ${dt('rounded.base')};
}

.p-metergroup-meter {
    border: 0 none;
}

.p-metergroup-label-list {
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

.p-metergroup-label-list-horizontal {
    gap: 1rem;
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: 0.5rem;
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-top-left-radius: ${dt('rounded.base')};
    border-bottom-left-radius: ${dt('rounded.base')};
}
.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-label-list-vertical {
    flex-direction: column;
    gap: 0.5rem;
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: 0.5rem;
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-label-list {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-top-left-radius: ${dt('rounded.base')};
    border-top-right-radius: ${dt('rounded.base')};
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}
`
};
