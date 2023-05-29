<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-menu .p-menuitem-text {
    line-height: 1;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-menu p-component',
        {
            'p-menu-overlay': props.popup,
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    start: 'p-menu-start',
    menu: 'p-menu-list p-reset',
    submenuHeader: 'p-submenu-header',
    separator: 'p-menuitem-separator',
    end: 'p-menu-end',
    menuitem: ({ context }) => [
        'p-menuitem',
        {
            'p-focus': context.id === context.focusedOptionId,
            'p-disabled': context.disabled()
        }
    ],
    content: 'p-menuitem-content',
    action: ({ context, isActive, isExactActive }) => [
        'p-menuitem-link',
        {
            'router-link-active': isActive,
            'router-link-active-exact': context.exact && isExactActive
        }
    ],
    icon: 'p-menuitem-icon',
    label: 'p-menuitem-text'
};

const { load: loadStyle, unload: unloadStyle } = useStyle(styles, { id: 'primevue_menu_style', manual: true });

export default {
    name: 'BaseMenu',
    extends: BaseComponent,
    props: {
        popup: {
            type: Boolean,
            default: false
        },
        model: {
            type: Array,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        exact: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-label': {
            type: String,
            default: null
        },
        'aria-labelledby': {
            type: String,
            default: null
        }
    },
    css: {
        classes
    },
    watch: {
        isUnstyled: {
            immediate: true,
            handler(newValue) {
                !newValue && loadStyle();
            }
        }
    }
};
</script>
