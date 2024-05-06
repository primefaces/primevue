import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-metergroup {
    display: flex;
    gap: 1rem;
}

.p-metergroup-meters {
    display: flex;
    background: ${dt('metergroup.meters.background')};
    border-radius: ${dt('border.radius.md')};
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
    border-top-left-radius: ${dt('border.radius.md')};
    border-bottom-left-radius: ${dt('border.radius.md')};
}
.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: ${dt('border.radius.md')};
    border-bottom-right-radius: ${dt('border.radius.md')};
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
    border-top-left-radius: ${dt('border.radius.md')};
    border-top-right-radius: ${dt('border.radius.md')};
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: ${dt('border.radius.md')};
    border-bottom-right-radius: ${dt('border.radius.md')};
}
`;

const classes = {
    root: ({ props }) => [
        'p-metergroup p-component',
        {
            'p-metergroup-horizontal': props.orientation === 'horizontal',
            'p-metergroup-vertical': props.orientation === 'vertical'
        }
    ],
    meters: 'p-metergroup-meters',
    meter: 'p-metergroup-meter',
    labelList: ({ props }) => [
        'p-metergroup-label-list',
        {
            'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
            'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
        }
    ],
    label: 'p-metergroup-label',
    labelIcon: 'p-metergroup-label-icon',
    labelMarker: 'p-metergroup-label-marker',
    labelText: 'p-metergroup-label-text'
};

export default BaseStyle.extend({
    name: 'metergroup',
    theme,
    classes
});
