<template>
    <div class="layout-footer">
        <div class="layout-footer-left">
            <span>PrimeVue 3.7.3 on Vue 3 by </span>
            <a href="https://www.primetek.com.tr">PrimeTek</a>
        </div>

        <div class="layout-footer-right">
            <a href="https://github.com/primefaces/primevue" class="p-mr-3">
                <Icon tag="i" :icon="{ commonIcon: 'github', context: 'AppFooter' }" />
            </a>
            <a href="https://twitter.com/primevue" class="p-mr-3">
                <Icon tag="i" :icon="{ commonIcon: 'twitter', context: 'AppFooter' }" />
            </a>
            <a href="https://discord.com/invite/gzKFYnpmCY">
                <Icon tag="i" :icon="{ commonIcon: 'discord', context: 'AppFooter' }" />
            </a>
        </div>
    </div>
</template>

<script>
import Icon from 'primevue/icon';

export default {
    components: {
        'Icon': Icon
    }
};
</script>
