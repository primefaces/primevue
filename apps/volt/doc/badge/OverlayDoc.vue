<template>
    <DocSectionText v-bind="$attrs">
        <p>A badge can be added to any element by encapsulating the content with the <i>OverlayBadge</i> component.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-6">
        <OverlayBadge value="2">
            <i class="pi pi-bell" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge value="4" severity="danger">
            <i class="pi pi-calendar" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge severity="danger">
            <i class="pi pi-envelope" style="font-size: 2rem" />
        </OverlayBadge>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import OverlayBadge from '@/volt/overlaybadge';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap justify-center gap-6">
        <OverlayBadge value="2">
            <i class="pi pi-bell" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge value="4" severity="danger">
            <i class="pi pi-calendar" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge severity="danger">
            <i class="pi pi-envelope" style="font-size: 2rem" />
        </OverlayBadge>
    </div>
</template>

<script setup>
import OverlayBadge from '@/volt/overlaybadge';
<\/script>
`);
</script>
