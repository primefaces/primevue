<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
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
    directives: {
        tooltip: {
            root: ({ context }) => ({
                class: [
                    'absolute shadow-md',
                    {
                        'py-0 px-1': context?.right || context?.left || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                        'py-1 px-0': context?.top || context?.bottom
                    }
                ]
            }),
            arrow: ({ context }) => ({
                class: [
                    'absolute w-0 h-0 border-transparent border-solid',
                    {
                        '-m-t-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-gray-600': context?.right || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                        '-m-t-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-gray-600': context?.left,
                        '-m-l-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-gray-600': context?.top,
                        '-m-l-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-gray-600': context?.bottom
                    }
                ]
            }),
            text: {
                class: 'p-3 bg-gray-600 text-white rounded-md whitespace-pre-line break-words'
            }
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
        <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
        <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
    </div>
</template>`
            }
        };
    }
};
</script>
