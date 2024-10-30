<template>
    <DocSectionText v-bind="$attrs">
        <p>Headless mode is enabled by defining a <i>container</i> slot that lets you implement entire UI instead of the default elements.</p>
    </DocSectionText>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, last, prevCallback, nextCallback, totalRecords }">
                <div class="flex items-center gap-2">
                    <Button icon="pi pi-chevron-left" severity="secondary" text @click="prevCallback" />
                    <div>Showing {{ first }} to {{ last }} of {{ totalRecords }}</div>
                    <Button icon="pi pi-chevron-right" severity="secondary" text @click="nextCallback" />
                </div>
            </template>
        </Paginator>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Paginator :rows="10" :totalRecords="120">
    <template #container="{ first, last, prevCallback, nextCallback, totalRecords }">
        <div class="flex items-center gap-2">
            <Button icon="pi pi-chevron-left" severity="secondary" text rounded @click="prevCallback" />
            <div>Showing {{ first }} to {{ last }} of {{ totalRecords }}</div>
            <Button icon="pi pi-chevron-right" severity="secondary" text rounded @click="nextCallback" />
        </div>
    </template>
</Paginator>
`,
                options: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, last, prevCallback, nextCallback, totalRecords }">
                <div class="flex items-center gap-2">
                    <Button icon="pi pi-chevron-left" severity="secondary" text rounded @click="prevCallback" />
                    <div>Showing {{ first }} to {{ last }} of {{ totalRecords }}</div>
                    <Button icon="pi pi-chevron-right" severity="secondary" text rounded @click="nextCallback" />
                </div>
            </template>
        </Paginator>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, last, prevCallback, nextCallback, totalRecords }">
                <div class="flex items-center gap-2">
                    <Button icon="pi pi-chevron-left" severity="secondary" text rounded @click="prevCallback" />
                    <div>Showing {{ first }} to {{ last }} of {{ totalRecords }}</div>
                    <Button icon="pi pi-chevron-right" severity="secondary" text rounded @click="nextCallback" />
                </div>
            </template>
        </Paginator>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
