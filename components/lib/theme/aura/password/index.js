export default {
    variables: {
        colorScheme: {
            light: {
                meter: {
                    borderColor: '{surface.200}'
                },
                icon: {
                    color: '{surface.500}'
                },
                strength: {
                    backgroundWeak: '{red.500}',
                    backgroundMedium: '{amber.500}',
                    backgroundStrong: '{green.500}'
                },
                overlay: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                }
            },
            dark: {
                meter: {
                    borderColor: '{surface.700}'
                },
                icon: {
                    color: '{surface.400}'
                },
                strength: {
                    backgroundWeak: '{red.400}',
                    backgroundMedium: '{amber.400}',
                    backgroundStrong: '{green.400}'
                },
                overlay: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                }
            }
        }
    },
    css: `
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-panel {
    min-width: 100%;
}

.p-password-meter {
    height: 10px;
    margin-bottom: 0.75rem;
    background: var(--p-password-meter-border-color);
    border-radius: var(--p-rounded-base);
}

.p-password-strength {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: var(--p-rounded-base);
}

.p-password-strength.weak {
    background: var(--p-password-strength-background-weak);
}

.p-password-strength.medium {
    background: var(--p-password-strength-background-medium);
}

.p-password-strength.strong {
    background: var(--p-password-strength-background-strong);
}

.p-fluid .p-password {
    display: flex;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-panel {
    padding: 0.75rem;
    background: var(--p-password-overlay-background);
    color: var(--p-password-overlay-text-color);
    border: 1px solid var(--p-password-overlay-border-color);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: var(--p-rounded-base);
}

.p-password > svg:last-of-type, 
.p-password > i:last-of-type {
    right: 0.75rem;
    color: var(--p-password-icon-color);
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
}

.p-password:has(svg,i) .p-password-input {
    padding-right: 2.5rem;
} 
`
};
