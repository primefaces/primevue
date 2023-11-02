<template>
    <DocSectionText v-bind="$attrs">
        <p>ScrollTop listens window scroll by default.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center">
        <p>Scroll down the page to display the ScrollTop component.</p>
        <i class="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style="fontsize: 2rem; margin-bottom: 30rem"></i>
        <ScrollTop />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ScrollTop />
`,
                options: `
<template>
    <div class="card flex flex-column align-items-center" style="height: 2000px">
        <p>Scroll down the page to display the ScrollTop component.</p>
        <i class="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style="fontsize: 2rem"></i>
        <ScrollTop />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center" style="height: 2000px">
        <p>Scroll down the page to display the ScrollTop component.</p>
        <i class="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style="fontsize: 2rem"></i>
        <ScrollTop />
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
