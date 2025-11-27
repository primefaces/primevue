<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Anchored overlays are the components that have a floating ui positioned relatively to another element such as Select, Popover. The enter and leave animations are defined with the <i>.p-anchored-overlay-enter-active</i> and
            <i>.p-anchored-overlay-leave-active</i>
            classes.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select" class="w-full md:w-56" pt:overlay:class="demo-select-overlay" />
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz format="css" />
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
.p-anchored-overlay-enter-active {
    animation: demo-overlay-in 300ms ease-out;
}

.p-anchored-overlay-leave-active {
    animation: demo-overlay-out 250ms ease-in;
}

@keyframes demo-overlay-in {
    from {
        opacity: 0;
        transform: translateY(10%);
    }
}

@keyframes demo-overlay-out {
    to {
        opacity: 0;
        transform: translateY(10%);
    }
}
`
            }
        };
    }
};
</script>

<style>
.demo-select-overlay.p-anchored-overlay-enter-active {
    animation: demo-overlay-in 300ms ease-out;
}

.demo-select-overlay.p-anchored-overlay-leave-active {
    animation: demo-overlay-out 250ms ease-in;
}

@keyframes demo-overlay-in {
    from {
        opacity: 0;
        transform: translateY(10%);
    }
}

@keyframes demo-overlay-out {
    to {
        opacity: 0;
        transform: translateY(10%);
    }
}
</style>
