<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-scrollpanel-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + 18px);
    width: calc(100% + 18px);
    padding: 0 18px 18px 0;
    position: relative;
    overflow: scroll;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    background: #c1c1c1;
    border-radius: 3px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.25s linear;
}

.p-scrollpanel-bar-y {
    width: 9px;
    top: 0;
}

.p-scrollpanel-bar-x {
    height: 9px;
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`;

const classes = {
    root: 'p-scrollpanel p-component',
    wrapper: 'p-scrollpanel-wrapper',
    content: 'p-scrollpanel-content',
    barx: 'p-scrollpanel-bar p-scrollpanel-bar-x',
    bary: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};

const { load: loadStyle } = useStyle(styles, { name: 'scrollpanel', manual: true });

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
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
