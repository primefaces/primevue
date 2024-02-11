<template>
    <div :class="containerClass" :style="style" v-bind="ptmi('root')">
        <DockSub :model="model" :templates="$slots" :tooltipOptions="tooltipOptions" :position="position" :menuId="menuId" :aria-label="ariaLabel" :aria-labelledby="ariaLabelledby" :tabindex="tabindex" :pt="pt" :unstyled="unstyled"></DockSub>
    </div>
</template>

<script>
import BaseDock from './BaseDock.vue';
import DockSub from './DockSub.vue';

export default {
    name: 'Dock',
    extends: BaseDock,
    inheritAttrs: false,
    matchMediaListener: null,
    data() {
        return {
            query: null,
            queryMatches: false
        };
    },
    mounted() {
        this.bindMatchMediaListener();
    },
    beforeUnmount() {
        this.unbindMatchMediaListener();
    },
    methods: {
        bindMatchMediaListener() {
            if (!this.matchMediaListener) {
                const query = matchMedia(`(max-width: ${this.breakpoint})`);

                this.query = query;
                this.queryMatches = query.matches;

                this.matchMediaListener = () => {
                    this.queryMatches = query.matches;
                    this.mobileActive = false;
                };

                this.query.addEventListener('change', this.matchMediaListener);
            }
        },
        unbindMatchMediaListener() {
            if (this.matchMediaListener) {
                this.query.removeEventListener('change', this.matchMediaListener);
                this.matchMediaListener = null;
            }
        }
    },
    computed: {
        containerClass() {
            return [this.class, this.cx('root')];
        }
    },
    components: {
        DockSub
    }
};
</script>
