<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <NuxtLink to="/tailwind">Tailwind Customization</NuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    skeleton: {
        root: ({ props }) => ({
            class: [
                'overflow-hidden',
                '!mb-2',
                'bg-gray-300 dark:bg-gray-800',
                'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:content after:w-full after:h-full after:bg-blue-400 after:left-full after:transform after:translate-x-full after:z-10 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent animate-pulse',
                {
                    'rounded-md': props.shape !== 'circle',
                    'rounded-full': props.shape == 'circle'
                }
            ]
        })
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card text-gray-700 dark:text-white/80">
        <div class="w-full">
            <h5>Rectangle</h5>
            <Skeleton class="mb-2"></Skeleton>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="4rem"></Skeleton>
        </div>
        <div class="w-full">
            <h5>Rounded</h5>
            <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
            <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
            <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
            <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
        </div>
        <div class="w-full">
            <h5 class="mt-3">Square</h5>
            <div class="flex items-end">
                <Skeleton size="2rem" class="mr-2"></Skeleton>
                <Skeleton size="3rem" class="mr-2"></Skeleton>
                <Skeleton size="4rem" class="mr-2"></Skeleton>
                <Skeleton size="5rem"></Skeleton>
            </div>
        </div>
        <div class="w-full">
            <h5 class="mt-3">Circle</h5>
            <div class="flex items-end">
                <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <Skeleton shape="circle" size="5rem"></Skeleton>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
