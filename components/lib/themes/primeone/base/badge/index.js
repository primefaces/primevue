export default {
    css: ({ dt }) => `
.p-badge {
    display: inline-flex;
    border-radius: 10px;
    justify-content: center;
    padding: 0 0.5rem;
    background: ${dt('badge.primary.background')};
    color: ${dt('badge.primary.color')};
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${dt('badge.secondary.background')};
    color: ${dt('badge.secondary.color')};
}

.p-badge-success {
    background: ${dt('badge.success.background')};
    color: ${dt('badge.success.color')};
}

.p-badge-info {
    background: ${dt('badge.info.background')};
    color: ${dt('badge.info.color')};
}

.p-badge-warn {
    background: ${dt('badge.warn.background')};
    color: ${dt('badge.warn.color')};
}

.p-badge-danger {
    background: ${dt('badge.danger.background')};
    color: ${dt('badge.danger.color')};
}

.p-badge-contrast {
    background: ${dt('badge.contrast.background')};
    color: ${dt('badge.contrast.color')};
}

.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
}

.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
}
    `
};
