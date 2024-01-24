<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="flex gap-4">
        <div class="card">
            <NuxtLink to="/vite">
                <span class="images">
                    <img src="https://primefaces.org/cdn/primevue/images/logos/installation/vite.svg" />
                    <img src="https://primefaces.org/cdn/primevue/images/logos/installation/vite-2.svg" class="original" />
                </span>
                <span class="title">VITE</span>
            </NuxtLink>
        </div>
        <div class="card">
            <NuxtLink to="/nuxt">
                <span class="images">
                    <img src="https://primefaces.org/cdn/primevue/images/logos/installation/nuxt.svg" />
                    <img src="https://primefaces.org/cdn/primevue/images/logos/installation/nuxt-2.svg" class="original" />
                </span>
                <span class="title">NUXT</span>
            </NuxtLink>
        </div>
        <div class="card">
            <NuxtLink to="/cdn">
                <span class="images">
                    <img src="https://primefaces.org/cdn/primevue/images/logos/installation/html.svg" />
                    <img src="https://primefaces.org/cdn/primevue/images/logos/installation/html-2.svg" class="original" />
                </span>
                <span class="title">CDN</span>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.card {
    min-width: 15rem;
    min-height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

.card .title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-color-secondary);
    transition: all 0.5s;
}

.card .images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card img {
    height: 62px;
    opacity: 1;
    transition: all 0.5s;
}

.card img.original {
    opacity: 0;
    margin-top: -62px;
}

.card a:hover img {
    opacity: 0;
}

.card a:hover img.original {
    opacity: 1;
}

.card a:hover .title {
    color: var(--text-color);
}
</style>
