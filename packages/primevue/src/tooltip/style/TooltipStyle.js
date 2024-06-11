import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${dt('tooltip.max.width')};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${dt('tooltip.gutter')};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${dt('tooltip.gutter')} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${dt('tooltip.background')};
    color: ${dt('tooltip.color')};
    padding: ${dt('tooltip.padding')};
    box-shadow: ${dt('tooltip.shadow')};
    border-radius: ${dt('tooltip.border.radius')};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: calc(-1 * ${dt('tooltip.gutter')});
    border-width: ${dt('tooltip.gutter')} ${dt('tooltip.gutter')} ${dt('tooltip.gutter')} 0;
    border-right-color: ${dt('tooltip.background')};
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: calc(-1 * ${dt('tooltip.gutter')});
    border-width: ${dt('tooltip.gutter')} 0 ${dt('tooltip.gutter')} ${dt('tooltip.gutter')};
    border-left-color: ${dt('tooltip.background')};
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: calc(-1 * ${dt('tooltip.gutter')});
    border-width: ${dt('tooltip.gutter')} ${dt('tooltip.gutter')} 0 ${dt('tooltip.gutter')};
    border-top-color: ${dt('tooltip.background')};
    border-bottom-color: ${dt('tooltip.background')};
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: calc(-1 * ${dt('tooltip.gutter')});
    border-width: 0 ${dt('tooltip.gutter')} ${dt('tooltip.gutter')} ${dt('tooltip.gutter')};
}
`;

const classes = {
    root: 'p-tooltip p-component',
    arrow: 'p-tooltip-arrow',
    text: 'p-tooltip-text'
};

export default BaseStyle.extend({
    name: 'tooltip-directive',
    theme,
    classes
});
