<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `export default {
    avatar: {
        root: ({ props, parent }) => ({
            class: [
                'flex items-center justify-center',
                'bg-gray-300 dark:bg-gray-800',
                {
                    'rounded-lg': props.shape == 'square',
                    'rounded-full': props.shape == 'circle'
                },
                {
                    'text-base h-8 w-8': props.size == null || props.size == 'normal',
                    'w-12 h-12 text-xl': props.size == 'large',
                    'w-16 h-16 text-2xl': props.size == 'xlarge'
                },
                {
                    '-ml-4 border-2 border-white dark:border-gray-900': parent.instance.$css !== undefined
                }
            ]
        }),
        image: 'h-full w-full'
    },
    avatargroup: {
        root: 'flex items-center'
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div>
                <h5>Image</h5>
                <div class="flex">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                </div>
            </div>

            <div>
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
            </div>

            <div>
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
    <div class="card flex justify-content-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" style="background-color: '#9c27b0', color: '#ffffff'" />
        </AvatarGroup>
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    }
};
</script>
