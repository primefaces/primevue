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

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<OverlayBadge value="2">
    <i class="pi pi-bell" style="font-size: 2rem" />
</OverlayBadge>
<OverlayBadge value="4" severity="danger">
    <i class="pi pi-calendar" style="font-size: 2rem" />
</OverlayBadge>
<OverlayBadge severity="danger">
    <i class="pi pi-envelope" style="font-size: 2rem" />
</OverlayBadge>
`,
                options: `
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

<script>

<\/script>
`,
                composition: `
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

<\/script>
`
            }
        };
    }
};
</script>
