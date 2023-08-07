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
    divider: {
        root: ({ props }) => ({
            class: [
                'flex relative', // alignments.
                {
                    'w-full my-5 mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-gray-300 before:dark:border-blue-900/40': props.layout == 'horizontal', // Padding and borders for horizontal layout.
                    'min-h-full mx-4 md:mx-5 py-5 before:block before:min-h-full before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2 before:border-l before:border-gray-300 before:dark:border-blue-900/40':
                        props.layout == 'vertical' // Padding and borders for vertical layout.
                },
                {
                    'before:border-solid': props.type == 'solid',
                    'before:border-dotted': props.type == 'dotted',
                    'before:border-dashed': props.type == 'dashed'
                } // Border type condition.
            ]
        }),
        content: 'px-1 bg-white z-10 dark:bg-gray-900' // Padding and background color.
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card text-gray-700 dark:text-white/80">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Divider align="left" type="solid">
            <b>Left</b>
        </Divider>

        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>

        <Divider align="center" type="dotted">
            <b>Center</b>
        </Divider>

        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>

        <Divider align="right" type="dashed">
            <b>Right</b>
        </Divider>

        <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
            maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
        </p>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
