<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Anchored overlays are the components that have a floating ui positioned relatively to another element such as Select, Popover. The enter and leave animations are defined with the <i>.p-anchored-overlay-enter-active</i> and
            <i>.p-anchored-overlay-leave-active</i>
            classes.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-8">
        <Select v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Default" class="w-full md:w-56" />
        <Select v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Custom" class="w-full md:w-56" pt:overlay:class="demo-select-overlay" />
    </div>
    <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode hideStackBlitz format="css" />
</template>

<script>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code1: {
                basic: `
<Select v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Default" />
<Select v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Custom" pt:overlay:class="demo-select-overlay" />
`
            },
            code2: {
                basic: `
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
