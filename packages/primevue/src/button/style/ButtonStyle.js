import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${dt('button.primary.color')};
    background: ${dt('button.primary.background')};
    border: 1px solid ${dt('button.primary.border.color')};
    padding: ${dt('button.padding.y')} ${dt('button.padding.x')};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt('button.transition.duration')}, color ${dt('button.transition.duration')}, border-color ${dt('button.transition.duration')},
            outline-color ${dt('button.transition.duration')}, box-shadow ${dt('button.transition.duration')};
    border-radius: ${dt('button.border.radius')};
    outline-color: transparent;
    gap: ${dt('button.gap')};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${dt('button.icon.only.width')};
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${dt('button.icon.only.width')};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${dt('button.sm.font.size')};
    padding: ${dt('button.sm.padding.y')} ${dt('button.sm.padding.x')};
}

.p-button-sm .p-button-icon {
    font-size: ${dt('button.sm.font.size')};
}

.p-button-lg {
    font-size: ${dt('button.lg.font.size')};
    padding: ${dt('button.lg.padding.y')} ${dt('button.lg.padding.x')};
}

.p-button-lg .p-button-icon {
    font-size: ${dt('button.lg.font.size')};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${dt('button.label.font.weight')};
}

.p-fluid .p-button {
    width: 100%;
}

.p-fluid .p-button-icon-only {
    width: ${dt('button.icon.only.width')};
}

.p-button:not(:disabled):hover {
    background: ${dt('button.primary.hover.background')};
    border: 1px solid ${dt('button.primary.hover.border.color')};
    color: ${dt('button.primary.hover.color')};
}

.p-button:not(:disabled):active {
    background: ${dt('button.primary.active.background')};
    border: 1px solid ${dt('button.primary.active.border.color')};
    color: ${dt('button.primary.active.color')};
}

.p-button:focus-visible {
    box-shadow: ${dt('button.primary.focus.ring.shadow')};
    outline: ${dt('button.focus.ring.width')} ${dt('button.focus.ring.style')} ${dt('button.primary.focus.ring.color')};
    outline-offset: ${dt('button.focus.ring.offset')};
}

.p-button .p-badge {
    min-width: ${dt('button.badge.size')};
    height: ${dt('button.badge.size')};
    line-height: ${dt('button.badge.size')};
}

.p-button-raised {
    box-shadow: ${dt('button.raised.shadow')};
}

.p-button-rounded {
    border-radius: ${dt('button.rounded.border.radius')};
}

.p-button-secondary {
    background: ${dt('button.secondary.background')};
    border: 1px solid ${dt('button.secondary.border.color')};
    color: ${dt('button.secondary.color')};
}

.p-button-secondary:not(:disabled):hover {
    background: ${dt('button.secondary.hover.background')};
    border: 1px solid ${dt('button.secondary.hover.border.color')};
    color: ${dt('button.secondary.hover.color')};
}

.p-button-secondary:not(:disabled):active {
    background: ${dt('button.secondary.active.background')};
    border: 1px solid ${dt('button.secondary.active.border.color')};
    color: ${dt('button.secondary.active.color')};
}

.p-button-secondary:focus-visible {
    outline-color: ${dt('button.secondary.focus.ring.color')};
    box-shadow: ${dt('button.secondary.focus.ring.shadow')};
}

.p-button-success {
    background: ${dt('button.success.background')};
    border: 1px solid ${dt('button.success.border.color')};
    color: ${dt('button.success.color')};
}

.p-button-success:not(:disabled):hover {
    background: ${dt('button.success.hover.background')};
    border: 1px solid ${dt('button.success.hover.border.color')};
    color: ${dt('button.success.hover.color')};
}

.p-button-success:not(:disabled):active {
    background: ${dt('button.success.active.background')};
    border: 1px solid ${dt('button.success.active.border.color')};
    color: ${dt('button.success.active.color')};
}

.p-button-success:focus-visible {
    outline-color: ${dt('button.success.focus.ring.color')};
    box-shadow: ${dt('button.success.focus.ring.shadow')};
}

.p-button-info {
    background: ${dt('button.info.background')};
    border: 1px solid ${dt('button.info.border.color')};
    color: ${dt('button.info.color')};
}

.p-button-info:not(:disabled):hover {
    background: ${dt('button.info.hover.background')};
    border: 1px solid ${dt('button.info.hover.border.color')};
    color: ${dt('button.info.hover.color')};
}

.p-button-info:not(:disabled):active {
    background: ${dt('button.info.active.background')};
    border: 1px solid ${dt('button.info.active.border.color')};
    color: ${dt('button.info.active.color')};
}

.p-button-info:focus-visible {
    outline-color: ${dt('button.info.focus.ring.color')};
    box-shadow: ${dt('button.info.focus.ring.shadow')};
}

.p-button-warn {
    background: ${dt('button.warn.background')};
    border: 1px solid ${dt('button.warn.border.color')};
    color: ${dt('button.warn.color')};
}

