<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <Toolbar :pt="{ root: { class: 'p-1' }, groupleft: { class: 'p-2 text-primary' } }">
            <template #start>
                <span>PrimeVue</span>
            </template>
            <template #end>
                <Button label="Logout" />
            </template>
        </Toolbar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<TabView>
    <Toolbar :pt="{ root: { class: 'p-1' }, groupleft: { class: 'p-2 text-primary' } }">
        <template #start>
            <span>PrimeVue</span>
        </template>
        <template #end>
            <Button label="Logout" />
        </template>
    </Toolbar>
</TabView>`,
                options: `
<template>
    <div class="card">
        <Toolbar :pt="{ root: { class: 'p-1' }, groupleft: { class: 'p-2 text-primary' } }">
            <template #start>
                <span>PrimeVue</span>
            </template>
            <template #end>
                <Button label="Logout" />
            </template>
        </Toolbar>
    </div>
</template>`,
                composition: `
<template>
    <div class="card">
        <Toolbar :pt="{ root: { class: 'p-1' }, groupleft: { class: 'p-2 text-primary' } }">
            <template #start>
                <span>PrimeVue</span>
            </template>
            <template #end>
                <Button label="Logout" />
            </template>
        </Toolbar>
    </div>
</template>`
            }
        };
    },
    methods: {
        panelClass(props, parent, index) {
            return [
                {
                    'bg-primary': parent.state.d_activeIndex === index
                }
            ];
        }
    }
};
</script>
