import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-fieldset {
    background: ${dt('fieldset.background')};
    border: 1px solid ${dt('fieldset.border.color')};
    border-radius: ${dt('border.radius.md')};
    color: ${dt('fieldset.color')};
    padding: 0 1.125rem 1.125rem 1.125rem;
    margin: 0;
}

.p-fieldset-legend {
    background: ${dt('fieldset.legend.background')};
    font-weight: 600;
    border-radius: 6px;
    border: 0 none;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.375rem;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggleable > .p-fieldset-legend > a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    color: ${dt('fieldset.legend.color')};
    border-radius: ${dt('border.radius.md')};
    transition: background ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover {
    color: ${dt('fieldset.legend.hover.color')};
    background: ${dt('fieldset.legend.hover.background')};
}

.p-fieldset-toggle-icon {
    color: ${dt('fieldset.toggle.icon.color')};
    transition: color ${dt('transition.duration')};
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover > .p-fieldset-toggle-icon {
    color: ${dt('fieldset.toggle.icon.hover.color')};
}

.p-fieldset .p-fieldset-content {
    padding: 0;
}
`;

const classes = {
    root: ({ props }) => [
        'p-fieldset p-component',
        {
            'p-fieldset-toggleable': props.toggleable
        }
    ],
    legend: 'p-fieldset-legend',
    legendLabel: 'p-fieldset-legend-label',
    toggleIcon: 'p-fieldset-toggle-icon',
    contentContainer: 'p-fieldset-content-container',
    content: 'p-fieldset-content'
};

export default BaseStyle.extend({
    name: 'fieldset',
    theme,
    classes
});