.p-button-warn:not(:disabled):hover {
    background: ${dt('button.warn.hover.background')};
    border: 1px solid ${dt('button.warn.hover.border.color')};
    color: ${dt('button.warn.hover.color')};
}

.p-button-warn:not(:disabled):active {
    background: ${dt('button.warn.active.background')};
    border: 1px solid ${dt('button.warn.active.border.color')};
    color: ${dt('button.warn.active.color')};
}

.p-button-warn:focus-visible {
    outline-color: ${dt('button.warn.focus.ring.color')};
    box-shadow: ${dt('button.warn.focus.ring.shadow')};
}

.p-button-help {
    background: ${dt('button.help.background')};
    border: 1px solid ${dt('button.help.border.color')};
    color: ${dt('button.help.color')};
}

.p-button-help:not(:disabled):hover {
    background: ${dt('button.help.hover.background')};
    border: 1px solid ${dt('button.help.hover.border.color')};
    color: ${dt('button.help.hover.color')};
}

.p-button-help:not(:disabled):active {
    background: ${dt('button.help.active.background')};
    border: 1px solid ${dt('button.help.active.border.color')};
    color: ${dt('button.help.active.color')};
}

.p-button-help:focus-visible {
    outline-color: ${dt('button.help.focus.ring.color')};
    box-shadow: ${dt('button.help.focus.ring.shadow')};
}

.p-button-danger {
    background: ${dt('button.danger.background')};
    border: 1px solid ${dt('button.danger.border.color')};
    color: ${dt('button.danger.color')};
}

.p-button-danger:not(:disabled):hover {
    background: ${dt('button.danger.hover.background')};
    border: 1px solid ${dt('button.danger.hover.border.color')};
    color: ${dt('button.danger.hover.color')};
}

.p-button-danger:not(:disabled):active {
    background: ${dt('button.danger.active.background')};
    border: 1px solid ${dt('button.danger.active.border.color')};
    color: ${dt('button.danger.active.color')};
}

.p-button-danger:focus-visible {
    outline-color: ${dt('button.danger.focus.ring.color')};
    box-shadow: ${dt('button.danger.focus.ring.shadow')};
}

.p-button-contrast {
    background: ${dt('button.contrast.background')};
    border: 1px solid ${dt('button.contrast.border.color')};
    color: ${dt('button.contrast.color')};
}

.p-button-contrast:not(:disabled):hover {
    background: ${dt('button.contrast.hover.background')};
    border: 1px solid ${dt('button.contrast.hover.border.color')};
    color: ${dt('button.contrast.hover.color')};
}

.p-button-contrast:not(:disabled):active {
    background: ${dt('button.contrast.active.background')};
    border: 1px solid ${dt('button.contrast.active.border.color')};
    color: ${dt('button.contrast.active.color')};
}

.p-button-contrast:focus-visible {
    outline-color: ${dt('button.contrast.focus.ring.color')};
    box-shadow: ${dt('button.contrast.focus.ring.shadow')};
}

.p-button-outlined {
    background: transparent;
    border-color: ${dt('button.outlined.primary.border.color')};
    color: ${dt('button.outlined.primary.color')};
}

.p-button-outlined:not(:disabled):hover {
    background: ${dt('button.outlined.primary.hover.background')};
    border-color: ${dt('button.outlined.primary.border.color')};
    color: ${dt('button.outlined.primary.color')};
}

.p-button-outlined:not(:disabled):active {
    background: ${dt('button.outlined.primary.active.background')};
    border-color: ${dt('button.outlined.primary.border.color')};
    color: ${dt('button.outlined.primary.color')};
}

.p-button-outlined.p-button-secondary {
    border-color: ${dt('button.outlined.secondary.border.color')};
    color: ${dt('button.outlined.secondary.color')};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${dt('button.outlined.secondary.hover.background')};
    border-color: ${dt('button.outlined.secondary.border.color')};
    color: ${dt('button.outlined.secondary.color')};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${dt('button.outlined.secondary.active.background')};
    border-color: ${dt('button.outlined.secondary.border.color')};
    color: ${dt('button.outlined.secondary.color')};
}

.p-button-outlined.p-button-success {
    border-color: ${dt('button.outlined.success.border.color')};
    color: ${dt('button.outlined.success.color')};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${dt('button.outlined.success.hover.background')};
    border-color: ${dt('button.outlined.success.border.color')};
    color: ${dt('button.outlined.success.color')};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${dt('button.outlined.success.active.background')};
    border-color: ${dt('button.outlined.success.border.color')};
    color: ${dt('button.outlined.success.color')};
}

.p-button-outlined.p-button-info {
    border-color: ${dt('button.outlined.info.border.color')};
    color: ${dt('button.outlined.info.color')};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${dt('button.outlined.info.hover.background')};
    border-color: ${dt('button.outlined.info.border.color')};
    color: ${dt('button.outlined.info.color')};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${dt('button.outlined.info.active.background')};
    border-color: ${dt('button.outlined.info.border.color')};
    color: ${dt('button.outlined.info.color')};
}

