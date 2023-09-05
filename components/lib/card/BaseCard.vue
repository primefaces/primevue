<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: 'p-card p-component',
    header: 'p-card-header',
    body: 'p-card-body',
    title: 'p-card-title',
    subtitle: 'p-card-subtitle',
    content: 'p-card-content',
    footer: 'p-card-footer'
};

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    css: {
        classes
    }
};
</script>
