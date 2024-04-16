export default {
    css: ({ dt }) => `
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
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    gap: 0.5rem;
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
    justify-content: center;
    width: 2.5rem;
    padding: 0.5rem 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.5rem;
}

.p-button-sm {
    font-size: 0.875rem;
    padding: 0.375rem 0.875rem;
}

.p-button-sm .p-button-icon {
    font-size: 0.875rem;
}

.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
}

.p-button-lg .p-button-icon {
    font-size: 1.25rem;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: 500;
}

.p-fluid .p-button {
    width: 100%;
}

.p-fluid .p-button-icon-only {
    width: 2.5rem;
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
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('button.primary.background')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background: ${dt('button.primary.color')};
    color: ${dt('button.primary.background')};
}

.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.p-button-rounded {
    border-radius: 2rem;
}

/* Default Severities */
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
    outline-color: ${dt('button.success.background')};
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
    outline-color: ${dt('button.info.background')};
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
    background: ${dt('button.warn.background')};
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
    outline-color: ${dt('button.help.background')};
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
    background: ${dt('button.danger.background')};
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
    outline-color: ${dt('button.contrast.background')};
}


/* Outlined Buttons */
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

/* Text Button */
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

/* Link Button */
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
`
};
