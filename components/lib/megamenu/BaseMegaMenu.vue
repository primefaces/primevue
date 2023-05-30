<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-megamenu {
    display: flex;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-megamenu-root-list > .p-menuitem {
    position: relative;
}

.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-megamenu .p-menuitem-text {
    line-height: 1;
}

.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
}

.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Horizontal */
.p-megamenu-horizontal {
    align-items: center;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

/* Vertical */
.p-megamenu-vertical {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}
`;

const inlineStyles = {
    submenu: ({ context, processedItem }) => ({ display: context.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance }) => [
        'p-megamenu p-component',
        {
            'p-megamenu-horizontal': instance.horizontal,
            'p-megamenu-vertical': instance.vertical
        }
    ],
    start: 'p-megamenu-start',
    menu: 'p-megamenu-root-list',
    submenuHeader: ({ context, processedItem }) => [
        'p-megamenu-submenu-header p-submenu-header',
        {
            'p-disabled': context.isItemDisabled(processedItem)
        }
    ],
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
    panel: 'p-megamenu-panel',
    grid: 'p-megamenu-grid',
    column: ({ context, processedItem }) => {
        let length = context.isItemGroup(processedItem) ? processedItem.items.length : 0;
        let columnClass;

        switch (length) {
            case 2:
                columnClass = 'p-megamenu-col-6';
                break;

            case 3:
                columnClass = 'p-megamenu-col-4';
                break;

            case 4:
                columnClass = 'p-megamenu-col-3';
                break;

            case 6:
                columnClass = 'p-megamenu-col-2';
                break;

            default:
                columnClass = 'p-megamenu-col-12';
                break;
        }

        return columnClass;
    },
    submenu: 'p-submenu-list p-megamenu-submenu',
    separator: 'p-menuitem-separator',
    end: 'p-megamenu-end'
};

const { load: loadStyle, unload: unloadStyle } = useStyle(styles, { id: 'primevue_megamenu_style', manual: true });

export default {
    name: 'BaseMegaMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        exact: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
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
        classes,
        inlineStyles
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
