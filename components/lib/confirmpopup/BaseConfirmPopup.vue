<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
}

.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

/* Animation */
.p-confirm-popup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirm-popup-leave-to {
    opacity: 0;
}

.p-confirm-popup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirm-popup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirm-popup:after {
    border-width: 8px;
    margin-left: -8px;
}

.p-confirm-popup:before {
    border-width: 10px;
    margin-left: -10px;
}

.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirm-popup.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
}

.p-confirm-popup.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
}

.p-confirm-popup .p-confirm-popup-content {
    display: flex;
    align-items: center;
}
`;

const classes = {
    root: ({ instance }) => [
        'p-confirm-popup p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-confirm-popup-content',
    icon: ({ instance }) => ['p-confirm-popup-icon', instance.confirmation ? instance.confirmation.icon : null],
    message: 'p-confirm-popup-message',
    footer: 'p-confirm-popup-footer',
    rejectButton: ({ instance }) => ['p-confirm-dialog-reject', instance.confirmation ? instance.confirmation.rejectClass || 'p-button-text' : null],
    acceptButton: ({ instance }) => ['p-confirm-dialog-accept', instance.confirmation ? instance.confirmation.acceptClass : null]
};

const { load: loadStyle } = useStyle(styles, { name: 'confirmpopup', manual: true });

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
