import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-popover {
    margin-top: 10px;
    background: ${dt('popover.background')};
    color: ${dt('popover.color')};
    border: 1px solid ${dt('popover.border.color')};
    border-radius: ${dt('border.radius.md')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-popover-content {
    padding: 0.75rem;
}

.p-popover-flipped {
    margin-top: 0;
    margin-bottom: 10px;
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
    left: ${dt('{overlay.arrow.left} + 1.25rem', 0)};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: 8px;
    margin-left: -8px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt('popover.background')};
}

.p-popover:before {
    border-width: 10px;
    margin-left: -10px;
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
    root: ({ instance }) => [
        'p-popover p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    theme,
    classes
});