.p-button-outlined.p-button-warn {
    border-color: ${dt('button.outlined.warn.border.color')};
    color: ${dt('button.outlined.warn.color')};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${dt('button.outlined.warn.hover.background')};
    border-color: ${dt('button.outlined.warn.border.color')};
    color: ${dt('button.outlined.warn.color')};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${dt('button.outlined.warn.active.background')};
    border-color: ${dt('button.outlined.warn.border.color')};
    color: ${dt('button.outlined.warn.color')};
}

.p-button-outlined.p-button-help {
    border-color: ${dt('button.outlined.help.border.color')};
    color: ${dt('button.outlined.help.color')};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${dt('button.outlined.help.hover.background')};
    border-color: ${dt('button.outlined.help.border.color')};
    color: ${dt('button.outlined.help.color')};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${dt('button.outlined.help.active.background')};
    border-color: ${dt('button.outlined.help.border.color')};
    color: ${dt('button.outlined.help.color')};
}

.p-button-outlined.p-button-danger {
    border-color: ${dt('button.outlined.danger.border.color')};
    color: ${dt('button.outlined.danger.color')};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${dt('button.outlined.danger.hover.background')};
    border-color: ${dt('button.outlined.danger.border.color')};
    color: ${dt('button.outlined.danger.color')};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${dt('button.outlined.danger.active.background')};
    border-color: ${dt('button.outlined.danger.border.color')};
    color: ${dt('button.outlined.danger.color')};
}

.p-button-outlined.p-button-contrast {
    border-color: ${dt('button.outlined.contrast.border.color')};
    color: ${dt('button.outlined.contrast.color')};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${dt('button.outlined.contrast.hover.background')};
    border-color: ${dt('button.outlined.contrast.border.color')};
    color: ${dt('button.outlined.contrast.color')};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${dt('button.outlined.contrast.active.background')};
    border-color: ${dt('button.outlined.contrast.border.color')};
    color: ${dt('button.outlined.contrast.color')};
}

.p-button-outlined.p-button-plain {
    border-color: ${dt('button.outlined.plain.border.color')};
    color: ${dt('button.outlined.plain.color')};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${dt('button.outlined.plain.hover.background')};
    border-color: ${dt('button.outlined.plain.border.color')};
    color: ${dt('button.outlined.plain.color')};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${dt('button.outlined.plain.active.background')};
    border-color: ${dt('button.outlined.plain.border.color')};
    color: ${dt('button.outlined.plain.color')};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.primary.color')};
}

.p-button-text:not(:disabled):hover {
    background: ${dt('button.text.primary.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.primary.color')};
}

.p-button-text:not(:disabled):active {
    background: ${dt('button.text.primary.active.background')};
    border-color: transparent;
    color: ${dt('button.text.primary.color')};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.secondary.color')};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${dt('button.text.secondary.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.secondary.color')};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${dt('button.text.secondary.active.background')};
    border-color: transparent;
    color: ${dt('button.text.secondary.color')};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.success.color')};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${dt('button.text.success.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.success.color')};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${dt('button.text.success.active.background')};
    border-color: transparent;
    color: ${dt('button.text.success.color')};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.info.color')};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${dt('button.text.info.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.info.color')};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${dt('button.text.info.active.background')};
    border-color: transparent;
    color: ${dt('button.text.info.color')};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.warn.color')};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${dt('button.text.warn.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.warn.color')};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${dt('button.text.warn.active.background')};
    border-color: transparent;
    color: ${dt('button.text.warn.color')};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.help.color')};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${dt('button.text.help.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.help.color')};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${dt('button.text.help.active.background')};
    border-color: transparent;
    color: ${dt('button.text.help.color')};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.danger.color')};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${dt('button.text.danger.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.danger.color')};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${dt('button.text.danger.active.background')};
    border-color: transparent;
    color: ${dt('button.text.danger.color')};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.text.plain.color')};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${dt('button.text.plain.hover.background')};
    border-color: transparent;
    color: ${dt('button.text.plain.color')};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${dt('button.text.plain.active.background')};
    border-color: transparent;
    color: ${dt('button.text.plain.color')};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.link.color')};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.link.hover.color')};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${dt('button.link.active.color')};
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-button p-component',
        {
            'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
            'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'p-button-loading': props.loading,
            'p-button-link': props.link,
            [`p-button-${props.severity}`]: props.severity,
            'p-button-raised': props.raised,
            'p-button-rounded': props.rounded,
            'p-button-text': props.text,
            'p-button-outlined': props.outlined,
            'p-button-sm': props.size === 'small',
            'p-button-lg': props.size === 'large',
            'p-button-plain': props.plain
        }
    ],
    loadingIcon: 'p-button-loading-icon',
    icon: ({ props }) => [
        'p-button-icon',
        {
            [`p-button-icon-${props.iconPos}`]: props.label
        }
    ],
    label: 'p-button-label'
};

export default BaseStyle.extend({
    name: 'button',
    theme,
    classes
});
