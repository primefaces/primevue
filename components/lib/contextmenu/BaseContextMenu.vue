<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
}

.p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-contextmenu .p-menuitem-text {
    line-height: 1;
}

.p-contextmenu .p-menuitem {
    position: relative;
}

.p-contextmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}

.p-contextmenu-enter-from {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`;

const classes = {
    root: ({ instance }) => [
        'p-contextmenu p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    menu: 'p-contextmenu-root-list',
    menuitem: ({ context, processedItem }) => [
        'p-menuitem',
        {
            'p-menuitem-active p-highlight': context.isItemActive(processedItem),
            'p-focus': context.isItemFocused(processedItem),
            'p-disabled': context.isItemDisabled(processedItem)
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
    label: 'p-menuitem-text',
    submenuIcon: 'p-submenu-icon',
    submenu: 'p-submenu-list',
    separator: 'p-menuitem-separator'
};

const { load: loadStyle, unload: unloadStyle } = useStyle(styles, { id: 'primevue_contextmenu_style', manual: true });

export default {
    name: 'BaseContextMenu',
    extends: BaseComponent,
    props: {
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
        global: {
            type: Boolean,
            default: false
        },
        exact: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
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
