<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}

.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}

.p-tabmenu-nav a:focus {
    z-index: 1;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`;

const classes = {
    root: 'p-tabmenu p-component',
    menu: 'p-tabmenu-nav p-reset',
    menuitem: ({ instance, props, index, item, isActive, isExactActive }) => [
        'p-tabmenuitem',
        {
            'p-highlight': (props.exact ? isExactActive : isActive) || instance.d_activeIndex === index,
            'p-disabled': instance.disabled(item)
        }
    ],
    action: 'p-menuitem-link',
    icon: 'p-menuitem-icon',
    label: 'p-menuitem-text',
    inkbar: 'p-tabmenu-ink-bar'
};

const { load: loadStyle } = useStyle(styles, { name: 'tabmenu', manual: true });

export default {
    name: 'BaseTabMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        activeIndex: {
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
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
