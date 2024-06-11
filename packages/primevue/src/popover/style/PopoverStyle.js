import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-popover {
    margin-top: ${dt('popover.gutter')};
    background: ${dt('popover.background')};
    color: ${dt('popover.color')};
    border: 1px solid ${dt('popover.border.color')};
    border-radius: ${dt('popover.border.radius')};
    box-shadow: ${dt('popover.shadow')};
}

.p-popover-content {
    padding: ${dt('popover.content.padding')};
}

.p-popover-flipped {
    margin-top: calc(${dt('popover.gutter')} * -1);
    margin-bottom: ${dt('popover.gutter')};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: ${dt('popover.arrow.offset')};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${dt('popover.gutter')} - 2px);
    margin-left: calc(-1 * (${dt('popover.gutter')} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('popover.background')};
}

.p-popover:before {
    border-width: ${dt('popover.gutter')};
    margin-left: calc(-1 * ${dt('popover.gutter')});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('popover.border.color')};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${dt('popover.background')};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${dt('popover.border.color')};
}
`;

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    theme,
    classes
});
